
const formatCurrency = (value) => {

  var number = new Number(value);
  // Create our number formatter.
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const currencyWithPrefix = formatter.format(number);
  const currency = currencyWithPrefix.slice(1);
  return currency;
};

module.exports = {
  formatCurrency,
};