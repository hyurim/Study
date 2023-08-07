const obj = { name: "임OO", age: 28 };

obj['email'] = "yimjh2309@gmail.com";
obj.phone = "01012345678";
console.log(obj);

delete obj.phone; // 객체 내의 phone 삭제
console.log(obj);

console.log("email" in obj);
console.log("year" in obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));

// for in
for (const key in obj){
    console.log(key, obj[key]);
}