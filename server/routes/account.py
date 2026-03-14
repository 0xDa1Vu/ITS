from flask import Blueprint, request, jsonify
from app import db
from models import Account
import bcrypt

account_bp = Blueprint("account", __name__)


@account_bp.route("/accounts", methods=["GET"])
def list_accounts():
    accounts = Account.query.all()
    return jsonify([
        {"id": a.id, "name": a.name, "email": a.email}
        for a in accounts
    ])


@account_bp.route("/accounts", methods=["POST"])
def create_account():
    data = request.get_json()
    if not data or not data.get("email") or not data.get("password"):
        return jsonify({"error": "email and password required"}), 400
    if Account.query.filter_by(email=data["email"]).first():
        return jsonify({"error": "email already exists"}), 409
    password_hash = bcrypt.hashpw(
        data["password"].encode("utf-8"), bcrypt.gensalt()
    ).decode("utf-8")
    account = Account(
        name=data.get("name", ""),
        email=data["email"],
        password=password_hash,
    )
    db.session.add(account)
    db.session.commit()
    return jsonify({"id": account.id, "name": account.name, "email": account.email}), 201
