# PowerShell script to backup PostgreSQL database
# Usage: .\backup_db.ps1

$env:PGPASSWORD = "klarzo-12345"
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupFile = "backup_klarzo_db_$timestamp.sql"

pg_dump -U postgres -h localhost -p 5432 -F c -b -v -f $backupFile klarzo-db
Write-Host "Backup completed: $backupFile"
