#!/bin/bash

# Navigate to the script's directory
cd "$(dirname "$0")"

# Initialize service_1
echo "Initializing Service 1..."
cd microservice/service_1
npm install
npm run build

# Initialize service_2
echo "Initializing Service 2..."
cd ../service_2
npm install
npm run build

# Initialize api-gateway
echo "Initializing API Gateway..."
cd ../../api-gateway
npm install
npm run build

# Return to the root directory
cd ../

# Execute Docker Compose
echo "Starting Docker containers..."
docker-compose up -d

echo "Deployment completed."
