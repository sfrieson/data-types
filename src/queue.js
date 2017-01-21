var Queue = (function(){
  // IIFE for hidden dataStore
  var dataStore = [];

  // returns a constructor
  var Q = function () { };
  Q.prototype.enqueue = function (value) { dataStore.push(value); return dataStore[dataStore.length - 1]; };
  Q.prototype.dequeue = function () { return dataStore.shift(); };
  Q.prototype.peek = function () { return dataStore[0]; };
  Q.prototype.isEmpty = function () { return !dataStore.length; };
  return Q;
})();

module.exports = Queue;
