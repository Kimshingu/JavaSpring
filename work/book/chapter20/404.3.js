console.log(this === global); // false
console.log(this); // {} 빈 객체
console.log(this === exports); // true
// exports: 노드가 제공하는 예약어로 객체이다.
// 이 파일에서 다른 파일로 제공하고 싶은 자원을 
// 직접 선택하여 노출하고 싶을 때 등록하는 객체이다.

// 노드컴파일러는 코드를 IIFE로 감싼다.
// 여기 this에 exports를 준다.
// 파일 단위로 수행한다.

console.log(1);

// IIFE: 함수 스코프를 사용하여 코드를 외부와 격리한다.
(function(outlet) { // 개발자 A
  var x = 1000; // private
  var a = 10; // public
  console.log(2, a);
  // export: 제공하고 싶은 자원을 직접 선택하여 노출해야 한다.
  outlet.A = { // A 문자열은 패키지 역할을 수행
    a
  };  
}(this));

console.log(3);

(function(outlet) { // 개발자 B
  var a = 20;
  console.log(2, a);
  // export
  outlet.B = { // B 문자열은 패키지 역할을 수행
    a
  };
}(this));

 // 개발자 C가 A의 a 변수를 사용하고 싶다면
 console.log('this.A.a = ' + this.A.a);
 // 개발자 C가 B의 a 변수를 사용하고 싶다면
console.log('this.B.a = ' + this.B.a);

// 1. 함수스코프를 사용하여 격려한다.
// 2. 함수 안쪽에 자원은 기본적으로 외부에서 
// 접근할 수 없으므로 외부에 제공하고 싶은 자원을
// 직접 노출시킨다. (export)
// 3. 노출 시 ㅍ로퍼티 이름이 충돌되면 도입한 의미가 
// 없어지므로 노출할 때 고유의 네임스페이스 프로퍼티를 추가한다.
