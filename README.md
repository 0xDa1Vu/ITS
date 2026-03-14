# Vehicle Rental — Cho thuê phương tiện

A full-stack web application for vehicle rental. Customers can browse vehicles and place bookings; the system manages accounts, orders, and guests with a SQLite database.

---

## Tech stack

| Layer    | Stack |
|----------|--------|
| Frontend | Next.js 15 (App Router), React 18, TypeScript |
| Backend  | Python 3.10+, Flask, Flask-SQLAlchemy, Flask-CORS, bcrypt |
| Database | SQLite (`dev.db`) |

---

## Project structure

```
project_ITS/
├── client/                 # Next.js frontend
│   ├── src/
│   │   └── app/            # App Router: layout, page, globals
│   ├── next.config.ts
│   ├── package.json
│   └── .env.example
├── server/                 # Flask backend
│   ├── app.py              # App factory, DB init, blueprint registration
│   ├── models/             # SQLAlchemy models
│   │   ├── account.py
│   │   ├── vehicle.py
│   │   ├── guest.py
│   │   ├── order.py
│   │   └── refresh_token.py
│   ├── routes/             # API blueprints
│   ├── prisma/             # schema.prisma (reference only, DB is SQLAlchemy)
│   ├── requirements.txt
│   └── .env.example
├── shared/
├── package.json            # Root scripts (client only)
└── README.md
```

---

## Database schema

SQLite with tables aligned to a reference design (Account, Vehicle, Order, Guest, RefreshToken).

| Table            | Purpose |
|------------------|--------|
| **Account**      | Users: `id`, `name`, `email`, `password` (bcrypt) |
| **Vehicle**     | Rentable vehicles: `name`, `description`, `price_per_day`, `available` |
| **VehicleSnapshot** | Snapshot of vehicle data at booking time |
| **Guest**       | Customers: `name`, `email`, `phone` |
| **Order**       | Rentals: `guest_id`, `vehicle_id`, `start_date`, `end_date`, `total_price`, `status` |
| **RefreshToken** | Auth: `account_id`, `token`, `expires_at` |

The real schema is defined in `server/models/`. `server/prisma/schema.prisma` is a Prisma-style reference only.

---

## Getting started

### Prerequisites

- **Node.js** 18+
- **Python** 3.10+
- **npm** (or pnpm/yarn)

### 1. Backend (Flask)

```bash
cd server
python3 -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

- API: **http://localhost:5000**
- DB file: `server/dev.db` (created on first run)

### 2. Frontend (Next.js)

```bash
cd client
npm install
npm run dev
```

- App: **http://localhost:3000**
- Requests to `/api/*` are proxied to `http://localhost:5000/api/*` (see `next.config.ts`).

### 3. Environment (optional)

- **Server:** copy `server/.env.example` → `server/.env` and set `SECRET_KEY`, `DATABASE_URL` if needed.
- **Client:** copy `client/.env.example` → `client/.env.local` for `NEXT_PUBLIC_API_URL` (e.g. for direct API calls from the browser).

---

## API (current)

| Method | Endpoint           | Description |
|--------|--------------------|-------------|
| GET    | `/api/health`      | Health check |
| GET    | `/api/accounts`    | List accounts (no password) |
| POST   | `/api/accounts`    | Create account (body: `name`, `email`, `password`) |

---

## Root scripts

From project root:

```bash
npm run install:all    # Install root + client deps
npm run dev:client     # Start Next.js dev server
```

Backend has no npm scripts; run `python app.py` from `server/` as above.

---

## License

Private / Educational.
