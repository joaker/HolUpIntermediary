const axios = require('axios');
const IExampleDataProvider = require('./IExampleDataProvider');
require('dotenv').config();

class AnotherVendorExampleDataProvider extends IExampleDataProvider {
  constructor() {
    super();
    this.baseUrl = process.env.VENDOR_API_BASE_URL;
  }

  async fetchWeatherData(location) {
    const response = await axios.get(`${this.baseUrl}?location=${location}`);
    return {
      location: location,
      temperature: response.data.temperature,
      provider: 'Vendor'
    };
  }
}

module.exports = AnotherVendorExampleDataProvider;