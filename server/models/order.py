from extensions import db


class Order(db.Model):
    """Order/Booking table - rental orders."""
    __tablename__ = "Order"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    guest_id = db.Column(db.Integer, db.ForeignKey("Guest.id"), nullable=True)
    vehicle_id = db.Column(db.Integer, db.ForeignKey("Vehicle.id"), nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    total_price = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(50), default="pending")  # pending, confirmed, completed, cancelled

    guest = db.relationship("Guest", backref=db.backref("orders", lazy=True))
    vehicle = db.relationship("Vehicle", backref=db.backref("orders", lazy=True))

    def __repr__(self):
        return f"<Order {self.id}>"
