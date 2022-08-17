// Run commands like push are being mostly used
// Users can access the first and last elements
// There are less actions than linked list and hash tables

// + Fast operations, Fast Peak, Ordered, 
// - Slow Lookup

// Stacks => functions: lookup O(n), pop O(1), push O(1), peek O(1)
//      LIFO: Last in first out
//      Most languages have stack
//      Example: Browser history, writing text and undo option

//Stacks

// Stacks with

//Stacks with Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.lenght = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.lenght === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.lenght++;
    return this;
  }

  pop() {
    if (this.lenght === 0) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.lenght--;
    return this;
  }
}

// const myStack = new Stack();
// myStack.peek();
// myStack.push("google");
// myStack.push("udemy");
// myStack.push("discord");
// console.log(myStack);
// myStack.pop();
// console.log(myStack);
// myStack.pop();
// myStack.pop();
// console.log(myStack);

//Queues => functions : lookup O(n) , enqueu O(1) , dequeue O(1) , peek O(1)
//      FIFO: first in first out
//      Frequently asked in interviews
//      Example: Printer: sorts the task by order
//      Inefficient, when remove first element shifting data

//Queues

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.lenght = 0;
  }

  peak() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.lenght === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.lenght++;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;

    this.lenght--;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");

console.log(myQueue);

myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);

// Can be built by Arrays and Linked List
// Linked List would better
