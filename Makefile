.PHONY: help prod build-prod stop clean logs

# Default target
help:
	@echo "Ic3Sandy.Space - Docker Commands"
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
	@echo "  make shell-prod   - Open shell in prod container"

# Status command
ps:
	docker compose ps -a

# Production commands
prod:
	docker compose up -d

prod-build:
	docker compose up --build -d

build-prod:
	docker compose build prod

logs-prod:
	docker compose logs -f prod

# Maintenance commands
stop:
	docker compose down

clean:
	docker compose down -v --rmi local

rebuild: clean
	docker compose build --no-cache

# Utility commands
shell-prod:
	docker exec -it ic3sandy-prod sh
