const {paypalAuthProvider} = require('../providers');

const fetchAuthToken = async (req, res) => {
  try {
    const data = await paypalAuthProvider.fetchAuthToken();
    res.json(data);
  } catch (error) {
    console.error('Error authenticating:', error);
    res.status(500).send('Failed to authenticate');
  }
};

module.exports = {
  fetchAuthToken,
};