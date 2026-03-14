from app import db


class Guest(db.Model):
    """Guest/Customer table."""
    __tablename__ = "Guest"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=True)
    phone = db.Column(db.String(50), nullable=True)

    def __repr__(self):
        return f"<Guest {self.name}>"
