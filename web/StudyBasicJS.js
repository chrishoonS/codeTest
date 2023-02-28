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
 * document.write() : 웹 페이지가 로딩될 때 실행되면, 웹 페이지에 가장 먼저 데이터를 출력
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
var firstStr = "이것도 문자열";      // 큰따옴표를 사용한 문자열
var secondStr = '이것도 문자열';     // 작은따옴표를 사용한 문자열
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
var num;            // 초기화하지 않았으므로 undefined 값을 반환
var str = null;     // object 타입의 null 값
typeof secondNum;   // 정의되지 않은 변수에 접근하면 undefined 값을 반환
null ==  undefined; // true
null === undefined; // false

/**
 * 7. 객체(object)
 * 자바스크립트의 기본 타입은 객체(object)
 * 객체는 여러 프로퍼티(property)나 메소드(method)를 같은 이름으로 묶어놓은 일종의 집합체
 **/
var dog = { name: "해피", age: 3 }; // 객체의 생성

// 객체의 프로퍼티 참조
document.getElementById("result").innerHTML = "강아지의 이름은 " + dog.name + "이고, 나이는 " + dog.age + "살 ";
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
 * 1. getDate(): 날짜 중 일자를 숫자로 반환 (1 ~ 31)
 * 2. getDay() : 날짜 중 요일을 숫자로 반환 (일요일 : 0 ~ 토요일 : 6)
 * 3. getFullYear() : 날짜 중 연도를 4자리 숫자로 반환 (yyyy년)
 * 4. getMonth() : 날짜 중 월을 숫자로 반환 (1월 : 0 ~ 12월 : 11)
 * 5. getTime() : 1970년 1월 1일부터 현재까지의 시간을 밀리초(millisecond) 단위의 숫자로 반환
 * 6. getHours() : 시간 중 시를 숫자로 반환 (0 ~ 23)
 * 7. getMinutes() : 시간 중 분을 숫자로 반환 (0 ~ 59)
 * 8. getSeconds() : 시간 중 초를 숫자로 반환 (0 ~ 59)
 * 9. getMilliseconds() : 시간 중 초를 밀리초(millisecond) 단위의 숫자로 반환 (0 ~ 999)
 **/
String(Date());        // Mon May 16 2016 19:35:25 GMT+0900
Date().toString();     // Mon May 16 2016 19:35:25 GMT+0900
var date = new Date(); // Date 객체 생성
date.getFullYear();    // 2016
date.getTime();        // 1463394925632 -> 1970년 1월 1일부터 현재까지의 시간을 밀리초 단위의 숫자로 반환

/**
 * 문자열을 숫자로 변환
 * 문자열을 숫자로 변환하는 가장 간단한 방법은 Number() 함수를 사용
 * 자바스크립트는 문자열을 숫자로 변환해 주는 두 개의 전역 함수를 별도로 제공
 * 1. parseInt(): 문자열을 파싱하여 특정 진법의 정수를 반환
 * 2. parseFloat() : 문자열을 파싱하여 부동 소수점 수를 반환
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
 * 삼항 연산자(ternary operator) : 피연산자를 세 개나 가지는 조건 연산자
 *
 * 표현식 ? 반환값1 : 반환값2
 * 물음표(?) 앞의 표현식에 따라 결괏값이 참이면 반환값1을 반환하고, 결괏값이 거짓이면 반환값2를 반환
 * 삼항 연산자는 짧은 if / else 문 대신 사용할 수 있으며, 코드를 간결하게!
 **/

var x = 3, y = 5;
var result = (x > y) ? x : y   // x가 더 크면 x를, 그렇지 않으면 y를 반환
document.write("둘 중에 더 큰 수는 " + result + "");

 /**
  * 쉼표 연산자 : for 문에서 사용하면, 루프마다 여러 변수를 동시에 갱신
  **/
  // 루프마다 i의 값은 1씩 증가하고, 동시에 j의 값은 1씩 감소함.
for (var i = 0, j = 9; i <= j; i++, j--) {
    document.write("i의 값은 " + i + "이고, j의 값은 " + j + "<br>");
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
var str = new String("이것은 문자열");
str instanceof Object;  // true
str instanceof String;  // true
str instanceof Array;   // false
str instanceof Number;  // false
str instanceof Boolean; // false

/**
 * void 연산자 : 어떤 타입의 값이 오던지 상관없이 언제나 undefined 값만을 반환
 * 이 연산자는 피연산자가 단 하나뿐인 단항 연산자이며, 피연산자의 결합 방향은 오른쪽에서 왼쪽
처럼 void 연산자는 정의되지 않은 원시 타입의 값을 얻기 위해 void(0)과 같은 형태로 종종 사용
 **/

<a href="javascript:void(0)">이 링크는 동작 X</a>
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
 * 위의 는 변수 x와 y의 값이 같으면 두 변수가 같다는 문자열을 출력하려고 하는 
 * 하지만 if 문의 표현식에서 동등 연산자(==)를 사용해야 할 곳에 잘못해서 대입 연산자(=)을 사용
 * 따라서 위의 는 다음과 같이 수정해야만 정상적으로 동작
 **/
if (x == y) {
    document.write("두 변수 x와 y는 같습니다.");
}

/**
 * 또한, 위의 가 실제로 if 문의 표현식 내에서 변수 x에 변수 y의 값을 대입 했을수도 있음
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
 * 위의 에서 변수 xx는 string 타입이므로, 두 번째 case 절의 document.write() 메소드가 맨 먼저 실행
 * 하지만 break 키워드가 없으므로, 두 번째 case 절 이후에 나오는 모든 실행문이 모두 실행될 것
 * 따라서 case 절과 default 절은 반드시 break 키워드를 포함하고 있어야 정확하게 동작
 **/

var day = new Date().getDay(); // 오늘의 요일을 반환 (일요일: 0 ~ 토요일: 6)
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
 * while 문 : 특정 조건을 만족할 때까지 계속해서 주어진 실행문을 반복 실행
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
 * do / while 문은 먼저 루프를 한 번 실행한 후에 표현식을 검사
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
 * for 문 : 자체적으로 초기식, 표현식, 증감식을 모두 포함하고 있는 반복문
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
 * for / of 문 : 반복할 수 있는 객체(iterable objects)를 순회할 수 있도록 해주는 반복문
 * 자바스크립트에서 반복할 수 있는 객체에는 Array, Map, Set, arguments
 *
 * 문법
 * for (변수 of 객체) {
 *      객체의 모든 열거할 수 있는 프로퍼티의 개수만큼 반복적으로 실행하고자 하는 실행문;
 * }
 *
 * for / of 문은 익스플로러에서 지원 X
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
        document.write(topic + " 과목은 " + (i + 1) + "번째 과목");
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
 * 자바스크립트에서 배열의 각 요소를 참조하고 싶을 때는 [] 연산자를 사용
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
document.write("배열 arr의 길이는 " + arr.length + "<br>");   // 배열의 길이를 출력함.

delete arr[2];    // 배열의 세 번째 요소를 삭제함. 하지만 배열의 길이는 변하지 않음.
document.write("배열 arr의 요소에는 [" + arr + "]가 있습니다.<br>"); // 배열의 요소를 모두 출력함.
document.write("배열 arr의 길이는 " + arr.length + "");       // 배열의 길이를 출력함.

/**
 * 위의 에서 세 번째 실행문은 배열의 현재 길이보다 더 큰 인덱스에 요소를 저장
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
 * 위의 에서 배열 arr의 길이는 최종적으로 11
 * 이때 배열 요소가 존재하는 인덱스는 0, 1, 2, 3, 4, 10뿐이며, 나머지 인덱스에는 배열 요소가 존재 X
 * 이렇게 인덱스에 대응하는 배열 요소가 없는 부분을 배열의 홀(hole)이라고 
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

document.write("배열의 길이는 " + arr.length + "");

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
 * 자바스크립트에서는 배열이라는 타입(type)을 별도로 제공 X
 * 자바스크립트 배열은 객체(object) 타입이 되며, typeof 연산자를 사용하면 'object'를 반환
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
  * 다음 와 같이 toString() 메소드와 indexOf() 메소드를 함께 사용하면 해당 변수의 배열 여부를 확인 가능
  **/
function isArray(a) {
    return a.constructor.toString().indexOf("Array") > -1;
}

var arr = [1, true, "JavaScript"];          // 배열 생성
document.write(arr.constructor);            // constructor 프로퍼티의 값 출력
document.write(arr.constructor.toString()); // toString() 메소드를 사용하여 constructor 프로퍼티의 값을 문자열로 변환
document.write(arr.constructor.toString().indexOf("Array")); // indexOf() 메소드를 사용하여 해당 문자열에서 "Array"라는 부분 문자열이 시작하는 인덱스를 구함, indexOf()는 인수로 전달받은 문자열을 해당 문자열에서 찾지 못하면, 언제나 -1을 반환
document.write(isArray(arr))                // true

/**
 * 함수(function) : 하나의 특별한 목적의 작업을 수행하도록 설계된 독립적인 블록을 의미
 * 이러한 함수는 필요할 때마다 호출하여 해당 작업을 반복해서 수행 가능
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
 * 함수 이름(function name)은 함수를 구분하는 식별자(identifier)
 * 매개변수(parameter)란 함수를 호출할 때 인수(argument)로 전달된 값을 함수 내부에서 사용할 수 있게 해주는 변수
**/
// addNum라는 이름의 함수를 정의함.
function addNum(x, y) {    // x, y는 이 함수의 매개변수임.
    document.write(x + y);
}

addNum(2, 3);              // addNum() 함수에 인수로 2와 3을 전달하여 호출함.

/**
 * 위의 에서 매개변수 x에는 인수 2가 저장되고, y에는 인수 3이 저장되어 사용
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
    return xy;         // x와 y를 곱한 결과를 반환
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
 *                         // 함수의 호출이 끝난 뒤에는 그 반환값을 변수 sum에 대입
 *
 * 위의 에서 인수(argument)로 전달된 숫자 3과 5는 함수에서 정의된  매개변수(parameter) x와 y에 각각 대입
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

    document.write("함수 내부에서 변수 num의 타입은 " + typeof num + "<br>"); // number
}

localNum();       // 함수 localNum()을 호출함.
document.write("함수의 호출이 끝난 뒤 변수 num의 타입은 " + typeof num + ""); // undefined

/** 전역 변수(global variable) : 함수의 외부에서 선언된 변수를 가리킵니다.
 * 이러한 전역 변수는 프로그램의 어느 영역에서나 접근할 수 있으며, 웹 페이지가 닫혀야만 메모리에서 사라짐
 * 함수 외부뿐만 아니라 내부에서도 접근하여 변경 가능
 * 지역 변수를 선언할 때에는 반드시 var 키워드를 사용하여 선언
 * 함수 내부에서 var 키워드를 사용하지 않고 변수를 선언하면, 해당 변수는 지역 변수가 아닌 전역 변수로 선언
 * 또한, 전역 변수와 같은 이름의 지역 변수를 선언하면, 해당 블록에서는 해당 이름으로 지역 변수만을 호출
 **/

var num = 10; // 전역 변수 num을 선언함.
function globalNum1() {
    document.write("함수 내부에서 변수 num의 값은 " + num + "<br>"); // 10

    num = 20; // 전역 변수 num의 값을 함수 내부에서 변경함.
}

globalNum1();  // 함수 globalNum()을 호출함.
document.write("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + ""); // 20

function globalNum2() {
    num = 10; // var 키워드를 사용하지 않고 변수 num을 선언함.
    document.write("함수 내부에서 변수 num의 값은 " + num + "<br>"); // 10
}

globalNum2();  // 함수 globalNum()을 호출함.
document.write("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + ""); // 10


var num = 10; // 전역 변수 num을 선언함.
function globalNum3() {

    var num = 20; // 같은 이름의 지역 변수 num을 선언함.

    document.write("함수 내부에서 변수 num의 값은 " + num + "<br>"); // 20

}
globalNum3(); // 함수 globalNum()을 호출함.
document.write("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + ""); // 10


var num = 10; // 전역 변수 num을 선언함.

function globalNum() {

    var num = 20; // 같은 이름의 지역 변수 num을 선언함.
    document.write("함수 내부에서 지역 변수 num의 값은 " + num + "<br>");        //20
    document.write("함수 내부에서 전역 변수 num의 값은 " + window.num + "<br>"); //10
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
 * 즉, 자바스크립트 함수 안에 있는 모든 변수의 선언은 함수의 맨 처음으로 이동된 것처럼 동작
 **/
var globalNum = 10;     // globalNum을 전역 변수로 선언

function printNum() {
    document.write("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum + "<br>"); // ①
    var globalNum = 20; // globalNum을 지역 변수로 선언함 ②
    document.write("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum + "<br>");
}
printNum();

/**
 * 위의  ①의 시점에서는 변수 globalNum가 전역 변수를 가리킨다고 생각하기 쉽습니다.
 * 하지만 자바스크립트 내부에서는 함수 호이스팅에 의해 다음과 같이 코드가 변경되어 처리
 **/
//호이스팅 후의 코드
var globalNum = 10;

function printNum() {
    var globalNum; // 함수 호이스팅에 의해 변수의 선언 부분이 함수의 맨 처음 부분으로 이동
    document.write("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum + "<br>"); //undefined
    globalNum = 20;
    document.write("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum + "<br>");
}
printNum();

/**
 * 위의  ①의 시점에서는 globalNum라는 지역 변수가 선언만 되어 있고, 아직 초기화만 안 된 상태
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
 * 위의 에서 addNum() 함수를 호출할 때 인수가 세 개보다 적게 전달되면, 계산할 수 없다는 의미인 NaN을 반환
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
 * 다음 는 첫 번째 인수에서 두 번째 인수부터 마지막 인수까지를 뺀 후 그 결과를 반환하는 
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
 * eval() : 문자열로 표현된 자바스크립트 코드를 실행하는 함수
 *
 * 문법
 * eval("문자열");
 **/
var x = 10, y = 20;
var a = eval("x + y"); // 30
var b = eval("y3"); // 60
document.write(a + "<br>" + b);

/**
 * isFinite(): 전달된 값이 유한한 수인지를 검사하여 그 결과를 반환
 * 만약 인수로 전달된 값이 숫자가 아니라면, 숫자로 변환하여 검사
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
처럼 parseInt() 함수에 두 번째 인수로 특정 진법을 전달하면, 해당 진법에 맞는 정수로 반환
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
 * decodeURI() : encodeURI() 함수나 다른 방법으로 만들어진 URI(Uniform Resource Identifier)를 해독
 * decodeURIComponent() : encodeURIComponent() 함수나 다른 방법으로 만들어진 URI 컴포넌트를 해독
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
Number(new Date());   // 현재 날짜에 해당하는 숫자를 반환
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
String(new Date());       // 현재 날짜에 해당하는 문자열을 반환
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
    fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환
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
 * 자바스크립트에서 객체를 생성하는 가장 쉬운 방법은 리터럴 표기(literal notation)를 이용하는 방법
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
document.write("우리 집 새끼 고양이의 이름은 " + kitty.name + "이고, 종은 " + kitty.family + "");

/**
 * 생성자를 이용한 객체의 생성 : new 연산자를 사용하여 객체를 생성하고 초기화 가능
 * 이때 사용되는 메소드를 생성자(constructor)라고 하며, 새롭게 생성되는 객체를 초기화하는 역할
 * 자바스크립트는 원시 타입을 위한 생성자를 미리 정의하여 제공
 * 아래 처럼 자바스크립트에서 제공하는 생성자를 사용할 수도 있으며, 사용자가 직접 객체 생성자 함수(object constructor function)를 작성하여 사용 가능
 **/

var day = new Date(); // new 연산자를 사용하여 Date 타입의 객체를 생성함.
document.write("올해는 " + day.getFullYear() + "년");

/**
 * Object.create() 메소드를 이용한 객체의 생성
 * Object.create() 메소드를 이용하여 객체를 생성 가능
 * Object.create()는 지정된 프로토타입(prototype) 객체와 프로퍼티를 가지고 새로운 객체를 생성
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
 * 상속(inheritance) : 새로운 클래스에서 기존 클래스의 모든 프로퍼티와 메소드를 사용할 수 있는 것
 * 상속을 통해 새로운 프로그램의 요구에 맞게 기존 클래스를 수정하여 재사용 가능
 * 또한, 클래스 간의 종속 관계를 형성함으로써 객체의 관계를 조직화 가능
 *
 * 자바스크립트는 프로토타입 기반(prototype-based)의 객체 지향 언어
 * 자바스크립트에서는 현재 존재하고 있는 객체를 프로토타입으로 사용하여, 해당 객체를 복제하여 재사용하는 것을 상속이라고 함.
 *
 * 프로토타입(prototype) : 자바스크립트의 모든 객체는 프로토타입(prototype)이라는 객체를 가지고 있음
 * 모든 객체는 그들의 프로토타입으로부터 프로퍼티와 메소드를 상속
 * 이처럼 자바스크립트의 모든 객체는 최소한 하나 이상의 다른 객체로부터 상속을 받으며, 이때 상속되는 정보를 제공하는 객체를 프로토타입(prototype)
 *
 * 프로토타입 체인(prototype chain) : 자바스크립트에서는 객체 이니셜라이저를 사용해 생성된 같은 타입의 객체들은 모두 같은 프로토타입
 * 또한, new 연산자를 사용해 생성한 객체는 생성자의 프로토타입을 자신의 프로토타입으로 상속
 **/
var obj = new Object(); // 이 객체의 프로토타입은 Object.prototype
var arr = new Array();  // 이 객체의 프로토타입은 Array.prototype
var date = new Date();  // 이 객체의 프로토타입은 Date.prototype

/**
 * 하지만 Object.prototype 객체는 어떠한 프로토타입도 가지지 않으며, 아무런 프로퍼티도 상속받지 않음
 * 또한, 자바스크립트에 내장된 모든 생성자나 사용자 정의 생성자는 바로 이 객체를 프로토타입으로 가짐
 * 프로토타입 체인(prototype chain) : 프로토타입이 상속되는 가상의 연결 고리
 * Object.prototype 객체는 이러한 프로토타입 체인에서도 가장 상위에 존재하는 프로토타입
 * 따라서 자바스크립트의 모든 객체는 Object.prototype 객체를 프로토타입으로 상속
 **/

var date = new Date(); // 이 객체는 Date.prototype 뿐만 아니라 Object.prototype도 프로토타입으로 가집니다.

/**
 * 프로토타입의 생성 : 객체 생성자 함수(object constructor function)를 작성
 * 생성자 함수를 작성하고 new 연산자를 사용해 객체를 생성하면, 같은 프로토타입을 가지는 객체들을 생성 가능
 **/
function Dog(color, name, age) { // 개에 관한 생성자 함수를 작성함.
    this.color = color;          // 색에 관한 프로퍼티
    this.name = name;            // 이름에 관한 프로퍼티
    this.age = age;              // 나이에 관한 프로퍼티
}

var myDog = new Dog("흰색", "마루", 1); // 이 객체는 Dog라는 프로토타입을 가짐.

document.write("우리 집 강아지는 " + myDog.name + "라는 이름의 " + myDog.color + " 털이 매력적인 강아지");

/**
 * 객체 생성자 함수를 작성할 때에는 관례상 이름의 첫 문자만을 대문자로 작성
 * 객체에 프로퍼티 및 메소드 추가
 **/
function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

var myDog = new Dog("흰색", "마루", 1);

myDog.family = "시베리안 허스키"; // 품종에 관한 프로퍼티를 추가함.

myDog.breed = function() {        // 털색을 포함한 품종을 반환해 주는 메소드를 추가함.
    return this.color + " " + this.family;
}
document.write("우리 집 강아지는 " + myDog.breed() + "");

/**
 * 위의 에서 새롭게 추가된 weight 프로퍼티와 breed() 메소드는 오직 myDog 인스턴스에만 추가
 * 이미 생성된 다른 Dog 객체나 차후에 생성되는 어떠한 다른 Dog 객체에도 추가되지 않음
 *
 * 프로토타입에 프로퍼티 및 메소드 추가 : 프로토타입의 경우에는 생성자 함수에 직접 추가해야만 이후에 생성되는 모든 다른 객체에도 적용 가능
**/
function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
    this.family = "시베리안 허스키"; // 프로토타입에 프로퍼티를 추가할 때에는 기본값을 가지게 할 수 있음.

    this.breed = function() {
        return this.color + " " + this.family;
    };
}

var myDog = new Dog("흰색", "마루", 1);
var hisDog = new Dog("갈색", "콩이", 3);
document.write("우리 집 강아지는 " + myDog.family + "이고, 친구네 집 강아지도 " + hisDog.family + "");

/**
 * prototype 프로퍼티 : prototype 프로퍼티를 이용하면 현재 존재하고 있는 프로토타입에 새로운 프로퍼티나 메소드를 손쉽게 추가 가능
 **/

function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}
// 현재 존재하고 있는 Dog 프로토타입에 family 프로퍼티를 추가함.
Dog.prototype.family = "시베리안 허스키";
// 현재 존재하고 있는 Dog 프로토타입에 breed 메소드를 추가함.

Dog.prototype.breed = function() {
    return this.color + " " + this.family;
};

var myDog = new Dog("흰색", "마루", 1);
var hisDog = new Dog("갈색", "콩이", 3);

document.write("우리 집 강아지는 " + myDog.family + "이고, 친구네 집 강아지도 " + hisDog.family + "");
document.write("우리 집 강아지의 품종은 " + myDog.breed() + "<br>");
document.write("친구네 집 강아지의 품종은 " + hisDog.breed() + "");

/**
 * 직접 생성한 프로토타입은 위와 같이 새로운 프로퍼티나 메소드를 마음껏 추가하거나 삭제 가능
 * 물론 자바스크립트 표준 객체의 프로토타입도 임의로 수정할 수 있으나, 심각한 오류가 발생할 가능성이 있음
 * 따라서 자바스크립트 표준 객체의 프로토타입은 수정해서는 안됩니다.
 *
 **/

/****************************************************************************************************************************************************/

/**
 * 객체 다루기
 * this 키워드 : 해당 키워드가 사용된 자바스크립트 코드 영역을 포함하고 있는 객체
 * 예를 들어, 메소드 내부에서 사용된 this 키워드는 해당 메소드를 포함하고 있는 객체!
 * 또한, 객체 내부에서 사용된 this 키워드는 객체 그 자신!
 * 이러한 this는 변수가 아닌 키워드이므로, 사용자가 임의로 가리키는 값을 바꿀 수 없습니다.
 * 객체 생성자 함수 내부에서 사용된 this 키워드는 어떠한 값도 가지지 않으며, 단순히 새로운 객체로 대체
 **/

/** 객체 프로퍼티의 삭제
 * 문법
 * 객체이름.프로퍼티이름
 * 또는
 * 객체이름["프로퍼티이름"]
 * delete 키워드 : 객체의 프로퍼티를 삭제 가능
 *
 * 문법
 * delete 객체이름.프로퍼티이름;
 * delete 키워드를 사용하여 프로퍼티를 삭제하면, 프로퍼티의 값뿐만 아니라 프로퍼티 그 자체도 삭제
 * 이 키워드는 본래 객체의 프로퍼티만을 삭제하기 위해 만들어졌기 때문에 함수나 변수에 적용 불가
 **/
function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

var myDog = new Dog("흰색", "마루", 1);
delete myDog.age; // age 프로퍼티를 삭제함.
// age 프로퍼티가 삭제되었기 때문에 undefined를 출력함.
document.write("우리집 강아지의 나이는 " + myDog.age + "");

/**
 * 직접 생성한 프로토타입은 위와 같이 새로운 프로퍼티나 메소드를 마음껏 추가하거나 삭제 가능
 * 물론 자바스크립트 표준 객체의 프로토타입도 임의로 수정할 수 있으나, 심각한 오류가 발생 유발
 *
 * 객체 프로퍼티의 순회
 * 자바스크립트에서는 for / in 문을 사용하여 객체의 모든 프로퍼티를 반복 가능
 * for / in 문은 객체의 모든 열거할 수 있는 프로퍼티(enumerable properties)를 손쉽게 순회
 * 객체의 프로퍼티를 순회하는 방법으로는 for / in 문 이외에도 다음과 같은 메소드를 사용 가능
 * 1. Object.keys()
 * 2. Object.getOwnPropertyNames()
 * Object.keys() 메소드는 해당 객체가 가진 고유 프로퍼티 중에서 열거할 수 있는 프로퍼티의 이름을 배열에 담아 반환
 * Object.getOwnPropertyNames() 메소드는 해당 객체가 가진 모든 고유 프로퍼티의 이름을 배열에 담아 반환
 **/
function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

var myDog = new Dog("흰색", "마루", 1);
// color 프로퍼티의 enumerable 속성을 false로 설정함.

Object.defineProperty(myDog, 'color', {enumerable : false} );
// 객체가 가진 고유 프로퍼티 중에서 열거할 수 있는 프로퍼티 이름을 배열에 담아 반환

document.write(Object.keys(myDog) + "<br>");       // name, age
// 객체가 가진 모든 고유 프로퍼티의 이름을 배열에 담아 반환

document.write(Object.getOwnPropertyNames(myDog)); // color, name, age

Object.defineProperty() //메소드는 ECMAScript 5부터 추가된 객체에 프로퍼티를 추가해주는 메소드
// 이때 추가하는 프로퍼티의 속성까지도 설정 가능

/**
 * 객체간의 비교 : 자바스크립트에서 별개의 두 객체는 프로퍼티의 값이 모두 같아도, 절대로 같다고 말할 수 없습니다.
 **/
function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

var myDog = new Dog("흰색", "마루", 1);
var hisDog = new Dog("흰색", "마루", 1);      // 모든 프로퍼티의 값이 모두 같은 객체를 생성함.

document.write((myDog == hisDog) + "<br>");   // false
document.write((myDog === hisDog) + "<br>");  // false

var herDog = hisDog;                          // hisDog 객체를 변수 herDog에 대입함.

document.write((hisDog == herDog) + "<br>");  // true
document.write((hisDog === herDog) + "<br>"); // true

/**
 * 위의 에서 myDog과 hisDog 객체는 가지고 있는 프로퍼티의 값이 모두 같습니다.
 * 하지만 이 두 객체는 별개의 객체이므로, 동등(==) 연산자와 일치(===) 연산자로 비교해도 모두 false를 반환
 * 위의 에서는 변수 herDog에 hisDog 객체를 대입
 * 이렇게 객체를 대입한 변수를 객체 레퍼런스(object reference)라고 하며, 이제부터 변수 herDog은 hisDog 객체를 가리키게 됩니다.
 * 즉, 객체 레퍼런스는 객체 자체를 저장하는 것이 아니라, 객체가 위치한 주소를 저장
 * 따라서 변수 herDog과 hisDog을 동등 연산자와 일치 연산자로 비교하면, 모두 true를 반환
 *
 **/

/****************************************************************************************************************************************************/

/**
 * 객체 프로퍼티(property) : 모든 자바스크립트 객체는 Object 객체와 Object.prototype 객체의 모든 프로퍼티를 상속
 * prototype 프로퍼티를 이용하면 현재 존재하는 프로토타입에 새로운 프로퍼티나 메소드를 손쉽게 추가
 * 객체 메소드(method) : 모든 자바스크립트 객체는 Object 객체와 Object.prototype 객체의 모든 프로퍼티와 메소드를 상속
 *
 * 1. hasOwnProperty()
 * 2. propertyIsEnumerable()
 * 3. isPrototypeOf()
 * 4. isExtensible()
 * 5. toString()
 * 6. valueOf()
 **/

/**
 * hasOwnProperty() : 특정 프로퍼티가 해당 객체에 존재하는지를 검사
 * 해당 객체에서 직접 선언된 프로퍼티만을 검사하며, 같은 이름의 프로퍼티라도 상속받은 프로퍼티는 false 값을 반환
 **/
function Dog(color, name, age, family) {
    this.color = color;
    this.name = name;
    this.age = age;
    this.family = family;

    this.breed = function() {
        return this.color + " " + this.family;
    }
}

var myDog = new Dog("검정색", "곰", 3, "불독");
myDog.hasOwnProperty("color"); // true
myDog.hasOwnProperty("breed"); // true
myDog.hasOwnProperty("class"); // 상속받은 프로퍼티이므로, false를 반환

/**
 * propertyIsEnumerable() : 특정 프로퍼티가 해당 객체에 존재하고, 열거할 수 있는 프로퍼티인지를 검사
 * 즉, hasOwnProperty() 메소드의 결과가 true이면서, 동시에 열거할 수 있는 프로퍼티인지를 검사
 **/

function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

var myDog = new Dog("흰색", "마루", 1);
// color 프로퍼티의 enumerable 속성을 false로 설정함.
Object.defineProperty(myDog, 'color', { enumerable : false} );
document.write(myDog.propertyIsEnumerable("color") + "<br>"); // false
document.write(myDog.propertyIsEnumerable("name") + "<br>");  // true
document.write(myDog.propertyIsEnumerable("age"));            // true

/**
 * 열거할 수 있는 프로퍼티: 내부적으로 enumerable 플래그가 true로 설정된 프로퍼티
 * 이러한 프로퍼티들은 for / in 문으로 접근 가능
 * 이때 추가하는 프로퍼티의 속성까지도 설정 가능
 **/

/**
 * isPrototypeOf() : 특정 객체의 프로토타입 체인에 현재 객체가 존재하는지를 검사
 **/
var day = new Date(); // Date 객체를 생성함.

// 객체 day의 프로토타입이 Date.prototype인지를 검사함.
document.write(Date.prototype.isPrototypeOf(day));          // true
document.write(Date.prototype.isPrototypeOf(new String())); // false

/**
 * isExtensible() : 객체에 새로운 프로퍼티를 추가할 수 있는지 여부를 반환
 * 자바스크립트에서 모든 객체는 기본적으로 새로운 프로퍼티를 추가 가능
 * 하지만 preventExtensions() 메소드를 사용하여 해당 객체에 새로운 프로퍼티를 추가할 수 없도록 설정 가능
 **/
var day = new Date(); // Date 객체를 생성함.
// 객체 day에 새로운 프로퍼티를 추가할 수 있는지 검사함.
document.write(Object.isExtensible(day) + "<br>"); // true
// 해당 객체에 새로운 프로퍼티를 추가할 수 없도록 설정함.

var myDay = Object.preventExtensions(day);
document.write(Object.isExtensible(day));          // false

/**
 * toString() : 이 메소드를 호출한 객체의 값을 문자열로 반환
 **/
var arr = [10, "문자열", true]; // 배열
var bool = false;               // 불리언
function func() { return 0; }   // 함수

arr.toString();  // 10,문자열,true
bool.toString(); // false
func.toString(); // 함수의 소스 코드가 전부 문자열로 반환됨.

/**
 * valueOf() : 특정 객체의 원시 타입(primitive type)의 값을 반환
 * 자바스크립트에서는 원시 타입의 값이 기대되는 곳에 객체가 사용되면, 내부적으로 이 메소드를 호출하여 처리
 *만약 어떤 객체가 원시 타입의 값을 가지고 있지 않다면, 객체 자신을 반환
 **/
function func(n) {
    this.number = n;
}

myFunc = new func(4);
document.write(myFunc + 5); // ① : [object Object]5

func.prototype.valueOf = function() { // valueOf() 메소드를 정의함.
    return this.number;
}

document.write(myFunc + 5); // ② : 9

/**
 * 위의  ① 부분에서는 산술 연산을 위해 number 타입의 값을 기대하는 곳에 myFunc 객체가 사용
 * 따라서 자바스크립트는 내부적으로 해당 객체의 valueOf() 메소드를 호출
 * 하지만 이 객체의 valueOf() 메소드는 아직 정의되지 않았으므로, 해당 객체 자신을 반환
 * 따라서 산술 연산이 아닌 문자열 결합 연산이 수행
 * 그 후에 에서는 prototype 프로퍼티를 이용하여 valueOf() 메소드를 정의
 * 따라서 ② 부분에서는 내부적으로 호출된 valueOf() 메소드가 해당 객체의 number 프로퍼티 값을 반환
 * 따라서 정상적으로 산술 연산이 수행
 **/

/**
 * getter와 setter : 접근자 프로퍼티라고 부릅니다.
 * getter : 특정 프로퍼티의 값을 받아오기 위한 메소드
 * setter : 특정 프로퍼티의 값을 설정하기 위한 메소드
 **/

var gildong = { age: 18 };
document.write(gildong.age + "<br>"); // 18
Object.defineProperty(gildong, "americanAge", { get: function() { return this.age - 1; } });
document.write(gildong.americanAge); // 17

/**
 * 위의 에서는 gildong 객체에 americanAge라는 프로퍼티를 추가할 때 get 키워드를 사용하여 getter 메소드를 정의
 * 따라서 해당 프로퍼티를 참조하려고 할 때는 내부적으로 미리 정의한 getter 메소드가 자동으로 호출될 것
 **/
var gildong = { age: 18 };
gildong.age = 20;
document.write(gildong.age + "<br>"); // 20
Object.defineProperty(gildong, "changeAge", { set: function(n) { this.age = this.age - n; } });

gildong.changeAge = 5;
document.write(gildong.age); // 15

/**
 * 위의 에서는 gildong 객체에 changeAge라는 프로퍼티를 추가할 때 set 키워드를 사용하여 setter 메소드를 정의
 * 따라서 해당 프로퍼티의 값을 변경하려고 할 때는 내부적으로 미리 정의한 setter 메소드가 자동으로 호출
 **/
/****************************************************************************************************************************************************/
/**
 * 전역 객체와 래퍼 객체
 * 전역 객체(global object) : 자바스크립트에 미리 정의된 객체로 전역 프로퍼티나 전역 함수를 담는 공간의 역할
 * 전역 객체 그 자체는 전역 범위(global scope)에서 this 연산자를 통해 접근
 * 자바스크립트에서 모든 객체는 전역 객체의 프로퍼티
 * 웹 브라우저가 새로운 페이지를 로드(load)하면, 자바스크립트는 새로운 전역 개체를 만들고 해당 프로퍼티들을 초기화
 *
 * 래퍼 객체(wrapper object)
 **/ 
var str = "문자열";   // 문자열 생성
var len = str.length; // 문자열 프로퍼티인 length 사용

/**
 * 위의 에서 생성한 문자열 리터럴 str은 객체가 아닌데도 length 프로퍼티를 사용 가능
 * 프로그램이 문자열 리터럴 str의 프로퍼티를 참조하려고 하면, 자바스크립트는 new String(str)을 호출한 것처럼 문자열 리터럴을 객체로 자동 변환해주기 때문!
 * 이렇게 생성된 임시 객체는 String 객체의 메소드를 상속받아 프로퍼티를 참조하는 데 사용
 * 이후 프로퍼티의 참조가 끝나면 사용된 임시 객체는 자동으로 삭제
 * 래퍼 객체(wrapper object) : 숫자, 문자열, 불리언 등 원시 타입의 프로퍼티에 접근하려고 할 때 생성되는 임시 객체
 **/

var str = "문자열";           // 문자열 리터럴 생성
var strObj = new String(str); // 문자열 객체 생성

str.length;                   // 리터럴 값은 내부적으로 래퍼 객체를 생성한 후에 length 프로퍼티를 참조함.
str == strObj;                // 동등 연산자는 리터럴 값과 해당 래퍼 객체를 동일하게 봄.
str === strObj;               // 일치 연산자는 리터럴 값과 해당 래퍼 객체를 구별함.
typeof str;                   // string 타입
typeof strObj;                // object 타입

/**
 * 표준 객체(Standard Object)
 *
 * 1. Number 객체
 * 2. Math 객체
 * 3. Date 객체
 * 4. String 객체
 * 5. Array 객체
 *
 **/

/****************************************************************************************************************************************************/
/**
 * 자바스크립트에서의 수 표현 : 자바스크립트에서는 정수와 실수를 따로 구분하지 않고, 모든 수를 실수 하나로만 표현
 * 64비트 부동 소수점 수(double precision floating point numbers)는 메모리에 다음과 같은 형태로 저장
 * 0 ~ 51 비트  : 총 52비트의 가수 부분
 * 52 ~ 62 비트 : 총 11비트의 지수 부분
 * 63 비트      : 총 1비트의 부호 부분
 * 이러한 64비트 부동 소수점 수의 정밀도는 정수부는 15자리까지, 소수부는 17자리까지만 유효
 **/
var x = 999999999999999;  // 15자리의 정수부
var y = 9999999999999999; // 16자리의 정수부
var z = 0.1 + 0.2

x; // 999999999999999
y; // 10000000000000000
z; // 0.30000000000000004

/** 
 * 위의 에서 변수 z의 값을 살펴보면 오차가 발생했음을 알 수 있음.
 * 이렇게 부동 소수점 수를 가지고 수행하는 산술 연산의 결괏값은 언제나 오차가 발생할 수 있음.
 * 이것은 자바스크립트만의 문제가 아닌 부동 소수점 수를 가지고 실수를 표현하는 모든 프로그래밍 언어에서의 문제점
 * 자바스크립트에서는 이러한 오차를 없애기 위해 정수의 형태로 먼저 변환하여 계산을 수행하고, 다시 실수의 형태로 재변환하는 방법을 사용할 수도 있음.
 **/

var z = (0.210 + 0.110) / 10; // 0.3

/**
 * 진법 표현 : 기본적으로 10진법을 사용하여 수를 표현
 * 하지만 0x 접두사를 사용하여 16진법으로 수를 표현 가능
 **/
var x = 0xAB; // 16진법으로 표현된 10진수 171
var y = 29;   // 10진법으로 표현된 10진수 29
x + y;        // 두 수 모두 10진법으로 자동으로 변환되어 계산됨. -> 200

/**
 * 위의 처럼 자바스크립트에서는 산술 연산 시 모든 수가 10진수로 자동 변환되어 계산
 * 또한, 숫자에 toString() 메소드를 사용하여 해당 숫자를 여러 진법의 형태로 변환 가능
 **/
var num = 256;
num.toString(2);       //  2진법으로 변환 : 100000000
num.toString(8);       //  8진법으로 변환 : 400
num.toString(10);      // 10진법으로 변환 : 256
num.toString(16);      // 16진법으로 변환 : 100
// 2진수로 변환한 결괏값을 문자열로 반환
num.toString(2);       // 100000000
// 문자열을 숫자로 나눴기 때문에 자동으로 10진수로 변환되어 산술 연산된 결괏값
(num.toString(2) / 2); // 50000000

/**
 * toString() : 해당 숫자의 진법을 실제로 바꿔주는 것이 아닌, 전달된 진법으로 변환된 형태의 문자열을 반환해 주는 것
 * Infinity : 자바스크립트에서는 양의 무한대를 의미하는 Infinity 값과 음의 무한대를 의미하는 -Infinity 값을 사용 가능
 * Infinity 값은 사용자가 임의로 수정할 수 없는 읽기 전용 값이며, 자바스크립트의 어떤 수보다도 큰 수로 취급
 **/
var x = 10 / 0;         // 숫자를 0으로 나누면 Infinity를 반환
var y = Infinity1000 // Infinity에 어떠한 수를 산술 연산해도 Infinity를 반환
var z = 1 / Infinity    // Infinity의 역수는 0을 반환

x;                      // Infinity
y;                      // Infinity
z;                      // 0

/**
 * NaN(Not A Number) : 숫자가 아니라는 의미로, 정의되지 않은 값이나 표현할 수 없는 값
 * 0을 0으로 나누거나, 숫자로 변환할 수 없는 피연산자로 산술 연산을 시도하는 경우에 반환되는 읽기 전용 값
 * 자바스크립트의 전역 함수 중 하나인 isNaN() 함수를 사용하면, 전달받은 값이 숫자인지 아닌지를 판단
 * 
 * null, undefined, NaN, Infinity에 대한 비교
 * - null은 object 타입이며, 아직 '값'이 정해지지 않은 것을 의미하는 값
 * - undefined는 null과는 달리 하나의 타입이며, '타입'이 정해지지 않은 것을 의미하는 값이기도 
 * - NaN은 number 타입이며, '숫자가 아님'을 의미하는 숫자
 * - Infinity는 number 타입이며, '무한대'를 의미하는 숫자
 **/
var x = 100 - "10";     // "10"은 자동으로 숫자로 변환되어 계산됨.
var y = 100 - "문자열"; // "문자열"은 숫자로 변환할 수 없기 때문에 NaN을 반환
var z = 0 / 0;          // 0을 0으로 나눌 수 없기 때문에 NaN을 반환

x;                      // 90
y;                      // NaN
z;                      // NaN

// var x = 100"문자열";

if(isNaN(x)) { // 전달된 값이 숫자인지 아닌지를 판단
    document.write("변수 x의 값은 숫자가 아닙니다.");
} else {
    document.write("변수 x의 값은 숫자");
}

/**
 * 자바스크립트는 타입 검사가 매우 유연한 언어로, 문맥에 따라 다음과 같이 자동으로 타입 변환이 이루어집니다.
 * 값           Boolean 문맥    Number 문맥   String 문맥
 * null        false          0             "null"
 * undefined   false          NaN           "undefined"
 * NaN         false          NaN           "NaN"
 * Infinity    true           Infinity      "Infinity"
**/

typeof null;        // object
typeof undefined;   // undefined
typeof NaN;         // number
typeof Infinity;    // number

Boolean(null);      // false
Boolean(undefined); // false
Boolean(NaN);       // false
Boolean(Infinity);  // true

Number(null);       // 0
Number(undefined);  // NaN
Number(NaN);        // NaN
Number(Infinity);   // Infinity

String(null);       // null
String(undefined);  // undefined
String(NaN);        // NaN
String(Infinity);   // Infinity

/**
 * Number 객체 : 자바스크립트에서 숫자는 보통 숫자 리터럴을 사용하여 표현
 * 하지만 수를 나타낼 때 new 연산자를 사용하여 명시적으로 Number 객체를 생성 가능
 * 이러한 Number 객체는 숫자 값을 감싸고 있는 래퍼(wrapper) 객체
 **/

var x = 100;             // 숫자 리터럴
var y = new Number(100); // Number 객체

x;                       // 100
y;                       // 100

typeof x;                // number 타입
typeof y;                // object 타입

/**
 * 동등 연산자(==)는 리터럴 값과 객체의 값이 같으면 true를 반환
 * 하지만 일치 연산자(===)는 숫자 리터럴과 Number 객체의 타입이 다르므로, 언제나 false를 반환
 **/
var x = 100;             // 숫자 리터럴 100
var y = new Number(100); // Number 객체 100

x == y;                  // 값이 같으므로 true
x === y;                 // 서로 다른 객체이므로 false

/**
 * new 연산자를 사용하여 객체를 생성할 때에는 매우 많은 추가 연산을 해야함
 * 따라서 가능한 숫자 리터럴을 사용하여 수를 표현하고, Number 객체는 래퍼 객체로만 활용
 **/

/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/**
 * Number 메소드 : Number 객체에 정의되어 있는 숫자와 관련된 작업을 할 때 사용하는 메소드
 *
 * 1. Number.parseFloat()
 * 2. Number.parseInt()
 * 3. Number.isNaN()
 * 4. Number.isFinite()
 * 5. Number.isInteger()
 * 6. Number.isSafeInteger()
 **/
/**
 * Number.parseFloat() : 문자열을 파싱(parsing)하여, 문자열에 포함된 숫자 부분을 실수 형태로 반환
 * 문자열에 여러 개의 숫자가 존재하면, 그중에서 첫 번째 숫자만을 실수 형태로 반환
 **/

Number.parseFloat("12");         // 12
Number.parseFloat("12.34");      // 12.34
Number.parseFloat("12문자열");   // 12
Number.parseFloat("12 34 56");   // 12
Number.parseFloat("문자열 56"); // NaN

/**
 * Number.parseInt() : 문자열을 파싱하여, 문자열에 포함된 숫자 부분을 정수 형태로 반환
 * 문자열에 여러 개의 숫자가 존재하면, 그중에서 첫 번째 숫자만을 정수 형태로 반환
 **/

Number.parseInt("12");         // 12
Number.parseInt("12.34");      // 12
Number.parseInt("12문자열");   // 12
Number.parseInt("12 34 56");   // 12
Number.parseInt("문자열 56"); // NaN

/**
 * Number.isNaN() : 전달된 값이 NaN인지 아닌지를 검사
 * 전역 함수인 isNaN() 함수가 가지고 있던 숫자로의 강제 변환에 따라 발생하는 문제 방지
 * 오직 숫자인 값에서만 동작하며, 그 값이 NaN인 경우에만 true를 반환
 **/

Number.isNaN(NaN);       // true
Number.isNaN(0 / 0);     // true
// 다음은 전역 함수인 isNaN()에서 잘못된 결과를 반환하는 임.

isNaN("NaN");            // true
isNaN(undefined);        // true
isNaN("문자열");         // true
// Number.isNaN() 메소드에서 맞는 결과를 반환하고 있음.

Number.isNaN("NaN");     // false
Number.isNaN(undefined); // false
Number.isNaN("문자열");  // false

/**
 * Number.isFinite() : 전달된 값이 유한한 수인지 아닌지를 검사
 * 전역 함수인 isFinite() 함수처럼 전달된 값을 숫자로 강제 변환 안함
 * 오직 셀 수 있는 값에서만 동작하며, 그 값이 유한한 경우에만 true를 반환
 **/

Number.isFinite(0);        // true
Number.isFinite(3e45);     // true
Number.isFinite(Infinity); // false
Number.isFinite(NaN);      // false
// 다음은 전역 함수인 isFinite()에서 잘못된 결과를 반환하는 임.

isFinite("0");             // true
isFinite(null);            // true
// Number.isFinite() 메소드에서는 맞는 결과를 반환하고 있음.

Number.isFinite("0");      // false
Number.isFinite(null);     // false

/**
 * Number.isInteger() : 전달된 값이 정수인지 아닌지를 검사
 * 전달된 값이 정수이면 true를 반환하며, 정수가 아니거나 NaN, Infinity와 같은 값은 모두 false를 반환
 **/

Number.isInteger(0);        // true
Number.isInteger(-100);     // true
Number.isInteger(0.1);      // false
Number.isInteger("문자열"); // false
Number.isInteger(Infinity); // false
Number.isInteger(true);     // false

/**
 * Number.isSafeInteger() : 전달된 값이 안전한 정수(safe integer)인지 아닌지를 검사
 * 안전한 정수(safe integer)란 IEEE 754 국제 표준에서 정의한 64비트 부동 소수점 수로 정확히 표현되는 정수( -(2^53 - 1)부터 (2^53 - 1) )
 **/

Number.isSafeInteger(10);                  // true
Number.isSafeInteger(Math.pow(2, 53) - 1); // true
Number.isSafeInteger(Math.pow(2, 53));     // false
Number.isSafeInteger(Infinity);            // false
Number.isSafeInteger(NaN);                 // false
Number.isSafeInteger(3.14);                // false

/**
 * Math.pow() : 거듭제곱 연산을 수행하는 Math 객체
 * Number.parseFloat() : 문자열을 파싱하여, 문자열에 포함된 숫자 부분을 실수 형태로 반환
 * Number.parseInt() : 문자열을 파싱하여, 문자열에 포함된 숫자 부분을 정수 형태로 반환
 * Number.isNaN() : 전달된 값이 NaN인지 아닌지를 검사
 * Number.isFinite() : 전달된 값이 유한한 수인지 아닌지를 검사
 * Number.isInteger() : 전달된 값이 정수인지 아닌지를 검사
 * Number.isSafeInteger() : 전달된 값이 안전한 정수(safe integer)인지 아닌지를 검사
 **/

/**
 * Number.prototype : 모든 Number 인스턴스는 Number.prototype으로부터 메소드와 프로퍼티를 상속
 * 1. Number.prototype.toExponential()
 * 2. Number.prototype.toFixed()
 * 3. Number.prototype.toPrecision()
 * 4. Number.prototype.toString()
 * 5. Number.prototype.valueOf()
 **/

/**
 * toExponential() : Number 인스턴스의 값을 지수 표기법으로 변환한 후, 그 값을 문자열로 반환
 * 이때 전달받은 값은 지수 표기법에서 소수 부분의 자릿수로 사용
 * numObj.toExponential([소수부분의자릿수])
 **/

var num = 12.3456;       // Number 인스턴스를 생성함.
num.toExponential();     // 1.23456e+1
num.toExponential(2);    // 1.23e+1
num.toExponential(4);    // 1.2346e+1
12.3456.toExponential(); // 1.23456e+1

/**
 * toFixed() : Number 인스턴스의 소수 부분 자릿수를 전달받은 값으로 고정한 후, 그 값을 문자열로 반환
 * numObj.toFixed([소수부분의자릿수])
 **/

var num = 3.14159265;  // Number 인스턴스를 생성함.
num.toFixed();         // 3
num.toFixed(2);        // 3.14
num.toFixed(4);        // 3.1416
3.14159265.toFixed(6); // 3.141593

/**
 * toPrecision() : Number 인스턴스의 가수와 소수 부분을 합친 자릿수를 전달받은 값으로 고정한 후, 그 값을 문자열로 반환
 * numObj.toPrecision([전체자릿수])
 **/
var num = 3.14159265;      // Number 인스턴스를 생성함.
num.toPrecision();         // 3.14159265
num.toPrecision(2);        // 3.1
num.toPrecision(4);        // 3.142
3.14159265.toPrecision(6); // 3.14159

/**
 * toString() : Number 인스턴스의 값을 문자열로 반환
 * 전달받은 값에 해당하는 진법으로 우선 값을 변환한 후, 그 값을 문자열로 반환
 * numObj.toString([진법])
 * 숫자 리터럴에 toString() 메소드를 사용할 때에는 반드시 괄호(())를 사용하여 숫자 리터럴을 감싸야 함.
 * 그렇지 않으면 자바스크립트는 SyntaxError를 발생한 후, 프로그램을 중지
 **/
var num = 255;       // Number 인스턴스를 생성함.
num.toString();      // 255
(255).toString();    // 255
(3.14).toString();   // 3.14
num.toString(2);     // 11111111
(100).toString(16);  // 64
(-0xff).toString(2); // -11111111

/**
 * valueOf() : Number 인스턴스가 가지고 있는 값을 반환
 * numObj.valueOf()
 **/
var numObj = new Number(123); // 123의 값을 가지는 Number 인스턴스를 생성함.
typeof numObj;                // object
var num = numObj.valueOf();
num;                          // 123
typeof num;                   // number

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * Math 객체 : 수학에서 자주 사용하는 상수와 함수들을 미리 구현해 놓은 자바스크립트 표준 내장 객체
 * Math 객체는 다른 전역 객체와는 달리 생성자(constructor)가 존재 X
 * 따라서 따로 인스턴스를 생성하지 않아도 Math 객체의 모든 메소드나 프로퍼티를 바로 사용 가능
 *
 * Math 메소드 : 자바스크립트는 웹 페이지에서 수학적 작업을 손쉽게 할 수 있도록 다양한 Math 메소드를 제공
 *
 * 자주 쓰이는 메소드
 * Math.min(x, y, ...) : 인수로 전달받은 값 중에서 가장 작은 수를 반환
 * Math.max(x, y, ...) : 인수로 전달받은 값 중에서 가장 큰 수를 반환
 * Math.random() : 0보다 크거나 같고 1보다 작은 랜덤 숫자(random number)를 반환
 * Math.round(x) : x를 소수점 첫 번째 자리에서 반올림하여 그 결과를 반환
 * Math.floor(x) : x와 같거나 작은 수 중에서 가장 큰 정수를 반환
 * Math.ceil(x) : x와 같거나 큰 수 중에서 가장 작은 정수를 반환
 * Math.abs(x) : x의 절댓값을 반환
 * Math.cbrt(x) : x의 세제곱근을 반환
 * Math.sqrt(x) : x의 제곱근을 반환
 * Math.clz32(x) : x을 32비트 이진수로 변환한 후, 0이 아닌 비트의 개수를 반환
 *
 * 종종 쓰이는 메소드
 * Math.exp(x) : ex 의 값을 반환 (e : 오일러의 수)
 * Math.expm1(x) : 1 - ex 의 값을 반환
 * Math.fround(x) : x와 가장 근접한 32비트 부동 소수점 수(single precision float)를 반환
 * Math.hypot(x, y, ...) : 인수로 전달받은 값들을 각각 제곱한 후 더한 총합의 제곱근을 반환
 * Math.imul(x, y) : 인수로 전달받은 두 값의 32비트 곱셈의 결과를 반환
 * Math.log(x) : x의 자연로그 값을 반환 (ln x)
 * Math.log1p(x) : ln(1 + x)의 값을 반환
 * Math.log10(x) : x의 10을 밑으로 가지는 로그 값을 반환
 * Math.log2(x) : x의 2를 밑으로 가지는 로그 값을 반환
 * Math.pow(x, y) : x의 y승을 반환
 * Math.sign(x) : x의 부호 값을 반환
 * Math.trunc(x) : x의 모든 소수 부분을 삭제하고 정수 부분만을 반환
 *
 * Math 프로퍼티 : 자바스크립트는 수학에서 사용하는 다양한 상수들을 Math 프로퍼티를 이용해 제공
 * Math.E : 오일러의 수(Euler's constant), 자연로그(natural logarithms)의 밑(base) 값, 2.718
 * Math.LN2 : 2의 자연로그 값, 0.693
 * Math.LN10 : 10의 자연로그 값, 2.303
 * Math.LOG2E : 오일러 수(e)의 밑 값이 2인 로그 값, 1.443
 * Math.LOG10E : 오일러 수(e)의 밑 값이 10인 로그 값, 0.434
 * Math.PI : 원의 원주를 지름으로 나눈 비율(원주율) 값, 3.14159
 * Math.SQRT1_2 : 2의 제곱근의 역수 값, 0.707
 * Math.SQRT2 : 2의 제곱근 값, 1.414
 *
 **/
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/**
 * Date 객체 : 자바스크립트에서는 Date 객체를 사용하여 매 순간 변화하는 시간과 날짜에 관한 정보를 손쉽게 제공
 * Date 객체는 연월일, 시분초의 정보와 함께 밀리초(millisecond)의 정보도 함께 제공
 *
 * 1. 연도(year) : 1900년(00) ~ 1999년(99)
 * 2. 월(month) : 1월(0) ~ 12월(11)
 * 3. 일(day) : 1일(1) ~ 31일(31)
 * 4. 시(hours) : 0시(0) ~ 23시(23)
 * 5. 분(minutes) : 0분(0) ~ 59분(59)
 * 6. 초(seconds) : 0초(0) ~ 59초(59)
 *
 * 자바스크립트에서 월(month)을 나타낼 때는 1월이 0으로 표현되고, 12월이 11로 표현된다는 사실에 유의!!
 * 
 * Date 객체 초기화
 * 1. new Date()
 * 2. new Date("날짜를 나타내는 문자열")
 * 3. new Date(밀리초)
 * 4. new Date(년, 월, 일, 시, 분, 초, 밀리초)
 * Date 객체를 생성할 때 어떠한 인수도 전달하지 않으면, 현재 날짜와 시간을 가지고 Date 객체를 생성
 * Date 객체를 생성할 때 인수가 전달되면, 그 형태에 따라 특정 날짜와 시간을 가리키는 Date 객체를 생성
 * 자바스크립트에서 날짜 계산의 모든 기준은 1970년 1월 1일 00:00:00(UTC, 협정세계시)부터!!
 * 또한, 하루는 86,400,000 밀리초(millisecond)로 계산
 **/
var date = new Date(); // Date 객체 생성
document.write(date);

new Date("December 14, 1977 13:30:00");                             // 날짜를 나타내는 문자열
new Date(80000000);                                                 // 1970년 1월 1일 0시부터 해당 밀리초만큼 지난 날짜
new Date(16, 5, 25);                                     // 3개의 숫자로 나타내는 날짜이며, 시간은 자동으로 0시 0분 0초로 설정됨.
new Date(16, 5, 25, 15, 40, 0);    // 7개의 숫자로 나타내는 날짜
new Date(2016, 5, 25, 15, 40, 0);  // 2000년대를 표기하고자 할 때에는 연도를 전부 표기해야 함.

/**
 * 자바스크립트 날짜 양식(date format)
 * 1. ISO 날짜 양식
 * 2. Long 날짜 양식
 * 3. Short 날짜 양식
 * 4. Full 날짜 양식
 **/

/**
 * ISO 날짜 양식 : ISO 8601은 날짜와 시간을 나타내는 국제 표준 양식
 * YYYY-MM-DDTHH:MM:SS // T는 UTC(협정세계시)를 나타내는 문자로 시간까지 표현할 때에는 반드시 사용해야 함.
 * YYYY-MM-DD
 * YYYY-MM
 * YYYY
 **/
new Date("1977-12-14T13:30:00"); // 날짜와 시간까지 표현함.
new Date("1977-12-14");          // 시간이 생략되면 자동으로 09:00:00으로 설정됨.
new Date("1977-12");             // 일이 생략되면 자동으로 1일로 설정됨.
new Date("1977");                // 월이 생략되면 자동으로 1월로 설정됨.

/**
 * Long 날짜 양식
 * MMM DD YYYY
 * DD MMM YYYY
 **/
new Date("Feb 19 1982");        // MMM DD YYYY
new Date("19 Feb 1982");        // DD MMM YYYY
new Date("February 19 1982");   // 월의 축약형 뿐만 아니라 전체 단어도 인식함.
new Date("FEBRUARY, 19, 1982"); // 쉼표는 무시되며, 대소문자의 구분은 없음.

/**
 * Short 날짜 양식
 * MM/DD/YYYY
 * YYYY/MM/DD
 **/
new Date("02/19/1982"); // MM/DD/YYYY
new Date("1982/02/19"); // YYYY/MM/DD
//ISO 날짜 양식과 short 날짜 양식에서는 반드시 월일 순서로 날짜가 나와야 하며, 일월 순서로 나온 날짜는 자바스크립트가 제대로 인식 불가

/**
 * Full 날짜 양식 : 사용하는 날짜 양식으로 표현된 문자열도 날짜로 인식
 **/
new Date("Wed May 25 2016 17:00:00 GMT+0900 (Seoul Time)");
// GMT가 현재 국가와 다른 시간은 현재 국가의 GMT로 변환되어 표현됨.

new Date("Wed May 25 2016 17:00:00 GMT-0500 (New York Time)");
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * Date.now() : 1970년 1월 1일 0시 0분 0초부터 현재까지의 시간을 밀리초(millisecond) 단위의 정수로 반환
 **/
var nowMiliSec = Date.now();
nowMiliSec;           // 1970년 1월 1일 00:00:00부터 현재까지의 밀리초
new Date(nowMiliSec); // new Date()와 같은 결과를 반환
new Date();


/**
 * Date.prototype getter
 * 모든 Date 인스턴스는 Date.prototype으로부터 메소드와 프로퍼티를 상속 받음
 * Date.prototype getter 메소드는 날짜와 관련된 정보를 받아오기 위한 메소드
 *
 * 1. getFullYear()
 * 2. getDate()
 * 3. getDay()
 * 4. getTime()
 **/


// getFullYear() : 현재 연도를 4비트의 숫자(YYYY)로 반환
var date = new Date();
document.write("올해는 " + date.getFullYear() + "년"); // 현재 연도를 반환

// getDate() : 현재 날짜에 해당하는 숫자를 반환
var date = new Date();
document.write("오늘은 " + date.getMonth() + "월 " + date.getDate() + "일"); // 현재 날짜를 반환

// getDay() : 현재 요일에 해당하는 숫자를 반환, 자바스크립트에서 일요일(0) ~ 토요일(6)
var date = new Date();
var day;

switch (date.getDay()) { // 현재 요일을 반환
    case 0:
        day = "일";
        break;

    case 1:
        day = "월";
        break;
    // ...
    case 6:
        day = "토";
        break;
}

document.write("오늘은 " + day + "요일");

// 배열을 사용하면 더욱 간단하게 요일을 출력 가능
var date = new Date();
var days = ["일", "월", "화", "수", "목", "금", "토"];

document.write("오늘은 " + days[date.getDay()] + "요일");

// getTime() : 1970년 1월 1일 0시 0분 0초부터 현재까지의 시간을 밀리초 단위로 환산한 값을 숫자로 반환
var date = new Date();
var period = date.getTime() / 86400000 // 하루는 86,400,000 밀리초로 계산됨.

document.write("1970년 1월 1일부터 오늘까지 " + period.toFixed() + "일이 지났습니다."); // 소수 부분은 생략함.

/**
 * Date.prototype getter 메소드
 * getDate() : 현지 시각으로 현재 일자에 해당하는 숫자를 반환 / 1 ~ 31
 * getDay() : 현지 시각으로 현재 요일에 해당하는 숫자를 반환 / 0(월) ~ 6(일)
 * getMonth() : 현지 시각으로 현재 월에 해당하는 숫자를 반환 / 0 ~ 11
 * getFullYear() : 현지 시각으로 현재 연도를 4비트의 숫자(YYYY)로 반환 / YYYY
 * getHours() : 현지 시각으로 현재 시각에 해당하는 숫자를 반환 / 0 ~ 23
 * getMilliseconds() : 현지 시각으로 현재 시각의 밀리초에 해당하는 숫자를 반환 / 0 ~ 999
 * getMinutes() : 현지 시각으로 현재 시각의 분에 해당하는 숫자를 반환 / 0 ~ 59
 * getSeconds() : 현지 시각으로 현재 시각의 초에 해당하는 숫자를 반환 / 0 ~ 59
 * getTime() : 1970년 1월 1일 0시 0분 0초부터 현재까지의 시간을 밀리초 단위로 환산한 값을 숫자로 반환 / -
 * getTimezoneOffset() : UTC로부터 현재 시각까지의 시간차를 분 단위로 환산한 값을 숫자로 반환 / -
 **/

/**
 * 자바스크립트 Date.prototype UTC getter 메소드
 * getUTCDate() : 협정세계시(UTC)로 현재 일자에 해당하는 숫자를 반환
 * getUTCDay() : 협정세계시(UTC)로 현재 요일에 해당하는 숫자를 반환
 * getUTCMonth() : 협정세계시(UTC)로 현재 월에 해당하는 숫자를 반환
 * getUTCFullYear() : 협정세계시(UTC)로 현재 연도를 4비트의 숫자(YYYY)로 반환
 * getUTCHours() : 협정세계시(UTC)로 현재 시각에 해당하는 숫자를 반환
 * getUTCMilliseconds() : 협정세계시(UTC)로 현재 시각의 밀리초에 해당하는 숫자를 반환
 * getUTCMinutes() : 협정세계시(UTC)로 현재 시각의 분에 해당하는 숫자를 반환
 * getUTCSeconds() : 협정세계시(UTC)로 현재 시각의 초에 해당하는 숫자를 반환
 **/

/**
 * Date.prototype setter 메소드 : 날짜와 관련된 정보를 설정하기 위한 메소드
 * setFullYear() : Date 객체의 값을 특정 날짜로 설정
 * setDate() : Date 객체의 일자 값을 특정 일자로 설정
 **/

var date = new Date();
date.setFullYear(1982, 1, 19); // 자바스크립트에서 2월은 1임.
date.getFullYear();            // 1982
date.getMonth();               // 1
date.getDate();                // 19

var date = new Date();
date.setDate(10);              // Date 객체의 일자 값을 10일로 설정함.

document.write(date + "<br>");

date.setDate(40);              // 40일을 설정하면, 초과되는 일수만큼 다음달로 넘어감.
document.write(date);


/**
 * 자바스크립트 Date.prototype setter 메소드
 * setDate() : 현지 시각으로 특정 일자를 설정함. / 1 ~ 31
 * setMonth()    현지 시각으로 특정 월을 설정함. / 0 ~ 11
 * setFullYear() : 현지 시각으로 특정 연도를 설정함. (연도뿐만 아니라 월과 일자도 설정할 수 있음) / YYYY, MM, DD
 * 자바스크립트에서 setDay() : 존재 X
 *
 * setHours() : 현지 시각으로 특정 시간을 설정함. / 0 ~ 23
 * setMilliseconds() : 현지 시각으로 특정 밀리초를 설정함. / 0 ~ 999
 * setMinutes() : 현지 시각으로 특정 분을 설정함. / 0 ~ 59
 * setSeconds() : 현지 시각으로 특정 초를 설정함. / 0 ~ 59
 * setTime() : 1970년 1월 1일 0시 0분 0초부터 밀리초 단위로 표현되는 특정 시간을 설정함. / -
 *
 * 자바스크립트 Date.prototype UTC setter 메소드
 * setUTCDate() : 협정세계시(UTC)로 특정 일자를 설정 / 1 ~ 31
 * setUTCMonth() : 협정세계시(UTC)로 특정 월을 설정 / 0 ~ 11
 * setUTCFullYear() : 협정세계시(UTC)로 특정 연도를 설정 (연도뿐만 아니라 월과 일자도 설정할 수 있음) / YYYY, MM, DD
 * setUTCHours() : 협정세계시(UTC)로 특정 시간을 설정 / 0 ~ 23
 * setUTCMilliseconds() : 협정세계시(UTC)로 특정 밀리초를 설정 / 0 ~ 999
 * setUTCMinutes() : 협정세계시(UTC)로 특정 분을 설정 / 0 ~ 59
 * setUTCSeconds() : 협정세계시(UTC)로 특정 초를 설정 / 0 ~ 59
 **/
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/**
 * String 객체 : 문자열 리터럴은 큰따옴표("")나 작은따옴표('')를 사용하여 손쉽게 만들 수 있습니다.
 * 문자열의 길이 : length 프로퍼티에 저장
 * 오랫동안 사용되어 온 아스키(ASCII) 인코딩 환경에서 영문자는 한 글자당 1바이트, 한글은 한 글자당 2바이트로 표현
 * 하지만 UTF-8 인코딩 환경에서는 영문자는 한 글자당 1바이트, 한글은 한 문자당 3바이트로 표현
 * 자바스크립트의 length 프로퍼티는 해당 문자열의 총 바이트 수를 저장하는 것이 아닌 글자의 개수만을 저장
 **/
var firstStr = "이것도 문자열";      // 큰따옴표를 사용한 문자열
var secondStr = '이것도 문자열';     // 작은따옴표를 사용한 문자열
var thirdStr = "나의 이름은 '홍길동'이야."  // 작은따옴표는 큰따옴표로 둘러싸인 문자열에만 포함될 수 있음.
var fourthStr = '나의 이름은 "홍길동"이야.' // 큰따옴표는 작은따옴표로 둘러싸인 문자열에만 포함될 수 있음.

var strKor = "한글";
var strEng = "abcABC";
strKor.length; // 2
strEng.length; // 6

/**
 * 이스케이프 시퀀스(escape sequence)
 * 1. 16진수 이스케이프 시퀀스(hexadecimal escape sequence)
 * 2. 유니코드 이스케이프 시퀀스(unicode escape sequence)
 * 3. 유니코드 코드 포인트 이스케이프(unicode code point escape)
 * 
 * 긴 문자열 리터럴을 나누어 표현 : 역 슬래시(\)나 결합(+) 연산자를 사용 가능
 * 역 슬래시(\)를 사용한 방식은 ECMAScript의 표준 방식이 아님.
 * 따라서 특정 웹 브라우저에서는 정상적으로 표현되지 않을 수 있음
**/
// 16진수 이스케이프 시퀀스로 \x 다음은 16진수 수로 인식됨.
'\xA2';
// 유니코드 이스케이프 시퀀스로 \u 다음은 유니코드로 인식됨.
'\u00A2';
// ECMAScript 6부터 새롭게 추가된 유니코드 코드 포인트 이스케이프 방식
String.fromCodePoint(0x00A2);
String.fromCodePoint() //메소드는 사파리, 익스플로러에서 지원 X

document.write("이 문자열은 아주 긴 문자열 \
따라서 몇 번에 걸친 줄 나누기가 필요 \
자바스크립트에서는 역슬래시와 문자 결합 연산자를 사용하여 줄을 나눌 수 있습니다.<br>");

document.write("이 문자열은 아주 긴 문자열" +
" 따라서 몇 번에 걸친 줄 나누기가 필요" +
" 자바스크립트에서는 역슬래시와 문자 결합 연산자를 사용하여 줄을 나눌 수 있습니다.");

/**
 * String 객체 : 자바스크립트에서 문자열은 보통 문자열 리터럴을 사용하여 표현
 * 하지만 문자열을 나타낼 때 new 연산자를 사용하여 명시적으로 String 객체를 생성
 * 이러한 String 객체는 문자열 값을 감싸고 있는 래퍼(wrapper) 객체
 **/
var str = "JavaScript";
var strObj = new String("JavaScript");

str;              // "JavaScript"
strObj;           // "JavaScript"

typeof str;       // string
typeof strObj;    // object

(str == strObj);  // 문자열 값이 같으므로, true를 반환
(str === strObj); // 문자열 값은 같지만 타입이 다르므로, false를 반환

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * String 메소드 : String 객체에 정의된 문자열과 관련된 작업을 할 때 사용하는 메소드
 *
 * 1. String.fromCharCode() : 쉼표로 구분되는 일련의 유니코드에 해당하는 문자들로 구성된 문자열을 반환
 * 2. String.fromCodePoint() : 쉼표로 구분되는 일련의 코드 포인트(code point)에 해당하는 문자들로 구성된 문자열을 반환(사파리, 익스플로러에서 지원 X)
 **/
String.fromCharCode(65, 66, 67); // "ABC"

String.fromCodePoint(65, 66, 67); // "ABC"
String.fromCodePoint(0x2F804);    // "\uD87E\uDC04"
String.fromCodePoint(194564);     // "\uD87E\uDC04"

/**
 *
 * String.raw() : 템플릿 문자열(template string)의 원형을 반환
 * String.prototype : 모든 String 인스턴스는 String.prototype으로부터 메소드와 프로퍼티를 상속받습니다.
 * 이렇게 상속받은 String.prototype 메소드를 이용하면, 다음과 같은 문자열 작업 가능
 *
 * 1. 문자열에서의 위치 반환
 * 2. 문자열에서 지정된 위치에 있는 문자 반환
 * 3. 문자열 추출
 * 4. 문자열 분리
 * 5. 문자열 결합
 * 6. 문자열의 대소문자 변환
 * 7. 문자열 주위의 공백 제거
 * 8. 정규 표현식을 이용한 문자열 조작
 * String 인스턴스의 값은 변경될 수(immutable) 없으므로, 모든 String 메소드는 결괏값으로 새로운 문자열을 생성하여 반환
 **/

/**
 * 문자열에서의 위치 찾기
 * indexOf() : String 인스턴스에서 특정 문자나 문자열이 처음으로 등장하는 위치의 인덱스를 반환
 * lastIndexOf() : String 인스턴스에서 특정 문자나 문자열이 마지막으로 등장하는 위치의 인덱스를 반환
 * 이 메소드들은 문자열을 찾기 시작할 String 인스턴스의 위치를 두 번째 인수로 전달 가능
 * 만약 전달받은 특정 문자나 문자열을 찾을 수 없을 때는 -1을 반환
 **/

var str = "abcDEFabc";

str.indexOf('abc');     // 0  -> 자바스크립트에서 인덱스는 0부터 시작함.
str.indexOf('abcd');    // -1 -> 문자열을 비교할 때 문자의 대소문자를 구분함.
str.indexOf('abc', 3);  // 6  -> 인덱스 3부터 'abc'를 찾기 시작함.
str.lastIndexOf('abc'); // 6
str.lastIndexOf('d');   // -1
str.lastIndexOf('c');   // 8

/**
 * 문자열에서 지정된 위치에 있는 문자 반환
 * charAt() : String 인스턴스에서 전달받은 인덱스에 위치한 문자를 반환
 * charCodeAt() : String 인스턴스에서 전달받은 인덱스에 위치한 문자의 UTF-16 코드를 반환 (0 ~ 65535)
 * charPointAt() : String 인스턴스에서 전달받은 인덱스에 위치한 문자의 유니코드 코드 포인트(unicode code point)를 반환
 **/
var str = "abcDEFabc";

str.charAt(0);      // a
str.charAt(10);     // 빈 문자열 -> 전달받은 인덱스가 문자열의 길이보다 클 경우에는 빈 문자열을 반환
str.charCodeAt(0);  // 97        -> 'a'에 해당하는 UTF-16 코드를 반환
str.codePointAt(0); // 97        -> 'a'에 해당하는 유니코드 코드 포인트를 반환(사파리, 익스플로러에서 지원 X)

/**
 * 문자열 추출
 * slice() : String 인스턴스에서 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 문자열을 추출한 새 문자열을 반환
 * substring() : String 인스턴스에서 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 문자열을 추출한 새 문자열을 반환
 * substr() : String 인스턴스에서 전달받은 시작 인덱스부터 길이만큼의 문자열을 추출한 새로운 문자열을 반환
 **/

var str = "abcDEFabc";
str.slice(2, 6);     // cDEF     -> 인덱스 2부터 인덱스 5까지의 문자열을 추출함.
str.slice(-4, -2);   // Fa       -> 음수로 전달된 인덱스는 문자열의 뒤에서부터 시작함.
str.slice(2);        // abcDEFab -> 인수로 종료 인덱스가 전달되지 않으면 문자열의 마지막까지 추출함.

str.substring(2, 6); // cDEF
str.substr(2, 4);    // cDEF

/**
 * 문자열 분리
 * split() : String 인스턴스에서 구분자(separator)를 기준으로 나눈 후, 나뉜 문자열을 하나의 배열로 반환
 **/

var str = "자바스크립트는 너무 멋져요! 그리고 유용해요.";
str.split();    // 구분자를 명시하지 않으면 아무런 동작도 하지 않음.
str.split("");  // 한 문자("")씩 나눔.
str.split(" "); // 띄어쓰기(" ")를 기준으로 나눔.
str.split("!"); // 느낌표("!")를 기준으로 나눔.

/**
 * 문자열 결합
 * concat() : String 인스턴스에 전달받은 문자열을 결합한 새로운 문자열을 반환
 **/
var str = "자바스크립트";

str;                                                // 자바스크립트
str.concat("는 너무 멋져요!");                      // 자바스크립트는 너무 멋져요!
str.concat("는 너무 멋져요!", " 그리고 유용해요."); // 자바스크립트는 너무 멋져요! 그리고 유용해요!
str;                                                // 자바스크립트
/**
 * 위의 에서 여러 번 concat() 메소드를 실행한 후의 변수 str의 문자열은 여전히 처음과 같습니다.
 * 이처럼 자바스크립트에서 String 인스턴스의 값은 변경될 수(immutable) 없습니다.
 * 따라서 모든 String 메소드는 결괏값으로 새로운 문자열을 생성하여 반환
 **/

/**
 * 문자열의 대소문자 변환
 * toUpperCase() : String 인스턴스의 모든 문자를 대문자로 변환한 새로운 문자열을 반환
 * toLowerCase() : String 인스턴스의 모든 문자를 소문자로 변환한 새로운 문자열을 반환
 **/

var str = "JavaScript";

str.toUpperCase(); // JAVASCRIPT
str.toLowerCase(); // javascript

/**
 * 문자열 주위의 공백 제거
 * trim() : String 인스턴스의 문자열 값 그 자체에는 영향을 주지 않습니다.
 **/
var str = "      JavaScript    ";
str.trim();

/**
 * 정규 표현식을 이용한 문자열 조작
 * search() : 인수로 전달받은 정규 표현식에 맞는 문자나 문자열이 처음으로 등장하는 위치의 인덱스를 반환
 * replace() : 인수로 전달받은 패턴에 맞는 문자열을 대체 문자열로 변환한 새 문자열을 반환
 * match() : 인수로 전달받은 정규 표현식에 맞는 문자열을 찾아서 하나의 배열로 반환
 **/

/**
 * 기타 String 관련 메서드
 * includes() : 인수로 전달받은 문자나 문자열이 포함되어 있는지를 검사한 후 그 결과를 불리언 값으로 반환
 * startsWith() : 인수로 전달받은 문자나 문자열로 시작되는지를 검사한 후 그 결과를 불리언 값으로 반환
 * endsWith() : 인수로 전달받은 문자나 문자열로 끝나는지를 검사한 후 그 결과를 불리언 값으로 반환
 * toLocaleUpperCase() : 영문자뿐만 아니라 모든 언어의 문자를 대문자로 변환한 새로운 문자열을 반환
 * toLocaleLowerCase() : 영문자뿐만 아니라 모든 언어의 문자를 소문자로 변환한 새로운 문자열을 반환
 * localeCompare() : 인수로 전달받은 문자열과 정렬 순서로 비교하여 그 결과를 정수 값으로 반환
 * normalize() : 해당 문자열의 유니코드 표준화 양식(Unicode Normalization Form)을 반환
 * repeat() : 해당 문자열을 인수로 전달받은 횟수만큼 반복하여 결합한 새로운 문자열을 반환
 * toString() : String 인스턴스의 값을 문자열로 반환
 * valueOf() : String 인스턴스의 값을 문자열로 반환
 *
 **/
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/**
 * Array 객체 : 자바스크립트에서 배열(array)은 정렬된 값들의 집합으로 정의되며, Array 객체로 다룸
 *
 * Array 메소드
 * 1. Array.isArray()
 * 2. Array.from()
 * 3. Array.of()
 **/

//Array.isArray() : 전달받은 값이 Array 객체인지 아닌지를 검사

Array.isArray([]);          // true
Array.isArray(new Array()); // true
Array.isArray(123);         // false
Array.isArray("Array");     // false
Array.isArray(true);        // false

/**
 * Array.from() : ECMAScript 6부터 추가된 Array.from() 메소드는 다음 객체들을 배열처럼 변환
 * 1. 배열과 비슷한 객체(array-like objects) : length 프로퍼티와 인덱스 된 요소를 가지고 있는 객체
 * 2. 반복할 수 있는 객체(iterable objects) : Map과 Set 객체 및 문자열과 같이 해당 요소를 개별적으로 선택할 수 있는 객체
 * 하지만 이렇게 생성된 객체는 정확히 말하면 Array 객체는 아니며, Array 객체의 자식 클래스(child class)
 * Array.from() 메소드는 파이어폭스 32.0 이상의 버전에서만 지원
**/

function arrayFrom() {
    return Array.from(arguments);
}

Array.from(arrayFrom(1, 2, 3));        // [1, 2, 3]
var myMap = new Map([[1, 2], [3, 4]]);
Array.from(myMap);                     // [1, 2, 3, 4]
Array.from("JavaScript");              // [J,a,v,a,S,c,r,i,p,t]

/**
 * Array.of() : ECMAScript 6부터 추가된 Array.of() 메소드는 인수의 수나 타입에 상관없이 인수로 전달받은 값을 가지고 새로운 Array 인스턴스를 생성
 * 이때 Array.of() 메소드와 Array 객체 생성자와의 차이로는 정수로 전달된 인수의 처리 방식에 있음
 * 아래 에서 Array 객체 생성자에 인수로 정수 10을 전달하면, 생성자는 길이가 10인 빈 배열 생성
 * 하지만 Array.of() 메소드에 인수로 정수 10을 전달하면, 정수 10을 배열 요소로 가지는 길이가 1인 배열 생성
 * Array.of() 메소드는 익스플로러, 오페라, 사파리에서 지원 X
 **/
new Array(10); // [,,,,,,,,,] -> 10개의 배열 요소를 가지는 빈 배열을 생성함.
Array.of(10);  // [10] -> 한 개(숫자 10)의 배열 요소를 가지는 배열을 생성함.

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * Array 메소드
 *
 * Array.prototype 메소드 : 모든 Array 인스턴스는 Array.prototype으로부터 메소드와 프로퍼티를 상속
 * 1. 원본 배열을 변경하는 메소드
 * 2. 원본 배열은 변경하지 않고 참조만 하는 메소드
 * 3. 원본 배열을 반복적으로 참조하는 메소드
 **/

/**
 * 원본 배열을 변경하는 Array.prototype 메소드
 * 1. push()
 * 2. pop()
 * 3. shift()
 * 4. unshift()
 * 5. reverse()
 * 6. sort()
 * 7. splice()
 **/

/**
 * push() : 하나 이상의 요소를 배열의 가장 마지막에 추가
 * 원본 배열은 추가한 요소의 수만큼 길이(length)가 늘어나게 되며, 요소를 성공적으로 추가하면 배열의 총 길이를 반환
 **/
var arr = [1, true, "JavaScript"];
arr.length;               // 3
arr.push("자바스크립트");
arr.length;               // 4
arr;                      // [1,true,JavaScript,자바스크립트]
arr.push(2, "거짓");
arr.length;               // 6
arr;                      // [1,true,JavaScript,자바스크립트,2,거짓]

/**
 * pop() : 배열의 가장 마지막 요소를 제거하고, 그 제거된 요소를 반환
 * 따라서 pop() 메소드를 실행할 때마다 배열의 길이는 1씩 줄어듦
 **/
var arr = [1, true, "JavaScript", "자바스크립트"];
arr.length;  // 4
arr.pop();   // 자바스크립트
arr.length;  // 3
arr.pop();   // JavaScript
arr.length; // 2
arr;         // [1,true]

/**
 * shift() : pop() 메소드와는 달리 배열의 가장 마지막 요소가 아닌 첫 요소를 제거하고, 그 제거된 요소를 반환
 * 따라서 shift() 메소드도 실행할 때마다 배열의 길이가 1씩 줄어듦
 **/
var arr = [1, true, "JavaScript", "자바스크립트"];
arr.length;  // 4
arr.shift(); // 1
arr.length;  // 3
arr.shift(); // true
arr.length;  // 2
arr;         // [JavaScript,자바스크립트]

/**
 * unshift() : 하나 이상의 요소를 배열의 가장 앞에 추가
 * 원본 배열은 추가한 요소의 수만큼 길이(length)가 늘어나게 되며, 요소를 성공적으로 추가하면 배열의 총 길이를 반환
 **/
var arr = [1, true, "JavaScript"];
arr.length;                  // 3
arr.unshift("자바스크립트");
arr.length;                  // 4
arr;                         // [자바스크립트,1,true,JavaScript]
arr.unshift(2, "거짓");
arr.length;                  // 6
arr;                         // [2,거짓,자바스크립트,1,true,JavaScript]

/**
 * pop()과 push() 메소드를 사용하면 배열을 스택(stack)이라는 데이터 구조처럼 사용할 수 있으며(LIFO),
 * shift()와 push() 메소드를 사용하면 배열을 큐(queue)라는 데이터 구조처럼 사용 가능(FIFO)
 **/

/**
 * reverse() : 배열 요소의 순서를 전부 반대로 교체
 * 즉, 가장 앞에 있던 요소가 가장 뒤에 위치하며, 가장 뒤에 있던 요소는 가장 앞에 위치!
 **/
var arr = [1, true, "JavaScript", "자바스크립트"];
arr.reverse(); // [자바스크립트,JavaScript,true,1]]

/**
 * sort() : 해당 배열의 배열 요소들을 알파벳 순서에 따라 정렬
 * 이 메소드는 배열 요소를 모두 문자열로 보고 정렬하므로, 숫자나 불리언과 같은 타입의 요소들은 잘못 정렬 될 수도 있음.
 **/
var strArr = ["로마", "나라", "감자", "다람쥐"]; // 한글은 ㄱ,ㄴ,ㄷ순으로 정렬됨.
var numArr = [10, 21, 1, 2, 3];                  // 숫자는 각 자릿수 별로 비교된 후 정렬됨.
strArr.sort(); // [감자,나라,다람쥐,로마]
numArr.sort(); // [1,10,2,21,3]

/**
 * splice() : 기존의 배열 요소를 제거하거나 새로운 배열 요소를 추가하여 배열의 내용을 변경
 * 첫 번째 인수는 새로운 요소가 삽입될 위치의 인덱스, 두 번째 인수는 제거할 요소의 개수
 * 그 이후의 인수들은 모두 배열 요소로서 지정된 인덱스부터 차례대로 삽입
 * 이 메소드는 배열에서 제거된 요소를 배열의 형태로 반환하며, 아무 요소도 제거되지 않았으면 빈 배열을 반환
 **/

var arr = [1, true, "JavaScript", "자바스크립트"];
// 인덱스 1의 요소부터 2개의 요소를 제거한 후, false와 "C언어"를 그 자리에 삽입함.
var removedElement = arr.splice(1, 2, false, "C언어");
arr;            // [1,false,C언어,자바스크립트]
removedElement; // [true,JavaScript]

/**
 * 기타 메소드
 * copyWithin() : 해당 배열에서 일련의 요소들을 복사하여, 명시된 위치의 요소들을 교체
 * fill() : 시작 인덱스부터 종료 인덱스 바로 앞까지의 모든 배열 요소를 특정 값으로 교체
 **/

/**
 * 원본 배열은 변경하지 않고 참조만 하는 메소드
 *
 * 1. join()
 * 2. slice()
 * 3. concat()
 * 4. toString()
 **/

/**
 * join() : 배열의 모든 요소를 하나의 문자열로 반환
 * 인수로 전달받은 문자열은 배열 요소 사이를 구분 짓는 구분자로 사용
 * 만약 인수를 전달받지 않으면 기본값으로 쉼표(,)를 구분자로 사용
 **/
var arr = [1, true, "JavaScript"];

arr.join();      // 1,true,JavaScript
arr.join(' + '); // 1 + true + JavaScript
arr.join(' ');   // 1 true JavaScript
arr.join('');    // 1trueJavaScript

/**
 * slice() : 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 모든 배열 요소를 추출하여 새로운 배열을 반환
 * 인수로 종료 인덱스가 전달되지 않으면 마지막 배열 요소까지 모두 추출
 **/
var arr = [1, true, "JavaScript", "자바스크립트"];
arr.slice(1, 3); // [true,JavaScript]
arr.slice(1);    // [true,JavaScript,자바스크립트 ]

/**
 * concat() : 해당 배열의 뒤에 인수로 전달받은 배열을 합쳐서 만든 새로운 배열을 반환
 **/
var arr = [1, true, "JavaScript"];
arr.concat([2, false, "문자열"]); // [1,true,JavaScript,2,false,문자열]
arr.concat([2], [3, 4]);          // [1,true,JavaScript,2,3,4] -> 2개 이상의 배열도 한 번에 합칠 수 있음.
arr.concat("다섯", [6, 7]);       // [1,true,JavaScript,다섯,6,7] -> 값과 배열도 한 번에 합칠 수 있음.

/**
 * toString() : 해당 배열의 모든 요소를 하나의 문자열로 반환
 * 이때 배열 요소의 사이에는 자동으로 쉼표(,)가 삽입
 **/
var arr = [1, true, "JavaScript"];
arr.toString(); // '1,true,JavaScript'

/**
 * 기타 메소드
 * toLocaleString() : 해당 배열의 모든 요소를 하나의 문자열로 반환
 * indexOf() : 전달받은 값과 동일한 배열 요소가 처음으로 등장하는 위치의 인덱스를 반환
 * lastIndexOf() : 전달받은 값과 동일한 배열 요소가 마지막으로 등장하는 위치의 인덱스를 반환
 **/

/**
 * 원본 배열을 반복적으로 참조하는 메소드
 * 1. forEach()
 * 2. map()
 * 3. filter()
 * 4. every()
 * 5. some()
 * 6. reduce()
 * 7. reduceRight()
 * 8. entries()
 * 9. keys()
 * 10. values()
 **/

/**
 * forEach() : 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행
 **/
var arr = [1, true, "JavaScript"];

function printArr(value, index, array) {
    document.write("arr[" + index + "] = " + value + "<br>");
}

arr.forEach(printArr); // 배열 arr의 각 요소마다 printArr() 함수가 호출됨.

/**
 * map() : 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 실행 결과를 새로운 배열에 담아 반환
 **/
var arr = [1, -2, 3, -4];

// 배열 arr의 각 요소마다 Math.abs() 함수가 호출되고 그 결괏값이 배열로 저장됨.
var absoluteValues = arr.map(Math.abs);
absoluteValues; // [1,2,3,4]

/**
 * filter() : 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결괏값이 true인 요소들만을 새로운 배열에 담아 반환
 **/

var arr = [-10, 5, 100, -20, 40];
function compareValue(value) {
    return value < 10;
}

var lessTen = arr.filter(compareValue);
lessTen; // [-10,5,-20]

/**
 * every() : 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결괏값이 모두 true일 때에만 true를 반환
 **/
var arr = [-10, 5, -20, 4];

function compareValue(value) {
    return value < 10; // 배열의 모든 요소가 10보다 작음.
}
arr.every(compareValue); // true

/**
 * some() : 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결괏값이 하나라도 true이면 true를 반환
 **/
var arr = [10, 25, -20, 14];

function compareValue(value) {
    return value < 10; // 배열 요소 중 -20만이 10보다 작음.
}
arr.some(compareValue); // true

/**
 * reduce() : 해당 배열의 모든 요소를 하나의 값으로 줄이기 위해, 두 개의 인수를 전달받는 콜백 함수를 실행
 * 이때 명시된 콜백 함수에 배열의 첫 번째 요소와 두 번째 요소를 인수로 전달하고 실행
 * 그 결과 반환된 결괏값과 세 번째 요소를 다시 인수로 전달하고 실행
 * 이러한 동작을 반복하여 모든 배열 요소를 인수로 전달하고, 마지막으로 반환된 결괏값을 반환
 **/
var arr = [1, 2, 3, 4, 5];

function sumOfValues(x, y) {
    return x - y;
}
arr.reduce(sumOfValues); // 1 - 2 - 3 - 4 - 5 = -13

/**
 * reduceRight() : reduce() 메소드와 같은 방식으로 실행되며, 배열의 마지막 요소부터 줄이기 시작
 **/
var arr = [1, 2, 3, 4, 5];

function sumOfValues(x, y) {
    return x - y;
}

arr.reduceRight(sumOfValues); // 5 - 4 - 3 - 2 - 1 = -5

/**
 * entries() : 배열 요소별로 키(key)와 값(value)의 한 쌍으로 이루어진 새로운 배열 반복자 객체(Array Iterator Object)를 배열 형태로 반환
 * 이때 키에는 인덱스가 저장되며, 값에는 배열 요소의 값이 저장
 **/
var arr = [1, true, "JavaScript"];
var arrEntries = arr.entries();

for (var entry of arrEntries) {
    document.write(entry + "<br>"); // 배열의 인덱스별로 키(key)와 값(value)의 한 쌍을 출력함.
}

/**
 * 기타 메서드
 * keys() : 배열 요소별로 키(key)만 포함하는 새로운 배열 반복자 객체를 배열 형태로 반환
 * values() : 배열 요소별로 값(value)만 포함하는 새로운 배열 반복자 객체를 배열 형태로 반환
 * find() : 검사를 위해 전달받은 함수를 만족하는 배열 요소의 값을 반환, 만족하는 값이 없으면 undefined를 반환
 * findIndex() : 검사를 위해 전달받은 함수를 만족하는 배열 요소의 인덱스를 반환, 만족하는 값이 없으면 -1을 반환
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * 문서 객체 모델(DOM, Document Object Model) : XML이나 HTML 문서에 접근하기 위한 일종의 인터페이스
 * 이 객체 모델은 문서 내의 모든 요소를 정의하고, 각각의 요소에 접근하는 방법을 제공
 * 이러한 DOM은 W3C의 표준 객체 모델이며, 다음과 같이 계층 구조로 표현
 *
 * https://tcpschool.com/javascript/js_dom_concept => 여기 계층구조 도표 확인
 *
 * 자바스크립트는 이러한 객체 모델을 이용하여 다음과 같은 작업을  가능
 * - 자바스크립트는 새로운 HTML 요소나 속성을 추가 가능
 * - 자바스크립트는 존재하는 HTML 요소나 속성을 제거 가능
 * - 자바스크립트는 HTML 문서의 모든 HTML 요소를 변경 가능
 * - 자바스크립트는 HTML 문서의 모든 HTML 속성을 변경 가능
 * - 자바스크립트는 HTML 문서의 모든 CSS 스타일을 변경 가능
 * - 자바스크립트는 HTML 문서에 새로운 HTML 이벤트를 추가 가능
 * - 자바스크립트는 HTML 문서의 모든 HTML 이벤트에 반응 가능
 *
 * W3C DOM 표준은 세 가지 모델로 구분됩니다.
 * 1. Core DOM : 모든 문서 타입을 위한 DOM 모델
 * 2. HTML DOM : HTML 문서를 위한 DOM 모델
 * 3. XML DOM : XML 문서를 위한 DOM 모델
 *
 * HTML DOM
 * HTML DOM은 HTML 문서를 조작하고 접근하는 표준화된 방법을 정의
 * 모든 HTML 요소는 HTML DOM를 통해 접근 가능
 *
 * XML DOM
 * XML DOM은 XML 문서에 접근하여, 그 문서를 다루는 표준화된 방법을 정의
 * 모든 XML 요소는 XML DOM를 통해 접근 가능
 *
 **/
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/**
 * Document 객체 : 웹 페이지 그 자체를 의미
 * 웹 페이지에 존재하는 HTML 요소에 접근하고자 할 때는 반드시 Document 객체부터 시작!
 *
 * Document 메소드 : HTML 요소와 관련된 작업을 도와주는 다양한 메소드를 제공
 * HTML 요소의 선택
 * HTML 요소의 생성
 * HTML 이벤트 핸들러 추가
 * HTML 객체의 선택
 * 
 * HTML 요소의 선택
 * document.getElementsByTagName(태그이름) : 해당 태그 이름의 요소를 모두 선택
 * document.getElementById(아이디) : 해당 아이디의 요소를 선택
 * document.getElementsByClassName(클래스이름) : 해당 클래스에 속한 요소를 모두 선택
 * document.getElementsByName(name속성값) : 해당 name 속성값을 가지는 요소를 모두 선택
 * document.querySelectorAll(선택자) : 해당 선택자로 선택되는 요소를 모두 선택
 * 이 중에서 document.querySelectorAll() 메소드는 브라우저별로 지원 여부가 다름
 *
 * HTML 요소의 생성
 * document.createElement(HTML요소) : 지정된 HTML 요소를 생성
 * document.write(텍스트) : HTML 출력 스트림을 통해 텍스트를 출력
 * 
 * HTML 이벤트 핸들러 추가
 * document.getElementById(아이디).onclick = function(){ 실행할 코드 }
 * 마우스 클릭 이벤트와 연결될 이벤트 핸들러 코드를 추가
 * 
 * HTML 객체의 선택
 * document.anchors : name 속성을 가지는 <a>요소를 모두 반환
 * document.applets : applet 요소를 모두 반환 (HTML5에서 제외됨)
 * document.body : <body>요소를 반환
 * document.cookie : HTML 문서의 쿠키(cookie)를 반환
 * document.domain HTML 문서가 위치한 서버의 도메인 네임(domain name)을 반환
 * document.forms : <form>요소를 모두 반환
 * document.images : <img>요소를 모두 반환
 * document.links : href 속성을 가지는 <area>요소와 <a>요소를 모두 반환
 * document.referrer : 링크(linking)되어 있는 문서의 URI를 반환
 * document.title : <title>요소를 반환
 * document.URL : HTML 문서의 완전한 URL 주소를 반환
 * document.baseURI : HTML 문서의 절대 URI(absolute base URI)를 반환
 * document.doctype : HTML 문서의 문서 타입(doctype)을 반환
 * document.documentElement <html>요소를 반환
 * document.documentMode : 웹 브라우저가 사용하고 있는 모드를 반환
 * document.documentURI HTML 문서의 URI를 반환
 * document.domConfig : HTML DOM 설정을 반환 (더는 사용하지 않음)
 * document.embeds : <embed>요소를 모두 반환
 * document.head : <head>요소를 반환
 * document.implementation : HTML DOM 구현(implementation)을 반환
 * document.inputEncoding : HTML 문서의 문자 인코딩(character set) 형식을 반환
 * document.lastModified : HTML 문서의 마지막 갱신 날짜 및 시간을 반환함
 * document.readyState : HTML 문서의 로딩 상태(loading status)를 반환
 * document.scripts : <script>요소를 모두 반환
 * document.strictErrorChecking : 오류의 강제 검사 여부를 반환
 *
 **/
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/**
 * DOM 요소의 선택 : HTML 요소를 다루기 위해서는 우선 해당 요소를 선택해야함.
 *
 * 1. HTML 태그 이름(tag name)을 이용한 선택
 * 2. 아이디(id)를 이용한 선택
 * 3. 클래스(class)를 이용한 선택
 * 4. name 속성(attribute)을 이용한 선택
 * 5. CSS 선택자(selector)를 이용한 선택
 * 6. HTML 객체 집합(object collection)을 이용한 선택
 **/

/** HTML 태그 이름(tag name)을 이용한 선택
 * getElementsByTagName() 메소드는 HTML 태그 이름을 이용하여 HTML 요소를 선택
 * item() 메소드는 해당 HTML 객체 집합(obejct collection)에서 전달받은 인덱스에 해당하는 요소를 반환
 * HTML 요소의 style 프로퍼티를 이용하면, 해당 요소의 CSS 스타일을 변경 가능
 * 아이디(id)를 이용한 선택
 **/
var selectedItem = document.getElementsByTagName("li"); // 모든 <li> 요소를 선택

for (var i = 0; i < selectedItem.length; i++) {
    selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.
}

/**
 * getElementById() 메소드는 아이디를 이용하여 HTML 요소를 선택
 * 자바스크립트에서 아이디(id)를 이용한 선택은 해당 아이디를 가지고 있는 요소 중에서 첫 번째 요소 단 하나만을 선택
 * 따라서 여러 요소를 선택하고 싶을 때는 태그 이름이나 클래스와 같은 다른 방법을 사용
 **/
var selectedItem = document.getElementById("even"); // 아이디가 "even"인 요소를 선택
selectedItem.style.color = "red"; // 선택된 요소의 텍스트 색상을 변경함.

// getElementsByClassName() 메소드는 클래스 이름을 이용하여 HTML 요소를 선택
var selectedItem = document.getElementsByClassName("odd"); // 클래스가 "odd"인 모든 요소를 선택

for (var i = 0; i < selectedItem.length; i++) {
    selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.
}

//getElementByName() 메소드는 HTML 요소의 name 속성을 이용하여 HTML 요소를 선택
var selectedItem = document.getElementsByName("first"); // name 속성값이 "first"인 모든 요소를 선택
for (var i = 0; i < selectedItem.length; i++) {
    selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.
}

//querySelectorAll() 메소드는 CSS 선택자(아이디, 클래스, 속성, 속성값 등)를 이용하여 HTML 요소를 선택
var selectedItem = document.querySelectorAll("li.odd"); // 클래스가 "odd"인 요소 중에서 <li> 요소만을 선택
for (var i = 0; i < selectedItem.length; i++) {
    selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.
}

//HTML DOM에서 제공하는 객체 집합(object collection)을 이용하여 HTML 요소를 선택 가능
var title = document.title; // <title> 요소를 선택
document.write(title);

/**
 * HTML DOM을 이용하면 HTML 요소의 내용(content)이나 속성값 등을 손쉽게 변경 가능
 * HTML 요소의 내용을 변경하는 가장 쉬운 방법은 innerHTML 프로퍼티를 이용하는 것!
 **/
var str = document.getElementById("text");
str.innerHTML = "이 문장으로 바뀌었습니다!";

//HTML 요소의 속성 이름을 이용하면 속성값도 변경 가능
var link = document.getElementById("link");          // 아이디가 "link"인 요소를 선택
link.href = "/javascript/intro"; // 해당 요소의 href 속성값을 변경함.
link.innerHTML = "자바스크립트 수업 바로 가기!";     // 해당 요소의 내용을 변경함.

/**
 * HTML DOM을 이용하면 HTML 요소의 스타일(style)도 손쉽게 변경 가능
 * style 프로퍼티를 이용하여 HTML 요소에 CSS 스타일을 적용
 **/
var str = document.getElementById("text");                 // 아이디가 "text"인 요소를 선택
function changeRedColor() { str.style.color = "red"; }     // 해당 요소의 글자색을 빨간색으로 변경함.
function changeBlackColor() { str.style.color = "black"; } // 해당 요소의 글자색을 검정색으로 변경함.

// 질문목록
// https://realmojo.tistory.com/300

/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/**
 * 노드(node) : HTML DOM은 노드(node)라고 불리는 계층적 단위에 정보를 저장
 * HTML DOM은 이러한 노드들을 정의하고, 그들 사이의 관계를 설명해 주는 역할
 *
 * HTML Node Tree
 * HTML 문서의 정보는 노드 트리(node tree)라고 불리는 계층적 구조에 저장
 * 노드들의 집합이며, 노드 간의 관계 표시
 * 노드 트리는 최상위 레벨인 루트 노드(root node)로부터 시작하여, 가장 낮은 레벨인 텍스트 노드까지 내려감!
 * 자바스크립트에서는 HTML DOM을 이용하여 노드 트리에 포함된 모든 노드에 접근가능
 *
 * 노드의 종류
 * W3C HTML DOM 표준에 따르면, HTML 문서의 모든 것은 노드!
 *
 * 문서 노드(document node) : HTML 문서 전체를 나타내는 노드임.
 * 요소 노드(element node) : 모든 HTML 요소는 요소 노드이며, 속성 노드를 가질 수 있는 유일한 노드임.
 * 속성 노드(attribute node) : 모든 HTML 요소의 속성은 속성 노드이며, 요소 노드에 관한 정보를 가지고 있음, 하지만 해당 요소 노드의 자식 노드(child node)에는 포함되지 않음.
 * 텍스트 노드(text node) : HTML 문서의 모든 텍스트는 텍스트 노드
 * 주석 노드(comment node) : HTML 문서의 모든 주석은 주석 노드임.
 *
 * 노드 간의 관계 : 노드 트리의 모든 노드는 서로 계층적 관계 형성
 * 노드 트리의 가장 상위에는 단 하나의 루트 노드(root node)가 존재
 * 루트 노드를 제외한 모든 노드는 단 하나의 부모 노드(parent node)만 존재
 * 모든 요소 노드는 자식 노드(child node)를 가질 수 있음
 * 형제 노드(sibling node) : 같은 부모 노드를 가지는 모든 노드 가리킴
 * 조상 노드(ancestor node) : 부모 노드를 포함해 계층적으로 현재 노드보다 상위에 존재하는 모든 노드 가리킴
 * 자손 노드(descendant node)란 자식 노드를 포함해 계층적으로 현재 노드보다 하위에 존재하는 모든 노드 가리킴
 *
 **/
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/**
 * 노드로의 접근
 * 1. getElementsByTagName() : 특정 태그 이름을 가지는 모든 요소를 노드 리스트의 형태로 반환
 * 따라서 이 메소드가 반환하는 노드 리스트를 이용하면 원하는 노드에 접근가능
 *
 * 2. 노드 간의 관계를 이용하여 접근하는 방법 : HTML DOM에서 노드 간의 관계는 다음과 같은 프로퍼티로 정의
 * 1. parentNode : 부모 노드
 * 2. childNodes : 자식 노드 리스트
 * 3. firstChild : 첫 번째 자식 노드
 * 4. lastChild : 마지막 자식 노드
 * 5. nextSibling : 다음 형제 노드
 * 6. previousSibling : 이전 형제 노드
 **/

/**
 * 노드에 대한 정보 : 다음과 같은 프로퍼티를 통해 접근가능
 * 1. nodeName
 * 2. nodeValue
 * 3. nodeType
 * 이 프로퍼티들은 특별히 다른 인터페이스를 이용하지 않고도, 해당 노드의 정보에 직접 접근할 수 있는 방법을 제공
 * nodeName 프로퍼티 : 노드 고유의 이름을 저장하므로, 수정할 수 없는 읽기 전용 프로퍼티
 * 요소 노드의 nodeName 프로퍼티는 언제나 해당 HTML 요소의 태그 이름을 대문자로 저장
 * 문서 노드(document node) : #document
 * 요소 노드(element node) : 태그 이름 (영문자로 대문자)
 * 속성 노드(attribute node) : 속성 이름
 * 텍스트 노드(text node) : #text
 **/
//HTML 문서의 모든 자식 노드 중에서 두 번째 노드의 이름을 선택
document.getElementById("document").innerHTML = document.childNodes[1].nodeName;           // HTML
// html 노드의 모든 자식 노드 중에서 첫 번째 노드의 이름을 선택
document.getElementById("html").innerHTML = document.childNodes[1].childNodes[0].nodeName; // HEAD
/**
 * 위의 에서 HTML 문서의 첫 번째 자식 노드는 <!DOCTYPE html>이며, 두 번째 자식 노드는 <html>
 * 또한, <html>노드의 첫 번째 자식 노드는 <head>이며, 세 번째 자식 노드는 <body>
 *
 * nodeValue : 노드의 값을 저장
 * 요소 노드(element node) : undefined
 * 속성 노드(attribute node) : 해당 속성의 속성값
 * 텍스트 노드(text node) : 해당 텍스트 문자열
 * 이러한 innerHTML 프로퍼티 대신에 firstChild.nodeValue를 사용해도 같은 결과
 **/
// 아이디가 "heading"인 요소의 첫 번째 자식 노드의 노드값을 선택
var headingText = document.getElementById("heading").firstChild.nodeValue;
document.getElementById("text1").innerHTML = headingText;
document.getElementById("text1").firstChild.nodeValue = headingText;

/**
 * nodeType : 노드 고유의 타입을 저장하므로, 수정할 수 없는 읽기 전용 프로퍼티
 * 요소 노드(element node) : 1
 * 속성 노드(attribute node) : 2
 * 텍스트 노드(text node) : 3
 * 주석 노드(comment node) : 8
 * 문서 노드(document node) : 9
 **/
// 아이디가 "heading"인 요소의 첫 번째 자식 노드의 타입을 선택
var headingType = document.getElementById("heading").firstChild.nodeType;
document.getElementById("head").innerHTML = headingType;           // 3
document.getElementById("document").innerHTML = document.nodeType; // 9

/**
 * 빈 텍스트 노드의 처리
 * 현재 대부분의 주요 웹 브라우저는 모두 W3C DOM 모델을 지원하지만, 그 처리 방식에 있어 약간씩의 차이 존재
 * 그중에서도 가장 큰 차이점은 띄어쓰기와 줄 바꿈을 처리하는 방식
 * 파이어폭스나 기타 브라우저들은 띄어쓰기나 줄 바꿈을 텍스트 노드(text node)로 취급
 * 따라서 자식 노드나 형제 노드를 이용하여 원하는 노드에 접근하려고 하면 브라우저 간에 차이가 발생
 * 이 차이를 없애는 가장 손쉬운 방법은 nodeType 프로퍼티를 사용하여 선택된 요소의 타입을 검사하는 것
 **/
var lastNode;

function findLastChild(parentNode) {
    lastNode = parentNode.lastChild;
    while (lastNode.nodeType != 1) {
        lastNode = lastNode.previousSibling;
    }
}

function printLastChild() {
    var parentNode = document.getElementById("parentNode");
    findLastChild(parentNode);
    document.getElementById("nodename").innerHTML = lastNode.nodeName;
}
// 위의 에서 마지막 자식 노드를 찾은 후에, 찾은 노드의 타입이 요소 노드가 아니면 그 앞의 노드를 다시 검사
// 이 방식을 사용하면 모든 브라우저에서 마지막 자식 노드로 같은 요소 노드를 선택 가능
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/**
 * 노드 리스트(node list)
 * getElementsByTagName() 메소드나 childNodes 프로퍼티의 값으로 반환되는 객체
 * 이 객체는 HTML 문서와 같은 순서로 문서 내의 모든 노드를 리스트 형태로 저장
 * 리스트의 각 노드는 0부터 시작하는 인덱스를 이용하여 접근가능
 **/

// 아이디가 "list"인 요소의 모든 자식 노드들을 선택
var listItems = document.getElementById("list").childNodes;

// 자식 노드들 중 첫 번째 li 요소의 내용을 변경함.
listItems[1].firstChild.nodeValue = "HTML 요소의 내용을 변경했어요!";

/**
 * 위의 에서 자식 노드 중 첫 번째 <li>요소를 선택할 때 인덱스로 0이 아닌 1을 사용
 * 그 이유는 HTML DOM에서 각 요소 노드 다음에는 별도의 텍스트 노드가 존재하기 때문
 * 따라서 아이디가 "list"인 요소의 자식 노드 리스트의 첫 번째 노드에는 아이디가 "list"인 요소 다음에 존재하는 텍스트 노드가 저장
 **/
// 아이디가 "list"인 요소의 모든 자식 노드들을 선택
var listItems = document.getElementById("list").childNodes;

// 자식 노드들 중 첫 번째 노드의 값을 출력함.
document.write(listItems[0].nodeValue + "<br>");

// 자식 노드들 중 두 번째 노드의 자식 노드 중 첫 번째 노드의 값을 출력함.
document.write(listItems[1].firstChild.nodeValue + "<br>");

// 자식 노드들 중 세 번째 노드의 값을 출력함.
document.write(listItems[2].nodeValue);
/**
 * 위의 는 각 요소 노드 다음에 또 다른 텍스트 노드가 존재함을 표시
 * 따라서 노드 리스트에 인덱스를 이용하여 접근할 때는 이러한 텍스트 노드의 존재를 반드시 염두!
 * 노드 리스트 객체는 리스트에 노드를 추가하거나 삭제되면 자신의 상태 정보를 스스로 갱신
 * 따라서 이 객체의 length 프로퍼티 값 = 언제나 노드 리스트가 저장하고 있는 노드들의 총 개수!
 **/
var listItems = document.getElementsByTagName("li");              // 모든 <li> 요소들을 선택
document.getElementById("text").innerHTML = "이 노드 리스트의 길이는 " + listItems.length + "개 <br>"; // 모든 자식 노드들의 개수를 반환함.

function changeTextColor() {
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "orange";                      // 모든 자식 노드들의 글자색을 변경함.
    }
}
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/**
 * appendChild() : 새로운 노드를 해당 노드의 자식 노드 리스트(child node list)의 맨 마지막에 추가
 **/

function appendNode() {
    var parent = document.getElementById("list");  // 아이디가 "list"인 요소를 선택
    var newItem = document.getElementById("item"); // 아이디가 "item"인 요소를 선택
    parent.appendChild(newItem);                   // 해당 요소의 맨 마지막 자식 노드로 추가함.
}

/**
 * insertBefore() : 새로운 노드를 특정 자식 노드 바로 앞에 추가
 *
 * 원형
 * 부모노드.insertBefore(새로운자식노드, 기준자식노드);
 *
 * 새로운 자식 노드 : 자식 노드 리스트(child node list)에 새롭게 추가할 자식 노드를 전달
 * 기준 자식 노드 : 새로운 노드를 삽입할 때 기준이 되는 노드로, 이 노드 바로 앞에 새로운 노드가 추가
 * 기준 자식 노드에 null 값을 전달하면 새로운 노드는 자식 노드 리스트의 맨 마지막 노드로 추가
 * 즉, appendChild() 메소드와 완전히 같은 동작!
 **/

function appendNode() {
    var parent = document.getElementById("list");           // 아이디가 "list"인 요소를 선택
    var criteriaItem = document.getElementById("criteria"); // 아이디가 "criteria"인 요소를 선택
    var newItem = document.getElementById("item");          // 아이디가 "item"인 요소를 선택
    parent.insertBefore(newItem, criteriaItem); // 해당 노드를 기준이 되는 자식 노드의 바로 앞에 추가함.
}

/**
 * insertData() : 텍스트 노드의 텍스트 데이터에 새로운 텍스트를 추가
 *
 * 원형
 * 텍스트노드.insertData(오프셋, 새로운데이터);
 *
 * 오프셋(offset) : 오프셋 값은 0부터 시작하며, 기존 텍스트 데이터의 몇 번째 위치부터 추가할지를 전달
 * 새로운 데이터 : 새로이 삽입할 텍스트 데이터를 전달
 **/
var text = document.getElementById("text").firstChild; // 아이디가 "text"인 요소의 텍스트 노드를 선택

function appendText() {
    text.insertData(6, " 나른한 "); // 텍스트 노드의 6번째 문자부터 " 나른한 "이란 텍스트를 추가함.
}

/**
 * 요소 노드의 생성 : createElement() 메소드를 사용하여 새로운 요소 노드 생성
 **/
function createNode() {
    var criteriaNode = document.getElementById("text"); // 기준이 되는 요소로 아이디가 "text"인 요소를 선택
    var newNode = document.createElement("p");          // 새로운 <p> 요소를 생성함.
    newNode.innerHTML = "새로운 단락";
    document.body.insertBefore(newNode, criteriaNode);  // 새로운 요소를 기준이 되는 요소 바로 앞에 추가함.
}

/**
 * 속성 노드의 생성 : createAttribute() 메소드를 사용하여 새로운 속성 노드 생성
 * 만약 같은 이름의 속성 노드가 이미 존재하면, 기존의 속성 노드는 새로운 속성 노드로 대체
 * 이미 존재하는 요소 노드에 속성 노드를 생성하고자 할 때에는 setAttribute() 메소드를 사용가능
 **/
function createNode() {
    var text = document.getElementById("text");           // 아이디가 "text"인 요소를 선택
    var newAttribute = document.createAttribute("style"); // 새로운 style 속성 노드를 생성함.
    newAttribute.value = "color:red";
    text.setAttributeNode(newAttribute);                  // 해당 요소의 속성 노드로 추가함.
}

/**
 * 텍스트 노드의 생성 : createTextNode() 메소드를 사용하여 새로운 텍스트 노드를 만들 수 있습니다.
 **/
function createNode() {
    var elementNode = document.getElementById("text");           // 아이디가 "text"인 요소를 선택
    var newText = document.createTextNode("새로운 텍스트에요!"); // 새로운 텍스트 노드를 생성함.
    elementNode.appendChild(newText);                            // 해당 요소의 자식 노드로 추가함.
}

/**
 * 노드의 제거
 * 1. removeChild()
 * 2. removeAttribute()
 **/

/**
 * removeChild() : 자식 노드 리스트에서 특정 자식 노드를 제거
 * 이 메소드는 성공적으로 노드가 제거되면 제거된 노드를 반환
 * 노드가 제거될 때에는 제거되는 노드의 모든 자식 노드들도 다 같이 제거
 **/
var parent = document.getElementById("list");      // 아이디가 "list"인 요소를 선택
var removedItem = document.getElementById("item"); // 아이디가 "item"인 요소를 선택
parent.removeChild(removedItem);                   // 지정된 요소를 삭제함.

/**
 * removeAttribute() : 속성의 이름을 이용하여 특정 속성 노드를 제거
 **/
var text = document.getElementById("text"); // 아이디가 "text"인 요소를 선택
text.removeAttribute("style");              // 해당 요소의 "style" 속성을 제거함.

/**
 * 노드의 복제
 * cloneNode() : 기존의 존재하는 노드와 똑같은 새로운 노드를 생성하여 반환
 *
 * 원형
 * 복제할노드.cloneNode(자식노드복제여부);
 * 자식 노드 복제 여부 : 전달된 값이 true이면 복제되는 노드의 모든 속성 노드와 자식 노드도 같이 복제
 * false이면 속성 노드만 복제하고 자식 노드는 복제하지 않음
 *
 **/

function cloneElement() {
    var parent = document.getElementById("list");     // 아이디가 "list"인 요소를 선택
    var originItem = document.getElementById("item"); // 아이디가 "item"인 요소를 선택
    parent.appendChild(originItem.cloneNode(true));   // 해당 노드를 복제하여 리스트의 맨 마지막에 추가함.
}
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/**
 * 노드의 조작
 * 노드의 값 변경 : nodeValue 프로퍼티를 사용하면 특정 노드의 값을 변경가능
 * 또한, setAttribute() 메소드는 속성 노드의 속성값을 변경 가능
 * 요소 노드의 텍스트 : 요소 노드는 자신이 직접 텍스트값 X
 * 요소 노드의 텍스트는 요소 노드의 자식 노드인 텍스트 노드(text node)에 저장
 * 따라서 요소 노드의 텍스트 값을 확인하거나 변경하고자 할 때는 요소 노드에 포함된 텍스트 노드에 접근해야 함!
 * 텍스트 노드의 값 변경 : nodeValue 프로퍼티를 사용하여 텍스트 노드의 값을 변경 가능
 **/
var para = document.getElementById("text"); // 아이디가 "text"인 요소를 선택

function changeText() {
    para.firstChild.nodeValue = "텍스트 변경 완료!";
}

/**
 * 속성 노드의 값 변경 : nodeValue 프로퍼티뿐만 아니라 setAttribute() 메소드를 사용하여 값을 변경가능
 * setAttribute() 메소드는 속성값을 변경하려는 속성이 존재하지 않으면, 먼저 해당 속성을 생성한 후에 속성값을 설정
 **/
var para;

function changeAttribute() {
    // 모든 <p> 요소중에서 첫 번째 요소에 클래스 속성값으로 "para"를 설정함.
    document.getElementsByTagName("p")[0].setAttribute("class", "para");
    // 클래스가 설정되면 해당 클래스에 설정되어 있던 스타일이 자동으로 적용됨.
}

/**
 * 요소 노드의 교체 : replaceChild() 메소드를 사용하면 기존의 요소 노드를 새로운 요소 노드로 교체가능
 *
 * 원형
 * 교체 할 노드 = 부모노드.replaceChild(새로운자식노드, 기존자식노드);
 *
 * 1. 새로운 자식 노드 : 자식 노드 리스트에 새롭게 추가할 요소 노드를 전달
 * 2. 기존 자식 노드 : 자식 노드 리스트에서 제거할 요소 노드를 전달
 **/
var parent = document.getElementById("parent"); // 부모 노드를 선택
var first = document.getElementById("first");
var third = document.getElementById("third");

function changeNode() {
    parent.replaceChild(third, first);          // first 요소를 삭제하고, 그 대신 third 요소를 삽입함.
}

/**
 * replaceData() : 사용하면 텍스트 노드의 텍스트 데이터를 바꿀 수 있습니다.
 *
 * 원형
 * 텍스트노드.replaceData(오프셋, 교체할문자수, 새로운데이터);
 *
 * 1. 오프셋(offset) : 오프셋 값은 0부터 시작하며, 기존 텍스트 데이터의 몇 번째 문자부터 교체할지를 전달
 * 2. 교체할 문자 수 : 기존 텍스트 노드의 데이터로부터 교체할 총 문자 수를 전달
 * 3. 새로운 데이터 : 새로이 삽입할 텍스트 데이터를 전달
 **/

var text = document.getElementById("text").firstChild; // 아이디가 "text"인 요소의 텍스트 노드를 선택

function changeText() {
    text.replaceData(7, 4, "저녁 7"); // 텍스트 노드의 7번째 문자부터 4개의 문자를 "저녁 7"로 교체함.
}
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * Window 객체
 * 브라우저 객체 모델(BOM)이란?
 * 자바스크립트를 이용하면 브라우저의 정보에 접근하거나 브라우저의 여러 기능들을 제어 가능
 * 이때 사용할 수 있는 객체 모델이 바로 브라우저 객체 모델(BOM, Browser Object Model)
 * 브라우저 객체 모델(BOM)은 문서 객체 모델(DOM)과는 달리 W3C의 표준 객체 모델 X
 * 하지만 이 모델은 자바스크립트가 브라우저의 기능적인 요소들을 직접 제어하고 관리할 방법을 제공
 * 자바스크립트에서는 이러한 BOM 모델의 객체들을 전역 객체(global object)로 사용 가능
 *
 * Window 객체 : window 객체는 웹 브라우저의 창(window)을 나타내는 객체로, 대부분의 웹 브라우저에서 지원
 * 자바스크립트의 모든 객체, 전역 함수, 전역 변수들은 자동으로 window 객체의 프로퍼티가 됨
 * window 객체의 메소드는 전역 함수이며, window 객체의 프로퍼티는 전역 변수가 됨.
 * 문서 객체 모델(DOM)의 요소들도 모두 window 객체의 프로퍼티가 됨.
 *
 * 브라우저 창 크기 조절
 * window 객체의 innerHeight와 innerWidth 프로퍼티를 이용하면, 브라우저의 창 크기를 설정 가능
 * 여기서 브라우저 창이란 웹 브라우저의 뷰포트(viewport)를 의미하며, 브라우저의 툴바나 스크롤 바는 포함 X
 **/

// 기본 문법
window.innerHeight
window.innerWidth

// 익스플로러 5부터 7버전만을 위한 문법 1
document.documentElement.clientHeight
document.documentElement.clientWidth

// 익스플로러 5부터 7버전만을 위한 문법 2
document.body.clientHeight
document.body.clientWidth

//다음 는 위의 문법들을 이용하여 모든 브라우저에서 창의 크기를 반환하는 
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
document.write("웹 브라우저의 너비는 " + windowWidth + "픽셀이고, 높이는 " + windowHeight + "픽셀입니다.");

/**
 * window 객체의 모든 메소드나 프로퍼티를 사용할 때는 window라는 접두사를 생략 가능
 * 따라서 위의 에서 window.innerWidth 대신 그냥 innerWidth를 사용해도 정상적으로 동작
 **/

alert("전역 함수 호출시 window 접두사 생략 가능함!");                     // 전역 함수
document.write("현재 브라우저의 수평 위치는 " + screenX + "입니다.<br>"); // 전역 변수
document.write("현재 브라우저의 수직 위치는 " + screenY + "입니다.<br>"); // 전역 변수
document.write(document.title);                                           // 전역 객체

/**
 * 위의 처럼 자바스크립트의 모든 전역 객체, 전역 함수, 전역 변수를 사용할 때는 window 접두사를 생략 가능
 * screenX는 해당 브라우저 창의 왼쪽 모서리와 사용자 스크린의 왼쪽 모서리 사이의 거리를 반환
 * 또한, screenY는 해당 브라우저 창의 위쪽 모서리와 사용자 스크린의 위쪽 모서리 사이의 거리를 반환
 *
 * 브라우저 새 창 열기
 * window 객체의 open() 메소드를 이용하면, 새로운 브라우저 창을 열 수 있음
 * 또한, 새로운 브라우저 창의 세부적인 옵션들도 일일이 설정 가능
 * */
//다음 는 메뉴바, 주소창, 크기조절 손잡이, 스크롤 바, 상태 바만을 가지는 새로운 브라우저 창을 여는 입니다.

var newWindowObj;
// 변수 strWindowFeatures를 통해 새롭게 여는 브라우저 창의 옵션들을 일일이 설정할 수 있음.

var strWindowFeatures = "menubar = yes,location = yes,resizable = yes,scrollbars = yes,status = yes";

function openWindow() {
    newWindowObj = window.open("/html/intro", "HTML 개요", strWindowFeatures);
}

/**
 * 브라우저 창 닫기
 * window 객체의 close() 메소드를 이용하면, 현재 브라우저나 특정 브라우저 창을 닫을 수 있습니다.
 **/
function openWindow() {
    newWindowObj = window.open("/html/intro", "HTML 개요", strWindowFeatures);
}

function closeNewWindow() { // 새롭게 연 브라우저 창을 window 객체를 이용하여 다시 닫을 수 있음.
    newWindowObj.close();
}

/**
 * Document 객체
 * window 객체의 가장 중요한 프로퍼티 중 하나가 바로 document 객체
 * document 객체는 브라우저 창에 표시되는 내용에 해당하는 문서(document)를 나타내는 객체
 **/
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/**
 * location 객체 : 현재 브라우저에 표시된 HTML 문서의 주소를 얻거나, 브라우저에 새 문서를 불러올 때 사용 가능
 * 이 객체는 Window 객체의 location 프로퍼티와 Document 객체의 location 프로퍼티에 같이 연결됨!
 * location 객체의 프로퍼티와 메소드를 이용하면, 현재 문서의 URL 주소를 다양하게 해석하여 처리 가능
 *
 * 현재 문서의 URL 주소 : location 객체의 href 프로퍼티는 현재 문서의 전체 URL 주소를 문자열로 반환
 **/

document.write("현재 문서의 주소는 " + location.href + "입니다.");

//location 객체의 hostname 프로퍼티는 현재 문서의 인터넷 호스트 이름을 반환
document.write("현재 문서의 호스트 이름은 " + location.hostname + "입니다.");

/**
 * host, hostname, port, hash와 같은 location 객체의 주요 프로퍼티는 URL 주소의 다양한 특성을 저장!
 * 이와 같은 프로퍼티는 Link 객체를 통해서도 제공
 * 호스트 이름(host name)과 파일 경로명(path name)을 합쳐 URL(Uniform Resource Locator)
 * 이러한 URL은 브라우저가 웹 서버로 컨텐츠를 요청할 때, 해당 컨텐츠가 어디에 있는지를 알려주기 위한 규약
 **/

// location 객체의 pathname 프로퍼티는 현재 문서의 파일 경로명을 반환
document.write("현재 문서의 파일 경로명은 " + location.pathname + "입니다.");

/**
 * assign() : 브라우저 창에 지정된 URL 주소에 존재하는 문서를 불러옴
 * replace() : 새 문서를 불러오기 전에, 현재 문서를 브라우저의 히스토리에서 제거한다는 점이 assign() 메소드와 다른점!
 * reload() 메소드는 브라우저 창에 현재 문서를 다시 불러옴!
 * 현재 문서를 브라우저의 히스토리에서 제거한다는 의미는 브라우저의 뒤로 가기 버튼을 눌러도 이전 페이지로 다시 돌아갈 수 없다는 의미
 **/
function openDocument() {
    location.assign("/index.php");
}

function openDocumentWithReplace() {
    location.replace("/index.php");
}

/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/**
 * History 객체 : 브라우저의 히스토리 정보를 문서와 문서 상태 목록으로 저장하는 객체
 * 자바스크립트는 사용자의 개인 정보를 보호하기 위해 이 객체에 접근하는 방법을 일부 제한
 *
 * 히스토리 목록의 개수 : history 객체의 length 프로퍼티는 브라우저 히스토리 목록의 개수를 반환
 **/
function openDocument() {
    location.assign("/javascript/js_bom_history");
}
document.getElementById("text").innerHTML = "현재 브라우저의 히스토리 목록의 개수는 " + history.length + "개 입니다.";

/**
 * 히스토리 목록 접근하기
 * history 객체에는 브라우저의 뒤로 가기와 앞으로 가기 버튼과 같은 동작을 하는 back()과 forward() 메소드
 * 또한, go() 메소드를 이용하면 인수로 전달받는 정수만큼 히스토리 목록 사이를 이동 가능
 * 아래 이전페이지로 가는 버튼은 같은 기능!
 **/
// 이전 페이지로 가기
function goBack() {
    window.history.back();
}

// 이전 페이지로 가기
function go() {
    window.history.go(-1);
}

//다음 페이지로 가기
function goForward() {
    window.history.forward();
}
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/**
 * Screen 객체 : 사용자의 디스플레이 화면에 대한 다양한 정보를 저장하는 객체
 * 사용자의 화면 크기 : screen 객체의 width와 height 프로퍼티는 사용자의 디스플레이 화면의 크기를 픽셀 단위로 반환
 * screen.width와 screen.height는 현재 사용자의 모니터 화면의 크기를 반환
 * window.outerWidth와 window.outerHeight는 현재 브라우저 창의 크기를 반환
 **/
document.write("현재 사용자의 디스플레이 화면의 너비는 " + screen.width + "픽셀입니다.<br>");
document.write("현재 사용자의 디스플레이 화면의 높이는 " + screen.height + "픽셀입니다.<br>");
document.write("현재 브라우저 창의 너비는 " + window.outerWidth + "픽셀입니다.<br>");
document.write("현재 브라우저 창의 높이는 " + window.outerHeight + "픽셀입니다.<br>");

/**
 * 실제 사용할 수 있는 화면 크기
 * screen 객체의 availWidth와 availHeight 프로퍼티는 실제 사용할 수 있는 화면의 크기를 픽셀 단위로 반환
 * 이 프로퍼티는 운영체제의 작업 표시줄과 같은 공간을 모두 제외한 크기를 반환
 **/
document.write("실제 사용할 수 있는 화면의 너비는 " + screen.availWidth + "픽셀입니다.<br>");
document.write("실제 사용할 수 있는 화면의 높이는 " + screen.availHeight + "픽셀입니다.");

/**
 * 한 색상당 사용할 수 있는 비트수
 * screen 객체의 colorDepth 프로퍼티는 사용자 화면에서 한 색상당 사용할 수 있는 비트 수를 반환
 * 대부분의 컴퓨터는 24비트의 트루 컬러(true colors)나 30/36/48비트의 디프 컬러(deep colors)를 사용
 * 트루 컬러에서 한 색상당 사용할 수 있는 비트 수는 224 = 16,777,216 입니다.
 **/
var bitColorDepth = screen.colorDepth;
document.write("사용자 화면에서 한 색상당 사용할 수 있는 비트수는 " + bitColorDepth + "개입니다.<br>");
document.write("즉, 한 색상은 총 " + Math.pow(2, bitColorDepth) + "가지로 표현됩니다.");

/**
 * 화면 픽셀당 표시할 수 있는 비트수
 * screen 객체의 pixelDepth 프로퍼티는 사용자 화면에서 픽셀당 표시할 수 있는 비트 수를 반환
 * 대부분의 컴퓨터에서 colorDepth와 pixelDepth는 같은 값을 가짐
 **/
var bitPixelDepth = screen.pixelDepth;
document.write("사용자 화면의 한 픽셀당 표시할 수 있는 비트수는 " + bitPixelDepth + "개입니다.<br>");

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * Navigator 객체 : 브라우저 공급자 및 버전 정보 등을 포함한 브라우저에 대한 다양한 정보를 저장하는 객체
 * 이 객체의 이름은 넷스케이프(Netscape)의 초기 웹 브라우저였던 네비게이터(Navigator)에서 유래
 *
 * 브라우저 스니핑(browser sniffing)
 * 과거에는 방문자의 웹 브라우저의 종류를 미리 파악하여 조치함으로써, 브라우저 간의 호환성을 유지
 * 이렇게 호환성을 유지하는 방법을 브라우저 스니핑(browser sniffing)이라고 
 *
 * navigator 객체는 이러한 브라우저 스니핑에서 사용할 수 있는 다양한 표준 프로퍼티 및 비표준 프로퍼티를 제공
 * 하지만 현재는 이 방법보다 필요한 프로퍼티만을 간단하게 테스트하는 기능 테스팅 방법을 더 많이 사용
 *
 * 현재 브라우저의 이름
 * navigator 객체의 appName과 appCodeName 프로퍼티는 현재 사용하고 있는 브라우저의 전체 이름을 반환
 * 하지만 브라우저 간의 호환성을 위해 스니핑 코드로 대부분의 브라우저가 브라우저 이름을 "Netscape"로 사용
 * 또한, 대부분의 브라우저가 브러우저 코드명을 "Mozilla"로 사용
 * 익스플로러 11 버전, 크롬, 파이어폭스와 사파리는 모두 브라우저의 이름을 "Netscape"로 사용
 * 익스플로러 10 이하 버전, 크롬, 파이어폭스, 사파리와 오페라 모두 브라우저 코드명을 "Mozilla"로 사용
 * 이 프로퍼티는 웹 표준에서 제외되었으므로, 될 수 있으면 사용하지 않는 것이 좋습니다.
 **/

document.write("현재 사용 중인 브라우저의 이름은 " + navigator.appName + "입니다.<br>");
document.write("또한, 해당 브라우저의 코드명은 " + navigator.appCodeName + "입니다.");

/**
 * 현재 브라우저의 버전
 * navigator 객체의 appVersion과 userAgent 프로퍼티는 현재 사용하고 있는 브라우저의 버전 정보를 문자열로 반환
 * 이 프로퍼티의 결과로 반환되는 문자열에 대한 표준 형식은 따로 명시 X
 * 따라서 브라우저마다 약간씩 다른 형식의 문자열로 결과를 반환
 * 또한, userAgent 프로퍼티의 결괏값은 appVersion 프로퍼티의 정보뿐만 아니라 상세 정보를 추가로 포함
 * 이 프로퍼티는 웹 표준에서 제외되었으므로, 될 수 있으면 사용하지 않는 것이 좋습니다.
 **/
document.write("현재 사용 중인 브라우저의 버전 정보는 " + navigator.appVersion + "입니다.<br><br>");
document.write("userAgent 프로퍼티로 알 수 있는 추가 정보는 " + navigator.userAgent + "입니다.");

/**
 * 현재 브라우저가 실행되고 있는 운영체제
 * navigator 객체의 platform 프로퍼티는 현재 브라우저가 실행되고 있는 운영체제를 식별하는 문자열을 반환
 **/

document.write("현재 브라우저가 실행되고 있는 운영체제는 " + navigator.platform + "입니다.");

/**
 * 현재 브라우저의 기본 언어 설정
 * navigator 객체의 language 프로퍼티는 현재 사용 중인 브라우저의 기본 언어 설정을 반환
 **/

document.write("현재 브라우저의 기본 언어 설정은 " + navigator.language + "입니다.");

/**
 * 자바 애플릿 실행 여부
 * navigator 객체의 javaEnabled() 메소드는 현재 사용 중인 브라우저가 자바 애플릿을 실행할 수 있는지를 검사하는 비표준 메소드
 **/

document.write("현재 브라우저는 자바 애플릿를 ");

if (navigator.javaEnabled()) {
    document.write("실행할 수 있습니다.");
} else {
    document.write("실행할 수 없습니다.");
}

/**
 * 쿠키(cookie) 사용 여부
 * navigator 객체의 cookieEnabled 프로퍼티는 현재 사용 중인 브라우저가 쿠키를 사용할 수 있는지를 검사하는 비표준 프로퍼티
 **/
document.write("현재 브라우저는 쿠키를 ");

if (navigator.cookieEnabled) {
    document.write("사용할 수 있습니다.");
} else {
    document.write("사용할 수 없습니다.");
}
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * 대화 상자(dialog box)
 * 1. alert()
 * 2. confirm()
 * 3. prompt()
 **/

/**
 * alert() 메소드
 * window 객체의 alert() 메소드는 사용자에게 간단한 메시지를 보여주고, 그에 대한 사용자의 확인을 대기함.
 * 사용자는 대화 상자의 확인 버튼을 눌러야만 다른 작업을 진행 가능
 * window 객체의 모든 메소드나 프로퍼티를 사용할 때 window 접두사 생략가능
 * 
 * 문법
 * window.alert("간단한 메시지");
 **/

function alertDialogBox() {
    alert("확인을 누를 때까지 다른 작업을 할 수 없어요!");
}

/**
 * confirm() 메소드
 * window 객체의 confirm() 메소드는 사용자에게 간단한 메시지를 보여주고, 사용자가 확인이나 취소를 누르면 그 결과를 불리언 값으로 반환
 *
 * 문법
 * window.confirm("간단한 메시지");
 * 사용자가 확인을 누르면 true를 반환, 취소를 누르면 false를 반환
 **/

function confirmDialogBox() {
    var str;
    if (confirm("확인이나 취소를 눌러주세요!") == true) {
        str = "당신은 확인을 눌렀습니다!";
    } else {
        str = "당신은 취소을 눌렀습니다!";
    }
    document.getElementById("text").innerHTML = str;
}

/**
 * prompt() 메소드
 * window 객체의 prompt() 메소드는 사용자에게 간단한 메시지를 보여주고, 사용자가 입력한 문자열을 반환
 * 사용자가 대화 상자에 입력한 텍스트를 문자열 타입으로 반환
 * 
 * 문법
 * window.prompt("간단한 메시지" + "입력란의 기본 메시지");
 **/

function promptDialogBox() {
    var inputStr = prompt("당신의 이름을 입력해 주세요 : ", "홍길동");
    if (inputStr != null) {
        document.getElementById("text").innerHTML = "당신의 이름은 " + inputStr + "입니다.";
    }
}

/**
 * 위에서 살펴본 대화 상자 이외에도 showModalDialog() 메소드를 이용하면, 좀 더 복잡한 대화 상자 가능
 * 하지만 이러한 대화 상자는 모두 사용자의 응답이 있을 때까지 브라우저의 실행을 강제로 중단
 * 따라서 사용자 측면에서 보면 불편할 수도 있으므로, 대화 상자는 될 수 있으면 자주 사용하지 않는 것이 좋음.
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * 타이머(timer)
 * window 객체는 일정 시간이 지난 뒤에 함수를 호출할 수 있도록 다음 메소드를 제공
 * 1. setTimeout()
 * 2. setInterval()
 *
 * 또한, 이렇게 설정된 함수의 호출을 취소할 수 있도록 다음 메소드를 제공
 * 3. clearTimeout()
 * 4. clearInterval()
 **/

/**
 * setTimeout() 메소드
 * setTimeout() 메소드는 명시된 시간이 지난 뒤에 지정된 함수를 호출
 *
 * 문법
 * window.setTimeout(호출할함수, 지연시간);
 *
 * 이 메소드가 성공적으로 호출되면, 설정된 timeoutID를 반환
 * 이 메소드는 밀리초(milliseconds) 단위로 지연 시간을 설정 가능
 **/
function startTimeout() {
    setTimeout(printCurrentDate, 2000);
}

function printCurrentDate() {
    document.getElementById("date").innerHTML = new Date();
}

/**
 * setInterval() 메소드
 * setInterval() 메소드는 지정된 시간 간격마다 지정된 함수를 반복적으로 호출
 *
 * 문법
 * window.setInterval(호출할함수, 지연시간);
 *
 * 이 메소드가 성공적으로 호출되면, 설정된 timeoutID를 반환
 * 이 메소드는 밀리초(milliseconds) 단위로 시간 간격을 설정 가능
 **/

function startInterval() {
    setInterval(printCurrentDate, 2000);
}

function printCurrentDate() {
    document.getElementById("date").innerHTML += new Date() + "<br>";
}

/**
 * clearTimeout() 메소드
 * setTimeout() 메소드의 반환값을 clearTimeout() 메소드의 인수로 전달하면, 계획된 함수의 호출을 취소 가능
 * 이 메소드는 setTimeout() 메소드에 의해 함수가 호출되기 전에 실행되어야 호출을 취소 가능
 * 함수가 호출된 이후에 이 메소드를 호출하면 동작 X
 **/
window.clearTimeout(timeoutID);

var timeoutId;

function startTimeout() {
    timeoutId = setTimeout(printCurrentDate, 2000);
}

function cancelTimeout() {
    clearTimeout(timeoutId);
}

function printCurrentDate() {
    document.getElementById("date").innerHTML += new Date() + "<br>";
}

/**
 * clearInterval() 메소드
 * setInterval() 메소드의 반환값을 clearInterval() 메소드의 인수로 전달하면, 반복되는 함수의 호출을 취소 가능
 *
 * 문법
 * window.clearInterval(timeoutID);
 **/

var timeoutId;

function startInterval() {
    timeoutId = setInterval(printCurrentDate, 2000);
}

function cancelInterval() {
    clearInterval(timeoutId);
}

function printCurrentDate() {
    document.getElementById("date").innerHTML += new Date() + "<br>";
}
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 *
 **/
/****************************************************************************************************************************************************/

