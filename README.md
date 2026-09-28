# School Attendance Automation System

A full-stack SaaS application for school attendance management, built as a standalone project using React + Vite for the frontend and Node.js + TypeScript for the backend. It follows the document specification for role-based access, attendance image processing, AI/OCR workflow, and school-level dashboards.

## Tech stack

- Frontend: React + Vite + TypeScript
- Backend: Node.js + TypeScript + Express
- Database: PostgreSQL via Supabase
- Storage: Supabase Storage
- Auth: Supabase Auth-ready architecture
- AI integration: provider-independent service layer

## Quick start

### 1. Install dependencies

```bash
npm install
```

### 2. Start the API

```bash
npm run dev:api
```

### 3. Start the frontend

```bash
npm run dev:web
```

### 4. Open the app

- Frontend: http://localhost:5173
- API: http://localhost:4000/health

## Project structure

```text
school-attendance-automation/
├─ apps/
│  ├─ web/
│  │  └─ src/
│  └─ api/
│     └─ src/
├─ package.json
├─ .gitignore
└─ README.md
```

## Roles included

- Super Admin
- Principal
- School Admin
- Teacher
- Parent

## Main features

- Login and role-based authentication flow
- School and member management
- Attendance upload and processing job flow
- Principal approval for absent/leave students
- Notifications, announcements, notes, and diary
- Teacher and parent dashboards
- Reports and aggregate status stats
- Glassmorphism UI design with blue/purple aesthetic

## Security notes

- Do not hardcode secrets in source files
- Store API keys and credentials in environment variables only
- Use strict school-level authorization and audit logging

## Database setup

The SQL schema is available in:

- `apps/api/src/db/schema.sql`
- `apps/api/src/db/storage.sql`

## Environment

Use `.env.example` in the API app as a template for local development.
