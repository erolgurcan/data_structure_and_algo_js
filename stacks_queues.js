// Run commands like push are being mostly used
// Users can access the first and last elements
// There are less actions than linked list and hash tables

// Stacks => functions: lookup O(n), pop O(1), push O(1), peek O(1)
//      LIFO: Last in first out
//      Most languages have stack
//      Example: Browser history, writing text and undo option



//Stacks

//Can be build by Arrays and Linked lists


class Node {
    constructor(value){
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

    peek(){

    }

    push (value){

    }

    pop (){

    }
}


const myStack = new Stack();



//Queues => functions : lookup O(n) , enqueu O(1) , dequeue O(1) , peek O(1)
//      FIFO: first in first out
//      Frequently asked in interviews
//      Example: Printer: sorts the task by order
//      Inefficient, when remove first element shifting data


//Queues

// Can be built by Arrays and Linked List
// Linked List would better

