/*
const arr1 = new Array(); // 빈 배열 생ㅓ
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5); // 5 길이 만큼의 배열 생성
const arr5 = new Array(5).fill(5);
const arr6 = Array.from(Array(5), function(v, k){
    return k + 1;
}) // from 첫번째 : 초기화할 배열 두 번째 : 로직 작성 (함수 (배열의 값, 배열의 인덱스))
// [1, 2, 3, 4, 5]

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);
*/


const arr = [1, 2, 3, 4, 5, 6];
/*
console.log(arr.length);
arr.length = 3;
console.log(arr);
arr.length = 10;
console.log(arr);
*/

/*

// join
console.log(arr.join(",")); // 1,2,3,4,5,6

// reserse
console.log(arr.reverse()); // [6, 5, 4, 3, 2, 1]
// 한 번 바꾸면 그 이후에도 영향이 감
console.log(arr); // [1, 2, 3, 4, 5, 6]

*/

/*
const arr2 = [7, 8, 9, 10];

// concat 배열끼리 합치기
console.log(arr.concat(arr2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// push - 배열의 끝 부분 추가 , pop - 끝에 있는 요소 삭제

arr.push(7);
arr.push(7, 8, 9);
console.log(arr);
arr.pop();
console.log(arr.pop()); // 삭제한 요소
arr.pop();
console.log(arr.pop());
console.log(arr);
*/

// shift - 맨 앞에 요소 삭제 , unshift - 맨 앞 요소 추가
/*
arr.shift();
arr.shift();
console.log(arr);
arr.unshift(10);
console.log(arr);

*/
/*
// slice
console.log(arr.slice(2,4)); // 0 1 2 3 4 5 에서 2 3 만 출력

// splice - 중간에 있는 요소 삭제
arr.splice(2,2) ;
console.log(arr);
*/

/*

// for(let i = 0; i < 6; i += 1){
//     console.log(arr[i]);
// }

// for of
for (const item of arr){
    console.log(item)
}

*/

console.log(typeof arr); // object

arr['key'] = "value";
console.log(arr);
console.log(arr.length); // 배열의 길이는 내부적으로 관리 됨으로 크게 달라지지 않음.
