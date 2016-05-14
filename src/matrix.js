var matrix = function(width, height){
  height = height || width;
  var matr = Object.create(matrix.prototype);
  for(var y = 0; y < height; y++){
    matr.push([]);
    for(var x = 0; x < width; x++){
      matr[y].push(null);
    }
  }
  return matr;
};

matrix.prototype = Object.create(Array.prototype);

matrix.prototype.traverse = function(fn, options){
  var x, y, cell,
  opt = {},
  defaultOpt = {
    col:{
      start: 0,
      end: this.length,
      inc: 1,
      comp: "<"
    },
    row:{
      start: 0,
      //end: built into the loop for variable lengths,
      inc: 1,
      comp: "<"
    }
  };
  //No options? Take all defaults
  if(!options) opt = defaultOpt;
  //Partial or complete options
  else {
    if(options.column){
      opt.col = {
        start: options.column.start || 0,
        inc: options.column.increment || 1,
        comp: options.column.comparison || null, //default set below
        end: typeof options.column.end == "number" ? options.column.end : null //defaults set later
      };

      //comparison is not yet set
      if(!opt.col.comp) {
        //and we're decrementing
        opt.col.comp = opt.col.inc < 0 ? '>=' : '<';
        opt.col.end = opt.col.inc < 0 ? (options.col.end || 0) : (opt.col.end || this.length);
      }

    } else opt.col = defaultOpt.col;


    if(options.row) {
      opt.row = {
        start: options.row.start || 0,
        inc: options.row.increment || 1,
        comp: options.row.comparison || null, //default set below
        end: typeof options.row.end == "number" ? options.row.end : null //default set in loop
      };

      //comparison is not yet set
      if(!opt.row.comp) {

        //and we're decrementing
        opt.row.comp = opt.row.inc < 0 ? '>=' : '<';
        if(opt.row.inc < 0 ) opt.row.end = options.row.end || 0;
      }
    } else opt.row = defaultOpt.row;
  }

  // Looping
  // console.log("col:",opt.col);
  loop[opt.col.comp](opt.col.start, opt.col.end, opt.col.inc,
    function(y){//body of outer
      if(typeof opt.row.end !== "number") opt.row.end = this[y].length;
      // console.log("row:",opt.row);
      loop[opt.row.comp](opt.row.start, opt.row.end, opt.row.inc,
        function(x){fn(this[y][x], y, x, this);}.bind(this)); //body of inner
  }.bind(this));
};

matrix.prototype.each = matrix.prototype.traverse;
matrix.prototype.fill = function(arr){
  var currentIndex = 0;
  this.each(function(_cell, y, x){
    this[y][x] = arr[currentIndex++];
  }.bind(this));
  return arr.slice(currentIndex);
};
matrix.prototype.row = function(index){
  return this[index];
};
matrix.prototype.column = function(index){
  var col = [];

  this.traverse(function(item){col.push(item);},
  {row:{start:index, end: index+1, increment: 1}});
  return col;
};
module.exports = matrix;

var loop = {
  ">": function(start, end, increment, body){
    for(var i = start; i > end; i += increment) body(i);
  },
  "<": function(start, end, increment, body){
    for(var i = start; i < end; i += increment) body(i);
  },
  ">=": function(start, end, increment, body){
    for(var i = start; i >= end; i += increment) body(i);
  },
  "<=": function(start, end, increment, body){
    for(var i = start; i <= end; i += increment) body(i);
  }
};
