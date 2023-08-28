class Node {
    constructor(value = "") {
        this.value = value;
        this.children = new Map();
    }
}
// 트리 구조라서 노드가 필요함.


class Trie {
    constructor() {
        this.root = new Node();
    }
    // 루트로 빈 노드를 생성
    insert(string) {
        let currentNode = this.root;
        // 문자열을 추가하면 루트부터 시작함.

        for (const char of string) {
            // 문자열을 앞에서부터 하나씩 순회함. 
            if (!currentNode.children.has(char)) {
                // 새로운 문자열일 경우 노드를 새로 추가함.
                currentNode.children.set(
                    char,
                    new Node(currentNode.value + char)
                );
            }
            currentNode = currentNode.children.get(char);
            // 해당 루프를 반복하면 문자열을 전부 노드로 추가 가능.
        }
    }
    has(string) {
        // 문자열 체크 함수
        let currentNode = this.root;

        for (const char of string) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char);
        }
        return true;
    }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
console.log(trie.has("cat"));
console.log(trie.has("can"));
console.log(trie.has("cap"));