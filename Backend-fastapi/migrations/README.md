# Alembic Migrations

This directory contains Alembic migration scripts for your FastAPI backend.

## Usage

- To create a new migration after changing models:
  ```
  alembic revision --autogenerate -m "Describe your change"
  ```
- To apply migrations:
  ```
  alembic upgrade head
  ```

Make sure your `DATABASE_URI` is set correctly in your environment or `config.py`.
