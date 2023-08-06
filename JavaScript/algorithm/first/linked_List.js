class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
// 해당 클래스는 노드끼리 연결만 할 뿐 노드를 가지 않음.

    find(value) {
        let currNode = this.head;
        while (currNode.value !== value) {
            currNode = currNode.next;
        } 
        return currNode;
    }
// 찾기 노드 while 문을 통해 값을 찾을 때까지 반복함.
    append(newValue) {
        const newNode = new Node(newValue); // 받은 값을 그대로 사용하여 노드를 생성
        if (this.head === null) { // 헤드가 비어있을 경우 
            this.head = newNode;
            this.tail = newNode;
        } // 헤드와 테일 포인터에 생성된 노드를 가리키게 만듦.
        else { // 헤드가 비어있지 않을 경우
            this.tail.next = newNode;
            this.tail = newNode;
        } // 값이 존재하므로 테일 포인터가 새로 생성된 노드를 가리키게 만듦.
    }

    insert(node, newValue) { // 중간에 끼어넣는 로직
        const newNode = new Node(newValue); // 입력 받은 값을 사용하여 노드 생성
        newNode.next = node.next; // 생성된 노드의 다음을 입력받은 값의 노드를 가르키게 만듦.  
        node.next = newNode; // 입력 받은 노드의 다음을 새로 생성된 노드의 다음으로 만듦.
    }
    // 

    remove(value) { // 삭제 로직 선형 시간 소요
        let prevNode = this.head; // 삭제 이전 노드
        while (prevNode.next.value !== value) { // 삭제 이전 노드 찾기 
            prevNode = prevNode.next;
        }
        if (prevNode.next !== null) { // 삭제 이전 노드를 다다음 노드로 연결
            prevNode.next = prevNode.next.next;
        }
        // 가비지 콜렉터에 의해 노드가 제거됨.
    }
    display() {
        let currNode = this.head;
        let displayString = "[";
        while (currNode !== null) {
            displayString += `${currNode.value}, `;
            currNode = currNode.next;
        }
        displayString = displayString
        .substring(0, displayString.length);
        displayString += "]";
        console.log(displayString);
    }
}

const linedList = new SinglyLinkedList();
linedList.append(1);
linedList.append(2);
linedList.append(3);
linedList.append(5);
linedList.display();
console.log(1);
console.log(linedList.find(3));
linedList.remove(3);
linedList.display();
linedList.insert(linedList.find(2), 10);
linedList.display();

