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
/**
 * 타입 변환(type conversion): 자바스크립트는 타입 검사가 매우 유연한 언어
 * 자바스크립트의 변수는 타입이 정해져 있지 않으며, 같은 변수에 다른 타입의 값을 다시 대입 가능
 **/
var num = 20; // Number 타입의 20
num = "이십";  // String 타입의 "이십"
var num;      // 한 변수에 여러 번 대입할 수는 있지만, 변수의 재선언은 할 수 없습니다. 재선언문은 무시됩니다.

/**
 * 묵시적 타입 변환(implicit type conversion)
 * 자바스크립트는 특정 타입의 값을 기대하는 곳에 다른 타입의 값이 오면, 자동으로 타입을 변환하여 사용
 * 즉, 문자열 값이 오길 기대하는 곳에 숫자가 오더라도 자바스크립트는 알아서 숫자를 문자열로 변환하여 사용
 * NaN은 Not a Number의 축약형으로, 정의되지 않은 값이나 표현할 수 없는 값이
 * NaN은 Number 타입의 값으로 0을 0으로 나누거나, 숫자로 변환할 수 없는 피연산자로 산술 연산을 시도하는 경우에 반환되는 읽기 전용 값
 **/
10 + "문자열";     // 문자열 연결을 위해 숫자 10이 문자열로 변환됨.
"3" * "5";       // 곱셈 연산을 위해 두 문자열이 모두 숫자로 변환됨.
1 - "문자열";      // NaN : 의미에 맞게 자동으로 타입을 변환할 수 없으므로 NaN 값을 반환

/**
 * 명시적 타입 변환(explicit type conversion)
 * 자바스크립트에서는 묵시적 타입 변환을 많이 사용하지만, 명시적으로 타입을 변환할 방법도 제공
 * 자바스크립트가 제공하는 전역 함수
 *
 **/
Number("10"); // 숫자 10
String(true); // 문자열 "true"
Boolean(0);   // 불리언 false
Object(3);    // new Number(3)와 동일한 결과로 숫자 3

/**
 * 숫자를 문자열로 변환
 * String() : 숫자를 문자열로 변환하는 가장 간단한 방법
 * toString() : null과 undefined를 제외한 모든 타입의 값이 보유
 *
 * 숫자(Number) 객체는 숫자를 문자열로 변환하는 다음과 같은 메소드를 별도로 제공
 * 1. toExponential() : 정수 부분은 1자리, 소수 부분은 입력받은 수만큼 e 표기법을 사용하여 숫자를 문자열로 변환함.
 * 2. toFixed() : 소수 부분을 입력받은 수만큼 사용하여 숫자를 문자열로 변환함.
 * 3. toPrecision() : 입력받은 수만큼 유효 자릿수를 사용하여 숫자를 문자열로 변환함.
 * 메소드(method)란 객체의 프로퍼티 값으로 함수를 갖는 프로퍼티
 * 불리언 값을 문자열로 변환 : String() 함수와 toString() 메소드 사용
 **/
String(true);     // 문자열 "true"
false.toString(); // 문자열 "false"

/**
 * 날짜를 문자열이나 숫자로 변환
 * 날짜를 문자열로 변환하는 방법에는 String() 함수와 toString() 메소드
 * 자바스크립트에서 날짜(Date) 객체는 문자열과 숫자로 모두 변환할 수 있는 유일한 타입
 * 날짜(Date) 객체는 날짜를 숫자로 변환하는 메소드를 별도로 제공
 *
 * 1. getDate(): 날짜 중 일자를 숫자로 반환함. (1 ~ 31)
 * 2. getDay() : 날짜 중 요일을 숫자로 반환함. (일요일 : 0 ~ 토요일 : 6)
 * 3. getFullYear() : 날짜 중 연도를 4자리 숫자로 반환함. (yyyy년)
 * 4. getMonth() : 날짜 중 월을 숫자로 반환함. (1월 : 0 ~ 12월 : 11)
 * 5. getTime() : 1970년 1월 1일부터 현재까지의 시간을 밀리초(millisecond) 단위의 숫자로 반환함.
 * 6. getHours() : 시간 중 시를 숫자로 반환함. (0 ~ 23)
 * 7. getMinutes() : 시간 중 분을 숫자로 반환함. (0 ~ 59)
 * 8. getSeconds() : 시간 중 초를 숫자로 반환함. (0 ~ 59)
 * 9. getMilliseconds() : 시간 중 초를 밀리초(millisecond) 단위의 숫자로 반환함. (0 ~ 999)
 **/
String(Date());        // Mon May 16 2016 19:35:25 GMT+0900
Date().toString();     // Mon May 16 2016 19:35:25 GMT+0900
var date = new Date(); // Date 객체 생성
date.getFullYear();    // 2016
date.getTime();        // 1463394925632 -> 1970년 1월 1일부터 현재까지의 시간을 밀리초 단위의 숫자로 반환함.

/**
 * 문자열을 숫자로 변환
 * 문자열을 숫자로 변환하는 가장 간단한 방법은 Number() 함수를 사용
 * 자바스크립트는 문자열을 숫자로 변환해 주는 두 개의 전역 함수를 별도로 제공
 * 1. parseInt(): 문자열을 파싱하여 특정 진법의 정수를 반환함.
 * 2. parseFloat() : 문자열을 파싱하여 부동 소수점 수를 반환함.
 **/

/**
 * 불리언 값을 숫자로 변환
 * 불리언 값을 숫자로 변환하는 방법에는 Number() 함수를 사용
 **/
Number(true);
Number(false);

/****************************************************************************************************************************************************/

/**
 * 변수의 선언과 초기화
 * 변수(variable)란 데이터(data)를 저장할 수 있는 메모리 공간 의미, 값은 변경 가능
 * var 키워드를 사용하여 변수를 선언
 * 선언되지 않은 변수를 사용하려고 하거나 접근하려고 하면 오류가 발생
 * 선언되지 않은 변수를 초기화할 경우에는 자동으로 선언을 먼저 한 후 초기화를 진행
 * 선언된 변수는 나중에 초기화할 수도 있고, 선언과 동시에 초기화 가능.
 * 쉼표(,) 연산자를 이용하여 여러 변수를 동시에 선언하거나 초기화 가능
 **/
var month; // month라는 이름의 변수 선언
date = 25; // date라는 이름의 변수를 묵시적으로 선언

var month;     // 변수의 선언
var date = 25; // 변수의 선언과 동시에 초기화
month = 12;    // 변수의 초기화
var month, date;             // 여러 변수를 한 번에 선언
var hours = 7, minutes = 15; // 여러 변수를 선언과 동시에 초기화
month = 10, date = 5;        // 여러 변수를 한 번에 초기화

/**
 * 변수의 타입과 초깃값
 * 변수는 타입이 정해져 있지 않으며, 같은 변수에 다른 타입의 값을 다시 대입 가능
 * 이렇게 한 변수에 다른 타입의 값을 여러 번 대입할 수는 있지만, 한 번 선언된 변수를 재선언할 수는 없다.
 *
 ** /
*/
var num = 10;        // 변수의 선언과 함께 초기화
num = [10, 20, 30];  // 배열 대입
var num;             // 이 재선언문은 무시됨.

/**
 * 배열(array)이란 여러 값들로 이루어진 하나의 집합을 의미합니다.
 * 선언만 되고 초기화하지 않은 변수는 undefined 값을 갖습니다.
 *
 * 변수의 이름 : 자바스크립트에서 변수는 이름을 가지고 식별하므로, 변수의 이름은 식별자(identifier)
 * 변수의 이름은 영문자(대소문자), 숫자, 언더스코어(_) 또는 달러($)로만 구성
 **/
var num;  // undefined
num = 10; // 10
/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/
/**
 *
 *
 **/
