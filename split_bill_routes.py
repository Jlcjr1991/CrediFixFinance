
from flask import Blueprint, request, jsonify

bill_bp = Blueprint('bill', __name__)

@bill_bp.route('/api/split-bill', methods=['POST'])
def split_bill():
    return jsonify({'status': 'bill split successfully'})
