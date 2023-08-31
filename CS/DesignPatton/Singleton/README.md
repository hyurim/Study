# CS

### 라이브러리와 프레임워크

- 공통으로 사용될 수 있는 특정한 기능들을 모듈화 한 것

**라이브러리**

1. 폴더명, 파일명 등에 대한 규칙이 없고 프레임워크에 비해 자유로움

**프레임워크**

1. 폴더명, 파일명 등에 대한 규칙이 있고, 라이브러리에 비해 엄격함.

## 디자인 패턴

프로그램을 설계할 때 발생했던 문제점들을 객체 간의 상호 관계 등을 이용하여 해결할 수 있도록 하나의 `규약` 형태로 만들어 놓은 것.

### 1. 싱글톤 패턴

- 하나의 클래스에 오직 하나의 인스턴스만 가짐.
- DB 연결 모듈에 많이 사용
- 하나의 인스턴스를 만들어 놓고 해당 인스턴스를 다른 모듈들이 공유하며 사용
  → 인스턴스 생성 비용이 줄어듬, 의존성이 높아짐
- 의존성이 높으면 왜 안좋아요?
  → A-B, B-C 로 연결되어 있을 경우, C가 변경되면 B와 A 모두 변경해줘야하는 번거로움이 발생함.
  → 유닛테스트 작성이 어려움. (다른 모듈로부터 독립적으로 테스트하는 것을 요구하기 때문)

```jsx
const obj = { a: 27 };
const obj2 = { a: 27 };
console.log(obj === obj2); // false
```

### 싱글톤 패턴 구현

```jsx
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
  getInstance() {
    return this.instance;
  }
}

const a = new Singleton();
const b = new Singleton();
console.log(a === b); // true
```

### 데이터베이스 연결 모듈(MySQL)

```jsx
const mysql = require("mysql");
const pool = mysql.createPool({
  connectiongLimit: 10,
  host: "example.org",
  user: "kundol",
  password: "secret",
  database: "TestDB",
});
pool.connect();

// 모듈 A
pool.query(query, function (error, result, field) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

// 모듈 B
pool.query(query, function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});
```

### 싱글톤 패턴 단점

TDD(Test Driven Development)를 할 때 걸림돌이 됨.

독립적이어야 단위 테스트를 어떤 순서로든 실행할 수 있어야하는데 독립적인 인스턴스를 만들기가 어려움.

→ 하나의 인스턴스를 기반으로 구현하는 패턴이기 때문

## 의존성 주입

모듈 간의 결합을 강하게 만들 수 있다는 단점도 있음.

따라서 의존성 주입(DI, Dependency Injection)을 통해 결합을 조금 더 느슨하게 만들어 해결할 수 있음.

`디커플링` 된다라고도 함.

### 장점

1. 모듈들을 쉽게 교체할 수 있는 구조가 됨

- 테스팅하기 쉽고 마이그레이션 수월함.

1. 구현할 때 추상화 레이어를 넣고 이를 기반으로 구현체를 넣어줌.

- 애플리케이션 의존성 방향이 일관됨.
- 애플리케이션이 쉽게 추론할 수 있음
- 모듈 간의 관계들이 조금 더 명확해짐.

### 단점

1. 모듈들이 더욱더 분리되므로 클래스 수가 늘어나 복잡성이 증가될 수 있음.
2. 약간의 런타임 패널티가 생기기도 함.

### 원칙

1. 상위 모듈은 하위 모듈에서 어떠한 것도 가져오지 않아야 한다.
2. 둘 다 추상화에 의존해야 하며, 추상화는 세부 사항에 의존하지 말아야 한다.
