

const works = [4, 3, 3];
let worksNo = 1;
for(let i = 1; i <= works.length; i++){
    worksNo = worksNo * i
}
console.log(worksNo);

let no = 2;
let a = Math.pow(no,2);
console.log(a);
for(const j in works){
    console.log(Math.pow(works[j],2));
}