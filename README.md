# Ic3Sandy.Space

A cosmic-themed portfolio website built with Preact and Vite.

## Local Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

4. Edit files in `src/` - changes will auto-reload in the browser

5. Stop with `Ctrl+C`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Production Docker Setup

### Quick Start

```bash
docker compose up -d
# or with Make
make prod
```

Access at [http://localhost:2612](http://localhost:2612)

### Available Commands

| Command           | Description                                     |
| ----------------- | ----------------------------------------------- |
| `make prod`       | Start production server (http://localhost:2612) |
| `make prod-build` | Build and run production server                 |
| `make build-prod` | Build production image only                     |
| `make logs-prod`  | View production logs                            |
| `make stop`       | Stop all containers                             |
| `make clean`      | Remove containers and images                    |
| `make rebuild`    | Clean rebuild of all images                     |
| `make shell-prod` | Open shell in prod container                    |

### Production Deployment

1. Build and start production server:

   ```bash
   make prod
   ```

2. View at [http://localhost:2612](http://localhost:2612)

3. Check logs if needed:

   ```bash
   make logs-prod
   ```

4. Stop when done:
   ```bash
   make stop
   ```

### Architecture

- **Production Image:** Nginx 1.25 Alpine serving optimized static files
- **Image Size:** ~40MB (nginx + optimized static assets)
- **Features:**
  - Multi-stage Docker build for optimal image size
  - Gzip compression enabled
  - Security headers configured
  - SPA routing support
  - Health checks enabled

### Troubleshooting

**Port already in use?**

Change the port mapping in docker-compose.yml:

```yaml
# For prod: "8080:80" instead of "2612:80"
```

**Need to start fresh?**

```bash
# Remove all containers and rebuild
make rebuild
```
