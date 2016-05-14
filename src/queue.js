var Queue = function(){  this._data = [];  };

Queue.prototype.enqueue =   function(value){    this._data.push(value); return this._data.length;};
Queue.prototype.dequeue =   function(){         return this._data.unshift();};
Queue.prototype.peek =      function(){         return this._data[0];};
Queue.prototype.isEmpty =   function(){         return this._data.length > 0 ? true : false;};


module.exports = Queue;
