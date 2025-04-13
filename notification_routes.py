
from flask import Blueprint, request, jsonify

notification_bp = Blueprint('notification', __name__)

@notification_bp.route('/api/notifications', methods=['POST'])
def send_notification():
    return jsonify({'status': 'notification sent'})

@notification_bp.route('/api/notifications', methods=['GET'])
def get_notifications():
    return jsonify({'notifications': []})
