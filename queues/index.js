class Queue {

  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  hasNext() {
    return this.queue[0] ? true : false;
  }

}

// const queue = new Queue;
// queue.enqueue('hello');
// queue.enqueue('bye');
// console.log(queue.dequeue());
// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue.hasNext());
