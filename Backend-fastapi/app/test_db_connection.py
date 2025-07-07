import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from sqlalchemy import create_engine, text
from sqlalchemy.exc import OperationalError
from app.config import DATABASE_URI

if __name__ == "__main__":
    engine = create_engine(DATABASE_URI)
    try:
        with engine.connect() as conn:
            version = conn.execute(text("SELECT version();")).fetchone()
            print(f"Database connection successful. Version: {version[0]}")
    except OperationalError as e:
        print(f"Database connection failed: {e}")
