var Logger = require('./logger')

/* Adds two numbers */
function processEvent(event) {

  // Extract operands
  var a = event.queryStringParameters.a;
  var b = event.queryStringParameters.b;
  var outputFormat = event.queryStringParameters.outputFormat || 'base10';

  // Extract name
  var name = event.pathParameters.name;

  // add them
  sum = add(a, b);

  var output = new Map();

  if (isNaN(sum)) {
    output.set("statusCode", 400);
    output.set("error", name + ", I can add only numbers!");
  } else {
    Logger.debug(">>> Here");
    output.set("statusCode", 200);
    output.set("result", sum);
  }

  Logger.debug(">>> adder.processEvent returning = " + JSON.stringify(output));

  return output;
}


/**
 * PRIVATE 
 * Adds the two given numbers
 */
function add(a, b) {
  a_10 = toBase10(a);
  b_10 = toBase10(b)

  Logger.debug(">>> a_10 = " + a_10 + ", b_10 = " + b_10);

  if (isNaN(a_10) || isNaN(b_10)) {
    return NaN;
  } else {
    var sum = a_10 + b_10;
    Logger.debug(">>> adder.add returning = " + sum);
    return sum;
  }

}


/**
 * PRIVATE
 * Convert to Base 10 if possible. If not, return NaN
 */
function toBase10(number) {

  var x = number.toLowerCase();
  Logger.debug("x = " + x)

  if (!x.startsWith('0b') && !x.startsWith('0x') && parseInt(x, 10).toString(10) == x.replace(/^0+/, '')) {
    Logger.debug('>>> Base 10: ' + parseInt(x, 10).toString(10) + ' = ' + x);
    return parseInt(x, 10);
  } else if (x.startsWith('0b') && (parseInt(x.substring(2), 2).toString(2) == x.substring(2).replace(/^0+/, ''))) {
    Logger.debug('>>> Base 2: ' + parseInt(x.substring(2), 2).toString(2) + ' = ' + x.substring(2));
    return parseInt(x.substring(2), 2);
  } else if (x.startsWith('0x') && (parseInt(x.substring(2), 16).toString(16) == x.substring(2).replace(/^0+/, ''))) {
    Logger.debug('>>> Base 16: ' + parseInt(x.substring(2), 16).toString(16) + ' = ' + x.substring(2));
    return parseInt(x.substring(2), 16);
  } else {
    Logger.debug('>>> ???')
    return NaN;
  }
}


module.exports = {processEvent}
