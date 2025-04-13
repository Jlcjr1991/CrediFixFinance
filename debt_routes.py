
from flask import Blueprint, jsonify

debt_bp = Blueprint('debt', __name__)

@debt_bp.route('/api/debt-options', methods=['GET'])
def debt_options():
    return jsonify({'options': ['Debt Consolidation', 'Negotiation', 'Counseling']})
