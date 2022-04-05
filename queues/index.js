class Queue {

  // #queue = [];

  constructor() {
    this.queue = [];
    this.index = 0;
  }

  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue() {
    // this.index++;
    return this.queue.shift();
  }

  hasNext() {
    return !!this.queue.length;
  }

}

const queue = new Queue;
queue.enqueue('hello');
queue.enqueue('bye');
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue.hasNext());
