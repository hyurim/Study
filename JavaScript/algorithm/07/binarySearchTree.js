class Node {
    constructor(value) { // 클래스의 인스턴스 객체를 생성하고 초기화
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySerachTree {
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        const newNode = new Node(value); // 새로운 노드를 생성 후 값을 value 값을 가짐
        if (this.root === null) { // 노드가 비어있을 경우 newNode를 루트 노드로 생성
            this.root = newNode;
            return;
        }

        let currentNode = this.root; // 현재 노드를 초기값으로 루트 노드로 설정
        while (currentNode !== null) { // 현재 노드가 null 값이 아닐 경우
            if (currentNode.value < value) { // 현재 값이 새로운 값보다 작은 경우
                if (currentNode.right === null) { // 현재 노드의 오른쪽 자식 노드가 비어있는 경우
                    currentNode.right = newNode; // 새로운 노드를 오른쪽 자식 노드로 설정
                    break; // 새 노드를 삽입했으니 탈출
                }
                currentNode = currentNode.right; // 현재 노드를 오른쪽 자식 노드로 변경.
                // 다음 반복에서는 오른쪽 하위 트리로 이동함.
            } else {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left; 
                // 오른쪽과 같음.
            }
        }
    }

    has(value) {
        let currentNode = this.root;
        // currentNode를 초기화
        while (currentNode !== null) { // 현재 노드가 null이 아닌 동안 루프 실행
            if (currentNode.value === value) {
                // 찾고자 하는 값이 같다면 원하는 값을 찾았으므로 true 반환
                return true;
            }

            if (currentNode.value < value) {
                // 입력 받은 값이 더 클 경우 오른쪽 자식 노드로 이동
                currentNode = currentNode.right;
            } else {
                // 작은 경우 왼쪽 자식 노드로 이동
                currentNode = currentNode.left;
            }
        }
        return false;
        // 못찾았을 경우 false 출력
    }
}

const tree = new BinarySerachTree();
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(2);
console.log(tree.has(8)); // true
console.log(tree.has(1)); // false

