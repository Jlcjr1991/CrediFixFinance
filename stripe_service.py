
import stripe
stripe.api_key = 'sk_test_yourkeyhere'

def create_payment_intent(amount, currency='usd'):
    return stripe.PaymentIntent.create(
        amount=int(amount * 100),
        currency=currency
    )
