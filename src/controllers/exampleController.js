const exampleDataProvider = require('../providers');

const getExample = async (req, res) => {
  try {
    const { location } = req.query;
    const data = await exampleDataProvider.fetchExampleData(location);
    res.json(data);
  } catch (error) {
    console.error('Error fetching example data:', error);
    res.status(500).send('Failed to fetch example data');
  }
};

module.exports = {
    getExample,
};