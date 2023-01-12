/**
 *
 * 출처 : http://www.tcpschool.com/javascript/js_datatype_basic
 *
 * 자바스크립트는 대소문자를 구분
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
 * 참(true)과 거짓(false)을 표현
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
 * 배열(array)이란 여러 값들로 이루어진 하나의 집합을 의미
 * 선언만 되고 초기화하지 않은 변수는 undefined 값을 갖습니다.
 *
 * 변수의 이름 : 자바스크립트에서 변수는 이름을 가지고 식별하므로, 변수의 이름은 식별자(identifier)
 * 변수의 이름은 영문자(대소문자), 숫자, 언더스코어(_) 또는 달러($)로만 구성
 **/
var num;  // undefined
num = 10; // 10
/****************************************************************************************************************************************************/
/**
 * 문자열 결합 연산자 : 덧셈(+) 연산자는 피연산자의 타입에 따라 두 가지 다른 연산을 수행
 *
 * 1. 피연산자가 둘 다 숫자이면, 산술 연산인 덧셈을 수행
 * 2. 피연산자가 하나라도 문자열이면, 문자열 결합을 수행
 * 피연산자가 하나는 문자열이고 다른 하나는 문자열이 아닐 때, 자바스크립트는 문자열이 아닌 피연산자를 자동으로 문자열로 변환한 후 문자열 결합을 수행
 **/

 var x = 3 + 4;                   // 피연산자가 둘 다 숫자이면 덧셈 연산을 수행함.
 var y = "좋은 " + "하루 되세요!"     // 피연산자가 둘 다 문자열이면 문자열 결합 연산을 수행함.
 var z = 12 + "월"                 // 피연산자가 하나라도 문자열이면 문자열 결합 연산을 수행함.

/**
 * 삼항 연산자(ternary operator) : 피연산자를 세 개나 가지는 조건 연산자입니다.
 *
 * 표현식 ? 반환값1 : 반환값2
 * 물음표(?) 앞의 표현식에 따라 결괏값이 참이면 반환값1을 반환하고, 결괏값이 거짓이면 반환값2를 반환
 * 삼항 연산자는 짧은 if / else 문 대신 사용할 수 있으며, 코드를 간결하게!
 **/

var x = 3, y = 5;
var result = (x > y) ? x : y   // x가 더 크면 x를, 그렇지 않으면 y를 반환함.
document.write("둘 중에 더 큰 수는 " + result + "입니다.");

 /**
  * 쉼표 연산자 : for 문에서 사용하면, 루프마다 여러 변수를 동시에 갱신
  **/
  // 루프마다 i의 값은 1씩 증가하고, 동시에 j의 값은 1씩 감소함.
for (var i = 0, j = 9; i <= j; i++, j--) {
    document.write("i의 값은 " + i + "이고, j의 값은 " + j + "입니다.<br>");
}


/**
 * delete 연산자 : 피연산자인 객체, 객체의 프로퍼티(property) 또는 배열의 요소(element) 등을 삭제
 * 피연산자가 성공적으로 삭제되었을 경우에는 참(true)을 반환하고, 삭제하지 못했을 경우에는 거짓(false)을 반환
 * 이 연산자는 피연산자가 단 하나뿐인 단항 연산자이며, 피연산자의 결합 방향은 오른쪽에서 왼쪽
 **/
var arr = [1, 2, 3];          // 배열 생성
delete arr[2];                // 배열의 원소 중 인덱스가 2인 요소를 삭제함.

document.write(arr + "<br>"); // [1, 2, ]
// 배열에 빈자리가 생긴 것으로 undefined 값으로 직접 설정된 것은 아님.
document.write(arr[2] + "<br>");
// 배열의 요소를 삭제하는 것이지 배열의 길이까지 줄이는 것은 아님.
document.write(arr.length);

/**
 * typeof 연산자 : 피연산자의 타입을 반환
 * 피연산자가 단 하나뿐인 단항 연산자이며, 피연산자의 결합 방향은 오른쪽에서 왼쪽
 * 값 : typeof 연산자의 결괏값
 * 숫자, NaN     = "number"
 * 문자열         = "string"
 * true, false  = "boolean"
 * null         = "object"
 * undefined    = "undefined"
 * 함수          = "function"
 * 함수가 아닌 객체 = "object"
 * */

typeof "문자열"   // string
typeof 10         // number
typeof NaN        // number
typeof false      // boolean
typeof undefined  // undefined
typeof new Date() // object
typeof null       // object

/**
 * instanceof 연산자 : 피연산자인 객체가 특정 객체의 인스턴스인지 아닌지를 확인
 * 피연산자가 특정 객체의 인스턴스이면 참(true)을 반환하고, 특정 객체의 인스턴스가 아니면 거짓(false)을 반환
 * 이 연산자는 두 개의 피연산자를 가지는 이항 연산자이며, 피연산자들의 결합 방향은 왼쪽에서 오른쪽
 **/
var str = new String("이것은 문자열입니다.");
str instanceof Object;  // true
str instanceof String;  // true
str instanceof Array;   // false
str instanceof Number;  // false
str instanceof Boolean; // false

/**
 * void 연산자 : 어떤 타입의 값이 오던지 상관없이 언제나 undefined 값만을 반환
 * 이 연산자는 피연산자가 단 하나뿐인 단항 연산자이며, 피연산자의 결합 방향은 오른쪽에서 왼쪽
 * 예제처럼 void 연산자는 정의되지 않은 원시 타입의 값을 얻기 위해 void(0)과 같은 형태로 종종 사용
 **/

<a href="javascript:void(0)">이 링크는 동작하지 않습니다.</a>
<a href="javascript:void(document.body.style.backgroundColor='yellow')">
    이 링크도 동작하지 않지만, HTML 문서의 배경색을 바꿔줍니다.
</a>

/****************************************************************************************************************************************************/
/**
 * 제어문(control flow statements) : 프로그램의 순차적인 흐름을 제어해야 할 때 사용하는 실행문, 제어문에는 조건문, 반복문 등이 포함
 * 조건문(conditional statements) : 조건문이란 프로그램 내에서 주어진 표현식의 결과에 따라 별도의 명령을 수행하도록 제어하는 실행문
 **/

/**
 * 1. if 문
 * 2. if / else 문
 * 3. if / else if / else 문
 * 4. switch 문
 *
 * if 문 : 결과가 참(true)이면 주어진 실행문을 실행하며, 거짓(false)이면 아무것도 실행하지 않음
 *
 * if (표현식) {
 *     표현식의 결과가 참일 때 실행하고자 하는 실행문;
 * }
 **/

var x = 10, y = 20;

if (x == y) {
    document.write("x와 y는 같습니다.");
}

if (x < y) {
    document.write("x가 y보다 작습니다.");
}

if (x > y) // 실행될 실행문이 한 줄뿐이라면 중괄호({})를 생략할 수 있음.
    document.write("x가 y보다 큽니다.");

if (x = y) {
    document.write("두 변수 x와 y는 같습니다.");
}

/**
 * 위의 예제는 변수 x와 y의 값이 같으면 두 변수가 같다는 문자열을 출력하려고 하는 예제
 * 하지만 if 문의 표현식에서 동등 연산자(==)를 사용해야 할 곳에 잘못해서 대입 연산자(=)을 사용
 * 따라서 위의 예제는 다음과 같이 수정해야만 정상적으로 동작
 **/
if (x == y) {
    document.write("두 변수 x와 y는 같습니다.");
}

/**
 * 또한, 위의 예제가 실제로 if 문의 표현식 내에서 변수 x에 변수 y의 값을 대입 했을수도 있음
 * 그럴 때는 코드를 다음과 같이 수정해야만 그 의미를 제대로 전달 가능
 * 하지만 if 문과 같은 제어문의 표현식에 위와 같이 대입문을 사용하는 것은 지양
 **/
if ((x = y)) {
    document.write("두 변수 x와 y는 같습니다.");
}

/**
 * else 문 : if 문과 같이 사용할 수 있는 else 문은 if 문의 표현식 결과가 거짓(false)일 때 주어진 실행문을 실행
 * if (표현식) {
 *     표현식의 결과가 참일 때 실행하고자 하는 실행문;
 * } else {
 *     표현식의 결과가 거짓일 때 실행하고자 하는 실행문;
 * }
 **/
var x = 10, y = 20;
if (x == y) {
    document.write("x와 y는 같습니다.");
} else {
    if (x < y)
        document.write("x가 y보다 작습니다.");
    else
        document.write("x가 y보다 큽니다.");
}

/**
 * else if 문
 * else if 문은 if 문처럼 표현식을 설정할 수 있으므로, 중첩된 if 문을 좀 더 간결하게 표현
 * else if 문은 여러 번 사용되어 다양한 조건을 설정 가능
 **/

/**
 * 삼항 연산자에 의한 조건문
 * 표현식 ? 반환값1 : 반환값2
 *
 * switch 문 : if / else 문보다 가독성 측면에서 더 좋음
 * switch (조건 값) {
    case 값1:
        조건 값이 값1일 때 실행하고자 하는 실행문;
        break;
    case 값2:
        조건 값이 값2일 때 실행하고자 하는 실행문;
        break;
    default:
        조건 값이 어떠한 case 절에도 해당하지 않을 때 실행하고자 하는 실행문;
        break;
}
 * default 절은 조건 값이 위에 나열된 어떠한 case 절에도 해당하지 않을 때 실행
 * 이 구문은 반드시 존재해야 하는 것은 아니며, 필요할 때만 선언가능
 * 각 case 절 및 default 절은 반드시 break 키워드를 포함하고 있어야 break 키워드는 조건 값에 해당하는 case 절이나 default 절이 실행된 뒤에 전체 switch 문을 빠져나가게 함.
 * default 절의 위치가 반드시 switch 문의 맨 마지막일 필요없음
 **/
var x = 10;
switch (typeof x) {
    case "number":
        document.write("변수 x의 타입은 숫자");
        break;
    case "string":
        document.write("변수 x의 타입은 문자열");
        break;
    case "object":
        document.write("변수 x의 타입은 객체");
        break;
    default:
        document.write("변수 x의 타입을 잘 모르겠네요...");
        break;
}

var xx = "문자열";
switch (typeof xx) {
    case "number":
        document.write("변수 xx의 타입은 숫자<br>");
    case "string":
        document.write("변수 xx의 타입은 문자열<br>");
    case "object":
        document.write("변수 xx의 타입은 객체<br>");
    default:
        document.write("변수 xx의 타입을 잘 모르겠네요...<br>");
}

/**
 * 위의 예제에서 변수 xx는 string 타입이므로, 두 번째 case 절의 document.write() 메소드가 맨 먼저 실행
 * 하지만 break 키워드가 없으므로, 두 번째 case 절 이후에 나오는 모든 실행문이 모두 실행될 것
 * 따라서 case 절과 default 절은 반드시 break 키워드를 포함하고 있어야 정확하게 동작
 **/

var day = new Date().getDay(); // 오늘의 요일을 반환함. (일요일: 0 ~ 토요일: 6)
switch (day) {
    case 1: // 월요일인 경우
    case 2: // 화요일인 경우
    case 3: // 수요일인 경우
    case 4: // 목요일인 경우
    default: // 0부터 6까지의 값이 아닌 경우
        document.write("아직도 주말은 멀었네요... 힘내자구요!!");
        break;
    case 5: // 금요일인 경우
        document.write("오늘은 불금이네요!!");
        break;
    case 6: // 토요일인 경우
    case 0: // 일요일인 경우
        document.write("즐거운 주말에도 열심히 공부하는 당신~ 최고에요!!");
        break;
}

/****************************************************************************************************************************************************/
/**
 * 반복문(iteration statements) : 프로그램 내에서 똑같은 명령을 일정 횟수만큼 반복하여 수행하도록 제어하는 실행문
 * 프로그램이 처리하는 대부분의 코드는 반복적인 형태가 많으므로, 가장 많이 사용되는 실행문
 *
 * 1. while 문
 * 2. do / while 문
 * 3. for 문
 * 4. for / in 문
 * 5. for / of 문
 **/

/**
 * while 문 : 특정 조건을 만족할 때까지 계속해서 주어진 실행문을 반복 실행합니다.
 *
 * 문법
 * while (표현식) {
 *     표현식의 결과가 참인 동안 반복적으로 실행하고자 하는 실행문;
 * }
 *
 * while 문은 우선 표현식이 참(true)인지를 판단하여 참이면 내부의 실행문을 실행
 * 내부의 실행문을 전부 실행하고 나면, 다시 표현식으로 돌아와 또 한 번 표현식이 참인지를 판단
 * 루프(loop) : 표현식의 검사를 통해 반복해서 실행되는 반복문
 * while 문 내부에 표현식의 결과를 변경하는 실행문이 존재하지 않을 경우 프로그램은 루프를 영원히 반복
 * 이것을 무한 루프(infinite loop)에 빠졌다고 하며, 무한 루프에 빠진 프로그램은 영원히 종료되지 않기 때문에 의도한 경우가 아니라면 반드시 피해야 하는 상황!
 * 따라서 while 문을 작성할 때는 표현식의 결과가 어느 순간에는 거짓(false)을 갖도록 표현식를 변경하는 실행문을 반드시 포함
 * while 문에서 실행될 실행문이 한 줄 뿐이라면 중괄호({})를 생략할 수 있습니다
**/

var i = 1;
while (i < 10) { // 변수 i가 10보다 작을 때만 while 문을 반복함.
    document.write(i + "<br>");
    i++; // 반복할 때마다 변수 i를 1씩 증가시켜 변수 i가 10보다 커지면 반복문을 종료함.
}

/**
 * do / while
 * do / while 문은 먼저 루프를 한 번 실행한 후에 표현식을 검사합니다.
 * 표현식의 결과와 상관없이 무조건 한 번은 루프를 실행
 * 문법
 * do {
 *   표현식의 결과가 참인 동안 반복적으로 실행하고자 하는 실행문;
 * } while (표현식);
**/

var i = 1, j = 1;
while (i > 3) { // 변수 i의 초깃값은 1이기 때문에 이 while 문은 한 번도 실행되지 않음.
    document.write("i : " + (i++) + "<br>");
}

do { // 변수 j의 초깃값은 1이기 때문에 이 do / while 문은 단 한 번만 실행됨.
    document.write("j : " + (j++) + "<br>");
} while (j > 3);

/**
 * for 문 : 자체적으로 초기식, 표현식, 증감식을 모두 포함하고 있는 반복문입니다.
 * 문법
 * for (초기식; 표현식; 증감식) {
    표현식의 결과가 참인 동안 반복적으로 실행하고자 하는 실행문;
 * }
 * for 문을 구성하는 초기식, 표현식, 증감식은 각각 생략 가능
 * 또한, 쉼표 연산자(,)를 사용하면 여러 개의 초기식이나 증감식을 동시에 사용 가능
 * for 문에서 실행될 실행문이 한 줄 뿐이라면 중괄호({})를 생략 가능
 **/
for (var i = 1; i < 10; i++) {
    document.write(i + "<br>");
}

/**
 * for / in 문 : 해당 객체의 모든 열거할 수 있는 프로퍼티(enumerable properties)를 순회할 수 있도록 해줌
 * 열거할 수 있는 프로퍼티: 내부적으로 enumerable 플래그가 true로 설정된 프로퍼티를 의미
 * 이 반복문은 루프마다 객체의 열거할 수 있는 프로퍼티의 이름을 지정된 변수에 대입
 * 이렇게 대입받은 변수를 이용하면 루프 안에서 객체의 열거할 수 있는 프로퍼티에 순차적으로 접근 가능
 * 해당 객체가 가진 모든 프로퍼티를 반환하는 것이 아닌, 오직 열거할 수 있는 프로퍼티만(배열, 리스트, 맵, 오브젝트 등)을 반환
 *
 * 문법
 * for (변수 in 객체) {
 *  객체의 모든 열거할 수 있는 프로퍼티의 개수만큼 반복적으로 실행하고자 하는 실행문;
 * }
 **/

var arr = [3, 4, 5];

for (var i = 0; i < arr.length; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
    document.write(i + " ");
}

for (var i in arr) { // 위와 같은 동작을 하는 for / in 문
    document.write(i + " ");
}

var obj = { name : "이순신", age : 20 };
for (var i in obj) {
    document.write(i + "<br>");
}

/**
 * for / of 문 : 반복할 수 있는 객체(iterable objects)를 순회할 수 있도록 해주는 반복문입니다.
 * 자바스크립트에서 반복할 수 있는 객체에는 Array, Map, Set, arguments
 *
 * 문법
 * for (변수 of 객체) {
 *      객체의 모든 열거할 수 있는 프로퍼티의 개수만큼 반복적으로 실행하고자 하는 실행문;
 * }
 *
 * for / of 문은 익스플로러에서 지원하지 않습니다.
**/
var arr = [3, 4, 5];
for (var i = 0; i < arr.length; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
    document.write(arr[i] + " ");
}

for (var value of arr) { // 위와 같은 동작을 하는 for / of 문
    document.write(value + " ");
}

var arr = new Set([1, 1, 2, 2, 3, 3]);
for (var value of arr) {
    document.write(value + " ");
}
/****************************************************************************************************************************************************/
/**
 * 루프의 제어 : 일반적으로 표현식의 검사를 통해 루프로 진입하면, 다음 표현식을 검사하기 전까지 루프 안에 있는 모든 실행문을 실행
 *
 * label 문 : label 문은 프로그램 내의 특정 영역을 식별할 수 있도록 해주는 식별자
 * label 문을 사용하면 continue 문과 break 문의 동작이 프로그램의 흐름을 특정 영역으로 이동 가능
 *
 * 문법
 * label:
 * 식별하고자 하는 특정 영역
 *
 **/

//arrIndex는 그 이후에 나오는 for 문 전체를 가리키는 식별자로 사용
arrIndex:
    for (var i in arr) {
        document.write(i);
    }

/**
 * continue 문 : 루프 내에서 사용하여 해당 루프의 나머지 부분을 건너뛰고, 바로 다음 표현식의 판단으로 넘어가게 함
 * 보통 반복문 내에서 특정 조건에 대한 처리를 제외하고자 할 때 자주 사용됩니다.
 *
 * 문법
 * continue;
 * continue 라벨이름;
 **/
var exceptNum = 3;

for (var i = 0; i <= 100; i++) {
    if (i % exceptNum == 0) // exceptNum의 배수는 출력하지 않음.
         continue;

     document.write(i + " ");
 }

gugudan:
    for (var i = 2; i <= 9; i++) {
        dan:
            for (var j = 1; j <= 9; j++) {
                if ((i*j) % 2 == 0)
                    continue dan;

                document.write(i + " " + j + " = " + (i*j) + "<br>");
            }
    }

/**
 * break 문 : 루프 내에서 사용하여 해당 반복문을 완전히 종료시키고, 반복문 바로 다음에 위치한 실행문으로 프로그램의 흐름을 이동
 * 즉, 루프 내에서 표현식의 판단 결과에 상관없이 반복문을 완전히 빠져나가고 싶을 때 사용
 * 문법
 * 1. break;
 * 2. break 라벨이름;
 **/
var lectures = ["html", "css", "자바스크립트", "php"];
var topic = "자바스크립트";

for (var i = 0; i < lectures.length; i++) {
    if (lectures[i] == topic) {
        document.write(topic + " 과목은 " + (i + 1) + "번째 과목입니다.");
        break; // 원하는 값을 찾은 후에는 더 이상 for 문을 반복하지 않고 빠져나감.
     }
 }

/****************************************************************************************************************************************************/
/**
 * 배열(array) : 이름과 인덱스로 참조되는 정렬된 값의 집합
 * 배열을 구성하는 각각의 값을 배열 요소(element), 배열에서의 위치를 가리키는 숫자를 인덱스(index)

 * 1. 배열 요소의 타입이 고정되어 있지 않으므로, 같은 배열에 있는 배열 요소끼리의 타입이 서로 다를 수도 있음
 * 2. 배열 요소의 인덱스가 연속적이지 않아도 되며, 따라서 특정 배열 요소가 비어 있을 수도 있음
 * 3. 자바스크립트에서 배열은 Array 객체
 *
 * 문법
 * 1. var arr = [배열요소1, 배열요소2,...];          // 배열 리터럴을 이용하는 방법
 * 2. var arr = Array(배열요소1, 배열요소2,...);     // Array 객체의 생성자를 이용하는 방법
 * 3. var arr = new Array(배열요소1, 배열요소2,...); // new 연산자를 이용한 Array 객체 생성 방법
 **/

 var arrLit = [1, true, "JavaScript"];             // 배열 리터럴을 이용하는 방법

 var arrObj = Array(1, true, "JavaScript");        // Array 객체의 생성자를 이용하는 방법

 var arrNewObj = new Array(1, true, "JavaScript"); // new 연산자를 이용한 Array 객체 생성 방법


 document.write(arrLit + "<br>");                  // 1,true,JavaScript
 document.write(arrObj + "<br>");                  // 1,true,JavaScript
 document.write(arrNewObj);                        // 1,true,JavaScript

/**
 * 배열의 참조
 * 자바스크립트에서 배열의 각 요소를 참조하고 싶을 때는 [] 연산자를 사용합니다.
 *
 * 문법
 * 배열이름[인덱스]
 *
 * 자바스크립트에서는 배열의 길이 = 배열 요소의 개수, 배열의 길이는 length 프로퍼티에 자동으로 갱신
 * 자바스크립트에서 인덱스는 언제나 0부터 시작
 * 또한, 인덱스에는 음이 아닌 정수를 반환하는 임의의 표현식도 사용 가능
 * 이러한 인덱스에는 232보다 작은 양수만 사용
 **/

var arr = ["JavaScript"]; // 요소가 하나뿐인 배열을 생성함.
var element = arr[0];     // 배열의 첫 번째 요소를 읽어서 대입함.

arr[1] = 10;      // 배열의 두 번째 요소에 숫자 10을 대입함. 배열의 길이는 1에서 2로 늘어남.
arr[2] = element; // 배열의 세 번째 요소에 변수 element의 값을 대입함. 배열의 길이는 2에서 3으로 늘어남.

document.write("배열 arr의 요소에는 [" + arr + "]가 있습니다.<br>"); // 배열의 요소를 모두 출력함.
document.write("배열 arr의 길이는 " + arr.length + "입니다.<br>");   // 배열의 길이를 출력함.

delete arr[2];    // 배열의 세 번째 요소를 삭제함. 하지만 배열의 길이는 변하지 않음.
document.write("배열 arr의 요소에는 [" + arr + "]가 있습니다.<br>"); // 배열의 요소를 모두 출력함.
document.write("배열 arr의 길이는 " + arr.length + "입니다.");       // 배열의 길이를 출력함.

/**
 * 위의 예제에서 세 번째 실행문은 배열의 현재 길이보다 더 큰 인덱스에 요소를 저장
 * 자바스크립트에서는 이렇게 배열의 길이를 넘는 인덱스에 요소를 저장하는 것을 허용
 * 이때 배열의 길이는 자동으로 해당 인덱스 증가
 **/

/**
 * 배열 요소의 추가
 * 문법
 * 1. arr.push(추가할 요소);         // push() 메소드를 이용하는 방법
 * 2. arr[arr.length] = 추가할 요소; // length 프로퍼티를 이용하는 방법
 * 3. arr[특정인덱스] = 추가할 요소;    // 특정 인덱스를 지정하여 추가하는 방법
 *
 * push() 메소드와 length 프로퍼티를 이용한 방법은 모두 배열의 제일 끝에 새로운 요소를 추가
**/
var arr = [1, true, "Java"];

arr.push("Script");           // push() 메소드를 이용하는 방법
document.write(arr + "<br>"); // 1,true,Java,Script

arr[arr.length] = 100;        // length 프로퍼티를 이용하는 방법
document.write(arr + "<br>"); // 1,true,Java,Script,100

arr[10] = "자바스크립트";     // 특정 인덱스를 지정하여 추가하는 방법
document.write(arr + "<br>"); // 1,true,Java,Script,100,,,,,,자바스크립트
document.write(arr[7]);       // undefined

/**
 * 위의 예제에서 배열 arr의 길이는 최종적으로 11
 * 이때 배열 요소가 존재하는 인덱스는 0, 1, 2, 3, 4, 10뿐이며, 나머지 인덱스에는 배열 요소가 존재 X
 * 이렇게 인덱스에 대응하는 배열 요소가 없는 부분을 배열의 홀(hole)이라고 합니다.
 * 자바스크립트에서는 이러한 배열의 홀(hole)을 undefined 값을 가지는 요소처럼 취급
 * 배열의 홀을 참조하게 되면 undefined 값을 반환
 *
 * 배열의 순회(iteration) : 배열의 모든 요소에 차례대로 접근하고 싶을 때는 for 문과 같은 반복문을 사용하여 접근
 **/
var arr = [1, true, "JavaScript"];
var result = "<table><tr>";

for (var idx in arr) {
    result += "<td>" + arr[idx] + "</td>";
}

result += "</tr></table>";

document.write(result);

/**
 * Array 객체 : 배열(array)은 정렬된 값들의 집합으로 정의되며, Array 객체로 활용
 * 사용자가 배열과 관련된 작업을 손쉽게 할 수 있도록 다양한 메소드도 제공
 **/
var arr = new Array(10, "문자열", false);

document.write((typeof arr) + "<br>");    // object
document.write((typeof arr[0]) + "<br>"); // number
document.write((typeof arr[1]) + "<br>"); // string
document.write(typeof arr[2]);            // boolean

/****************************************************************************************************************************************************/
/**
 * 희소 배열 : 배열에 속한 요소의 위치가 연속적이지 않은 배열을 의미
 * 따라서 희소 배열의 경우 배열의 length 프로퍼티 값보다 배열 요소의 개수가 언제나 적음
 **/
var arr = new Array(); // 빈 배열 객체를 생성함.
arr[99] = "JavaScript" // 배열 arr의 100번째 위치에 문자열을 삽입함.
// 100번째 요소를 삽입했기 때문에 배열의 길이는 100으로 늘어남.

document.write("배열의 길이는 " + arr.length + "입니다.");

/**
 * 다차원 배열 : 배열 요소가 또 다른 배열인 배열
 * 2차원 배열의 배열 요소는 [] 연산자를 두 번 사용하여 참조 가능
 **/
var arr = new Array(3);      // 3개의 요소를 가지는 배열을 생성함.

for (var row = 0; row < 3; row++) {
    arr[row] = new Array(4); // 각각의 요소마다 또다시 4개의 요소를 가지는 배열을 생성함.
    for (var column = 0; column < 4; column++) {
        arr[row][column] = "[" + row + "," + column + "]"; // 각각의 배열 요소를 생성함.
        document.write(arr[row][column] + " ");            // 각 배열 요소에 접근함.
    }
}

/**
 * 연관 배열(associative array) : 숫자로 된 인덱스 대신에 문자열로 된 키(key)를 사용하는 배열
 * 배열의 인덱스에는 0을 포함한 양의 정수만을 사용 가능
 * 대부분의 프로그래밍 언어가 지원하는 연관 배열을 자바스크립트는 별도로 제공하지는 않습니다.
 * 대신에 인덱스로 문자열을 사용하여 연관 배열처럼 사용할 수 있는 객체(object)를 생성 가능
 * 하지만 이렇게 생성된 배열은 자바스크립트 내부적으로 Array 객체에서 기본 객체로 재선언
 * 따라서 기존에 사용할 수 있었던 모든 Array 메소드와 프로퍼티가 정확하지 않은 결괏값을 반환
 * ECMAScript 6부터는 이러한 불편함을 해결하기 위해 새로운 데이터 구조인 Map 객체를 별도로 제공
 **/

var arr = [];     // 비어있는 배열을 생성함.

arr["하나"] = 1;  // 숫자 인덱스 대신에 문자열을 인덱스로 배열 요소를 추가함.
arr["참"] = true;
arr["자바스크립트"] = "JavaScript";

document.write(arr["참"]);  // 문자열을 인덱스로 배열 요소에 접근할 수 있음.
document.write(arr.length); // 연관 배열은 Array 객체가 아니므로 length 프로퍼티의 값이 0임.
document.write(arr[0]);     // undefined

/**
 * 문자열을 배열처럼 접근하기
 * 문자열은 변하지 않는 값이므로, 읽기 전용 배열로서 다룰 수 있습니다.
 * 따라서 배열처럼 [] 연산자를 사용하여 문자열을 구성하는 각 문자에 바로 접근 가능
 * 또한, Array 객체가 제공하는 모든 범용 메소드도 사용 가능
 * 문자열의 각 문자는 String 객체에서 제공하는 charAt() 메소드를 사용해도 접근 가능
 * 따라서 문자열을 바로 배열처럼 사용하지 말고, split() 메소드 등을 이용해 먼저 배열로 변환한 후 사용할 것
 **/

var str = "안녕하세요!";       // 문자열 생성
document.write(str.charAt(2)); // 하
document.write(str[2]);        // 하

var str = "안녕하세요!"; // 문자열 생성
str[0] = "";          // 자바스크립트의 문자열은 읽기 전용이므로, 이 문장은 오류를 발생시킵니다.


/**
 * 자바스크립트에서 배열 여부 확인
 * 자바스크립트에서는 배열이라는 타입(type)을 별도로 제공하지 않습니다.
 * 자바스크립트 배열은 객체(object) 타입이 되며, typeof 연산자를 사용하면 'object'를 반환합니다.
 *
 * 배열여부 확인 방법
 * 1. Array.isArray() 메소드
 * 2. instanceof 연산자
 * 3. constructor 프로퍼티
 * 4. instanceof 연산자
 *
 **/

var arr = [1, true, "JavaScript"]; // 배열 생성
document.write(typeof arr);        // object
document.write(Array.isArray(arr));      // true
document.write(Array.isArray("문자열")); // false
document.write(arr instanceof Array); // true
document.write(123 instanceof Array); // false


 /** constructor 프로퍼티 문법
  * function Array() {[native code]}
  * 다음 예제와 같이 toString() 메소드와 indexOf() 메소드를 함께 사용하면 해당 변수의 배열 여부를 확인 가능
  **/
function isArray(a) {
    return a.constructor.toString().indexOf("Array") > -1;
}

var arr = [1, true, "JavaScript"];          // 배열 생성
document.write(arr.constructor);            // constructor 프로퍼티의 값 출력
document.write(arr.constructor.toString()); // toString() 메소드를 사용하여 constructor 프로퍼티의 값을 문자열로 변환
document.write(arr.constructor.toString().indexOf("Array")); // indexOf() 메소드를 사용하여 해당 문자열에서 "Array"라는 부분 문자열이 시작하는 인덱스를 구함, indexOf() 메소드는 인수로 전달받은 문자열을 해당 문자열에서 찾지 못하면, 언제나 -1을 반환합니다.
document.write(isArray(arr))                // true

/**
 * 함수(function) : 하나의 특별한 목적의 작업을 수행하도록 설계된 독립적인 블록을 의미합니다.
 * 이러한 함수는 필요할 때마다 호출하여 해당 작업을 반복해서 수행할 수 있습니다.
 **/
function addNum(x, y) {
    return x + y;
}

document.write(addNum(2, 3));

/**
 * 자바스크립트 함수 : 함수도 하나의 타입(datatype)
 * 따라서 함수를 변수에 대입하거나, 함수에 프로퍼티를 지정하는 것도 가능
 * 또한, 자바스크립트 함수는 다른 함수 내에 중첩되어 정의 가능
 *
 * 함수의 정의 : function 키워드로 시작
 * 1. 함수의 이름
 * 2. 괄호 안에 쉼표(,)로 구분되는 함수의 매개변수(parameter)
 * 3. 중괄호({})로 둘러싸인 자바스크립트 실행문
 *
 * 문법
 * function 함수이름(매개변수1, 매개변수2,...) {
 *     함수가 호출되었을 때 실행하고자 하는 실행문;
 * }
 *
 * 함수 이름(function name)은 함수를 구분하는 식별자(identifier)입니다.
 * 매개변수(parameter)란 함수를 호출할 때 인수(argument)로 전달된 값을 함수 내부에서 사용할 수 있게 해주는 변수
**/
// addNum라는 이름의 함수를 정의함.
function addNum(x, y) {    // x, y는 이 함수의 매개변수임.
    document.write(x + y);
}

addNum(2, 3);              // addNum() 함수에 인수로 2와 3을 전달하여 호출함.

/**
 * 위의 예제에서 매개변수 x에는 인수 2가 저장되고, y에는 인수 3이 저장되어 사용
 * 이렇게 인수와 매개변수는 개수뿐만 아니라 순서 또한 매우 중요하게 적용
 * 함수의 인수(argument)란 함수가 호출될 때 함수로 값을 전달해주는 변수나 상수를 의미
 **/

/**
 * 반환문 : 자바스크립트에서 함수는 반환(return)문을 포함
 * 이러한 반환문을 통해 호출자는 함수에서 실행된 결과를 전달 가능
 * 반환문은 함수의 실행을 중단하고, return 키워드 다음에 명시된 표현식의 값을 호출자에게 반환
 * 반환문은 배열이나 객체를 포함한 모든 타입의 값을 반환
 **/

function multiNum(x, y) {
    return xy;         // x와 y를 곱한 결과를 반환함.
}

var num = multiNum(3, 4); // multiNum() 함수가 호출된 후, 그 반환값이 변수 num에 저장됨.

document.write(num);

/**
 * 함수의 호출
 * 정의된 함수는 프로그램 내에서 호출되어야 비로소 실행
 * 일반적인 함수의 호출은 함수의 정의문과 같은 형태로 호출
 *
 * 함수의 정의
 * function addNum(x, y) {
 *     return x + y;
 * }
 *
 * 함수의 호출
 * var sum = addNum(3, 5); // 함수 addNum()을 호출하면서, 인수로 3과 5를 전달
 *                         // 함수의 호출이 끝난 뒤에는 그 반환값을 변수 sum에 대입합니다.
 *
 * 위의 예제에서 인수(argument)로 전달된 숫자 3과 5는 함수에서 정의된  매개변수(parameter) x와 y에 각각 대입
 * 따라서 호출된 함수의 내부에서는 매개변수 x와 y에 각각 3과 5가 대입되어 계산
 *
 * 값으로서의 함수 : 자바스크립트에서 함수는 문법적 구문일뿐만 아니라 값(value)도 가능
 * 따라서 함수가 변수에 대입될 수도 있으며, 다른 함수의 인수로 전달 가능
 **/

function sqr(x) {                // 제곱의 값을 구하는 함수 sqr를 정의함.
     return x * x;

}
var sqrNum = sqr;                // 변수 sqrNum에 함수 sqr을 대입함.
document.write(sqr(4) + "<br>"); // 함수 sqr을 호출함.
document.write(sqrNum(4));       // 변수 sqrNum를 함수처럼 호출함.
/****************************************************************************************************************************************************/

/**
 * 변수의 유효 범위(variable scope) : 자바스크립트에서 객체나 함수는 모두 변수
 * 해당 변수가 접근할 수 있는 변수, 객체 그리고 함수의 집합을 의미
 *
 * 1. 지역 변수(local variable)
 * 2. 전역 변수(global variable)
 **/

/**
 * 지역 변수(local variable) : 함수 내에서 선언된 변수
 * 함수 내에서만 유효하며, 함수가 종료되면 메모리에서 사라짐
 * 함수의 매개변수 또한 함수 내에서 정의되는 지역 변수처럼 동작
 * 자바스크립트에서는 선언되지 않은 변수를 사용하려고 하거나 접근하려고 하면 오류를 발생
 * 선언되지 않은 변수에 대한 typeof 연산자의 결괏값은 undefined 값을 반환
 **/
function localNum() {
    var num = 10; // 지역 변수 num에 숫자 10을 대입함.

    document.write("함수 내부에서 변수 num의 타입은 " + typeof num + "입니다.<br>"); // number
}

localNum();       // 함수 localNum()을 호출함.
document.write("함수의 호출이 끝난 뒤 변수 num의 타입은 " + typeof num + "입니다."); // undefined

/** 전역 변수(global variable) : 함수의 외부에서 선언된 변수를 가리킵니다.
 * 이러한 전역 변수는 프로그램의 어느 영역에서나 접근할 수 있으며, 웹 페이지가 닫혀야만 메모리에서 사라짐
 * 함수 외부뿐만 아니라 내부에서도 접근하여 변경 가능
 * 지역 변수를 선언할 때에는 반드시 var 키워드를 사용하여 선언
 * 함수 내부에서 var 키워드를 사용하지 않고 변수를 선언하면, 해당 변수는 지역 변수가 아닌 전역 변수로 선언
 * 또한, 전역 변수와 같은 이름의 지역 변수를 선언하면, 해당 블록에서는 해당 이름으로 지역 변수만을 호출
 **/

var num = 10; // 전역 변수 num을 선언함.
function globalNum1() {
    document.write("함수 내부에서 변수 num의 값은 " + num + "입니다.<br>"); // 10

    num = 20; // 전역 변수 num의 값을 함수 내부에서 변경함.
}

globalNum1();  // 함수 globalNum()을 호출함.
document.write("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + "입니다."); // 20

function globalNum2() {
    num = 10; // var 키워드를 사용하지 않고 변수 num을 선언함.
    document.write("함수 내부에서 변수 num의 값은 " + num + "입니다.<br>"); // 10
}

globalNum2();  // 함수 globalNum()을 호출함.
document.write("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + "입니다."); // 10


var num = 10; // 전역 변수 num을 선언함.
function globalNum3() {

    var num = 20; // 같은 이름의 지역 변수 num을 선언함.

    document.write("함수 내부에서 변수 num의 값은 " + num + "입니다.<br>"); // 20

}
globalNum3(); // 함수 globalNum()을 호출함.
document.write("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + "입니다."); // 10


var num = 10; // 전역 변수 num을 선언함.

function globalNum() {

    var num = 20; // 같은 이름의 지역 변수 num을 선언함.
    document.write("함수 내부에서 지역 변수 num의 값은 " + num + "입니다.<br>");        //20
    document.write("함수 내부에서 전역 변수 num의 값은 " + window.num + "입니다.<br>"); //10
}

globalNum(); // 함수 globalNum()을 호출함.
/****************************************************************************************************************************************************/
/**
 * 함수의 유효 범위(function scope)
 * 대부분의 프로그래밍 언어에서는 블록 내에서 정의된 변수를 블록 외부에서는 접근 불가
 * 자바스크립트에서 함수는 자신이 정의된 범위 안에서 정의된 모든 변수 및 함수에 접근가능
 *
 * 전역 함수 : 모든 전역 변수와 전역 함수에 접근 가능
 * 내부 함수 : 그 함수의 부모 함수(parent function)에서 정의된 모든 변수 및 부모 함수가 접근할 수 있는 모든 다른 변수까지도 접근 가능
 **/
 
// x, y, name을 전역 변수로 선언함.
var x = 10, y = 20;

// sub()를 전역 함수로 선언함.
function sub() {
    return x - y;     // 전역 변수인 x, y에 접근함.
}

document.write(sub() + "<br>");

// parentFunc()을 전역 함수로 선언함.
function parentFunc() {
    var x = 1, y = 2; // 전역 변수와 같은 이름으로 선언하여 전역 변수의 범위를 제한함.

    function add() {  // add() 함수는 내부 함수로 선언됨.
        return x + y; // 전역 변수가 아닌 지역 변수 x, y에 접근함.
    }
    return add();
}
document.write(parentFunc());

/**
 * 함수 호이스팅(hoisting) : 함수의 유효 범위라는 것은 함수 안에서 선언된 모든 변수는 함수 전체에 걸쳐 유효
 * 그런데 이 유효 범위의 적용이 변수가 선언되기 전에도 똑같이 적용
 * 즉, 자바스크립트 함수 안에 있는 모든 변수의 선언은 함수의 맨 처음으로 이동된 것처럼 동작합니다.
 **/
var globalNum = 10;     // globalNum을 전역 변수로 선언

function printNum() {
    document.write("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum + "입니다.<br>"); // ①
    var globalNum = 20; // globalNum을 지역 변수로 선언함 ②
    document.write("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum + "입니다.<br>");
}
printNum();

/**
 * 위의 예제 ①의 시점에서는 변수 globalNum가 전역 변수를 가리킨다고 생각하기 쉽습니다.
 * 하지만 자바스크립트 내부에서는 함수 호이스팅에 의해 다음과 같이 코드가 변경되어 처리
 **/
//호이스팅 후의 코드
var globalNum = 10;

function printNum() {
    var globalNum; // 함수 호이스팅에 의해 변수의 선언 부분이 함수의 맨 처음 부분으로 이동
    document.write("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum + "입니다.<br>"); //undefined
    globalNum = 20;
    document.write("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum + "입니다.<br>");
}
printNum();

/**
 * 위의 예제 ①의 시점에서는 globalNum라는 지역 변수가 선언만 되어 있고, 아직 초기화만 안 된 상태
 * 따라서 이때 globalNum 변수에 접근하면 아직 초기화되지 않은 변수에 접근했으므로, undefined 값을 반환
 * 실제로 변수가 초기화되는 시점은 원래 코드에서 변수가 선언된 ②의 시점
 * 자바스크립트에서는 함수 호이스팅이 자동으로 수행되지만, 항상 함수 블록의 첫 부분에 변수를 선언 지향
 **/
/****************************************************************************************************************************************************/
/**
 * 매개변수와 인수
 * 매개변수(parameter) : 함수의 정의에서 전달받은 인수를 함수 내부로 전달하기 위해 사용하는 변수
 * 인수(argument) : 함수가 호출될 때 함수로 값을 전달해주는 값
 * 함수를 호출할 때 함수의 정의보다 적은 수의 인수가 전달되더라도, 다른 언어와는 달리 오류를 발생시키지 않음.
 * 이 같은 경우 자바스크립트는 전달되지 않은 나머지 매개변수에 자동으로 undefined 값을 설정
 **/
function addNum(x, y, z) { // x, y, z라는 3개의 매개변수를 가지는 함수 addNum()을 정의함.
    return x + y + z;
}

addNum(1, 2, 3); // 인수로 1, 2, 3을 전달하여 함수를 호출함. -> 6
addNum(1, 2);    // 인수로 1, 2을 전달하여 함수를 호출함. -> NaN
addNum(1);       // 인수로 1을 전달하여 함수를 호출함. -> NaN
addNum();        // 인수로 아무것도 전달하지 않고 함수를 호출함. -> NaN

/**
 * 위의 예제에서 addNum() 함수를 호출할 때 인수가 세 개보다 적게 전달되면, 계산할 수 없다는 의미인 NaN을 반환
 * 그 이유는 전달되지 않은 나머지 값이 자동으로 undefined 값으로 설정되어, 산술 연산을 수행할 수 없기 때문
**/

function addNum(x, y, z) {
    if(x === undefined) // 함수 호출시 x에 해당하는 인수가 전달되지 않은 경우
        x = 0;          // 변수 x의 값을 undefined에서 0으로 변경함.

    if(y === undefined) // 함수 호출시 y에 해당하는 인수가 전달되지 않은 경우
        y = 0;          // 변수 y의 값을 undefined에서 0으로 변경함.

    if(z === undefined) // 함수 호출시 z에 해당하는 인수가 전달되지 않은 경우
        z = 0;          // 변수 z의 값을 undefined에서 0으로 변경함.
    return x + y + z;
}

addNum(1, 2, 3); // 6
addNum(1, 2);    // 3
addNum(1);       // 1
addNum();        // 0

/**
 * arguments 객체
 * 만약 함수의 정의보다 더 많은 수의 인수가 전달되면, 매개변수에 대입되지 못한 인수들은 참조할 방법이 없음
 * 하지만 arguments 객체를 이용하면, 함수로 전달된 인수의 총 개수를 확인하거나, 각각의 인수에도 바로 접근 가능
 * arguments 객체는 함수가 호출될 때 전달된 인수를 배열의 형태로 저장
 * 첫 번째 인수는 arguments[0]에 저장되며, 다음 인수는 arguments[1]에 저장
 * 또한, 인수의 총 개수는 arguments 객체의 length 프로퍼티에 저장
**/

function addNum() {
    var sum = 0;                                // 합을 저장할 변수 sum을 선언함.

    for(var i = 0; i < arguments.length; i++) { // 전달받은 인수의 총 수만큼 반복함.
        sum += arguments[i];                    // 전달받은 각각의 인수를 sum에 더함.
    }

    return sum;
}

addNum(1, 2, 3); // 6
addNum(1, 2);    // 3
addNum(1);       // 1
addNum();        // 0
addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

/**
 * arguments 객체는 배열과 비슷할 뿐, 실제로 Array 객체 X
 * 숫자로 된 인덱스와 length 프로퍼티만을 가지고 있을 뿐, 모든 것을 배열처럼 다룰 수는 없습니다.
 *
 * 디폴트 매개변수와 나머지 매개변수
 * 1. 디폴트 매개변수(default parameter)
 * 2. 나머지 매개변수(rest parameter)
 **/

/**
 * 디폴트 매개변수(default parameter) : 함수를 호출할 때 명시된 인수를 전달하지 않았을 경우에 사용하게 될 기본값
 * 자바스크립트에서 매개변수의 기본값은 undefined
 * 디폴트 매개변수는 익스플로러, 사파리, 오페라에서 지원 X
**/

 function mul(a, b) {
    // 인수가 한 개만 전달되었을 때 나머지 매개변수의 값을 undefined 값이 아닌 1로 설정함.
    b = (typeof b !== 'undefined')  ? b : 1;
    return ab;
}
mul(3, 4); // 12
mul(3);    // 3

function mul(a, b = 1) { // 인수가 한 개만 전달되면 나머지 매개변수의 값을 언제나 1로 설정해 줌.
    return ab;
}

mul(3, 4); // 12
mul(3);    // 3

/**
 * 나머지 매개변수(rest parameter) : 생략 접두사(...)를 사용하여 특정 위치의 인수부터 마지막 인수까지를 한 번에 지정
 * 다음 예제는 첫 번째 인수에서 두 번째 인수부터 마지막 인수까지를 뺀 후 그 결과를 반환하는 예제
 **/
function sub() {
    var firstNum = arguments[0];                  // 첫 번째 인수에서
    for(var i = 0; i < arguments.length-1; i++) { // 두 번째부터 마지막 인수까지를
        firstNum -= arguments[i+1];               // 뺌.
    }
    return firstNum;
}
sub(10, 2, 3);    // 10 - 2 - 3 = 5
sub(10, 1, 5, 8); // 10 - 1 - 5 - 8 = -4


// 첫 번째 인수를 변수 firstNum에 저장하고 나머지 인수들은 배열 restArgs에 저장함.
function sub(firstNum, ...restArgs) {
    for(var i = 0; i < restArgs.length; i++) {
        firstNum -= restArgs[i];
    }
    return firstNum;
}
sub(10, 2, 3);    // 10 - 2 - 3 = 5
sub(10, 1, 5, 8); // 10 - 1 - 5 - 8 = -4

/****************************************************************************************************************************************************/
/**
 * 미리 정의된 전역 함수(predefined functions): 자바스크립트는 사용자의 편의를 위해 다양한 기능의 여러 전역 함수를 미리 정의하여 제공
 * 이러한 전역 함수는 자바스크립트의 어떤 타입의 객체에서도 바로 사용 가능
 *
 * 1. eval()
 * 2. isFinite()
 * 3. isNaN()
 * 4. parseFloat()
 * 5. parseInt()
 * 6. decodeURI()
 * 7. decodeURIComponent()
 * 8. encodeURI()
 * 9. encodeURIComponent()
 * 10. escape()
 * 11. unescape()
 * 12. Number()
 * 13. String()
 **/

/**
 * eval() : 문자열로 표현된 자바스크립트 코드를 실행하는 함수입니다.
 *
 * 문법
 * eval("문자열");
 **/
var x = 10, y = 20;
var a = eval("x + y"); // 30
var b = eval("y3"); // 60
document.write(a + "<br>" + b);

/**
 * isFinite(): 전달된 값이 유한한 수인지를 검사하여 그 결과를 반환합니다.
 * 만약 인수로 전달된 값이 숫자가 아니라면, 숫자로 변환하여 검사합니다.
 *
 * 문법
 * isFinite(검사할값);
 **/

isFinite(123);       // true
isFinite(123e100);   // true
isFinite(0);         // true
isFinite(true);      // true
isFinite(false);     // true
isFinite(null);      // true
isFinite("123");     // true
isFinite("");        // true
isFinite("문자열");  // false
isFinite(undefined); // false
isFinite(NaN);       // false

/**
 * isNaN() : 전달된 값이 NaN인지를 검사하여 그 결과를 반환
 * 만약 인수로 전달된 값이 숫자가 아니라면, 숫자로 강제 변환하여 검사
 * 전달된 값이 숫자인지 아닌지를 확인하기 위하여 typeof 연산자를 대신 사용 가능
 * 이 함수는 숫자로의 강제 변환에 따라 예상치 못한 결과를 얻을 수 있으므로 ECMAScript 6부터는 Number.isNaN() 메소드의 사용을 권장
 * 문법
 * isNaN(검사할값);
 **/
isNaN(123);       // false
isNaN(123e100);   // false
isNaN(0);         // false
isNaN(true);      // false
isNaN(false);     // false
isNaN(null);      // false
isNaN("123");     // false
isNaN("");        // false
isNaN("문자열");  // true
isNaN(undefined); // true
isNaN(NaN);       // true

/**
 * parseFloat(): 문자열을 파싱하여 부동 소수점 수(floating point number)로 반환
 * 문법
 * parseFloat("문자열");
 **/
parseFloat("123");        // 123
parseFloat("123.000");    // 123
parseFloat("123.456");    // 123.456
parseFloat("12 34 56");   // 12
parseFloat(" 123 ");      // 123
parseFloat("123 초콜릿"); // 123
parseFloat("초콜릿 123"); // NaN

/**
 * parseInt(): 문자열을 파싱하여 정수로 반환
 * 문법
 * parseInt("문자열");
 * 예제처럼 parseInt() 함수에 두 번째 인수로 특정 진법을 전달하면, 해당 진법에 맞는 정수로 반환
 * 또한, 전달받은 문자열의 시작이 "0x"로 시작하면, parseInt() 함수는 해당 문자열을 16진수로 인식
 **/
parseInt("123");        // 123
parseInt("123.000");    // 123
parseInt("123.456");    // 123
parseInt("12 34 56");   // 12
parseInt(" 123 ");      // 123
parseInt("123 초콜릿"); // 123
parseInt("초콜릿 123"); // NaN
parseInt("10", 10);     // 10
parseInt("10", 8);      // 8
parseInt("10", 16);     // 16
parseInt("0x10");       // 16

/**
 * encodeURI()와 encodeURIComponent()
 * encodeURI() : URI에서 주소를 표시하는 특수문자를 제외하고, 모든 문자를 이스케이프 시퀀스(escape sequences) 처리하여 부호화
 * encodeURIComponent() : URI에서 encodeURI() 함수에서 부호화하지 않은 모든 문자까지 포함하여 이스케이프 시퀀스 처리
 * 문법
 * encodeURI(부호화할URI);
 * encodeURIComponent(부호화할URI);
 **/

var uri = "http://google.com/search.php?name=홍길동&city=서울";
var enc1 = encodeURI(uri);
var enc2 = encodeURIComponent(uri);
document.write(enc1 + "<br>" + enc2);

/**
 * decodeURI()와 decodeURIComponent()
 * decodeURI() : encodeURI() 함수나 다른 방법으로 만들어진 URI(Uniform Resource Identifier)를 해독합니다.
 * decodeURIComponent() : encodeURIComponent() 함수나 다른 방법으로 만들어진 URI 컴포넌트를 해독합니다.
 *
 * 문법
 * decodeURI(해독할URI);
 * decodeURIComponent(해독할URI);
 **/

var uri = "http://google.com/search.php?name=홍길동&city=서울";
var enc1 = encodeURI(uri);
var enc2 = encodeURIComponent(uri);

document.write(enc1 + "<br>" + enc2 + "<br><br>");

var dec1 = decodeURI(enc1);
var dec2 = decodeURIComponent(enc2);

document.write(dec1 + "<br>" + dec2);

/**
 * escape()와 unescape()
 * escape() : 전달받은 문자열에서 특정 문자들을 16진법 이스케이프 시퀀스 문자로 변환
 * unescape() : 전달받은 문자열에서 escape() 함수나 다른 방법으로 만들어진 16진법 이스케이프 시퀀스 문자를 원래의 문자로 변환
 * 문법
 * escape("변환할문자열");
 * unescape("원래대로변환할문자열");
 * escape() 함수는 자바스크립트 1.5버전부터 더는 지원하지 않으므로, encodeURI() 함수나 encodeURIComponent() 함수를 대신 사용
 * unescape() 함수는 자바스크립트 1.5버전부터 더는 지원하지 않으므로, decodeURI() 함수나 decodeURIComponent() 함수를 대신 사용
 **/

var str = "Hello! World ?#$";
var esc = escape(str);
var une = unescape(esc);

document.write(esc + "<br>" + une);

/**
 * Number() : 전달받은 객체의 값을 숫자로 반환
 * 문법
 * Number(객체);
 **/
Number("123");        // 123
Number("123.000");    // 123
Number("123.456");    // 123.456
Number("12 34 56");   // NaN
Number("123 초콜릿"); // NaN
Number(true);         // 1
Number(false);        // 0
Number(new Date());   // 현재 날짜에 해당하는 숫자를 반환함.
Number(null);         // 0

/**
 * String() : 전달받은 객체의 값을 문자열로 반환
 *
 * 문법
 * String(객체);
 **/
String(123);        // 123
String(123.456);    // 123.456
String("123");      // 123
String(new Date());       // 현재 날짜에 해당하는 문자열을 반환함.
String(null);       // null
String(true);       // true
String(false);      // false
String(Boolean(1)); // true
String(Boolean(0)); // false

/****************************************************************************************************************************************************/
/**
 * 객체(object) : 실생활에서 우리가 인식할 수 있는 사물로 이해
 *
 * 객체의 예
 * 객체(object) - 고양이
 * kitty
 *
 * 프로퍼티(property)
 * cat.name = "나비"
 * cat.family = "코리안 숏 헤어"
 * cat.age = 0.1
 * cat.weight = 300
 *
 * 메소드(method)
 * cat.mew()
 * cat.eat()
 * cat.sleep()
 * cat.play()
 *
 * 고양이 객체는 모두 위와 같은 프로퍼티를 가지지만, 각 프로퍼티의 값은 인스턴스마다 전부 상이함
 * 
 * 자바스크립트 기본 타입(data type) = 객체(object)
 * 객체 : 이름(name)과 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은 집합
 * 메소드(method) : 프로퍼티의 값이 함수
 **/

var cat = "나비"; // 일반적인 변수의 선언

// 객체도 많은 값을 가지는 변수의 하나임.
var kitty = { name: "나비", family: "코리안 숏 헤어", age: 1, weight: 0.1 };
cat          // 나비
kitty.name   // 나비

/**
 * 자바스크립트에서는 숫자, 문자열, 불리언, undefined 타입을 제외한 모든 것이 객체
 *하지만 숫자, 문자열, 불리언과 같은 원시 타입은 값이 정해진 객체로 취급되어, 객체로서의 특징도 가짐
 *
 * 객체의 프로퍼티 참조
 * 객체이름.프로퍼티이름
 * 또는
 * 객체이름["프로퍼티이름"]
 **/

var person = {
    name: "홍길동",      // 이름 프로퍼티를 정의함.
    birthday: "030219",  // 생년월일 프로퍼티를 정의함.
    pId: "1234567",      // 개인 id 프로퍼티를 정의함.
    fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
        return this.birthday + this.pId;
    }
};

person.name    // 홍길동
person["name"] // 홍길동

/**
 * 객체의 메소드 참조
 * 문법
 * 객체이름.메소드이름()
 * 메소드를 참조할 때 메소드 이름 뒤에 괄호(())를 붙이지 않으면, 메소드가 아닌 프로퍼티 그 자체를 참조
 * 따라서 괄호를 사용하지 않고 프로퍼티 그 자체를 참조하게 되면 해당 메소드의 정의 그 자체가 반환
 **/

var person = {
    name: "홍길동",
    birthday: "030219",
    pId: "1234567",
    fullId: function() {
        return this.birthday + this.pId;
    }
};

person.fullId() // 0302191234567
person.fullId;  // function () { return this.birthday + this.pId; } <- 이 자체가 반환되어버림

/****************************************************************************************************************************************************/
/**
 * 객체의 생성
 * 1. 리터럴 표기(literal notation)를 이용한 방법
 * 2. 생성자 함수(constructor function)를 이용한 방법
 * 3. Object.create() 메소드를 이용한 방법
 * 인스턴스(instance) : 위와 같은 방법으로 생성되어 메모리에 대입된 객체
 *
 * 리터럴 표기를 이용한 객체의 생성
 * 자바스크립트에서 객체를 생성하는 가장 쉬운 방법은 리터럴 표기(literal notation)를 이용하는 방법입니다.
 *
 * 문법
   var 객체이름 = {
        프로퍼티1이름 : 프로퍼티1의값,
        프로퍼티2이름 : 프로퍼티2의값,
        ...
   };
 * 각각의 프로퍼티는 이름과 값을 콜론(:)으로 연결하고, 쉼표(,)를 사용해 다른 프로퍼티와 구분
 * 프로퍼티의 이름으로는 자바스크립트의 식별자(identifier)나 문자열을 사용 가능
 **/
var kitty = {
    name: "나비",
    family: "코리안 숏 헤어",
    age: 1,
    weight: 0.1
};
document.write("우리 집 새끼 고양이의 이름은 " + kitty.name + "이고, 종은 " + kitty.family + "입니다.");

/**
 * 생성자를 이용한 객체의 생성 : new 연산자를 사용하여 객체를 생성하고 초기화 가능
 * 이때 사용되는 메소드를 생성자(constructor)라고 하며, 이 메소드는 새롭게 생성되는 객체를 초기화하는 역할
 * 자바스크립트는 원시 타입을 위한 생성자를 미리 정의하여 제공
 * 아래 예제처럼 자바스크립트에서 제공하는 생성자를 사용할 수도 있으며, 사용자가 직접 객체 생성자 함수(object constructor function)를 작성하여 사용 가능
 **/

var day = new Date(); // new 연산자를 사용하여 Date 타입의 객체를 생성함.
document.write("올해는 " + day.getFullYear() + "년입니다.");

/**
 * Object.create() 메소드를 이용한 객체의 생성
 * Object.create() 메소드를 이용하여 객체를 생성 가능
 * Object.create() 메소드는 지정된 프로토타입(prototype) 객체와 프로퍼티를 가지고 새로운 객체를 생성
 * 따라서 이 메소드를 이용하면 사용자가 프로토타입 객체를 직접 명시할 수 있으므로, 상당히 유용하게 사용
 *
 * 문법
 * Object.create(프로토타입객체[, 새로운객체의프로퍼티1, 새로운객체의프로퍼티2, ...]);
 * Object.create() 메소드의 첫 번째 인수로는 프로토타입으로 사용할 객체를 전달
 * 두 번째 인수로는 새로운 객체의 추가할 프로퍼티 정보를 전달
 **/

var obj = Object.create(null, {             // null 프로토타입을 사용하여 새로운 객체를 만들고
    x: { value: 100, enumerable: true },    // x좌표를 나타내는 열거할 수 있는 프로퍼티와
    y: { value: 200, enumerable: true }     // y좌표를 나타내는 열거할 수 있는 프로퍼티를 추가함.
});

obj.x;                      // x좌표
obj.y;                      // y좌표
Object.getPrototypeOf(obj); // 객체의 프로토타입을 반환해 줌.
/****************************************************************************************************************************************************/
/**
상속(inheritance)
상속(inheritance)이란 새로운 클래스에서 기존 클래스의 모든 프로퍼티와 메소드를 사용할 수 있는 것을 의미합니다.
 *
 *
 *
상속을 통해 새로운 프로그램의 요구에 맞게 기존 클래스를 수정하여 재사용할 수 있습니다.
 *
또한, 클래스 간의 종속 관계를 형성함으로써 객체의 관계를 조직화할 수 있는 장점이 있습니다.
 *
따라서 이러한 상속은 추상화, 캡슐화와 더불어 객체 지향 프로그래밍을 구성하는 중요한 특징 중 하나가 됩니다.
 *
 *
 *
하지만 C#이나 C++과 같은 클래스 기반(class-based)의 객체 지향 언어와는 달리 자바스크립트는 프로토타입 기반(prototype-based)의 객체 지향 언어입니다.
 *
프로토타입 기반이기 때문에 상속의 개념이 클래스 기반의 객체 지향 언어와는 약간 다릅니다.
 *
자바스크립트에서는 현재 존재하고 있는 객체를 프로토타입으로 사용하여, 해당 객체를 복제하여 재사용하는 것을 상속이라고 합니다.
 *
프로토타입(prototype)
자바스크립트의 모든 객체는 프로토타입(prototype)이라는 객체를 가지고 있습니다.
 *
모든 객체는 그들의 프로토타입으로부터 프로퍼티와 메소드를 상속받습니다.
 *
이처럼 자바스크립트의 모든 객체는 최소한 하나 이상의 다른 객체로부터 상속을 받으며, 이때 상속되는 정보를 제공하는 객체를 프로토타입(prototype)이라고 합니다.
 *
프로토타입 체인(prototype chain)
자바스크립트에서는 객체 이니셜라이저를 사용해 생성된 같은 타입의 객체들은 모두 같은 프로토타입을 가집니다.
 *
또한, new 연산자를 사용해 생성한 객체는 생성자의 프로토타입을 자신의 프로토타입으로 상속받습니다.
 *
예제
var obj = new Object(); // 이 객체의 프로토타입은 Object.prototype입니다.
 *
var arr = new Array();  // 이 객체의 프로토타입은 Array.prototype입니다.
 *
var date = new Date();  // 이 객체의 프로토타입은 Date.prototype입니다.
 *
 *
 *
하지만 Object.prototype 객체는 어떠한 프로토타입도 가지지 않으며, 아무런 프로퍼티도 상속받지 않습니다.
 *
또한, 자바스크립트에 내장된 모든 생성자나 사용자 정의 생성자는 바로 이 객체를 프로토타입으로 가집니다.
 *
예제
var date = new Date(); // 이 객체는 Date.prototype 뿐만 아니라 Object.prototype도 프로토타입으로 가집니다.
 *
 *
 *
위와 같이 프로토타입이 상속되는 가상의 연결 고리를 프로토타입 체인(prototype chain)이라고 합니다.
 *
Object.prototype 객체는 이러한 프로토타입 체인에서도 가장 상위에 존재하는 프로토타입입니다.
 *
따라서 자바스크립트의 모든 객체는 Object.prototype 객체를 프로토타입으로 상속받습니다.
 *
프로토타입의 생성
프로토타입을 생성하는 가장 기본적인 방법은 객체 생성자 함수(object constructor function)를 작성하는 것입니다.
 *
생성자 함수를 작성하고 new 연산자를 사용해 객체를 생성하면, 같은 프로토타입을 가지는 객체들을 생성할 수 있습니다.
 *
예제
function Dog(color, name, age) { // 개에 관한 생성자 함수를 작성함.
 *
    this.color = color;          // 색에 관한 프로퍼티
 *
    this.name = name;            // 이름에 관한 프로퍼티
 *
    this.age = age;              // 나이에 관한 프로퍼티
 *
}
 *
var myDog = new Dog("흰색", "마루", 1); // 이 객체는 Dog라는 프로토타입을 가짐.
 *
document.write("우리 집 강아지는 " + myDog.name + "라는 이름의 " + myDog.color + " 털이 매력적인 강아지입니다.");
 *

 *
 *
 *
객체 생성자 함수를 작성할 때에는 관례상 이름의 첫 문자만을 대문자로 작성합니다.
객체에 프로퍼티 및 메소드 추가
이미 생성된 객체에 새로운 프로퍼티나 메소드를 추가하는 방법은 다음과 같습니다.
 *
예제
function Dog(color, name, age) {
 *
    this.color = color;
 *
    this.name = name;
 *
    this.age = age;
 *
}
 *
var myDog = new Dog("흰색", "마루", 1);
 *
myDog.family = "시베리안 허스키"; // 품종에 관한 프로퍼티를 추가함.
 *
myDog.breed = function() {        // 털색을 포함한 품종을 반환해 주는 메소드를 추가함.
 *
    return this.color + " " + this.family;
 *
}
 *
document.write("우리 집 강아지는 " + myDog.breed() + "입니다.");
 *

 *
 *
 *
위의 예제에서 새롭게 추가된 weight 프로퍼티와 breed() 메소드는 오직 myDog 인스턴스에만 추가됩니다.
 *
이미 생성된 다른 Dog 객체나 차후에 생성되는 어떠한 다른 Dog 객체에도 추가되지 않습니다.
 *
프로토타입에 프로퍼티 및 메소드 추가
프로토타입에 새로운 프로퍼티나 메소드를 추가하는 것은 객체에 추가할 때와는 다른 방법을 사용해야 합니다.
 *
프로토타입의 경우에는 생성자 함수에 직접 추가해야만 이후에 생성되는 모든 다른 객체에도 적용할 수 있습니다.
 *
예제
function Dog(color, name, age) {
 *
    this.color = color;
 *
    this.name = name;
 *
    this.age = age;
 *
    this.family = "시베리안 허스키"; // 프로토타입에 프로퍼티를 추가할 때에는 기본값을 가지게 할 수 있음.
 *
    this.breed = function() {
 *
        return this.color + " " + this.family;
 *
    };
 *
}
 *
var myDog = new Dog("흰색", "마루", 1);
 *
var hisDog = new Dog("갈색", "콩이", 3);
 *
document.write("우리 집 강아지는 " + myDog.family + "이고, 친구네 집 강아지도 " + hisDog.family + "입니다.");
 *

 *
prototype 프로퍼티
prototype 프로퍼티를 이용하면 현재 존재하고 있는 프로토타입에 새로운 프로퍼티나 메소드를 손쉽게 추가할 수 있습니다.
 *
예제
function Dog(color, name, age) {
 *
    this.color = color;
 *
    this.name = name;
 *
    this.age = age;
 *
}
 *
// 현재 존재하고 있는 Dog 프로토타입에 family 프로퍼티를 추가함.
 *
Dog.prototype.family = "시베리안 허스키";
 *
// 현재 존재하고 있는 Dog 프로토타입에 breed 메소드를 추가함.
 *
Dog.prototype.breed = function() {
 *
    return this.color + " " + this.family;
 *
};
 *
var myDog = new Dog("흰색", "마루", 1);
 *
var hisDog = new Dog("갈색", "콩이", 3);
 *
 *
 *
document.write("우리 집 강아지는 " + myDog.family + "이고, 친구네 집 강아지도 " + hisDog.family + "입니다.");
 *
document.write("우리 집 강아지의 품종은 " + myDog.breed() + "입니다.<br>");
 *
document.write("친구네 집 강아지의 품종은 " + hisDog.breed() + "입니다.");
 *

 *
 *
 *
직접 생성한 프로토타입은 위와 같이 새로운 프로퍼티나 메소드를 마음껏 추가하거나 삭제할 수 있습니다.
물론 자바스크립트 표준 객체의 프로토타입도 임의로 수정할 수 있으나, 심각한 오류가 발생할 가능성이 있습니다.
따라서 자바스크립트 표준 객체의 프로토타입은 수정해서는 안됩니다.
 *
 **/
/****************************************************************************************************************************************************/
/**
객체 다루기
this 키워드
자바스크립트에서 this 키워드는 해당 키워드가 사용된 자바스크립트 코드 영역을 포함하고 있는 객체를 가리킵니다.
 *
 *
 *
예를 들어, 메소드 내부에서 사용된 this 키워드는 해당 메소드를 포함하고 있는 객체를 가리킵니다.
 *
또한, 객체 내부에서 사용된 this 키워드는 객체 그 자신을 가리킵니다.
 *
이러한 this는 변수가 아닌 키워드이므로, 사용자가 임의로 가리키는 값을 바꿀 수 없습니다.
 *
 *
 *
객체 생성자 함수 내부에서 사용된 this 키워드는 어떠한 값도 가지지 않으며, 단순히 새로운 객체로 대체됩니다.
객체 프로퍼티의 삭제
자바스크립트에서 객체의 프로퍼티를 참조하는 방법은 다음과 같습니다.
 *
문법
객체이름.프로퍼티이름
 *
또는
 *
객체이름["프로퍼티이름"]
 *
 *
 *
자바스크립트에서는 delete 키워드를 사용하여 객체의 프로퍼티를 삭제할 수 있습니다.
 *
문법
delete 객체이름.프로퍼티이름;
 *
 *
 *
delete 키워드를 사용하여 프로퍼티를 삭제하면, 프로퍼티의 값뿐만 아니라 프로퍼티 그 자체도 삭제됩니다.
 *
이 키워드는 본래 객체의 프로퍼티만을 삭제하기 위해 만들어졌기 때문에 함수나 변수에 사용하면 아무런 동작도 하지 않습니다.
 *
예제
function Dog(color, name, age) {
 *
    this.color = color;
 *
    this.name = name;
 *
    this.age = age;
 *
}
 *
var myDog = new Dog("흰색", "마루", 1);
 *
delete myDog.age; // age 프로퍼티를 삭제함.
 *
// age 프로퍼티가 삭제되었기 때문에 undefined를 출력함.
 *
document.write("우리집 강아지의 나이는 " + myDog.age + "입니다.");
 *

 *
 *
 *
직접 생성한 프로토타입은 위와 같이 새로운 프로퍼티나 메소드를 마음껏 추가하거나 삭제할 수 있습니다.
물론 자바스크립트 표준 객체의 프로토타입도 임의로 수정할 수 있으나, 심각한 오류가 발생할 가능성이 있습니다.
따라서 자바스크립트 표준 객체의 프로토타입은 수정해서는 안됩니다.
객체 프로퍼티의 순회
자바스크립트에서는 for / in 문을 사용하여 객체의 모든 프로퍼티를 순회할 수 있습니다.
 *
for / in 문은 객체의 모든 열거할 수 있는 프로퍼티(enumerable properties)를 손쉽게 순회할 수 있도록 해줍니다.
 *
 *
 *
 *
자바스크립트의 for / in 문에 대한 더 자세한 사항은 자바스크립트 반복문 수업에서 확인할 수 있습니다.
 *
자바스크립트 반복문 수업 확인 =>
 *
 *
객체의 프로퍼티를 순회하는 방법으로는 for / in 문 이외에도 다음과 같은 메소드를 사용할 수 있습니다.
 *
 *
 *
1. Object.keys()
 *
2. Object.getOwnPropertyNames()
 *
 *
 *
Object.keys() 메소드는 해당 객체가 가진 고유 프로퍼티 중에서 열거할 수 있는 프로퍼티의 이름을 배열에 담아 반환합니다.
 *
Object.getOwnPropertyNames() 메소드는 해당 객체가 가진 모든 고유 프로퍼티의 이름을 배열에 담아 반환합니다.
 *
 *
 *
예제
function Dog(color, name, age) {
 *
    this.color = color;
 *
    this.name = name;
 *
    this.age = age;
 *
}
 *
var myDog = new Dog("흰색", "마루", 1);
 *
 *
 *
// color 프로퍼티의 enumerable 속성을 false로 설정함.
 *
Object.defineProperty(myDog, 'color', {enumerable : false} );
 *
// 객체가 가진 고유 프로퍼티 중에서 열거할 수 있는 프로퍼티 이름을 배열에 담아 반환함.
 *
 *
document.write(Object.keys(myDog) + "<br>");       // name, age
 *
// 객체가 가진 모든 고유 프로퍼티의 이름을 배열에 담아 반환함.
 *
document.write(Object.getOwnPropertyNames(myDog)); // color, name, age
 *

 *
 *
 *
Object.defineProperty() 메소드는 ECMAScript 5부터 추가된 객체에 프로퍼티를 추가해주는 메소드입니다.
이때 추가하는 프로퍼티의 속성까지도 설정할 수 있습니다.
객체간의 비교
자바스크립트에서 별개의 두 객체는 프로퍼티의 값이 모두 같아도, 절대로 같다고 말할 수 없습니다.
 *
예제
function Dog(color, name, age) {
 *
    this.color = color;
 *
    this.name = name;
 *
    this.age = age;
 *
}
 *
var myDog = new Dog("흰색", "마루", 1);
 *
var hisDog = new Dog("흰색", "마루", 1);      // 모든 프로퍼티의 값이 모두 같은 객체를 생성함.
 *
document.write((myDog == hisDog) + "<br>");   // false
 *
 *
document.write((myDog === hisDog) + "<br>");  // false
 *
 *
 *
 *
var herDog = hisDog;                          // hisDog 객체를 변수 herDog에 대입함.
 *
document.write((hisDog == herDog) + "<br>");  // true
 *
document.write((hisDog === herDog) + "<br>"); // true
 *

 *
 *
 *
위의 예제에서 myDog과 hisDog 객체는 가지고 있는 프로퍼티의 값이 모두 같습니다.
 *
하지만 이 두 객체는 별개의 객체이므로, 동등(==) 연산자와 일치(===) 연산자로 비교해도 모두 false를 반환합니다.
 *
 *
 *
위의 예제에서는 변수 herDog에 hisDog 객체를 대입합니다.
 *
이렇게 객체를 대입한 변수를 객체 레퍼런스(object reference)라고 하며, 이제부터 변수 herDog은 hisDog 객체를 가리키게 됩니다.
 *
즉, 객체 레퍼런스는 객체 자체를 저장하는 것이 아니라, 객체가 위치한 주소를 저장하는 것입니다.
 *
따라서 변수 herDog과 hisDog을 동등 연산자와 일치 연산자로 비교하면, 모두 true를 반환하게 됩니다.
 *
 **/
/****************************************************************************************************************************************************/
/**
객체 프로퍼티(property)
모든 자바스크립트 객체는 Object 객체와 Object.prototype 객체의 모든 프로퍼티를 상속받습니다.
 *
prototype 프로퍼티를 이용하면 현재 존재하는 프로토타입에 새로운 프로퍼티나 메소드를 손쉽게 추가할 수 있습니다.
 *
 *
 *
자바스크립트의 prototype 프로퍼티에 대한 더 자세한 사항은 자바스크립트 프로토타입 수업에서 확인할 수 있습니다.
 *
자바스크립트 프로토타입 수업 확인 =>
 *
객체 메소드(method)
모든 자바스크립트 객체는 Object 객체와 Object.prototype 객체의 모든 프로퍼티와 메소드를 상속받습니다.
 *
자주 사용되는 대표적인 객체 메소드는 다음과 같습니다.
 *
 *
 *
1. hasOwnProperty()
 *
2. propertyIsEnumerable()
 *
3. isPrototypeOf()
 *
4. isExtensible()
 *
5. toString()
 *
6. valueOf()
 *
hasOwnProperty() 메소드
hasOwnProperty() 메소드는 특정 프로퍼티가 해당 객체에 존재하는지를 검사합니다.
 *
해당 객체에서 직접 선언된 프로퍼티만을 검사하며, 같은 이름의 프로퍼티라도 상속받은 프로퍼티는 false 값을 반환합니다.
 *
예제
function Dog(color, name, age, family) {
 *
    this.color = color;
 *
    this.name = name;
 *
    this.age = age;
 *
    this.family = family;
 *
    this.breed = function() {
 *
        return this.color + " " + this.family;
 *
    }
 *
}
 *
var myDog = new Dog("검정색", "곰", 3, "불독");
 *
myDog.hasOwnProperty("color"); // true
 *
myDog.hasOwnProperty("breed"); // true
 *
myDog.hasOwnProperty("class"); // 상속받은 프로퍼티이므로, false를 반환함.
 *

 *
propertyIsEnumerable() 메소드
propertyIsEnumerable() 메소드는 특정 프로퍼티가 해당 객체에 존재하고, 열거할 수 있는 프로퍼티인지를 검사합니다.
 *
즉, 이 메소드는 hasOwnProperty() 메소드의 결과가 true이면서, 동시에 열거할 수 있는 프로퍼티인지를 검사합니다.
 *
예제
function Dog(color, name, age) {
 *
    this.color = color;
 *
    this.name = name;
 *
    this.age = age;
 *
}
 *
var myDog = new Dog("흰색", "마루", 1);
 *
// color 프로퍼티의 enumerable 속성을 false로 설정함.
 *
Object.defineProperty(myDog, 'color', { enumerable : false} );
 *
 *
 *
document.write(myDog.propertyIsEnumerable("color") + "<br>"); // false
 *
 *
document.write(myDog.propertyIsEnumerable("name") + "<br>");  // true
 *
 *
document.write(myDog.propertyIsEnumerable("age"));            // true
 *

 *
 *
 *
열거할 수 있는 프로퍼티란 내부적으로 enumerable 플래그가 true로 설정된 프로퍼티를 의미합니다.
이러한 프로퍼티들은 for / in 문으로 접근할 수 있게 됩니다.
Object.defineProperty() 메소드는 ECMAScript 5부터 추가된 객체에 프로퍼티를 추가해주는 메소드입니다.
이때 추가하는 프로퍼티의 속성까지도 설정할 수 있습니다.
isPrototypeOf() 메소드
isPrototypeOf() 메소드는 특정 객체의 프로토타입 체인에 현재 객체가 존재하는지를 검사합니다.
 *
예제
var day = new Date(); // Date 객체를 생성함.
 *
// 객체 day의 프로토타입이 Date.prototype인지를 검사함.
 *
document.write(Date.prototype.isPrototypeOf(day));          // true
 *
document.write(Date.prototype.isPrototypeOf(new String())); // false
 *

 *
 *
 *
프로토타입 체인에 대한 더 자세한 사항은 자바스크립트 프로토타입 수업에서 확인할 수 있습니다.
 *
 *
 *
자바스크립트 프로토타입 수업 확인 =>
 *
isExtensible() 메소드
isExtensible() 메소드는 객체에 새로운 프로퍼티를 추가할 수 있는지 여부를 반환합니다.
 *
 *
 *
자바스크립트에서 모든 객체는 기본적으로 새로운 프로퍼티를 추가할 수 있습니다.
 *
하지만 preventExtensions() 메소드를 사용하여 해당 객체에 새로운 프로퍼티를 추가할 수 없도록 설정할 수 있습니다.
 *
예제
var day = new Date(); // Date 객체를 생성함.
 *
// 객체 day에 새로운 프로퍼티를 추가할 수 있는지 검사함.
 *
document.write(Object.isExtensible(day) + "<br>"); // true
 *
 *
 *
// 해당 객체에 새로운 프로퍼티를 추가할 수 없도록 설정함.
 *
var myDay = Object.preventExtensions(day);
 *
document.write(Object.isExtensible(day));          // false
 *

 *
toString() 메소드
toString() 메소드는 이 메소드를 호출한 객체의 값을 문자열로 반환합니다.
 *
예제
var arr = [10, "문자열", true]; // 배열
 *
var bool = false;               // 불리언
 *
function func() { return 0; }   // 함수
 *
arr.toString();  // 10,문자열,true
 *
bool.toString(); // false
 *
func.toString(); // 함수의 소스 코드가 전부 문자열로 반환됨.
 *

 *
 *
 *
toString() 메소드는 어떠한 인수도 전달받지 않습니다.
valueOf() 메소드
valueOf() 메소드는 특정 객체의 원시 타입(primitive type)의 값을 반환합니다.
 *
자바스크립트에서는 원시 타입의 값이 기대되는 곳에 객체가 사용되면, 내부적으로 이 메소드를 호출하여 처리합니다.
 *
 *
만약 어떤 객체가 원시 타입의 값을 가지고 있지 않다면, 이 메소드는 객체 자신을 반환합니다.
 *
예제
function func(n) {
 *
    this.number = n;
 *
}
 *
myFunc = new func(4);
 *
document.write(myFunc + 5); // ① : [object Object]5
 *
 *
 *
func.prototype.valueOf = function() { // valueOf() 메소드를 정의함.
 *
    return this.number;
 *
}
 *
document.write(myFunc + 5); // ② : 9
 *

 *
 *
 *
위의 예제 ① 부분에서는 산술 연산을 위해 number 타입의 값을 기대하는 곳에 myFunc 객체가 사용됩니다.
 *
따라서 자바스크립트는 내부적으로 해당 객체의 valueOf() 메소드를 호출합니다.
 *
하지만 이 객체의 valueOf() 메소드는 아직 정의되지 않았으므로, 해당 객체 자신을 반환하게 됩니다.
 *
따라서 산술 연산이 아닌 문자열 결합 연산이 수행됩니다.
 *
 *
 *
그 후에 예제에서는 prototype 프로퍼티를 이용하여 valueOf() 메소드를 정의합니다.
 *
따라서 ② 부분에서는 내부적으로 호출된 valueOf() 메소드가 해당 객체의 number 프로퍼티 값을 반환합니다.
 *
따라서 정상적으로 산술 연산이 수행됩니다.
 *
 *
 *
원시 타입에 대한 더 자세한 사항은 자바스크립트 기본 타입 수업에서 확인할 수 있습니다.
 *
자바스크립트 기본 타입 수업 확인 =>
 *
getter와 setter 메소드의 정의
getter와 setter 메소드로 정의된 프로퍼티는 단순한 값을 지닌 데이터 프로퍼티와는 달리 접근자 프로퍼티라고 부릅니다.
 *
 *
 *
getter 메소드는 특정 프로퍼티의 값을 받아오기 위한 메소드입니다.
 *
자바스크립트는 객체의 프로퍼티 값에 접근할 때 getter 메소드에 아무런 인수를 전달하지 않고 호출합니다.
 *
 *
 *
setter 메소드는 특정 프로퍼티의 값을 설정하기 위한 메소드입니다.
 *
자바스크립트는 객체의 프로퍼티 값을 변경할 때 setter 메소드에 대입하고자 하는 값을 인수로 전달하여 호출합니다.
 *
 *
 *
다음 예제는 getter 메소드를 정의하는 예제입니다.
 *
예제
var gildong = { age: 18 };
 *
document.write(gildong.age + "<br>"); // 18
 *
 *
 *
Object.defineProperty(gildong, "americanAge", { get: function() { return this.age - 1; } });
 *
document.write(gildong.americanAge); // 17
 *

 *
 *
 *
위의 예제에서는 gildong 객체에 americanAge라는 프로퍼티를 추가할 때 get 키워드를 사용하여 getter 메소드를 정의하고 있습니다.
 *
따라서 해당 프로퍼티를 참조하려고 할 때는 내부적으로 미리 정의한 getter 메소드가 자동으로 호출될 것입니다.
 *
 *
 *
다음 예제는 setter 메소드를 정의하는 예제입니다.
 *
예제
var gildong = { age: 18 };
 *
gildong.age = 20;
 *
document.write(gildong.age + "<br>"); // 20
 *
 *
 *
Object.defineProperty(gildong, "changeAge", { set: function(n) { this.age = this.age - n; } });
 *
gildong.changeAge = 5;
 *
document.write(gildong.age); // 15
 *

 *
 *
 *
위의 예제에서는 gildong 객체에 changeAge라는 프로퍼티를 추가할 때 set 키워드를 사용하여 setter 메소드를 정의하고 있습니다.
 *
따라서 해당 프로퍼티의 값을 변경하려고 할 때는 내부적으로 미리 정의한 setter 메소드가 자동으로 호출될 것입니다.
 *
 *
 *
getter와 setter 메소드를 지원하는 주요 웹 브라우저의 버전은 다음과 같습니다.
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