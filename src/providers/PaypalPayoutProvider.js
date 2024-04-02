const axios = require('axios');
const { generateSenderBatchId, generateSenderItemId } = require('../utils/payoutUtils');
require('dotenv').config();

class PaypalAuthProvider {
  constructor() {
    this.baseUrl = process.env.PAYPAL_PAYOUTS_BASE_URL;
  }

  async payout(authToken, amount, email) {

    const transactionDate = new Date();


    console.log({amount, email})


    const sender_batch_id = generateSenderBatchId();
    const sender_item_id = generateSenderItemId();

    const response = await axios.post(
      'https://api-m.sandbox.paypal.com/v1/payments/payouts',
      // '{\n  "sender_batch_header": {\n    "recipient_type": "EMAIL",\n    "email_subject": "You have a payout!",\n    "email_message": "You have received a payout! Thanks for using our service!"\n  },\n  "items": [\n    {\n      "amount": {\n        "value": "9.87",\n        "currency": "USD"\n      },\n      "note": "Thanks for your patronage!",\n      "receiver": "sb-447rr330240878@personal.example.com"\n    }\n  ]\n}',
      {
        'sender_batch_header': {
          'recipient_type': 'EMAIL',
          sender_batch_id,
          'email_subject': 'You have a payout!',
          'email_message': 'You have received a payout! Thanks for using our service!'
        },
        'items': [
          {
            amount,
            'note': 'Thanks for your patronage!',
            'receiver': email,
            sender_item_id,
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        }
      }
    );

    return response.data;
  }
}

module.exports = PaypalAuthProvider;