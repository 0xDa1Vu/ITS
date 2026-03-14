from app import db


class Account(db.Model):
    """Account table - same structure as reference (id, name, email, password)."""
    __tablename__ = "Account"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f"<Account {self.email}>"
