from extensions import db


class RefreshToken(db.Model):
    """RefreshToken table - for auth sessions."""
    __tablename__ = "RefreshToken"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    account_id = db.Column(db.Integer, db.ForeignKey("Account.id"), nullable=False)
    token = db.Column(db.String(512), unique=True, nullable=False)
    expires_at = db.Column(db.DateTime, nullable=False)

    account = db.relationship("Account", backref=db.backref("refresh_tokens", lazy=True))

    def __repr__(self):
        return f"<RefreshToken account_id={self.account_id}>"
