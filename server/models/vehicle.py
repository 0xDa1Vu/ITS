from app import db


class Vehicle(db.Model):
    """Vehicle table - like Dish in reference (vehicles to rent)."""
    __tablename__ = "Vehicle"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    price_per_day = db.Column(db.Float, nullable=False, default=0)
    available = db.Column(db.Boolean, default=True)

    def __repr__(self):
        return f"<Vehicle {self.name}>"


class VehicleSnapshot(db.Model):
    """Snapshot of vehicle at booking time - like DishSnapshot."""
    __tablename__ = "VehicleSnapshot"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    vehicle_id = db.Column(db.Integer, db.ForeignKey("Vehicle.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    price_per_day = db.Column(db.Float, nullable=False)

    vehicle = db.relationship("Vehicle", backref=db.backref("snapshots", lazy=True))
