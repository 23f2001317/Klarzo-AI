import os

DATABASE_URI = os.getenv('DATABASE_URI', 'postgresql://postgres:klarzo-12345@localhost:5432/klarzo-db')

SQLALCHEMY_DATABASE_URI = DATABASE_URI
SQLALCHEMY_TRACK_MODIFICATIONS = False
