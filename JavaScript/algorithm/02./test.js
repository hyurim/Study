/* let a = [1, 2, 3, 4];
let b = [];

for (const c of a){
    console.log(c);
}
*/
// function solution(priorities, location) {
//     let answer = 0;
//     let a = Math.max.apply(null, priorities); // 우선순위 가장 높은 숫자 출력
//     let b = priorities.indexOf(a, 0); // 우선순위 가장 높은 숫자의 인덱스 위치
//     let c;
//     console.log(b);
//     for(let i = 0; i < priorities.length; i++){
//         if (priorities[i] > b) {
//             c = priorities[1];
//         }
//     }
    
//     return answer;
// }

// 우선순위가 가장 높은 숫자를 빼내서 그걸 다음 숫자와 비교하고 인덱스 숫자는 그 다음이여야함.
// 

let a = [2,1,3,2];
let b = [1,1,9,1,1,1];
let aNumber = 2;
let bNumber = 0;

let aa = Math.max.apply(null, a);
let bb = a.indexOf(aa, 0);
let c = 0;
// for (const n of a){
//     console.log(n);
// }
console.log(aa);
// console.log(bb);

for (let i = 0; i < a.length; i++){
    if (a[i] < aa){
        c++;
    } else {
        break;
    }
    
}
console.log(c);