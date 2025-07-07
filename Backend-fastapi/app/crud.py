from sqlalchemy.orm import Session
from app.models import User, JournalEntry, File
from sqlalchemy import or_, and_
from typing import List, Optional

# User CRUD

def create_user(db: Session, username: str, email: str):
    user = User(username=username, email=email)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def get_users(db: Session):
    return db.query(User).all()

# JournalEntry CRUD

def create_journal_entry(db: Session, user_id: str, title: str, content: str, mood: Optional[str]=None, tags: Optional[list]=None, is_private: bool=True):
    entry = JournalEntry(user_id=user_id, title=title, content=content, mood=mood, tags=tags, is_private=is_private)
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry

def get_journal_entries(db: Session, skip: int = 0, limit: int = 10, user_id: Optional[str]=None, include_deleted: bool=False):
    query = db.query(JournalEntry)
    if user_id:
        query = query.filter(JournalEntry.user_id == user_id)
    if not include_deleted:
        query = query.filter(JournalEntry.is_deleted == False)
    return query.offset(skip).limit(limit).all()

def delete_journal_entry(db: Session, entry_id: str):
    db_entry = db.query(JournalEntry).filter(JournalEntry.id == entry_id).first()
    if db_entry:
        db_entry.is_deleted = True
        db.commit()
        return db_entry
    return None

def update_journal_entry(db: Session, entry_id: str, **kwargs):
    db_entry = db.query(JournalEntry).filter(JournalEntry.id == entry_id, JournalEntry.is_deleted == False).first()
    if db_entry:
        for key, value in kwargs.items():
            setattr(db_entry, key, value)
        db_entry.version += 1
        db.commit()
        db.refresh(db_entry)
        return db_entry
    return None

def search_journal_entries(db: Session, query: str, user_id: Optional[str]=None, mood: Optional[str]=None, tags: Optional[list]=None, sort_by: Optional[str]=None, desc: bool=False):
    q = db.query(JournalEntry).filter(JournalEntry.is_deleted == False)
    if user_id:
        q = q.filter(JournalEntry.user_id == user_id)
    if query:
        q = q.filter(or_(JournalEntry.title.ilike(f"%{query}%"), JournalEntry.content.ilike(f"%{query}%")))
    if mood:
        q = q.filter(JournalEntry.mood == mood)
    if tags:
        q = q.filter(JournalEntry.tags.contains(tags))
    if sort_by:
        sort_col = getattr(JournalEntry, sort_by, None)
        if sort_col is not None:
            q = q.order_by(sort_col.desc() if desc else sort_col)
    return q.all()

def export_journal_entries(db: Session, user_id: str) -> List[dict]:
    entries = db.query(JournalEntry).filter(JournalEntry.user_id == user_id, JournalEntry.is_deleted == False).all()
    return [e.__dict__ for e in entries]

# File upload stub (Cloudinary integration to be implemented)
def upload_file(db: Session, user_id: str, filename: str, original_name: str, file_type: str, file_size: int, url: str, cloudinary_id: Optional[str]=None):
    file = File(user_id=user_id, filename=filename, original_name=original_name, file_type=file_type, file_size=file_size, url=url, cloudinary_id=cloudinary_id)
    db.add(file)
    db.commit()
    db.refresh(file)
    return file
