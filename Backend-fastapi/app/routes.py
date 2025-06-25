from fastapi import Depends, APIRouter
from sqlalchemy.orm import Session
from database import get_db
from crud import create_user, get_users, add_journal_entry

router = APIRouter()

@router.post("/users/")
def create_new_user(username: str, email: str, db: Session = Depends(get_db)):
    return create_user(db, username, email)

@router.get("/users/")
def list_users(db: Session = Depends(get_db)):
    return get_users(db)

@router.post("/entries/")
def create_entry(user_id: int, title: str, content: str, db: Session = Depends(get_db)):
    return add_journal_entry(db, user_id, title, content)
