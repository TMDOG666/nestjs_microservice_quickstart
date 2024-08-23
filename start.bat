@echo off

REM Navigate to the root directory
cd /d %~dp0

REM Initialize service_1
echo Initializing Service 1...
cd microservice\service_1
call npm install
call npm run build

REM Initialize service_2
echo Initializing Service 2...
cd ..\service_2
call npm install
call npm run build

REM Initialize api-gateway
echo Initializing API Gateway...
cd ..\..\api-gateway
call npm install
call npm run build

REM Return to the root directory
cd /d %~dp0

REM Execute Docker Compose
echo Starting Docker containers...
call docker-compose up -d

echo Deployment completed.
pause
