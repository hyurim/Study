// 이진트리 [Array]

// 0번 인덱스는 편의상 비워둔다.
// 왼쪽 = Index * 2
// 오른쪽 = Index * 2 + 1
// 부모 = floor(Index / 2)

const tree = [
    undefined,
    // 1
    9, 
    // 1*2, 1*2+1
    3, 8,
    // 2*2, 2*2+1, 3*2, 3*2+1
    2, 5, undefined, 7,
    // 4*2 , 4*2+1, 5*2, 5*2+1
    undefined, undefined, undefined, 4
];

// 이진트리 [Linked List]

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(node) {
        this.root = node;
    }
    display() {
        // Level Order
        const queue = new Queue();
        queue.enqueue(this.root);
        while (queue.size) {
            const currentNode = queue.dequeue();
            console.log(currentNode.value);
            if (currentNode.left) queue.enqueue(currentNode.left);
            if (currentNode.right) queue.enqueue(currentNode.right);
        }
    }
}

const tree2 = new Tree(new Node(9));
tree2.root.left = new Node(3);
tree2.root.right = new Node(8);
tree2.root.left.left = new Node(2);
tree2.root.left.right = new Node(5);
tree2.root.right.right = new Node(7);
tree2.root.left.right.left = new Node(4); 