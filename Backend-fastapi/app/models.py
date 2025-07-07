from sqlalchemy import Column, String, Boolean, Text, JSON, Integer, Enum, TIMESTAMP, ForeignKey, Index
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime
import uuid

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, unique=True, nullable=False, index=True)
    password_hash = Column(String, nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    role = Column(Enum('user', 'admin', name='user_roles'), nullable=False, default='user')
    email_verified = Column(Boolean, default=False)
    invitation_code = Column(String, unique=True)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)
    updated_at = Column(TIMESTAMP, default=datetime.utcnow, onupdate=datetime.utcnow)
    last_login = Column(TIMESTAMP)

class JournalEntry(Base):
    __tablename__ = 'journal_entries'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey('users.id'), nullable=False, index=True)
    title = Column(String, nullable=False, index=True)
    content = Column(Text, nullable=False)
    mood = Column(String, index=True)
    tags = Column(JSON)
    is_private = Column(Boolean, default=True)
    is_deleted = Column(Boolean, default=False, index=True)  # Soft delete
    version = Column(Integer, default=1)  # Versioning
    archived = Column(Boolean, default=False, index=True)  # Archiving
    created_at = Column(TIMESTAMP, default=datetime.utcnow, index=True)
    updated_at = Column(TIMESTAMP, default=datetime.utcnow, onupdate=datetime.utcnow, index=True)
    __table_args__ = (
        Index('ix_journal_entries_title_content', 'title', 'content', postgresql_using='gin'),
    )

class BlogPost(Base):
    __tablename__ = 'blog_posts'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey('users.id'), nullable=False)
    title = Column(String, nullable=False)
    slug = Column(String, unique=True, nullable=False)
    content = Column(Text, nullable=False)
    excerpt = Column(Text)
    status = Column(Enum('draft', 'published', name='blog_status'), nullable=False, default='draft')
    category = Column(String)
    tags = Column(JSON)
    meta_description = Column(String)
    published_at = Column(TIMESTAMP)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)
    updated_at = Column(TIMESTAMP, default=datetime.utcnow, onupdate=datetime.utcnow)

class File(Base):
    __tablename__ = 'files'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey('users.id'), nullable=False, index=True)
    filename = Column(String, nullable=False, index=True)
    original_name = Column(String, nullable=False)
    file_type = Column(String, nullable=False)
    file_size = Column(Integer, nullable=False)
    cloudinary_id = Column(String)
    url = Column(String, nullable=False, index=True)
