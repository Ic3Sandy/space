.PHONY: help dev prod build-dev build-prod stop clean logs

# Default target
help:
	@echo "Ic3Sandy.Space - Docker Commands"
	@echo ""
	@echo "Development:"
	@echo "  make dev          - Run development server with hot reload"
	@echo "  make dev-build    - Build and run development server"
	@echo "  make build-dev    - Build development image only"
	@echo "  make logs-dev     - View development logs"
	@echo ""
	@echo "Production:"
	@echo "  make prod         - Run production server"
	@echo "  make prod-build   - Build and run production server"
	@echo "  make build-prod   - Build production image only"
	@echo "  make logs-prod    - View production logs"
	@echo ""
	@echo "Maintenance:"
	@echo "  make stop         - Stop all containers"
	@echo "  make clean        - Remove containers and images"
	@echo "  make rebuild      - Clean rebuild of all images"
	@echo "  make shell-dev    - Open shell in dev container"
	@echo "  make shell-prod   - Open shell in prod container"

# Development commands
dev:
	docker compose --profile dev up

dev-build:
	docker compose --profile dev up --build

build-dev:
	docker compose build dev

logs-dev:
	docker compose logs -f dev

# Production commands
prod:
	docker compose --profile prod up -d

prod-build:
	docker compose --profile prod up --build -d

build-prod:
	docker compose build prod

logs-prod:
	docker compose logs -f prod

# Maintenance commands
stop:
	docker compose --profile dev --profile prod down

clean:
	docker compose --profile dev --profile prod down -v --rmi local

rebuild: clean
	docker compose build --no-cache

# Utility commands
shell-dev:
	docker exec -it ic3sandy-dev sh

shell-prod:
	docker exec -it ic3sandy-prod sh
