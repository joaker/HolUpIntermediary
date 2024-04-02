const axios = require('axios');
require('dotenv').config();

class PaypalAuthProvider {
  constructor() {
    this.baseUrl = process.env.PAYPAL_API_AUTH_URL;
  }

  async fetchAuthToken() {
    
    const clientId = process.env.PAYPAL_CLIENT_ID;
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

    // const authHeader = btoa(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`)

    const response = await axios.post(
      this.baseUrl,
      new URLSearchParams({
        'grant_type': 'client_credentials'
      }),
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: clientId,
          password: clientSecret,
        },
      },
    );

    const authToken = response.data.access_token;

    return {
      authToken,
    }
  }
}

module.exports = PaypalAuthProvider;