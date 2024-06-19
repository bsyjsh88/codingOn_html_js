// console.log(document);
// console.log(document.childNodes[1].childNodes[0]);
// console.log(document.head);


// console.log("--------------------------------------------------");

// // 요소 선택자
// console.log(document.title);
// console.log(document.URL);
// console.log(document.domain);
// 취소선이 그어지는 이유
// -해당 속성의 사용을 권장하지 않거나, 더 이상 지원되지 않을 가능성
//  최신 보안 정책에서는 도메인 사용한 접근 제어 방식이 보안상 취약할 수 있기 떄문

// document 객체를 이용해 HTML 요소 선택!

// 1.getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

// 2.getElementsByClassName (HTMLcollection)
console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName('pink')[1]);

// 3.getElementsByTagName (HTMLcollection)
console.log(document.getElementsByTagName('div'));

// 4.getElemntsByName (NodeList)
console.log(document.getElementsByName('seyong'));

// 5.querySelector (css selector)
// -처음 발견한 하나만 가지고옴
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="seyong"]'));

// 6.querySelectorAll (css selector)
// - 선택자에 해당되는 모든 요소를 선택
console.log(document.querySelectorAll('pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#green'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('[name="seyong"]'));

console.log(document.querySelectorAll('.pink')[0]);
console.log(document.querySelectorAll('.pink')[1]);
console.log(document.querySelectorAll('.pink')[2]);
console.log(document.querySelectorAll('.pink')[3]);
console.log(document.querySelectorAll('pink').length);


console.log("----------------------------------------------");

// 유사 배열 (HTMLcollection, NodeList)
// []식으로 생긴 배열을 의미. 배열은 아님!
// index, length 는 가짐
// 배열과 달리 사용 가능한 메서드가 제한