class Queue {
    constructor(maxSize) {
        this.maxSize = maxSize; // 큐의 크기를 제한.
        this.queue = []; // 요소를 넣을 배열 변수
        this.front = 0; // 인덱스 변수
        this.rear = 0; // 인덱스 변수
        this.size = 0;
    }
    enqueue(value) { 
        if(this.isFull()) {
            console.log("Queue is full.");
            return;
        }
        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.maxSize;
        this.size += 1;
    } 

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front = (this.front + 1) % this.maxSize;
        this.size -= 1;
        return value;
    }

    isFull() {
        return this.size === this.maxSize;
    }

    peek() { // 큐의 가장 앞에 있는 값을 반환
        return this.queue[this.front];
    }
}

const queue = new Queue(4);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
queue.enqueue(16);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.size); // 2
console.log(queue.peek()); // 4
queue.enqueue(16);
queue.enqueue(32);
console.log(queue.isFull()) // true