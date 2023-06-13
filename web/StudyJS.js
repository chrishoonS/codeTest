
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
 * Document 메서드 : HTML 요소와 관련된 작업을 도와주는 다양한 메서드를 제공
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
 * 이 중에서 document.querySelectorAll() 메서드는 브라우저별로 지원 여부가 다름
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
 * getElementsByTagName() 메서드는 HTML 태그 이름을 이용하여 HTML 요소를 선택
 * item() 메서드는 해당 HTML 객체 집합(obejct collection)에서 전달받은 인덱스에 해당하는 요소를 반환
 * HTML 요소의 style 프로퍼티를 이용하면, 해당 요소의 CSS 스타일을 변경 가능
 * 아이디(id)를 이용한 선택
 **/
var selectedItem = document.getElementsByTagName("li"); // 모든 <li> 요소를 선택

for (var i = 0; i < selectedItem.length; i++) {
    selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.
}

/**
 * getElementById() 메서드는 아이디를 이용하여 HTML 요소를 선택
 * 자바스크립트에서 아이디(id)를 이용한 선택은 해당 아이디를 가지고 있는 요소 중에서 첫 번째 요소 단 하나만을 선택
 * 따라서 여러 요소를 선택하고 싶을 때는 태그 이름이나 클래스와 같은 다른 방법을 사용
 **/
var selectedItem = document.getElementById("even"); // 아이디가 "even"인 요소를 선택
selectedItem.style.color = "red"; // 선택된 요소의 텍스트 색상을 변경함.

// getElementsByClassName() 메서드는 클래스 이름을 이용하여 HTML 요소를 선택
var selectedItem = document.getElementsByClassName("odd"); // 클래스가 "odd"인 모든 요소를 선택

for (var i = 0; i < selectedItem.length; i++) {
    selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.
}

//getElementByName() 메서드는 HTML 요소의 name 속성을 이용하여 HTML 요소를 선택
var selectedItem = document.getElementsByName("first"); // name 속성값이 "first"인 모든 요소를 선택
for (var i = 0; i < selectedItem.length; i++) {
    selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.
}

//querySelectorAll() 메서드는 CSS 선택자(아이디, 클래스, 속성, 속성값 등)를 이용하여 HTML 요소를 선택
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
 * 따라서 이 메서드가 반환하는 노드 리스트를 이용하면 원하는 노드에 접근가능
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
 * getElementsByTagName() 메서드나 childNodes 프로퍼티의 값으로 반환되는 객체
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
 * 즉, appendChild() 메서드와 완전히 같은 동작!
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
 * 요소 노드의 생성 : createElement() 메서드를 사용하여 새로운 요소 노드 생성
 **/
function createNode() {
    var criteriaNode = document.getElementById("text"); // 기준이 되는 요소로 아이디가 "text"인 요소를 선택
    var newNode = document.createElement("p");          // 새로운 <p> 요소를 생성함.
    newNode.innerHTML = "새로운 단락";
    document.body.insertBefore(newNode, criteriaNode);  // 새로운 요소를 기준이 되는 요소 바로 앞에 추가함.
}

/**
 * 속성 노드의 생성 : createAttribute() 메서드를 사용하여 새로운 속성 노드 생성
 * 만약 같은 이름의 속성 노드가 이미 존재하면, 기존의 속성 노드는 새로운 속성 노드로 대체
 * 이미 존재하는 요소 노드에 속성 노드를 생성하고자 할 때에는 setAttribute() 메서드를 사용가능
 **/
function createNode() {
    var text = document.getElementById("text");           // 아이디가 "text"인 요소를 선택
    var newAttribute = document.createAttribute("style"); // 새로운 style 속성 노드를 생성함.
    newAttribute.value = "color:red";
    text.setAttributeNode(newAttribute);                  // 해당 요소의 속성 노드로 추가함.
}

/**
 * 텍스트 노드의 생성 : createTextNode() 메서드를 사용하여 새로운 텍스트 노드를 만들 수 있습니다.
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
 * 이 메서드는 성공적으로 노드가 제거되면 제거된 노드를 반환
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
 * 또한, setAttribute() 메서드는 속성 노드의 속성값을 변경 가능
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
 * 속성 노드의 값 변경 : nodeValue 프로퍼티뿐만 아니라 setAttribute() 메서드를 사용하여 값을 변경가능
 * setAttribute() 메서드는 속성값을 변경하려는 속성이 존재하지 않으면, 먼저 해당 속성을 생성한 후에 속성값을 설정
 **/
var para;

function changeAttribute() {
    // 모든 <p> 요소중에서 첫 번째 요소에 클래스 속성값으로 "para"를 설정함.
    document.getElementsByTagName("p")[0].setAttribute("class", "para");
    // 클래스가 설정되면 해당 클래스에 설정되어 있던 스타일이 자동으로 적용됨.
}

/**
 * 요소 노드의 교체 : replaceChild() 메서드를 사용하면 기존의 요소 노드를 새로운 요소 노드로 교체가능
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
 * window 객체의 메서드는 전역 함수이며, window 객체의 프로퍼티는 전역 변수가 됨.
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
 * window 객체의 모든 메서드나 프로퍼티를 사용할 때는 window라는 접두사를 생략 가능
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
 * window 객체의 open() 메서드를 이용하면, 새로운 브라우저 창을 열 수 있음
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
 * window 객체의 close() 메서드를 이용하면, 현재 브라우저나 특정 브라우저 창을 닫을 수 있습니다.
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
 * location 객체의 프로퍼티와 메서드를 이용하면, 현재 문서의 URL 주소를 다양하게 해석하여 처리 가능
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
 * replace() : 새 문서를 불러오기 전에, 현재 문서를 브라우저의 히스토리에서 제거한다는 점이 assign() 메서드와 다른점!
 * reload() 메서드는 브라우저 창에 현재 문서를 다시 불러옴!
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
 * history 객체에는 브라우저의 뒤로 가기와 앞으로 가기 버튼과 같은 동작을 하는 back()과 forward() 메서드
 * 또한, go() 메서드를 이용하면 인수로 전달받는 정수만큼 히스토리 목록 사이를 이동 가능
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
 * navigator 객체의 javaEnabled() 메서드는 현재 사용 중인 브라우저가 자바 애플릿을 실행할 수 있는지를 검사하는 비표준 메서드
 **/

document.write("현재 브라우저는 자바 애플릿를 ");

if (navigator.javaEnabled()) {
    document.write("실행 가능");
} else {
    document.write("실행할 수 없습니다.");
}

/**
 * 쿠키(cookie) 사용 여부
 * navigator 객체의 cookieEnabled 프로퍼티는 현재 사용 중인 브라우저가 쿠키를 사용할 수 있는지를 검사하는 비표준 프로퍼티
 **/
document.write("현재 브라우저는 쿠키를 ");

if (navigator.cookieEnabled) {
    document.write("사용 가능");
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
 * alert() 메서드
 * window 객체의 alert() 메서드는 사용자에게 간단한 메시지를 보여주고, 그에 대한 사용자의 확인을 대기함.
 * 사용자는 대화 상자의 확인 버튼을 눌러야만 다른 작업을 진행 가능
 * window 객체의 모든 메서드나 프로퍼티를 사용할 때 window 접두사 생략가능
 * 
 * 문법
 * window.alert("간단한 메시지");
 **/

function alertDialogBox() {
    alert("확인을 누를 때까지 다른 작업을 할 수 없어요!");
}

/**
 * confirm() 메서드
 * window 객체의 confirm() 메서드는 사용자에게 간단한 메시지를 보여주고, 사용자가 확인이나 취소를 누르면 그 결과를 불리언 값으로 반환
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
 * prompt() 메서드
 * window 객체의 prompt() 메서드는 사용자에게 간단한 메시지를 보여주고, 사용자가 입력한 문자열을 반환
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
 * 위에서 살펴본 대화 상자 이외에도 showModalDialog() 메서드를 이용하면, 좀 더 복잡한 대화 상자 가능
 * 하지만 이러한 대화 상자는 모두 사용자의 응답이 있을 때까지 브라우저의 실행을 강제로 중단
 * 따라서 사용자 측면에서 보면 불편할 수도 있으므로, 대화 상자는 될 수 있으면 자주 사용하지 않는 것이 좋음.
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * 타이머(timer)
 * window 객체는 일정 시간이 지난 뒤에 함수를 호출할 수 있도록 다음 메서드를 제공
 * 1. setTimeout()
 * 2. setInterval()
 *
 * 또한, 이렇게 설정된 함수의 호출을 취소할 수 있도록 다음 메서드를 제공
 * 3. clearTimeout()
 * 4. clearInterval()
 **/

/**
 * setTimeout() 메서드
 * setTimeout() 메서드는 명시된 시간이 지난 뒤에 지정된 함수를 호출
 *
 * 문법
 * window.setTimeout(호출할함수, 지연시간);
 *
 * 이 메서드가 성공적으로 호출되면, 설정된 timeoutID를 반환
 * 이 메서드는 밀리초(milliseconds) 단위로 지연 시간을 설정 가능
 **/
function startTimeout() {
    setTimeout(printCurrentDate, 2000);
}

function printCurrentDate() {
    document.getElementById("date").innerHTML = new Date();
}

/**
 * setInterval() 메서드
 * setInterval() 메서드는 지정된 시간 간격마다 지정된 함수를 반복적으로 호출
 *
 * 문법
 * window.setInterval(호출할함수, 지연시간);
 *
 * 이 메서드가 성공적으로 호출되면, 설정된 timeoutID를 반환
 * 이 메서드는 밀리초(milliseconds) 단위로 시간 간격을 설정 가능
 **/

function startInterval() {
    setInterval(printCurrentDate, 2000);
}

function printCurrentDate() {
    document.getElementById("date").innerHTML += new Date() + "<br>";
}

/**
 * clearTimeout() 메서드
 * setTimeout() 메서드의 반환값을 clearTimeout() 메서드의 인수로 전달하면, 계획된 함수의 호출을 취소 가능
 * 이 메서드는 setTimeout() 메서드에 의해 함수가 호출되기 전에 실행되어야 호출을 취소 가능
 * 함수가 호출된 이후에 이 메서드를 호출하면 동작 X
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
 * clearInterval() 메서드
 * setInterval() 메서드의 반환값을 clearInterval() 메서드의 인수로 전달하면, 반복되는 함수의 호출을 취소 가능
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
 * 이벤트(event) : 웹 브라우저가 알려주는 HTML 요소에 대한 사건의 발생
 * 웹 페이지에 사용된 자바스크립트는 이렇게 발생한 이벤트에 반응하여 특정 동작을 수행 가능
 * 따라서 클라이언트 측 자바스크립트를 비동기식 이벤트 중심(event-driven)의 프로그래밍 모델
 *
 * 이벤트 타입(event type) : 발생한 이벤트의 종류를 나타내는 문자열로, 이벤트 명(event name)이라고도 함
 * 가장 많이 사용하는 키보드, 마우스, HTML DOM, Window 객체 등을 처리하는 이벤트가 폭넓게 제공
 **/
<p onclick="changeText(this)">이 문자열을 클릭해 보세요!</p>

function changeText(element) {
    element.innerHTML = "문자열의 내용이 바뀌었습니다!";
}

/**
 * 이벤트 명세(event specification)
 * 예전에는 onload, onclick, onmouseover와 같이 기본적이고도 단순한 이벤트만을 사용
 * 하지만 웹 기술의 발전에 따라 touch나 gesture와 같은 새로운 이벤트들이 빠르게 증가
 * 따라서 하나의 표준만으로는 이벤트의 전체 목록을 정의할 수 없는 상황
 * 이렇게 방대해진 이벤트를 위한 명세는 현재 다음과 같이 나누어져 정의됨
 *
 * 1. DOM Level 3 이벤트 명세
 * 2. HTML5 관련 이벤트 명세
 * 3. 모바일 장치를 위한 이벤트 명세
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * 이벤트 리스너(event listener) : 이벤트가 발생했을 때 그 처리를 담당하는 함수를 가리키며, 이벤트 핸들러(event handler)라고도 함
 * 지정된 타입의 이벤트가 특정 요소에서 발생하면, 웹 브라우저는 그 요소에 등록된 이벤트 리스너를 실행
 *
 * 이벤트 리스너 등록
 * 작성된 이벤트 리스너는 먼저 해당 객체나 요소에 등록되어야만 호출 가능
 * 객체나 요소에 이벤트 리스너를 등록하는 방법은 다음과 같습니다.
 * 1. 이벤트의 대상이 되는 객체나 요소에 프로퍼티로 등록하는 방법
 * 2. 객체나 요소의 메서드에 이벤트 리스너를 전달하는 방법
 *
 * 객체나 요소에 프로퍼티로 이벤트 리스너를 등록하는 방법
 * 객체나 요소에 프로퍼티로 이벤트 리스너를 등록할 때는 다음과 같은 방법을 사용 가능
 * 1. 자바스크립트 코드에서 프로퍼티로 등록
 * 2. HTML 태그에 속성으로 등록
 *
 * 자바스크립트 코드에서 프로퍼티로 등록하는 방법은 거의 모든 브라우저가 대부분의 이벤트 타입을 지원
 * 이 방법의 단점은 이벤트 타입별로 오직 하나의 이벤트 리스너만을 등록 가능
 **/

window.onload = function() {                    // 이 함수는 HTML 문서가 로드될 때 실행됨.
    var text = document.getElementById("text"); // 아이디가 "text"인 요소를 선택함.
    text.innerHTML = "HTML 문서가 로드되었습니다.";
}

// 또한, 다음과 같이 HTML 태그에 속성으로 이벤트 리스너를 등록 가능
// 이 방법의 단점으로는 HTML 코드에 자바스크립트 코드가 추가됨으로써 가독성이 안 좋아지며, 유지보수도 어려워짐
<p onclick="alert('문자열을 클릭했어요!')">이 문자열을 클릭해 보세요!</p>

/**
 * 객체나 요소의 메서드에 이벤트 리스너를 전달하는 방법
 * 1. addEventListener()
 * 2. attachEvent()
 **/

/**
 * addEventListener() : 모든 브라우저에서 지원하는 이벤트 리스너 등록을 위한 메서드
 *
 * 원형
 * 대상객체.addEventListener(이벤트명, 실행할 이벤트리스너, 이벤트 전파방식)
 *
 * 1. 이벤트 명 : 이벤트 리스너를 등록할 이벤트 타입을 문자열로 전달
 * 2. 실행할 이벤트 리스너 : 지정된 이벤트가 발생했을 때 실행할 이벤트 리스너를 전달
 * 3. 이벤트 전파 방식 : false면 버블링(bubbling) 방식으로, true면 캡처링(capturing) 방식으로 이벤트를 전파
 **/
var showBtn = document.getElementById("btn"); // 아이디가 "btn"인 요소를 선택함.
showBtn.addEventListener("click", showText);  // 선택한 요소에 click 이벤트 리스너를 등록함.

function showText() {
    document.getElementById("text").innerHTML = "짜잔~!! 텍스트가 나타났어요!!";
}

/**
 * 이벤트 리스너를 프로퍼티로 등록할 때는 "on"이 붙은 이벤트 타입을 사용하지만, addEventListener() 메서드에서는 "on"이 붙지 않은 이벤트 타입을 사용해야 함
 * addEventListener() 메서드는 익스플로러 8과 그 이전 버전, 오페라 6과 그 이전 버전에서는 지원 X, 대신에 이와 유사한 동작을 하는 attachEvent() 메서드와 detachEvent() 메서드를 사용해야 함
 * addEventListener() 메서드를 사용하면, 하나의 객체에 여러 개의 이벤트 리스너를 등록 가능
 **/

var btn = document.getElementById("btn");        // 아이디가 "btn"인 요소를 선택함.
btn.addEventListener("click", clickBtn);         // 선택한 요소에 click 이벤트 리스너를 등록함.
btn.addEventListener("mouseover", mouseoverBtn); // 선택한 요소에 mouseover 이벤트 리스너를 등록함.
btn.addEventListener("mouseout", mouseoutBtn);   // 선택한 요소에 mouseout 이벤트 리스너를 등록함.

function clickBtn() {
    document.getElementById("text").innerHTML = "버튼이 클릭됐어요!";
}

function mouseoverBtn() {
    document.getElementById("text").innerHTML = "버튼 위에 마우스가 있네요!";
}

function mouseoutBtn() {
    document.getElementById("text").innerHTML = "버튼 밖으로 마우스가 나갔어요!";
}

/**
 * 이벤트 리스너 삭제
 * removeEventListener() 메서드를 사용하면, 등록된 이벤트 리스너를 손쉽게 삭제 가능
 **/

function clickBtn() {
    btn.removeEventListener("mouseover", mouseoverBtn);
    btn.removeEventListener("mouseout", mouseoutBtn);
    document.getElementById("text").innerHTML = "이벤트 리스너가 삭제되었어요!";
}
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * 이벤트 리스너 호출
 * 이벤트 리스너가 등록되고 해당 객체나 요소에 지정된 타입의 이벤트가 발생하면, 브라우저는 자동으로 등록된 이벤트 리스너를 호출
 * 이때 이벤트 리스너는 인수로 이벤트 객체(event object)를 전달받으며, 식별자를 통해 전달받은 이벤트 객체를 참조
 *
 * 이벤트 객체(event object) : 특정 타입의 이벤트와 관련이 있는 객체
 * 이벤트 객체는 해당 타입의 이벤트에 대한 상세 정보를 저장
 * 모든 이벤트 객체는 이벤트의 타입을 나타내는 type 프로퍼티와 이벤트의 대상을 나타내는 target 프로퍼티 가짐
 * 이러한 이벤트 객체는 이벤트 리스너가 호출될 때 인수로 전달
 **/
var btn = document.getElementById("btn"); // 아이디가 "btn"인 요소를 선택함.
btn.addEventListener("click", clickBtn);  // 선택한 요소에 click 이벤트 리스너를 등록함.

function clickBtn(event) {
    document.getElementById("text").innerHTML = "이 이벤트의 타입은 " + event.type + "이며, 이벤트의 대상은 " + event.target + "입니다.";
}

/**
 * 이벤트 호출 순서
 * addEventListener() 메서드를 사용하면 하나의 이벤트 타입에 여러 개의 이벤트 리스너를 등록 가능
 * 이때 특정 타입의 이벤트가 발생하면 브라우저는 다음과 같은 순서로 이벤트를 호출
 *
 * 1. 이벤트의 대상이 되는 객체나 요소에 프로퍼티로 등록한 이벤트 리스너를 가장 먼저 호출
 * 2. 그 후 addEventListener() 메서드를 사용하여 등록한 이벤트 리스너를 등록한 순서대로 호출
 *
 * 이벤트 전파(event propagation)
 * 이벤트가 발생했을 때, 브라우저가 이벤트 리스너를 실행시킬 대상 요소를 결정하는 과정
 * 이벤트의 대상이 Window 객체와 같은 단일 객체라면 이벤트의 전파 X
 * 하지만 Document 객체나 HTML 문서의 요소에서 이벤트가 일어나면 대상 요소를 결정하기 위해 이벤트의 전파 발생
 *
 * 버블링(bubbling) 전파 방식
 * 버블링 전파 방식은 이벤트가 발생한 요소부터 시작해서, DOM 트리를 따라 위쪽으로 올라가며 전파되는 방식
 * 이 전파 방식은 해당 요소의 리스너가 실행된 후, 그 부모 요소에 등록된 리스너가 실행되고, 또다시 그 부모 요소에 등록된 리스너가 실행
 * 이러한 이벤트의 전파는 Document 객체뿐만 아니라 가장 마지막에는 Window 객체까지 계속 이어짐
 * 버블링 전파 방식은 다수의 요소에 공통으로 적용되는 이벤트 리스너를 각각의 요소마다 따로 등록할 필요 없이 공통된 조상 요소에 한 번만 등록하면 처리 가능
 **/
// 각 요소마다 버블링 방식으로 click 이벤트 리스너를 등록함.
document.getElementById("divBox").addEventListener("click", clickDiv);
document.getElementById("paraBox").addEventListener("click", clickPara);
document.getElementById("spanBox").addEventListener("click", clickSpan);

function clickDiv(event) { document.getElementById("text").innerHTML += "div 요소를 click 하셨네요!<br>"; }
function clickPara(event) { document.getElementById("text").innerHTML += "p 요소를 click 하셨네요!<br>"; }
function clickSpan(event) { document.getElementById("text").innerHTML += "span 요소를 click 하셨네요!<br>"; }

/**
 * 캡쳐링(capturing) 전파 방식
 * 캡쳐링 전파 방식은 이벤트가 발생한 요소까지 DOM 트리의 최상위부터 아래쪽으로 내려가면 전파되는 방식
 * 이 전파 방식은 맨 먼저 Window 객체의 리스너가 실행된 후, Document 객체에 등록된 리스너가 실행되고, 또다시 그 자식 요소에 등록된 리스너가 실행
 * 이러한 이벤트의 전파는 이벤트가 발생한 요소까지 이어짐
 * 이 전파 방식을 사용하기 위해서는 addEventListener() 메서드의 세 번째 인수에 true를 전달
 * 캡쳐링 전파 방식은 실제 이벤트의 대상이 되는 요소에 이벤트가 전달되기 전에 상위 요소에 등록된 이벤트 리스너가 이를 가로채거나 잡기 가능
 * 이렇게 이벤트를 걸러내어 해당 이벤트 리스너가 호출되지 않도록 하는 기법을 이벤트 취소 기법
 * 캡쳐링 전파 방식은 addEventListener() 메서드를 지원하지 않는 익스플로러 8과 그 이전 버전, 오페라 6과 그 이전 버전에서는 사용 불가
 **/
// 각 요소마다 캡쳐링 방식으로 click 이벤트 리스너를 등록함.
document.getElementById("divBox").addEventListener("click", clickDiv, true);
document.getElementById("paraBox").addEventListener("click", clickPara, true);
document.getElementById("spanBox").addEventListener("click", clickSpan, true);

/**
 * 이벤트 기본 동작의 취소
 * HTML <a>요소에 클릭(click) 이벤트가 발생하면 브라우저는 지정된 주소를 따라가 새로운 웹 페이지를 열게 됨
 * 이렇게 특정 이벤트는 미리 지정된 기본 동작을 가지고 있음
 * 하지만 preventDefalult() 메서드나 returnValue 프로퍼티를 이용하면, 이러한 기본 동작의 실행을 취소 가능
 **/
// 각 요소마다 버블링 방식으로 click 이벤트 리스너를 등록함.
document.getElementById("divBox").addEventListener("click", clickDiv);
document.getElementById("paraBox").addEventListener("click", clickPara);
document.getElementById("linkBox").addEventListener("click", clickLink);

function clickDiv(event) { document.getElementById("text").innerHTML += "div 요소를 click 하셨네요!<br>"; }
function clickPara(event) { document.getElementById("text").innerHTML += "p 요소를 click 하셨네요!<br>"; }

function clickLink(event) {
    event.preventDefault(); // 링크의 기본 동작을 취소함.
    document.getElementById("text").innerHTML += "링크의 기본 동작을 막았어요!<br>";
    document.getElementById("text").innerHTML += "a 요소를 click 하셨네요!<br>";
}

/**
 * 이벤트 전파의 취소
 * 앞서 살펴본 이벤트의 기본 동작뿐만 아니라 이벤트의 전파도 취소 가능
 * stopPropagation() 메서드나 cancelBubble 프로퍼티를 이용하면, 이러한 이벤트의 전파를 취소 가능
 **/

function clickLink(event) {
    event.preventDefault();  // 링크의 기본 동작을 취소함.
    document.getElementById("text").innerHTML += "링크의 기본 동작을 막았어요!<br>";
    event.stopPropagation(); // 이벤트의 전파를 취소함.
    document.getElementById("text").innerHTML += "이벤트의 전파를 막았어요!<br>";
}
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * 예외(exception) : 프로그램이 실행 중에 발생하는 런타임 오류를 의미
 * 이러한 예외가 발생하지 않도록 미리 방지하는 것도 중요하지만, 발생한 예외를 처리하는 방법 또한 매우 중요
 *
 * 예외 발생
 * 예외를 발생시킨다는 것은 명시적으로 오류를 발생시킨다는 의미뿐만 아니라 예외 상황을 알림
 * 자바스크립트에서는 throw 키워드를 사용하여 예외를 발생
 *
 * 문법
 * throw 표현식;
 *
 * 표현식에는 예외 코드를 나타내는 숫자나 오류 메시지를 담고 있는 문자열, Error 객체 등
 *
 * 예외 처리(exception handling)
 * 자바스크립트에서는 프로그램이 실행되는 도중 발생하는 예외를 처리하기 위해 try / catch / finally 문을 사용
 *
 * 문법
 * try {
 *     예외를 처리하길 원하는 실행 코드;
 * } catch (ex) {
 *     예외가 발생할 경우에 실행될 코드;
 * } finally {
 *     try 블록이 종료되면 무조건 실행될 코드;
 * }
 *
 * 1. try 블록 : 기본적으로 맨 먼저 실행되는 코드이며, 여기에서 발생한 예외는 catch 블록에서 처리
 *
 * 2. catch 블록 : try 블록에서 발생한 예외 코드나 Error 객체를 인수로 전달받아 처리
 *
 * 3. finally 블록 : 이 블록은 try 블록에서 예외가 발생하건 안 하건 맨 마지막에 무조건 실행됩니다.
 *
 *
 *
 * catch 블록과 finally 블록은 선택적인 옵션으로 반드시 사용할 필요는 없습니다.
 *
 * 따라서 사용할 수 있는 모든 적합한 try 구문은 다음과 같습니다.
 *
 * 적합한 try 구문
 * 1. try / catch
 *
 * 2. try / finally
 *
 * 3. try / catch / finally
 *
 * Error 객체
 * 자바스크립트에서는 런타임 오류가 발생할 때마다 Error 객체의 인스턴스가 만들어져 해당 오류의 정보를 저장
 **/
var btn = document.getElementById("throwExBtn");      // 아이디가 "throwExBtn"인 요소를 선택함.
btn.addEventListener("click", throwEx);               // 선택한 요소에 click 이벤트 리스너를 등록함.

function throwEx() {
    try {
        throw new Error("직접 발생시킨 오류입니다!"); // Error 객체를 사용해 명시적으로 오류를 발생시킴.
    } catch (ex) { // 발생된 오류를 매개변수 ex로 접근할 수 있음.
        document.getElementById("text").innerHTML = ex.name + "<br>"; // name 프로퍼티는 오류의 타입을 저장함.
        document.getElementById("text").innerHTML += ex.message;   // message 프로퍼티는 오류 메시지를 저장함.
    }
}
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * strict 모드 : ECMAScript 5에서 처음으로 소개된 strict 모드는 자바스크립트 코드에 더욱 엄격한 오류 검사를 적용
 * strict 모드는 스크립트나 함수의 맨 처음에 "use strict" 지시어를 사용하여 선언 가능
 * 이렇게 선언된 strict 모드는 해당 블록의 코드를 strict 모드의 문법에 따라 엄격하게 검사
 **/
"use strict"    // 전체 스크립트를 strict 모드로 설정함.
try {
    num = 3.14; // 선언되지 않은 변수를 사용했기 때문에 오류를 발생시킴.
} catch (ex) {
    document.getElementById("text").innerHTML = ex.name + "<br>";
    document.getElementById("text").innerHTML += ex.message;
}

str = "실수!";    // 선언되지 않은 변수를 사용했지만 자동으로 전역 변수로 선언됨.

document.getElementById("noStrict").innerHTML = str + "<br>";

function StrictBlock() {

    "use strict"  // 함수 블록만을 strict 모드로 설정함.

    try {

        num = 123 // 선언되지 않은 변수를 사용했기 때문에 오류를 발생시킴.

    } catch (ex) {

        document.getElementById("funcStrict").innerHTML = ex.name + "<br>";

        document.getElementById("funcStrict").innerHTML += ex.message;

    }

}

StrictBlock();

/**
 * 위의 예제에서 strict 모드가 아닌 전역 영역에서는 선언되지 않은 변수를 사용해도 자동으로 전역 변수로 인식
 * 하지만 strict 모드로 선언된 함수 블록에서는 선언되지 않은 변수를 사용하면 오류를 발생
 *
 * strict 모드의 특징
 * 자바스크립트의 strict 모드는 기존 자바스크립트 언어의 일부 기능을 제한한 문법을 사용
 * 또한, 몇 가지 중요한 기능을 수정하여 강력한 오류 검사와 함께 향상된 보안 기능을 제공
 *
 * 기존 자바스크립트의 문법과 다른 strict 모드의 문법은 다음과 같습니다.
 * 변수      선언되지 않은 변수나 객체를 사용할 수 없음.
 * eval()   함수 내에서 선언된 변수는 외부에서 사용할 수 없음.
 * 프로퍼티   읽기 전용 프로퍼티에는 대입할 수 없음, 한 프로퍼티를 여러 번 정의할 수 없음.
 * 함수      함수를 구문이나 블록 내에서 선언할 수 없음, 매개변수 매개변수의 이름이 중복되어서는 안됨, arguments 객체의 요소 값을 변경할 수 없음.
 * 문자열    문자열 "eval"과 "arguments"는 사용할 수 없음.
 * 8진수     숫자 리터럴에 8진수 값을 대입할 수 없음.
 * this     this 포인터가 가르키는 값이 null이나 undefined인 경우 전역 객체로 변환되지 않음.
 * delete   delete 키워드를 사용할 수 없음.
 * with     with 문을 사용할 수 없음.
 *
 * 예약어
 * 다음 예약어들은 사용할 수 없음.
 * implements, interface, let, package, private, protected, public, static, yield
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * 정규 표현식의 개념
 * 정규 표현식(regular expression)이란?
 * 정규 표현식(regular expression)은 문자열에서 특정한 규칙을 가지는 문자열의 집합을 찾아내기 위한 검색 패턴
 * 이러한 검색 패턴은 모든 종류의 문자열 검색이나 교체 등의 작업에서 사용 가능
 *
 * 정규 표현식의 생성
 * 1. 정규 표현식 리터럴을 이용한 생성
 * 2. RegExp 객체를 이용한 생성
 *
 * 문법
 * /검색패턴/플래그
 * 정규 표현식 리터럴은 슬래시(/) 기호로 시작하여, 슬래시(/) 기호로 끝남
 * 또한, 필요에 따라 플래그를 추가하여 기본 검색 설정을 변경 가능
 **/
var regStr = /a+bc/;             // 정규 표현식 리터럴을 이용한 생성
var regObj = new RegExp("a+bc"); // RegExp 객체를 이용한 생성
regStr;                          // /a+bc/
regObj;                          // /a+bc/

/**
 * 단순한 패턴 검색
 * 정규 표현식을 사용하여 단순한 패턴을 검색하고자 할 때는 찾고자 하는 문자열을 직접 나열
 * /abc/
 */
var targetStr = "간장 공장 공장장은 강 공장장이고, 된장 공장 공장장은 장 공장장이다."
var strReg1 = /공장/;
var strReg2 = /장공/;

targetStr.search(strReg1); // 3
targetStr.search(strReg2); // -1

/**
 * 위의 예제에서 첫 번째 정규 표현식은 해당 문자열의 부분 문자열인 "공장"과 총 6번 일치
 * 하지만 search() 메서드는 일치하는 문자열 중에서 첫 번째 문자열의 인덱스만을 반환
 * 위의 예제에서 두 번째 정규 표현식은 해당 문자열이 "장 공"이라는 부분 문자열은 포함하고 있지만, 정확히 "장공"이라는 부분 문자열을 포함하지 않으므로, 아무것도 일치 X
 *
 * search() : 해당 문자열에서 인수로 전달받은 정규 표현식과 일치하는 부분 문자열을 찾지 못하면 -1을 반환
 * search()는 해당 문자열에서 인수로 전달받은 정규 표현식과 일치하는 첫 번째 문자열의 위치를 반환해주는 자바스크립트의 String 메서드
 *
 * 플래그(flags) : 정규 표현식을 생성할 때 플래그를 사용하여 기본 검색 설정을 변경 가능
 * 이렇게 설정된 플래그는 나중에 추가되거나 삭제 불가
 *
 * i : 검색 패턴을 비교할 때 대소문자를 구분하지 않도록 설정함.
 * g : 검색 패턴을 비교할 때 일치하는 모든 부분을 선택하도록 설정함.
 * m : 검색 패턴을 비교할 때 여러 줄의 입력 문자열을 그 상태 그대로 여러 줄로 비교하도록 설정함.
 * y : 대상 문자열의 현재 위치부터 비교를 시작하도록 설정함.
 */

var targetStr = "bcabcAB";
var strReg = /AB/;              // 검색 패턴 비교 시 기본 설정으로 대소문자를 구분함.
var strUsingFlag = /AB/i;       // new RegExp("AB", "i")와 동일함.

targetStr.search(strReg);       // 5
targetStr.search(strUsingFlag); // 2 -> 대소문자를 구분하지 않고 검색함.

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * 특수 문자(special characters)
 * 정규 표현식을 사용하여 단순한 패턴을 검색하고자 할 때는 찾고자 하는 문자열을 직접 나열
 * 하지만 숫자만을 검색하거나, 띄어쓰기를 찾는 등 정확히 일치하는 패턴보다 더 복잡한 조건을 사용하려면 특수 문자를 사용
 * 자바스크립트 정규 표현식에서 사용할 수 있는 대표적인 특수 문자는 다음과 같습니다.
 *
 * \      : 역슬래시(\) 다음에 일반 문자가 나오면 이스케이프 문자로 해석하고, 특수 문자가 나오면 일반 문자로 해석함.
 * \d     : 숫자를 검색함. /[0-9]/와 같음.
 * \D     : 숫자가 아닌 문자를 검색함. /[^0-9]/와 같음
 * \w     : 언더스코어(_)를 포함한 영문자 및 숫자를 검색함. /[A-Za-z0-9_]/와 같음.
 * \W     : 언더스코어(_), 영문자, 숫자가 아닌 문자를 검색함. /[^A-Za-z0-9_]/와 같음.
 * \s     : 띄어쓰기, 탭, 줄 바꿈 문자 등의 공백 문자를 검색함.
 * \S     : 띄어쓰기, 탭, 줄 바꿈 문자 등의 공백 문자가 아닌 문자를 검색함.
 * \b     : 단어의 맨 앞이나 맨 뒤가 패턴과 일치하는지를 검색함.
 * \xhh   : 16진수 hh에 해당하는 유니코드 문자를 검색함.
 * \uhhhh : 16진수 hhhh에 해당하는 유니코드 문자를 검색함.
 *
 **/
var targetStr = "ab1bc2cd3de";
var reg1 = /\d/;    // 2 -> 0부터 9까지의 숫자를 검색함.
var reg2 = /[3-9]/; // 8 -> 3부터 9까지의 숫자를 검색함.

/**
 * 위의 예제에서 첫 번째 정규 표현식은 0부터 9까지의 숫자인지를 검색
 * 이 정규 표현식은 "/[0-9]/"와 같은 결과를 반환
 * 두 번째 정규 표현식은 3부터 9까지의 숫자인지를 검색
 **/
var targetStr = "abc 123";
// 공백 문자를 사이에 두는 언더스코어(_)를 포함한 영문자 및 숫자로 이루어진 문자열을 검색함.
var reg = /\w\s\w/; // c 1

/**
 * 위의 예제에서 사용된 정규 표현식은 첫 번째 문자로 언더스코어(_)를 포함한 영문자 및 숫자를 검색
 * 두 번째 문자로는 띄어쓰기를 포함한 탭(tab), 줄 바꿈 문자 등의 공백 문자를 검색
 * 마지막 세 번째 문자로 다시 언더스코어(_)를 포함한 영문자 및 숫자를 검색
 * 이처럼 특수 문자를 나열하여 각각의 조건에 해당하는 문자로 이루어진 부분 문자열을 검색 가능
 * match() : 해당 문자열에서 인수로 전달받은 정규 표현식과 일치하는 문자열을 모두 찾아서 하나의 배열로 반환해주는 자바스크립트의 String 메서드
 **/

var targetStr1 = "abc123abc";   // 7
var targetStr2 = "abc 123 abc"; // 1
var targetStr3 = "abc@123!abc"; // 1
// 단어의 맨 앞이나 맨 뒤에 부분 문자열 "bc"가 존재하는지를 검색함.

var reg = /bc\b/;
/**
 * 특수 문자 '\b'를 사용한 정규 표현식은 단어의 맨 앞이나 맨 뒤가 패턴과 일치하는지를 검색
 * 위의 예제에서 첫 번째 정규 표현식은 해당 문자열을 하나의 단어로 인식하고, 양 끝에 위치한 패턴을 검색
 * 하지만 두 번째와 세 번째 정규 표현식은 해당 문자열을 여러 개의 단어로 인식하고, 모든 단어에 대해 패턴을 검색
 * 자바스크립트에서는 언더스코어(_)와 영문자 ,숫자만을 단어에 포함될 수 있는 문자로 인식
 * 따라서 이 외의 모든 문자는 문자열에서 단어를 구분하는 문자(word break)로 인식
 *
 * 양화사(quantifier) : 정규 표현식에서는 특수 문자로 수량을 나타내는 다양한 양화사를 사용 가능
 * n* : 바로 앞의 문자가 0번 이상 나타나는 경우를 검색함. /{0, }/와 같음.
 * n+ : 바로 앞의 문자가 1번 이상 나타나는 경우를 검색함. /{1, }/과 같음.
 * n? : 바로 앞의 문자가 0번 또는 1번만 나타나는 경우를 검색함. /{0,1}/과 같음.
 **/

var targetStr = "Hello World!";
var zeroReg = /lo*/;          // 문자 'l' 다음에 문자 'o'가 0번 이상 나타나는 경우를 검색함.
var oneReg = /lo+/;           // 문자 'l' 다음에 문자 'o'가 1번 이상 나타나는 경우를 검색함.
var zeroOneReg = /lo?/;       // 문자 'l' 다음에 문자 'o'가 0 또는 1번만 나타나는 경우를 검색함.

targetStr.search(zeroReg);    // 2
targetStr.search(oneReg);     // 3
targetStr.search(zeroOneReg); // 2

// 또한, 물음표(?) 기호가 정규 표현식의 양화사(*, +, ?, {}) 바로 다음에 위치하게 되면, 가능한 많은 문자를 가지도록 패턴을 찾는 기본 설정과는 달리 해당 양화사가 가능한 적은 수의 문자만을 가지는 패턴을 찾도록 변경시킵니다.

var targetStr = "123abc";
var oneReg = /\d+/;           // 숫자를 검색함. /[0-9]/와 같음.
var anotherReg = /\d+?/;      // 숫자를 검색하지만, 가능한 적은 수의 문자를 가지는 패턴을 검색함.

targetStr.search(oneReg);     // 123

/**
 * 위의 예제에서 첫 번째 정규 표현식은 하나 이상의 숫자만을 검색하므로, 문자열 "123abc"에서 가능한 많은 문자를 가지도록 "123"을 검색
 * 하지만 두 번째 정규 표현식처럼 바로 뒤에 물음표(?) 기호를 추가하면, 가능한 적은 문자를 가지도록 변경되므로, "1"만을 검색
 *
 * 괄호(bracket)
 * a(b)c : 전체 패턴을 검색한 후에 괄호 안에 명시된 문자열을 저장함. (ex : "abc"를 검색한 후에 b를 저장함.)
 * [abc] : 꺾쇠 괄호([]) 안에 명시된 문자를 검색함. (ex : "abc"를 검색함.)
 * [0-3] : 꺾쇠 괄호([]) 안에 명시된 숫자를 검색함. (ex : 0부터 3까지의 숫자를 검색함.)
 * [\b]  : 백스페이스 문자를 검색함.
 * {n}   : 앞의 문자가 정확히 n번 나타나는 경우를 검색함. n은 반드시 양의 정수이어야만 함.
 * {m,n} : 앞의 문자가 최소 m번 이상 최대 n번 이하로 나타나는 경우를 검색함. m과 n은 반드시 양의 정수이어야만 함.
 * \b는 단어의 맨 앞이나 맨 뒤가 패턴과 일치하는지를 검색하는 특수 문자이고, [\b]는 백스페이스 문자를 검색하는 정규표현식
 */

targetStr.search(anotherReg); // 1

var targetStr = "Hong Gil Dong";
var nameReg = /(\w+)\s(\w+)\s(\w+)/;                  // 공백 문자를 기준으로 각 부분문자열을 저장함.
var engName = targetStr.replace(nameReg, "$2 $3 $1"); // 첫 번째 부분문자열을 맨 마지막으로 위치시킴.

engName;                                              // Gil Dong Hong
/**
 * 위의 예제에서 괄호로 묶여진 정규 표현식으로 검색되는 세 개의 부분 문자열은 차례대로 저장됩니다.
 * 이때 replace() 메서드에서는 이렇게 저장된 부분 문자열을 $1, $2, ..., $n 표현을 이용하여 사용 가능
 * 정규 표현식에서 사용되는 괄호(())를 "capturing parentheses"
 * 이렇게 저장된 부분 문자열은 replace() 메서드에서 사용할 수도 있지만, 정규 표현식 내부에서 바로 사용 가능
 */

var targetStr = "abc 123 abc 123";
var oneReg = /(\w+) (\d+)/;
var anotherReg = /(\w+) (\d+) \1 \2/;

targetStr.match(oneReg);     // abc 123, abc, 123
targetStr.match(anotherReg); // abc 123 abc 123, abc, 123

/**
 * 위의 예제에서 첫 번째 정규 표현식은 언더스코어(_)를 포함한 영문자 및 숫자로 이루어진 한 부분 문자열과 띄어쓰기로 구분되는 숫자로 이루어진 또 다른 부분 문자열을 검색
 * 따라서 해당 문자열에서는 각각 첫 번째 "abc"와 "123"이 검색되어 저장
 * 하지만 두 번째 정규 표현식에서는 위와 같은 방법으로 저장된 부분 문자열을 정규 표현식 내에서 또다시 사용
 * 이때 정규 표현식 내에서는 \1, \2, ..., \n 표현을 이용하여 저장된 부분 문자열을 사용 가능
 *
 * match() 메서드 : 정규 표현식과 모두 일치하는 부분 문자열뿐만 아니라, 괄호를 사용하여 저장된 부분 문자열도 함께 반환
 * ^a : 단어의 맨 앞에 위치한 해당 패턴만을 검색함. (ex : 'a'로 시작하는 단어의 'a'만을 검색함.)
 * a$ : 단어의 맨 뒤에 위치한 해당 패턴만을 검색함. (ex : 'a'로 끝나는 단어의 'a'만을 검색함.)
*/

var firstStr = "Php";
var secondStr = "phP";
var strReg = /^p/;       // 'p'로 시작하는 단어의 'p'만을 검색함.

firstStr.match(strReg);  // null
secondStr.match(strReg); // p
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * RegExp 객체 : RegExp 객체는 정규 표현식을 구현한 자바스크립트 표준 내장 객체
 *
 * 문법
 * new RegExp(검색패턴[, 플래그]);
 * 1. 검색 패턴을 나타내는 정규 표현식은 따옴표나 슬래시(/)로 감싸!
 * 2. 기본 검색 설정을 변경할 수 있는 플래그는 필요할 때만 전달 가능
 *
 * RegExp.prototype 메서드
 * 모든 RegExp 인스턴스는 RegExp.prototype으로부터 메서드와 프로퍼티를 상속받음
 * 이렇게 상속받은 RegExp.prototype 메서드를 사용하여 정규 표현식을 표현 가능
 * 1. RegExp.prototype.exec()
 * 2. RegExp.prototype.test()
 *
 * exec() : 인수로 전달된 문자열에서 특정 패턴을 검색하여, 패턴과 일치하는 문자열을 반환
 * 만약에 패턴과 일치하는 문자열이 없으면 null을 반환
 **/
var targetStr = "abbcdefabgh";
var firstResult = /ab+/.exec(targetStr);    // 패턴과 일치하는 문자열이 여러 개인 경우
var secondResult = /abbb+/.exec(targetStr); // 패턴과 일치하는 문자열이 하나도 없는 경우

firstResult;  // abb -> 가장 맨 처음으로 일치하는 문자열이 반환됨.
secondResult; // null

/**
 * test() : 인수로 전달된 문자열에 특정 패턴과 일치하는 문자열이 있는지를 검색
 * 만약에 패턴과 일치하는 문자열이 있으면 true를, 없으면 false를 반환
 **/
var targetStr = "abbcdefabgh";
var firstResult = /ab+/.test(targetStr);    // 패턴과 일치하는 문자열이 여러 개인 경우
var secondResult = /abbb+/.test(targetStr); // 패턴과 일치하는 문자열이 하나도 없는 경우
firstResult;  // true
secondResult; // false

// toString() : RegExp 객체의 정규 표현식과 같은 의미를 가지는 정규 표현식 리터럴 문자열을 반환함.

/**
 * RegExp.prototype 프로퍼티 : 자바스크립트는 정규 표현식에서 사용하는 다양한 정보를 RegExp.prototype 프로퍼티를 이용해 제공하고 있습니다.
 * 1. RegExp.prototype.global
 * 2. RegExp.prototype.ignoreCase
 * 3. RegExp.prototype.multiline
 * 4. RegExp.prototype.source
 *
 * global : 검색 패턴을 비교할 때 일치하는 모든 부분을 선택하도록 설정하는 플래그인 'g'를 가리킴.
 * ignoreCase : 검색 패턴을 비교할 때 대소문자를 구분하지 않도록 설정하는 플래그인 'i'를 가리킴.
 * multiline : 검색 패턴을 비교할 때 여러 줄의 입력 문자열을 그 상태 그대로 여러 줄로 비교하도록 설정하는 플래그인 'm'을 가리킴.
 * source : 검색 패턴이 포함하고 있는 문자열을 가리킴.
 **/
/****************************************************************************************************************************************************/