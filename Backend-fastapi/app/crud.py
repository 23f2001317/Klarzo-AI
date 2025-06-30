from sqlalchemy.orm import Session
from models import User, JournalEntry

def create_user(db: Session, username: str, email: str):
    user = User(username=username, email=email)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def get_users(db: Session):
    return db.query(User).all()

def create_journal_entry(db: Session, user_id: int, title: str, content: str):
    entry = JournalEntry(user_id=user_id, title=title, content=content)
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry

def delete_journal_entry(db: Session, entry_id: int):
    db_entry = db.query(models.JournalEntry).filter(models.JournalEntry.id == entry_id).first()
    if db_entry:
        db_entry.is_deleted = 1
        db.commit()
        return db_entry
    return None

from models import User, JournalEntry

def add_journal_entry(db: Session, user_id: int, title: str, content: str):
    entry = JournalEntry(user_id=user_id, title=title, content=content)
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry
