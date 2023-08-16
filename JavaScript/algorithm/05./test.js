// 1. 세 개의 수에서 -N을 뺀 수의 제곱 합의 경우의 수를 생각해야 함.
// 2. 제곱합 끼리 비교를 한 후에 최소 값을 출력해야 함.
// 3. 조건문에 경우의 수가 몇 개인지 확인 해야 함.


const no = 4;
const works = [4, 3, 3];

class HeapArray {
    constructor () {
        this.heap = [null]; // 관리할 배열
    }
    
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length -1;
        let parentIndex = Math.floor(currentIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex] > value) {
            const temp = this. heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
}
let worksNo = 1;

for(let i = 1; i <= works.length; i++){
    worksNo = worksNo * i
}

const heap = new HeapArray();
let arrayWork = [];
let sum = 0;
for(const j in works){
    sum += Math.pow(works[j],2);
    console.log(sum);
}

    for(let noI = 0; noI < no; noI++){
        

    }

while (arrayWork.length == (no * worksNo) + 1)
{
    
}

/*
heap.push(45);
heap.push(32);
heap.push(54);
heap.push(20);
heap.push(23);
console.log(heap.heap);

for (const j in works){
    console.log(works[j]);
}
*/