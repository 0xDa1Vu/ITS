# Vehicle Rental (Cho thuê phương tiện)

Web application for renting vehicles. Monorepo with a React frontend and Node.js backend.

## Structure

```
project_ITS/
├── client/          # Frontend (React + Vite + TypeScript)
├── server/          # Backend (Node.js + Express + TypeScript)
├── shared/          # Shared types/constants (optional)
└── README.md
```

## Tech stack

- **Frontend**: React 18, Vite, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Database**: To be added (e.g. PostgreSQL + Prisma)

## Getting started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Backend

```bash
cd server
npm install
npm run dev
```

API runs at `http://localhost:3001` (see `server/.env`).

### Frontend

```bash
cd client
npm install
npm run dev
```

App runs at `http://localhost:5173`.

### Environment

- Copy `server/.env.example` to `server/.env` and set values.
- Copy `client/.env.example` to `client/.env` if needed.

## License

Private / Educational.
