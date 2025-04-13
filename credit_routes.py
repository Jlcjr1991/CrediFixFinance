
from flask import Blueprint, jsonify

credit_bp = Blueprint('credit', __name__)

@credit_bp.route('/api/credit-score', methods=['GET'])
def credit_score():
    return jsonify({'score': 700})
