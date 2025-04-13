
from plaid import Client

client = Client(
    client_id='your_client_id',
    secret='your_secret',
    environment='sandbox'
)

def get_transactions(access_token, start_date, end_date):
    return client.Transactions.get(access_token, start_date, end_date)
