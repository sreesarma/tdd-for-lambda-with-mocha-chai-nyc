const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const createMock = require('../functions/mocks.js');
const Handler = require('../handler.js');

describe("Handler", function() {
  it("adds two decimal numbers correctly", function() {
    // Create event eventSourceTemplates
    const mocked = createMock({
      template: 'httpGet',
      merge: {
        "path": 'hello/Sensei',
        "pathParameters": {
          'name': 'Sensei'
        },
        "queryStringParameters": {
          'a': '10',
          'b': '20'
        }
      }
    });

    var expected = {
      statusCode: 200,
      body: "{\"result\":30}"
    };

    return expect(Promise.resolve(Handler.tdd_example_adder(mocked))).to.eventually.deep.equal(expected);
  });
});
