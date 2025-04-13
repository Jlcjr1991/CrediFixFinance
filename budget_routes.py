
from flask import Blueprint, request, jsonify

budget_bp = Blueprint('budget', __name__)

@budget_bp.route('/api/budget', methods=['POST'])
def create_budget():
    return jsonify({'status': 'budget created'})

@budget_bp.route('/api/budget', methods=['GET'])
def get_budget():
    return jsonify({'budget': {'income': 3000, 'expenses': 2000}})
