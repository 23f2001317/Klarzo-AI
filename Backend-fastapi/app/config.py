import os

DATABASE_URI = os.getenv('DATABASE_URI', 'postgresql://username:password@localhost:5432/yourdatabase')
SQLALCHEMY_DATABASE_URI = DATABASE_URI
SQLALCHEMY_TRACK_MODIFICATIONS = False
