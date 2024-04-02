const {paypalAuthProvider, paypalPayoutProvider} = require('../providers');
const { formatCurrency } = require('../utils/formatCurrency');


const payout = async (req, res) => {
  try {
    const { amount: valueString, email } = req.query;
    const { authToken } = await paypalAuthProvider.fetchAuthToken();

    const value = formatCurrency(valueString);

    const amount = {
        value,
        currency: "USD",
    }

    const data = await paypalPayoutProvider.payout(authToken, amount, email)

    console.log({payoutResponse:data})

    res.json(data);
  } catch (error) {
    console.error('Error paying recipient:', error);
    res.status(500).send('Failed to pay recipient');
  }
};

module.exports = {
    payout,
};