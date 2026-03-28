import os
from flask import Flask
from flask_cors import CORS
from extensions import db


def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "dev-secret")
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get(
        "DATABASE_URL", "sqlite:///dev.db"
    )
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    CORS(app, origins=["http://localhost:3000"])
    db.init_app(app)

    with app.app_context():
        from models import Account, Vehicle, VehicleSnapshot, Guest, Order, RefreshToken
        db.create_all()

    from routes import health_bp, account_bp
    app.register_blueprint(health_bp, url_prefix="/api")
    app.register_blueprint(account_bp, url_prefix="/api")

    return app


app = create_app()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
