@ECHO OFF

set TIMESTAMP=%DATE:~10,4%%DATE:~4,2%%DATE:~7,2%

"C:\wamp64\bin\mysql\mysql5.7.9\bin\mysqldump.exe" --databases nsmdih_cms_db --result-file="C:\wamp64\www\nsmdih_cms\database\backups\backup.%TIMESTAMP%.sql" --user=root --password=one23456

C:
CD C:\wamp64\www\nsmdih_cms\database\backups\

MAKECAB "backup.%TIMESTAMP%.sql" "backup.%TIMESTAMP%.sql.cab"

DEL /q /f "backup.%TIMESTAMP%.sql"
