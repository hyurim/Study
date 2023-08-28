class Node {
    // 일반적인 Linked List 연결과 비슷함.
    constructor(value) {
        this.value = value;
        this.next = null;
    }
} 

class Queue {
    // 큐 생성자 부분도 Linked List와 비슷
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(newValue) {
        // Linked List의 append와 비슷
        const newNode = new Node(newValue);
        if (this.head === null){
            this.head = this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
    }
    dequeue() {
        // 스택을 Linked List로 구현했을 때 pop과 비슷함.
        const value = this.head.value;
        this.head = this.head.next;
        this.size -= 1;
        return value;
    }

    peek() { // 헤드의 값 반환
        return this.head.value;
    }
}
 
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue()); // 1
queue.enqueue(8);
console.log(queue.size); // 3
console.log(queue.peek()); // 2
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 4 