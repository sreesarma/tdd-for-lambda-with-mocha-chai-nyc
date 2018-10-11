const chai = require('chai');
const expect = chai.expect;
const createMock = require('../functions/mocks.js');
const Adder = require('../functions/adder.js');

describe("Adder.processEvent", function() {
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
    var response = Adder.processEvent(mocked);

    expect(response.get("statusCode")).to.equal(200);
    expect(response.get("result")).to.equal(30);
  });
});
