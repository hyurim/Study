class MaxHeap {
    constructor() {
        this.heap = [null]; // 내부적으로 관리할 배열이 필요 
        // 0번 인덱스는 편의성을 위해 null로 표기
    }

    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        // 규칙에 따라 힙의 가장 마지막에 요소를 추가 

        while (parentIndex !== 0 && this.heap[parentIndex] < value) {
            // 부모가 우선순위가 낮거나 루트가 아닐 때까지 반복하여 부모와 자식의 순서를 바꿔준다.
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop() {
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        // 루트 요소를 반환하기 위해 임시로 상수에 저장
        // 루트 정점은 마지막 정점으로 대체

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;

        while (
            this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[rightIndex]
            // 반복은 하위 정점들이 현재 정점들 보다 우선순위가 낮을 경우 종료
        ) {
            if (this.heap[leftIndex] < this. heap[rightIndex]) {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this. heap[rightIndex];
                this.heap[rightIndex] = temp;
                currentIndex = rightIndex;
                // 왼쪽 보다 오른쪽이 높을 경우 오른쪽이랑 교체
            } else {
                // 아닐 경우 왼쪽으로 교체
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = temp;
                currentIndex = leftIndex;
            }
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
            // 바꾼 정점에서 왼쪽과 오른쪽 위치를 다시 구한다 
        }
        return returnValue;
    }
}

const heap = new MaxHeap();

heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap);

const array = [];

array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
console.log(array);