from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database import Base, engine, get_db
from app import crud, schemas, models
from app.routes import router

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(router)

@app.post("/journal-entries/", response_model=schemas.JournalEntryResponse)
def create_entry(entry: schemas.JournalEntryCreate, db: Session = Depends(get_db)):
    return crud.create_journal_entry(db, entry)

@app.get("/journal-entries/", response_model=List[schemas.JournalEntryResponse])
def list_entries(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_journal_entries(db, skip=skip, limit=limit)

@app.delete("/journal-entries/{entry_id}")
def delete_entry(entry_id: int, db: Session = Depends(get_db)):
    entry = crud.delete_journal_entry(db, entry_id)
    if not entry:
        raise HTTPException(status_code=404, detail="Entry not found")
    return {"message": "Entry deleted"}

@app.get("/journal-entries/search/", response_model=List[schemas.JournalEntryResponse])
def search_entries(query: str, db: Session = Depends(get_db)):
    return db.query(models.JournalEntry).filter(
        models.JournalEntry.title.ilike(f"%{query}%")
    ).all()