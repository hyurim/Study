Number.isNaN() - NaN인지 아닌지 확인

isFalsy() : 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환함.
isTruthy() : 전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환함.

String(true); => "true" : String 생성자 함수를 new 연산자 없이 호출하는 방법
(true).toString(); => "true" : Object.prototype.toString 메서드를 사용하는 방법
true + ''; => "true" : 문자열 연결 연산자를 이용하는 방법

Number(true); => 1 : Number 생성자 함수를 new 연산자 없이 호출하는 방법

parseInt('96'); => 96
parseFloat('11.06'); => 11.06 : parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)

+'96'; => 96 : + 단항 산술 연산자를 이용하는 방법

'11.06' _ 1; => 11.06 : _ 산술 연산자를 이용하는 방법

Boolean('x'); => true
Boolean(''); => false : Boolean 생성자 함수를 new 연산자 없이 호출하는 방법

!!'x'; => true
!!''; => false : ! 부정 논리 연산자를 두 번 사용하는 방법
