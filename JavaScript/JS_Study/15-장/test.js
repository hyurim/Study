// 16.2
/* 
const person = { 
name: 'Lim' 
}; 

person.age = 28;

console.log(Object.getOwnPropertyDescriptors(person));

 */
/*
// 16.3

const person = {
    // 데이터 프로퍼티
    firstName: 'Ungmo',
    lastName: 'Lim',

    //fullName은 접근자 함수로 구성된 접근자 프로퍼티
    
    //getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    //setter 함수
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + ' ' + person.lastName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출됨.
person.fullName = 'JongHyeon Lim';
console.log(person);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출됨.
console.log(person.fullName);

// firstName은 데이터 프로퍼티
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖음.

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);

// fullName은 접근자 프로퍼티
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖음.

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);

*/

// 18.1

const increase = function (num) {
    return ++num;
  }
  
  const decrease = function (num) {
    return --num;
  };
  
  // 객체에 저장 가능.
  const auxs = { increase, decrease };
  
  // 함수의 매개변수에 전달 가능하며, 반환 값으로 사용할 수 있음.
  function makeCounter(aux) {
    let num = 0;
  
    return function () {
      num = aux(num);
      return num;
    };
  }
  
  const a = makeCounter(auxs.increase);
  console.log(a()); // 1
  console.log(a()); // 2
  
  const b = makeCounter(auxs.decrease);
  console.log(b()); // -1
  console.log(b()); // -2