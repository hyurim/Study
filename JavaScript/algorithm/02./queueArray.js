class Queue {
    constructor() {
        this.queue = []; // 요소를 넣을 배열 변수
        this.front = 0; // 인덱스 변수
        this.rear = 0; // 인덱스 변수
    }
    enqueue(value) { // rear 영역에 값을 넣고 1 증가 시키면 됨
        this.queue[this.rear++] = value; 
    } 

    dequeue() { // front 인덱스에 반환하고 증가시키면 됨. 바로 반환하면 함수가 종료됨에 따라 임의로 넣고 바로 삭제하여 다음에 1을 증가하고 반환
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }

    peek() { // 큐의 가장 앞에 있는 값을 반환
        return this.queue[this.front];
    }

    size() { // 큐의 크기
        return this.rear - this.front;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue()); // 1
queue.enqueue(8);
console.log(queue.size()); // 3
console.log(queue.peek()); // 2
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 4