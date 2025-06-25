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

def add_journal_entry(db: Session, user_id: int, title: str, content: str):
    entry = JournalEntry(user_id=user_id, title=title, content=content)
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry
