const axios = require('axios');
const IWeatherDataProvider = require('./IWeatherDataProvider');

class VendorWeatherDataProvider extends IWeatherDataProvider {
  constructor() {
    super();
    this.baseUrl = process.env.VENDOR_API_BASE_URL; // Ensure you have this in your .env
  }

  async fetchWeatherData(location) {
    // Implementation for the current vendor
    const response = await axios.get(`${this.baseUrl}?location=${location}`);
    return response.data;
  }
}

module.exports = VendorWeatherDataProvider;