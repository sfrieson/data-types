var Stack = function(){  this._data = [];  };

Stack.prototype.push =      function(value){    this._data.push(value); return this._data.length;};
Stack.prototype.pop =       function(){         return this._data.pop();};
Stack.prototype.peek =      function(){         return this._data[this._data.length - 1];};
Stack.prototype.isEmpty =   function(){         return this._data.length > 0 ? true : false;};
module.exports = Stack;
