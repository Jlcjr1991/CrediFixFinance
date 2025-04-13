
from flask import Blueprint, request, jsonify

dispute_bp = Blueprint('dispute', __name__)

@dispute_bp.route('/api/dispute', methods=['POST'])
def create_dispute():
    return jsonify({'status': 'dispute letter generated'})

@dispute_bp.route('/api/dispute/status', methods=['GET'])
def dispute_status():
    return jsonify({'status': 'in review'})
