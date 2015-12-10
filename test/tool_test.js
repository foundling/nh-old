var expect = require("chai").expect;
var lineLength = require(__dirname + '/../lib/tools').lineLength;
var textToLines = require(__dirname + '/../lib/tools').textToLines;
var format = require(__dirname + '/../lib/tools').format;
var wrap = require(__dirname + '/../lib/tools').wrap; // glue code
var buildPadding  = require(__dirname + '/../lib/tools').buildPadding;

var paddingLength = 2;
var paddingChar = '@';

describe("buildPadding", function(){
  it("should build padding", function(){
    expect(buildPadding(paddingLength, paddingChar)).to.eql("@@");
  });
});

describe("format", function(){
  it("should take in array and return single string", function(){
    var lines = [["this", "is", "a", "test"],["more","test"]];
    var padding = "@";
    var testResult = "@this is a test@\n@more test@\n";
    expect(format(lines, padding)).to.eql(testResult);
  });
});

describe("lineLength", function(){
  it("should return combined length of a subarray", function(){
    var line = ["this", "is", "a", "test"];
    var testResult = 11;
    expect(lineLength(line)).to.eql(testResult);
  });
});

describe("testToLines", function(){
  it("should put text into array of arrays", function(){
    var text = "this is a test";
    var testResult = [[],["this"],["is"],["a"],["test"]];
    expect(textToLines(text)).to.eql(testResult);
  });
});

describe("wrap", function(){
  it("should make a wrapped test ", function(){
    var text = "this is a test this is a test this is a test this is a test this is a test ";
    var maxWidth = 80;
    var testResult = "@@this is a test this is a test this is a test this is a test this is a test @@\n";
    expect(wrap(text, maxWidth, paddingLength, paddingChar)).to.eql(testResult);
  });
});