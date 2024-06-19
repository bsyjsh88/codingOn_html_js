// js 표준 내장객체
// - 기본적으로 미리 정의된 객체
// - 모든 js 환경에서 사용할 수 있는 내장 객체들을 말한다.
// - 자주 사용되는 기능을 미리 구현해 놓은 것

// Date 객체 : 시간, 날짜
//  날짜 생성 저장
let now = new Date();
console.log(now);

// 타임 스탬프
// 1970년 1월 1일 이후
// 에포크 이후의 시간을 나타냄
// 에포크 - 특정시간 기준점

// new Date()
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);

let jan_02_1970 = new Date(1000* 60 * 60 * 24); // 24시간
console.log(jan_02_1970);

// new Date(date_string)
let date = new Date('2024-06-03');
console.log("date >", date);

let date2 = new Date('2024','06','03'); // MM (0~11) = 1월 ~ 12월 
console.log("date >", date); //7월 zero based numbering

// 관련 메서드
// 객체 점 접근법.
// getDate() : 월의 몇 번째 날인지 반환한다.
// getDay() : "주"의 몇 번째 날인지 반환한다. (0부터 시작)
// getMonth : 몇 번째 달인지 반환한다 (0부터 시작)
// getHours() : 시간 반환 0 ~ 23
// getMintes() : 분 반환 0 ~ 59
// getSeconds() : 초를 반환 0~ 59
// getMillisecons(): 밀리 초를 반환 0~999
// getTime() : 1970년 1월 1일 부터 현재까지의 밀리초 단위 시간 반환


console.log("____________________________________________________________________");
console.log(now.getFullYear()); // 2024
console.log(now.getMonth() + 1); // 0 ~ 11
console.log(now.getDate() ); // 19
console.log(now.getMinutes() ); // 19
console.log(now.getMilliseconds() ); // 19
console.log(now.getDay() ); // 수요일 = 3 0(일) ~ 6(토)
console.log(now.getTime() ); //  
console.log("------------------------------------------------------------");

// Math 객체
//  - 수학적인 상수와 함수

// 속성
console.log(Math.E); //자련로그
console.log(Math.PI); // 파이
console.log(Math.SQRT2); //2의 제곱근

// 메서드
console.log(Math.min(100, -2, 0, 5)); //최솟값 -2
console.log(Math.max(100, -2, 0, 5)); //최대값 100
console.log(Math.round(5.3124)); //5 반올림
console.log(Math.ceil(5.3124)); //6 강제올림
console.log(Math.floor(5.7124)); //5 강제내림
console.log(parseInt(Math.random()*5)); 

// 속성은 객체의 상태를 나타내는 데이터
// 메서드는 객체가 수행할 수 있는 동작이나 기능을 나타냄

// Math.random() 응용 예시
// 0~9
console.log(Math.floor(Math.random() * 10)); // 0

console.log(Math.random() * 11); // 0 <= x < 11


// 실습
console.log(Math.floor(Math.random() * 100  )+ 1);
console.log(Math.floor(Math.random() * 3  )+ 20);

document
