// 인접 행렬
const graph = Array.from(
    Array(5),
    () => Array(5).fill(false)
);
graph[0][1] = true; // 0 > 1
graph[0][3] = true; // 0 > 3
graph[1][2] = true; // 1 > 2
graph[2][0] = true; // 2 > 0
graph[2][4] = true; // 2 > 4
graph[3][2] = true; // 3 > 2
graph[4][0] = true; // 4 > 0

// 간선에 가중치를 넣고 싶다면 false와 true가 아닌 Null과 임의의 가중치 값을 넣어주면 된다.
// 인접 리스트

const graph2 = Array.from(Array(5), () => []);

graph2[0].push(1); // 0 > 1
graph2[0].push(3); // 0 > 3
graph2[1].push(2); // 1 > 2
graph2[2].push(0); // 2 > 0
graph2[2].push(4); // 2 > 4
graph2[3].push(2); // 3 > 2
graph2[4].push(0); // 4 > 0