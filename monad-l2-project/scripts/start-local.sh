#!/bin/bash

# This script sets up and starts a local development environment for the Monad L2 solution.

# Navigate to the project directory
cd "$(dirname "$0")/.."

# Start the Docker containers using Docker Compose
docker-compose up -d

# Wait for the services to be ready
echo "Waiting for services to be ready..."
sleep 10

# Run any necessary initialization scripts or commands here
# For example, you might want to run migrations or seed the database

echo "Local development environment is up and running!"