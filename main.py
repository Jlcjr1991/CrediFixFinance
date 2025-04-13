
from flask import Flask
from flask_cors import CORS

from app.routes.auth_routes import auth_bp
from app.routes.credit_routes import credit_bp
from app.routes.budget_routes import budget_bp
from app.routes.dispute_routes import dispute_bp
from app.routes.debt_routes import debt_bp
from app.routes.split_bill_routes import bill_bp
from app.routes.notification_routes import notification_bp

app = Flask(__name__)
CORS(app)

# Register blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(credit_bp)
app.register_blueprint(budget_bp)
app.register_blueprint(dispute_bp)
app.register_blueprint(debt_bp)
app.register_blueprint(bill_bp)
app.register_blueprint(notification_bp)

@app.route('/')
def home():
    return {"message": "CrediFix backend is running!"}

if __name__ == '__main__':
    app.run(debug=True)
