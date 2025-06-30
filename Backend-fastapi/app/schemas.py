from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class JournalEntryBase(BaseModel):
    title: str
    content: str

class JournalEntryCreate(JournalEntryBase):
    pass

class JournalEntryResponse(JournalEntryBase):
    id: int
    user_id: int
    created_at: datetime
    updated_at: Optional[datetime]
    class Config:
        orm_mode = True

class JournalEntryUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    mood: Optional[str] = None
    tags: Optional[list[str]] = None
    is_private: Optional[bool] = None
class JournalEntryDelete(BaseModel):
    id: int
    confirm: bool
class UserBase(BaseModel):
    email: str
    first_name: str
    last_name: str
class UserCreate(UserBase):
    password: str
    role: Optional[str] = 'user'
    invitation_code: Optional[str] = None   
class UserResponse(UserBase):
    id: int
    role: str
    email_verified: bool
    created_at: datetime
    updated_at: datetime
    last_login: Optional[datetime] = None

    class Config:
        orm_mode = True
class UserUpdate(BaseModel):
    email: Optional[str] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    password: Optional[str] = None
    role: Optional[str] = None
    email_verified: Optional[bool] = None
    invitation_code: Optional[str] = None
class UserDelete(BaseModel):
    id: int
    confirm: bool
class BlogPostBase(BaseModel):
    title: str
    content: str
    category: Optional[str] = None
    tags: Optional[list[str]] = None
    meta_description: Optional[str] = None
class BlogPostCreate(BlogPostBase):
    slug: str
    status: Optional[str] = 'draft'
    excerpt: Optional[str] = None
class BlogPostResponse(BlogPostBase):
    id: int
    user_id: int
    slug: str
    status: str
    published_at: Optional[datetime] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    slug: Optional[str] = None
    status: Optional[str] = None
    excerpt: Optional[str] = None
    category: Optional[str] = None
    tags: Optional[list[str]] = None
    meta_description: Optional[str] = None
    published_at: Optional[datetime] = None
class BlogPostDelete(BaseModel):
    id: int
    confirm: bool
class FileBase(BaseModel):
    filename: str
    original_name: str
    file_type: str
    file_size: int
    url: str
class FileCreate(FileBase):
    user_id: int
    cloudinary_id: Optional[str] = None
class FileResponse(FileBase):
    id: int
    user_id: int
    created_at: datetime

    class Config:
        orm_mode = True
class FileUpdate(BaseModel):
    filename: Optional[str] = None
    original_name: Optional[str] = None
    file_type: Optional[str] = None
    file_size: Optional[int] = None
    cloudinary_id: Optional[str] = None
    url: Optional[str] = None
class FileDelete(BaseModel):
    id: int
    confirm: bool
 