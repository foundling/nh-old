var expect = require("chai").expect;
var db = require(__dirname + "/../lib/db");
var ns = require("node-serialize");

describe("database", function(){
  it("should change JSON to string then unserialize", function(){
    expect(typeof db).to.eql("object");
  });

  var serializeDb = ns.serialize(db);
  
  it("should return an object that can serialize into string", function(){
    expect(typeof serializeDb).to.eql("string");
  }); 
});