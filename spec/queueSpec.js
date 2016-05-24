var Queue = require('../abstract_data_types.js').Queue;

var queue = new Queue();
//enqueue
describe("Queue.enqueue", function(){
  it("should add an item to the end of the queue and return it\'s value", function(){
    expect(queue.enqueue("one")).toEqual("one");
    expect(queue.enqueue("two")).toEqual("two");
    expect(queue.enqueue("three")).toEqual("three");
  });
});

//peek
describe("Queue.peek", function(){
  it("should tell the value of the next item to be dequeued", function(){
    expect(queue.peek()).toEqual("one");
  });
});

//dequeue
describe("Queue.dequeue", function(){
  it("should remove the item that\'s at the front of the queue", function(){
    expect(queue.dequeue()).toEqual("one");
  });
});

//isEmpty
describe("Queue.isEmpty", function(){
  it("should tell if there are any items left in the queue", function(){
    expect(queue.isEmpty()).toEqual(false);
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(false);
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });
});
