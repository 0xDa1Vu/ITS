# Vehicle Rental (Cho thuê phương tiện)

Web application for renting vehicles. **Next.js** frontend and **Python Flask** backend with SQLite database (structure similar to the reference: Account, Vehicle, Order, Guest, RefreshToken).

## Structure

```
project_ITS/
├── client/          # Frontend (Next.js 15 + TypeScript)
├── server/          # Backend (Python Flask + SQLAlchemy + SQLite)
│   ├── app.py
│   ├── models/      # Account, Vehicle, VehicleSnapshot, Guest, Order, RefreshToken
│   ├── routes/
│   └── requirements.txt
├── shared/
└── README.md
```

## Tech stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Backend**: Python 3, Flask, Flask-SQLAlchemy, Flask-CORS, bcrypt
- **Database**: SQLite (`dev.db`), schema like reference (Account, Dish→Vehicle, Order, Guest, RefreshToken)

## Database tables (like reference image)

| Table            | Description                    |
|------------------|--------------------------------|
| Account          | id, name, email, password (bcrypt) |
| Vehicle          | Like Dish — vehicles to rent  |
| VehicleSnapshot  | Like DishSnapshot             |
| Guest            | Customers                     |
| Order            | Rental orders/bookings        |
| RefreshToken     | Auth sessions                 |

## Getting started

### Prerequisites

- Node.js 18+
- Python 3.10+

### Backend (Python)

```bash
cd server
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

API runs at `http://localhost:5000`. Database file: `server/dev.db` (created on first run).

### Frontend (Next.js)

```bash
cd client
npm install
npm run dev
```

App runs at `http://localhost:3000`. API proxy: `/api/*` → `http://localhost:5000/api/*`.

### Environment

- **Server**: Copy `server/.env.example` to `server/.env` (optional; defaults work for dev).
- **Client**: Copy `client/.env.example` to `client/.env.local` for `NEXT_PUBLIC_API_URL` if needed.

## License

Private / Educational.
