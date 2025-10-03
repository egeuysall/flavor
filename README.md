# 🚀 Foundry - Full-Stack Developer Workspace Template

A modern, production-ready full-stack template for building developer workspace platforms. This template provides a complete foundation with a Next.js frontend, Go backend, Supabase database, and comprehensive tooling for rapid development.

## ✨ Features

### 🎨 Frontend (Next.js 15)

- **Modern React 19** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** with custom design system
- **shadcn/ui** components with Radix UI primitives
- **Storybook** for component development and testing
- **Vitest** for unit testing
- **ESLint** and **Prettier** for code quality
- **Vercel Analytics** and **Speed Insights**
- **Dark/Light mode** support
- **Responsive design** with mobile-first approach

### ⚡ Backend (Go)

- **Go** with modern HTTP server
- **Supabase** integration for database and auth
- **SQLC** for type-safe database queries
- **Environment-based configuration**
- **Docker** containerization
- **RESTful API** architecture

### 🗄️ Database & Infrastructure

- **Supabase** for PostgreSQL database
- **Nginx** reverse proxy with SSL support
- **Docker Compose** for local development
- **Production-ready** deployment setup

### 🛠️ Development Tools

- **Hot reload** for both frontend and backend
- **Storybook** for component development
- **Testing setup** with Vitest and Playwright
- **Code formatting** and linting
- **Git hooks** and pre-commit checks

## 🏗️ Project Structure

```
foundry/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ui/         # shadcn/ui components
│   │   │   ├── blocks/     # Layout components
│   │   │   └── seo/        # SEO components
│   │   ├── lib/            # Utility functions and data
│   │   ├── hooks/          # Custom React hooks
│   │   ├── styles/         # Global styles
│   │   └── types/          # TypeScript type definitions
│   ├── stories/            # Storybook stories
│   └── public/             # Static assets
├── backend/                 # Go backend application
│   ├── cmd/                # Application entry points
│   ├── internal/           # Private application code
│   │   ├── api/           # HTTP handlers and routing
│   │   ├── handlers/      # Business logic handlers
│   │   ├── middleware/    # HTTP middleware
│   │   ├── models/        # Data models
│   │   ├── supabase/      # Database integration
│   │   └── utils/         # Utility functions
│   └── sqlc.yml           # SQLC configuration
├── nginx/                  # Nginx configuration
├── docker-compose.yml      # Docker services orchestration
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and **pnpm** (recommended) or npm
- **Go** 1.21+
- **Docker** and **Docker Compose**
- **Supabase CLI** (optional, for local development)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd foundry
```

### 2. Environment Setup

Create environment files for both frontend and backend:

```bash
# Frontend environment
cp frontend/.env.example frontend/.env

# Backend environment
cp backend/.env.example backend/.env
```

### 3. Install Dependencies

```bash
# Frontend dependencies
cd frontend
pnpm install

# Backend dependencies
cd ../backend
go mod download
```

### 4. Start Development Servers

#### Option A: Docker Compose (Recommended)

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f
```

#### Option B: Local Development

```bash
# Terminal 1: Frontend
cd frontend
pnpm dev

# Terminal 2: Backend
cd backend
go run cmd/server.go
```

### 5. Access Your Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **Storybook**: http://localhost:6006

## 🛠️ Development

### Frontend Development

```bash
cd frontend

# Start development server
pnpm dev

# Run tests
pnpm test

# Run Storybook
pnpm storybook

# Build for production
pnpm build

# Lint and fix
pnpm lint:fix
```

### Backend Development

```bash
cd backend

# Run server
go run cmd/server.go

# Run tests
go test ./...

# Generate SQLC code
sqlc generate

# Build binary
go build -o bin/server cmd/server.go
```

### Database Management

```bash
# Generate SQLC code from schema
cd backend
sqlc generate

# Apply migrations (if using Supabase)
supabase db push
```

## 🎨 Customization

### Frontend Customization

1. **Update Site Details**: Modify `frontend/src/app/layout.tsx` to update site metadata
2. **Customize Features**: Edit `frontend/src/lib/features.tsx` for landing page features
3. **Update Pricing**: Modify `frontend/src/lib/pricing.ts` for pricing plans
4. **Add Components**: Use `pnpm dlx shadcn@latest add <component>` to add new UI components

### Backend Customization

1. **Database Schema**: Update `backend/internal/supabase/schema.sql`
2. **API Routes**: Add new handlers in `backend/internal/handlers/`
3. **Middleware**: Extend `backend/internal/middleware/middleware.go`
4. **Models**: Update `backend/internal/models/models.go`

### Styling

The project uses a custom Tailwind CSS configuration with:

- **Neutral color palette** as base
- **CSS variables** for theming
- **Custom spacing** and typography scales
- **Dark mode** support

## 🧪 Testing

### Frontend Testing

```bash
cd frontend

# Run unit tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run E2E tests
pnpm test:e2e

# Run Storybook tests
pnpm test-storybook
```

### Backend Testing

```bash
cd backend

# Run all tests
go test ./...

# Run tests with coverage
go test -cover ./...

# Run specific test
go test ./internal/handlers
```

## 📦 Deployment

### Production Build

```bash
# Build frontend
cd frontend
pnpm build

# Build backend
cd ../backend
go build -o bin/server cmd/server.go

# Start with Docker Compose
docker-compose -f docker-compose.prod.yml up -d
```

### Environment Variables

Set up the following environment variables for production:

**Frontend (.env)**

```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

**Backend (.env)**

```env
PORT=8080
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
```

## 🔧 Configuration

### Nginx Configuration

The project includes Nginx configuration for:

- **Reverse proxy** to frontend and backend services
- **SSL termination** (configure your certificates)
- **Static file serving**
- **Gzip compression**

> **IMPORTANT**: Run `sudo certbot certonly --standalone -d <YOUR_DOMAIN> --email <YOUR_EMAIL> --agree-tos --no-eff-email
` command before running `docker compose up --build -d`

### Docker Configuration

- **Multi-stage builds** for optimized images
- **Health checks** for service monitoring
- **Volume mounts** for persistent data
- **Network isolation** between services

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- **Frontend**: ESLint + Prettier configuration included
- **Backend**: Follow Go formatting standards (`gofmt`)
- **Commits**: Use conventional commit messages

## 📚 Documentation

- **Component Library**: Available in Storybook at `/storybook`
- **API Documentation**: Generated from Go comments
- **Database Schema**: See `backend/internal/supabase/schema.sql`

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure ports 3000, 8080, and 6006 are available
2. **Docker issues**: Run `docker-compose down -v` to clean up volumes
3. **Node modules**: Delete `node_modules` and run `pnpm install` again
4. **Go modules**: Run `go mod tidy` to clean up dependencies

### Getting Help

- Check the [Issues](../../issues) page for known problems
- Create a new issue for bugs or feature requests
- Review the documentation in each component

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Radix UI** for accessible primitives
- **Tailwind CSS** for utility-first styling
- **Supabase** for the backend-as-a-service platform
- **Vercel** for the deployment platform

---

**Built with ❤️ for developers who want to ship faster**
