# Ic3Sandy.Space

A cosmic-themed portfolio website built with Preact and Vite.

## Docker Setup

### Quick Start

**Development (Hot Reload):**

```bash
docker-compose --profile dev up
# or with Make
make dev
```

Access at [http://localhost:3000](http://localhost:3000)

**Production:**

```bash
docker-compose --profile prod up -d
# or with Make
make prod
```

Access at [http://localhost](http://localhost)

### Available Commands

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `make dev`        | Start development server (http://localhost:3000) |
| `make dev-build`  | Build and run development server                 |
| `make prod`       | Start production server (http://localhost)       |
| `make prod-build` | Build and run production server                  |
| `make stop`       | Stop all containers                              |
| `make logs-dev`   | View development logs                            |
| `make logs-prod`  | View production logs                             |
| `make clean`      | Remove containers and images                     |
| `make rebuild`    | Clean rebuild of all images                      |
| `make shell-dev`  | Open shell in dev container                      |
| `make shell-prod` | Open shell in prod container                     |

### Development Workflow

1. Start development server:

   ```bash
   make dev
   ```

2. Edit files in `src/` - changes will auto-reload in the browser

3. View your changes at [http://localhost:3000](http://localhost:3000)

4. Stop with `Ctrl+C`

### Production Deployment

1. Build and start production server:

   ```bash
   make prod
   ```

2. View at [http://localhost](http://localhost)

3. Check logs if needed:

   ```bash
   make logs-prod
   ```

4. Stop when done:
   ```bash
   make stop
   ```

### Architecture

- **Development:** Node 20 Alpine + Vite dev server with hot reload
- **Production:** Nginx 1.25 Alpine serving optimized static files
- **Image Sizes:**
  - Development: ~250MB (includes Node.js and build tools)
  - Production: ~40MB (nginx + optimized static assets)
- **Features:**
  - Multi-stage Docker build for optimal image sizes
  - Hot module replacement in development
  - Gzip compression in production
  - Security headers configured
  - SPA routing support
  - Health checks enabled

### Troubleshooting

**Port already in use?**

```bash
# Change the port mapping in docker-compose.yml
# For dev: "3001:3000" instead of "3000:3000"
# For prod: "8080:80" instead of "80:80"
```

**Hot reload not working?**

```bash
# Rebuild the development container
make dev-build
```

**Need to start fresh?**

```bash
# Remove all containers and rebuild
make rebuild
```

## Local Development (without Docker)

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```
