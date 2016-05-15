var matrix = require('../abstract_data_types.js').matrix;
var mat;

describe("A Matrix", function(){
  describe("when initialized with two lengths", function(){
    it("should return a two dimensional array full of null values", function(){
      mat = matrix(4,4);
      expect(mat[0][0]).toEqual(null);
      expect(mat[3][3]).toEqual(null);
    });
  });
});

//Methods
describe("Matrix.traverse(fn[, opt])", function(){
  describe("when called without any options", function(){
    it("should visit each cell from top left to bottom right", function(){
      var result = "";
      mat.traverse(function(_item, y, x){result += "" + y + x + ",";});
      expect(result)
      .toEqual("00,01,02,03,10,11,12,13,20,21,22,23,30,31,32,33,");
    });
  });
  describe("when called with specific row and column options", function(){
    it("should follow options and replace missing with defaults", function(){
      var result = "";
      mat.traverse(function(_item, y, x){result += "" + y + x + ",";},
      {row:{start:1, end:0, increment:-1}});
      expect(result)
      .toEqual("01,00,11,10,21,20,31,30,");
    });
  });
  describe("when called with specific general options", function(){
    it("should use options for both row and column inserting defaults", function(){
      var result = "";
      mat.traverse(function(_item, y, x){result += "" + y + x + ",";},
      {start:1, end:0, increment:-1});
      expect(result)
      .toEqual("11,10,01,00,");
      result = "";
    });
  });
  describe("when called with negative increment and no start", function(){
    it("should start from the traverse from bottom right to top left", function(){
      var result = "";
      mat.traverse(function(_item, y, x){result += "" + y + x + ",";},
      {increment:-1});
      expect(result)
      .toEqual("33,32,31,30,23,22,21,20,13,12,11,10,03,02,01,00,");
    });
  });
});
describe("Matrix.fill()", function(){
  describe("is supplied an array",function(){
    it("should fill the array with those values", function(){
      mat.fill([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
      expect(mat[0][0]).toEqual(1);
      expect(mat[3][3]).toEqual(16);
    });
  });
});
describe("Matrix.each(fn)", function(){
  it("should visit each cell in top left to bottom right order", function(){
    var items = "";
    var xs = "";
    var ys = "";
    mat.each(function(item, y, x){items += item; ys += y; xs += x;});
    expect(items).toEqual("12345678910111213141516");
    expect(xs).toEqual("0123012301230123");
    expect(ys).toEqual("0000111122223333");
  });
});
describe("Matrix.row()", function(){
  it("should return the row of the supplied index", function(){
    expect(mat.row(0)[3]).toEqual(4);
    expect(mat.row(1)[3]).toEqual(8);
    expect(mat.row(2)[3]).toEqual(12);
    expect(mat.row(3)[3]).toEqual(16);
  });
});
describe("Matrix.column()", function(){
  it("should return the column of the supplied index", function(){
    expect(mat.column(0)[3]).toEqual(13);
    expect(mat.column(1)[3]).toEqual(14);
    expect(mat.column(2)[3]).toEqual(15);
    expect(mat.column(3)[3]).toEqual(16);
  });
});
