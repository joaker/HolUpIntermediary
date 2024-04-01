const VendorExampleDataProvider = require('./VendorExampleDataProvider');
const AnotherVendorWeatherDataProvider = require('./AnotherVendorExampleDataProvider');

const provider = process.env.WEATHER_PROVIDER === 'AnotherVendor'
  ? new AnotherVendorWeatherDataProvider()
  : new VendorExampleDataProvider();

module.exports = provider;