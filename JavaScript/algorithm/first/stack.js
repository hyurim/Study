/*
function sum (a,b) {
    return a + b;
}
function print(value) {
    console.log(value);
}
print(sum(5,10));

*/
/* 
const stack = [];

// Push
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);

// Pop
stack.pop();
console.log(stack);

// Get Top
console.log(stack[stack.length - 1]);
*/

class Node {
    constructor(value) {
        this.value = value;
        this.Node = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.size += 1;
    }

    pop() {
        const value = this.top.value;
        this.top = this.top.next;
        this.size -= 1;
        return value;
    }

    size() { 
        return this.size;
    }
}

const stack = new Stack()
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());