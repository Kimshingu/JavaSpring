/*
 객체가 갖고 있는 함수는 메소드
 메소드가 객체[의 멤버가 아니고 단독으로 취급되면 함수라고 부른다.
 자바는 언제나 메소드는 객체의 멤버로 존재
 하지만 자바스크립트는 함수가 단독으로 존재할 수 있다.

 */
 console.log(add(2, 3,4));

/*
파라미터 자료형을 표시하지 않는다.
리턴자료형을 표시하지 않는다.
접근제어자가 존재하지 않는다.
static 키워드가 존재하지 않는다. 단, ES6에서 추가되었음
함수는 선언 즉치 객체이다. 따로 객체선언을 할 필요가 없다.
 */
function add(a, b){
  return a+b;
}


console.log(add(2, 3,4));
console.log(add(3, 3,4));

/*
 함수의 호출은 함수명만으로 진행된다.
 파라미터는 영향을 미치지 않는다.
 글로벌 스코프의 함수는 컴파일 전에 재 배치된다.
 */

function add(a, b){
  return a*b;
}
