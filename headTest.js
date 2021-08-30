const chaiAssert= require("chai").assert
const theHead= require("./head")

describe("#head", () => {
    it("returns 1 for [1, 2, 3]", () => {
      chaiAssert.equal(theHead([2,2,3]), 2);
    });
  });


