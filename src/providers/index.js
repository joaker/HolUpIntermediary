const VendorExampleDataProvider = require('./VendorExampleDataProvider');
const AnotherVendorWeatherDataProvider = require('./AnotherVendorExampleDataProvider');
const PaypalAuthProvider = require('./PaypalAuthProvider');
const PaypalPayoutProvider = require('./PaypalPayoutProvider');

const exampleDataProvider = process.env.WEATHER_PROVIDER === 'AnotherVendor'
  ? new AnotherVendorWeatherDataProvider()
  : new VendorExampleDataProvider();


const paypalAuthProvider = new PaypalAuthProvider();
const paypalPayoutProvider = new PaypalPayoutProvider();

module.exports = {
    exampleDataProvider,
    paypalAuthProvider,
    paypalPayoutProvider,
};