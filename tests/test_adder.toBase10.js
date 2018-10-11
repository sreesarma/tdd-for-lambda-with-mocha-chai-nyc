const chai = require('chai');
const expect = chai.expect;
const rewire = require('rewire');
// Note that we are pulling in adder via rewire, not require
const Adder = rewire('../functions/adder.js');
const toBase10 = Adder.__get__('toBase10');

describe("Adder.toBase10", function() {
  it("identifies '10' as 10", function() {
    expect(toBase10('10')).to.equal(10);
  });
});

describe("Adder.toBase10", function() {
  it("identifies '0010' as 10", function() {
    expect(toBase10('0010')).to.equal(10);
  });
});

describe("Adder.toBase10", function() {
  it("identifies '0010E' as NaN", function() {
    expect(toBase10('0010E')).to.be.NaN;
  });
});

describe("Adder.toBase10", function() {
  it("identifies '0b10' as 2", function() {
    expect(toBase10('0b10')).to.equal(2);
  });
});

describe("Adder.toBase10", function() {
  it("identifies '0B10' as 2", function() {
    expect(toBase10('0B10')).to.equal(2);
  });
});

describe("Adder.toBase10", function() {
  it("identifies '0B20' as NaN", function() {
    expect(toBase10('0B20')).to.be.NaN;
  });
});

describe("Adder.toBase10", function() {
  it("identifies '0x1A' as 26", function() {
    expect(toBase10('0x1A')).to.equal(26);
  });
});

describe("Adder.toBase10", function() {
  it("identifies '0X1A' as 26", function() {
    expect(toBase10('0X1A')).to.equal(26);
  });
});

describe("Adder.toBase10", function() {
  it("identifies '0x1a' as 26", function() {
    expect(toBase10('0x1a')).to.equal(26);
  });
});

describe("Adder.toBase10", function() {
  it("identifies '0X1a' as 26", function() {
    expect(toBase10('0X1a')).to.equal(26);
  });
});

describe("Adder.toBase10", function() {
  it("identifies '0X1G' as unknown", function() {
    expect(toBase10('0X1G')).to.be.NaN;
  });
});
