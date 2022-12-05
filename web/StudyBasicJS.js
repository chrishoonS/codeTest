/**
 *
 * 출처 : http://www.tcpschool.com/javascript/js_datatype_basic
 *
 * 자바스크립트는 대소문자를 구분합니다.
 * 자바스크립트에서 변수나 함수의 이름, 예약어 등을 작성하거나 사용할 때에는 대소문자를 정확히 구분해서 사용
 *
 * 리터럴(literal) : 직접 표현되는 값 그 자체
 * 식별자(identifier) : 변수나 함수의 이름을 작성할 때 사용하는 이름
 * 자바스크립트에서 식별자는 영문자(대소문자), 숫자, 언더스코어(_) 또는 달러($)만을 사용 가능
 * 자바스크립트에서 식별자는 숫자와 식별자의 구별을 빠르게 할 수 있도록 숫자로는 시작 불가!!!!
 * 자바스크립트는 유니코드(unicode) 문자셋을 사용
 *
 * 식별자 작성 방식
 * 1. camelCase : 첫 번째 단어는 모두 소문자로 작성하고, 그다음 단어부터는 첫 문자만 대문자로 작성하는 방식
 * 2. underscore_case : 식별자를 이루는 단어들을 소문자로만 작성하고, 그 단어들은 언더스코어(_)로 연결하는 방식
 * 하이픈(-)은 뺄셈을 위해 예약된 키워드이므로, 식별자를 작성할 때는 사용 불가!!!!!!!!
 *
 * 키워드(keyword) or 예약어(reserved word) : 자바스크립트에서는 몇몇 단어들을 특별한 용도로 사용하기 위해 미리 예약
 **/

// 변수 javascript와 JavaScript는 서로 다른 두 개의 변수로 인식됨.
var javascript = 10;
var JavaScript = 20;

12            // 숫자 리터럴
"JavaScript"  // 문자열 리터럴
'안녕하세요'     // 문자열 리터럴
true          // boolean 리터럴
/****************************************************************************************************************************************************/


/**
 * 자바스크립트 출력 : 자바스크립트는 여러 방법을 통해 결과물을 HTML 페이지에 출력가능
 * 1. window.alert() 메소드 : 브라우저와 별도의 대화 상자를 띄워 사용자에게 데이터를 전달
 **/
function alertDialogBox() {
    alert("확인을 누를 때까지 다른 작업을 할 수 없어요!");
}

/**
 * 2. HTML DOM 요소를 이용한 innerHTML 프로퍼티
 * 실제 자바스크립트 코드에서 출력을 위해 가장 많이 사용되는 방법은 HTML DOM 요소를 이용한 innerHTML 프로퍼티를 이용
 * 우선 document 객체의 getElementByID()나 getElementsByTagName() 등의 메소드를 사용하여 HTML 요소를 선택
 * 다음으로 innerHTML 프로퍼티를 이용하면 선택된 HTML 요소의 내용(content)이나 속성(attribute)값 등을 손쉽게 변경 가능
 **/
var str = document.getElementById("text");
str.innerHTML = "이 문장으로 바뀌었습니다!";

/**
 * 3. document.write() 메소드
 * document.write() 메소드는 웹 페이지가 로딩될 때 실행되면, 웹 페이지에 가장 먼저 데이터를 출력
 * 대부분 테스트나 디버깅을 위해 사용
 * but, 웹 페이지의 모든 내용이 로딩된 후에 document.write() 메소드가 실행되면, 웹 페이지 내에 먼저 로딩된 모든 데이터를 지우고 자신의 데이터를 출력하므로 이점 주의할것!!
 **/
document.write(4 * 5);

/**
 * 4. console.log() 메소드
 * 대부분의 주요 웹 브라우저에서는 F12를 누른 후, 메뉴에서 콘솔을 클릭하면 콘솔 화면을 사용
 * 역시 디버깅에 최적화 되어 있음!
 **/
console.log(4 * 5);
/****************************************************************************************************************************************************/
/**
 * 자바스크립트를 적용하는 방법
 *
 * 1. 내부 자바스크립트 코드로 적용
 * 자바스크립트 코드는 <script>태그를 사용하여 HTML 문서 안에 삽입
 * HTML 문서의 <head>태그나 <body>태그, 또는 양쪽 모두에 위치 가능
 *
 * 2. 외부 자바스크립트 파일
 * 외부에 작성된 자바스크립트 파일은 .js 확장자를 사용하여 저장
 * 해당 자바스크립트 파일을 적용하고 싶은 모든 웹 페이지에 <script>태그를 사용해 외부 자바스크립트 파일을 포함하여 사용
 *
 **/
/****************************************************************************************************************************************************/
/**
 * 기본 타입
 * 타입(data type)이란 프로그램에서 다룰 수 있는 값의 종류
 * 타입의 종류 : 원시 타입, 객체 타입
 *
 * 원시 타입(primitive type)
 * 숫자(number), 문자열(string), 불리언(boolean), 심볼(symbol), undefined
 *
 * 객체 타입(object type)
 **/

/**
 * 1. 숫자(number)
 * 자바스크립트는 다른 언어와는 달리 정수와 실수를 따로 구분하지 않고, 모든 수를 실수 하나로만 표현
 * 매우 큰 수나 매우 작은 수를 표현할 경우에는 e 표기법을 사용
 **/
var firstNum = 10;     // 소수점을 사용하지 않은 표현
var secondNum = 10.00; // 소수점을 사용한 표현
var thirdNum = 10e6;   // 10000000
var fourthNum = 10e-6; // 0.00001

/**
 * 2. 문자열(string)
 * 자바스크립트에서 문자열은 큰따옴표("")나 작은따옴표('')로 둘러싸인 문자의 집합
 * 큰따옴표는 작은따옴표로 둘러싸인 문자열에만 포함될 수 있으며, 작은따옴표는 큰따옴표로 둘러싸인 문자열에만 포함 가능
 * 문자열을 더하여 숫자를 문자열로 자동 변환하여, 두 문자열을 연결하는 연산을 수행
 **/
var firstStr = "이것도 문자열입니다.";      // 큰따옴표를 사용한 문자열
var secondStr = '이것도 문자열입니다.';     // 작은따옴표를 사용한 문자열
var thirdStr = "나의 이름은 '홍길동'이야."  // 작은따옴표는 큰따옴표로 둘러싸인 문자열에만 포함될 수 있음.
var fourthStr = '나의 이름은 "홍길동"이야.' // 큰따옴표는 작은따옴표로 둘러싸인 문자열에만 포함될 수 있음.

var num = 10;
var str = "JavaScript";
document.getElementById("result").innerHTML = (num + str); // 10JavaScript 출력

/**
 * 3. 불리언(boolean)
 * 참(true)과 거짓(false)을 표현합니다.
 * 예약어 true와 false를 사용하여 나타냄
 *
 **/
var firstNum = 10;
var secondNum = 11;
document.getElementById("result").innerHTML = (firstNum == secondNum); // false 반환


/**
 * 4. 심볼(Symbol)
 * ECMAScript 6부터 새롭게 추가된 타입
 * 심볼은 유일하고 변경할 수 없는 타입으로, 객체의 프로퍼티를 위한 식별자로 사용 가능
 **/
var sym = Symbol("javascript");  // symbol 타입
var symObj = Object(sym);        // object 타입

/**
 * 5. typeof 연산자
 * typeof 연산자는 피연산자의 타입을 반환하는 피연산자가 단 하나뿐인 연산자
 **/

typeof 10;        // number타입 반환
typeof "문자열";    // string타입 반환
typeof true;      // boolean타입 반환
typeof undefined; // undefined타입 반환
typeof null;      // object타입 반환

/**
 * 6. null과 undefined
 * 자바스크립트에서 null이란 object 타입이며, 아직 '값'이 정해지지 않은 것
 * 또한, undefined란 null과는 달리 '타입'이 정해지지 않은 것
 * 따라서 자바스크립트에서 undefined는 초기화되지 않은 변수나 존재하지 않는 값에 접근할 때 반환
 * null과 undefined는 동등 연산자(==)와 일치 연산자(===)로 비교할 때 그 결괏값이 다르므로 주의
 * null과 undefined는 타입을 제외하면 같은 의미지만, 타입이 다르므로 일치하지는 않습니다.
 **/
var num;            // 초기화하지 않았으므로 undefined 값을 반환함.
var str = null;     // object 타입의 null 값
typeof secondNum;   // 정의되지 않은 변수에 접근하면 undefined 값을 반환함.
null ==  undefined; // true
null === undefined; // false

/**
 * 7. 객체(object)
 * 자바스크립트의 기본 타입은 객체(object)
 * 객체는 여러 프로퍼티(property)나 메소드(method)를 같은 이름으로 묶어놓은 일종의 집합체
 **/
var dog = { name: "해피", age: 3 }; // 객체의 생성

// 객체의 프로퍼티 참조
document.getElementById("result").innerHTML = "강아지의 이름은 " + dog.name + "이고, 나이는 " + dog.age + "살 입니다.";
/****************************************************************************************************************************************************/

