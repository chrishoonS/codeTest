/**
 * 제이쿼리(jQuery)
 * 자바스크립트 언어를 간편하게 사용할 수 있도록 단순화시킨 오픈 소스 기반의 자바스크립트 라이브러리
 * 제이쿼리를 이용하면 문서 객체 모델(DOM)과 이벤트에 관한 처리를 손쉽게 구현
 * 또한, Ajax 응용 프로그램 및 플러그인도 제이쿼리를 활용하여 빠르게 개발 가능
 *
 * 제이쿼리가 많이 사용되는 이유
 * 1. 제이쿼리는 주요 웹 브라우저의 구버전을 포함한 대부분의 브라우저에서 지원
 * 2. HTML DOM을 손쉽게 조작할 수 있으며, CSS 스타일도 간단히 적용 가능
 * 3. 애니메이션 효과나 대화형 처리를 간단하게 적용
 * 4. 같은 동작을 하는 프로그램을 더욱 짧은 코드로 구현 가능
 * 5. 다양한 플러그인과 참고할 수 있는 문서가 많이 존재
 * 6. 오픈 라이선스를 적용하여 누구나 자유롭게 사용 가능
 *
 * 제이쿼리 버전
 * jQuery Foundation을 통해 버전 개발 및 유지 보수가 진행
 * 1. 버전 1 : jQuery 1.12.4
 * 2. 버전 2 : jQuery 2.2.4
 * 3. 버전 3 : jQuery 3.2.1
 *
 * 제이쿼리 적용
 * 제이쿼리는 자바스크립트 라이브러리이므로, 제이쿼리 파일은 자바스크립트 파일(.js 파일) 형태로 존재
 * 따라서 웹 페이지에서 제이쿼리를 사용하기 위해서는 제이쿼리 파일을 먼저 웹 페이지에 로드(load)해야 함
 *
 * 웹 페이지에 제이쿼리 파일을 로드하는 방법
 * 1. 제이쿼리 파일을 다운받아 로드하는 방법
 * 2. CDN(Content Delivery Network)을 이용하여 로드하는 방법
 *
 * 제이쿼리 파일을 다운받아 로드하는 방법
 * 최신 버전의 제이쿼리 파일은 다음 공식 사이트에서 다운 가능
 * jQuery.com : http://jquery.com/download
 * 이렇게 다운받은 제이쿼리 파일을 서버에 저장하고, 다음 <script>태그를 웹 페이지의 <head>태그 내에 삽입
 *
 * 문법
 * <head>
 *     <script src="/파일경로/제이쿼리파일명.js"></script>
 * </head>
 *
 * <head>
 *     <script src="/media/jquery-1.12.4.min.js"></script>
 * </head>
 *
 * CDN을 이용하여 로드하는 방법
 * CDN(Content Delivery Network)이란 웹 사이트의 접속자가 서버에서 콘텐츠를 다운받아야 할 때, 자동으로 가장 가까운 서버에서 다운받도록 하는 기술
 * 이 기술을 이용하면 특정 서버에 트래픽이 집중되지 않고, 콘텐츠 전송 시간이 매우 빨라지는 장점
 * 이러한 CDN을 이용하면 제이쿼리 파일을 서버에 따로 저장하지 않아도 제이쿼리를 사용 가능
 *
 * CDN
 * 1. jQuery.com CDN : <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
 * 2. 구글 CDN        : <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
 * 3. MS CDN         : <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.12.4.min.js"></script>
 * 4. CDNJS CDN      : <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
 * 5. jsDelivr CDN   : <script src="https://cdn.jsdelivr.net/jquery/1.12.4/jquery.min.js"></script>
 *
 * 예제
 * <head>
 *     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
 * </head>
 **/

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * 제이쿼리 문법
 * 제이쿼리를 사용하면 아주 간편하게 HTML 요소를 선택하고, 그렇게 선택된 요소에 손쉽게 특정 동작을 설정할 수 있습니다.
 * 제이쿼리의 기본 문법은 다음과 같습니다.
 * 
 * 문법
 * $(선택자).동작함수();
 * 
 * 달러($) 기호는 제이쿼리를 의미하고, 제이쿼리에 접근할 수 있게 해주는 식별자  
 * 선택자를 이용하여 원하는 HTML 요소를 선택하고, 동작 함수를 정의하여 선택된 요소에 원하는 동작을 설정
 * 
 * $() 함수 : 선택된 HTML 요소를 제이쿼리에서 이용할 수 있는 형태로 생성해 주는 역할
 * $() 함수의 인수로는 HTML 태그 이름뿐만 아니라, CSS 선택자를 전달하여 특정 HTML 요소를 선택 가능
 * 이러한 $() 함수를 통해 생성된 요소를 제이쿼리 객체(jQuery object)  
 * 제이쿼리는 이렇게 생성된 제이쿼리 객체의 메소드를 사용하여 여러 동작을 설정 가능
 * 
 * Document 객체의 ready() 메소드
 * 자바스크립트 코드는 웹 브라우저가 문서의 모든 요소를 로드한 뒤에 실행되야 함  
 * 보통은 별다른 문제가 발생하지 않지만, 다음과 같은 경우에는 오류가 발생
 * - 아직 생성되지 않은 HTML 요소에 속성을 추가하려고 할 경우
 * - 아직 로드되지 않은 이미지의 크기를 얻으려고 할 경우
 **/

function func() {
    addAttribute();  // 아이디가 "para"인 HTML 요소에 속성을 추가함.
    createElement(); // 아이디가 "para"인 HTML 요소를 생성함.
}

function createElement() {
    var criteriaNode = document.getElementById("text");
    var newNode = document.createElement("p");
    newNode.innerHTML = "새로운 단락입니다.";
    newNode.setAttribute("id", "para");
    document.body.insertBefore(newNode, criteriaNode);
}

function addAttribute() {
    document.getElementById("para").setAttribute("style", "color: red");
}
/**
 * 위의 예제에서 addAttribute() 함수는 아이디가 "para"인 HTML 요소에 새로운 속성을 추가하는 함수
 * 또한, createElement() 함수는 아이디가 "para"인 HTML 요소를 생성하여 추가해 주는 함수
**/

/**
 * 위의 예제에서는 아이디가 "para"인 HTML 요소가 생성되기 전에 해당 요소에 속성을 추가해 주는 addAttribute() 함수가 호출되므로,
 * Uncaught TypeError가 발생하여 실행중이던 스크립트는 중지될 것
 * 만약 먼저 호출되는 addAttribute() 함수를 createElement() 함수 뒤에 호출하면, 정상적으로 동작할 것
 * 웹 브라우저에서는 현재 HTML 문서에서 발생한 오류를 F12 버튼으로 확인 가능
 *
 * 자바스크립트에서는 Window 객체의 onload() 메소드를 이용하여 문서가 모두 로드된 뒤에 코드가 실행되도록 설정
 *
 * 문법
 * window.onload = function() {
 *     자바스크립트 코드;
 * };
 *
 * 마찬가지로 제이쿼리에서는 Document 객체의 ready() 메소드를 이용하여 같은 결과를 보장
 *
 * 문법
 * $(document).ready(function() {
 *     제이쿼리 코드;
 * });
 *
 * 또한, jQuery Team에서는 같은 결과를 보장하는 더욱 짧은 문법을 다음과 같이 제공
 *
 * 문법
 * $(function() {
 *     제이쿼리 코드;
 * });
 *
 * 다음 예제는 문서가 모두 로드되는 시점과 창이 모두 로드되는 시점의 차이를 보여주는 예제
 *
 **/
$(document).ready( function() {

    $("#doc").text("문서가 전부 로드됐어요!");

});

$(window).load( function() {

    $("#win").text("창이 모두 로드됐어요!");

});


/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 *
 **/
/****************************************************************************************************************************************************/

