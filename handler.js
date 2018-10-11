var Adder = require('./functions/adder');

module.exports.tdd_example_adder = async (event, context) => {
  var response = Adder.processEvent(event);

  if (typeof response.get("result") != "undefined") {
    return {
      statusCode: response.get("statusCode"),
      body: JSON.stringify({
        result: response.get("result"),
      })
    };
  } else if (typeof response.get("error") != "undefined") {
      return {
        statusCode: response.get("statusCode"),
        body: JSON.stringify({
          error: response.get("error"),
        })
      };
  }
}
