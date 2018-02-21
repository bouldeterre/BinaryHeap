let mocha = require("mocha");
let chai = require("chai");
let should = require("chai").should();
let assert = require("chai").assert;
let describe = mocha.describe;
let it = mocha.it;
let BinaryHeap = require("../binaryHeap.js");

describe("Launching Tests", function() {
  describe("Test BinaryHeap", function() {
    it("Should Push One Element", function(done) {
      let binaryHeap = new BinaryHeap(1);
      binaryHeap.push(1);
      binaryHeap.lower().should.equal(1);
      done();
    });
    it("Should Push few element", function(done) {
      let binaryHeap = new BinaryHeap(10);
      binaryHeap.push(2);
      binaryHeap.lower().should.equal(2);
      binaryHeap.push(7);
      binaryHeap.lower().should.equal(2);
      binaryHeap.push(3);
      binaryHeap.lower().should.equal(2);
      binaryHeap.push(5);
      binaryHeap.lower().should.equal(2);
      binaryHeap.push(1);
      binaryHeap.lower().should.equal(1);
      done();
    });
    it("Should Push Limit 3 Element", function(done) {
      let binaryHeap = new BinaryHeap(3);
      binaryHeap.push(1);
      binaryHeap.push(2);
      binaryHeap.push(3);
      binaryHeap.push(4);
      binaryHeap.push(5);
      binaryHeap.lower().should.equal(3);
      binaryHeap.push(12);
      binaryHeap.lower().should.equal(4);
      done();
    });
  });
});
