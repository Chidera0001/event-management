import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

const CheckoutForm = ({ eventId, ticketId, quantity }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { data: clientSecret } = await axios.post('/api/create-payment-intent', {
        eventId,
        ticketId,
        quantity,
      });

      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: 'Test User',
          },
        },
      });

      if (stripeError) {
        setError(`Payment failed: ${stripeError.message}`);
        setLoading(false);
        return;
      }

      if (paymentIntent.status === 'succeeded') {
        alert('Payment successful');
        router.push('/attendee/success');
      }
    } catch (error) {
      setError(`Payment failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-6">
      <CardElement className="border p-4 rounded mb-4" />
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 ${loading && 'opacity-50 cursor-not-allowed'}`}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CheckoutForm;