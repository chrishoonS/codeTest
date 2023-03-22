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
 * 제이쿼리를 사용하면 아주 간편하게 HTML 요소를 선택하고, 그렇게 선택된 요소에 손쉽게 특정 동작을 설정 가능
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
 * CSS 선택자
 *
 * 요소의 선택
 * 제이쿼리를 사용하면 손쉽게 HTML 요소를 선택하여, 선택된 요소에 특정 동작을 설정 가능
 * 제이쿼리에서는 요소를 선택하기 위해 대부분의 CSS 선택자뿐만 아니라 몇몇 비표준 선택자까지 제공
 *
 * CSS 선택자를 이용한 선택
 * 제이쿼리에서는 CSS 선택자를 사용하여 HTML 요소를 선택 가능
 * 태그 이름을 사용하여 같은 태그 이름을 가지는 HTML 요소를 모두 선택 가능
 * 자바스크립트의 getElementsByTagName() 메소드와 같은 동작
 **/
$(function() {
    $("p").on("click", function() {        // <p>요소를 모두 선택함.
        $("span").css("fontSize", "28px"); // <span>요소를 모두 선택함.
    });
});

/**
 * $() 함수에 전달되는 인수는 반드시 따옴표("")를 사용한 문자열 형태로 전달
 * 아이디(id)를 사용하여 특정 HTML 요소를 선택 가능
 * 자바스크립트의 getElementsById() 메소드와 같은 동작
 **/

$(function() {
    $("p").on("click", function() {
        $("#jq").css("border", "2px solid orange"); // 아이디가 "jq"인 요소를 선택함.
    });
});

/**
 * 클래스(class)를 사용하여 같은 클래스에 속하는 HTML 요소를 모두 선택 가능
 * 자바스크립트의 getElementsByClassName() 메소드와 같은 동작
 **/
$(function() {
    $("p").on("click", function() {
        $(".jq").css("backgroundColor", "lightgray"); // 클래스가 "jq"인 요소를 모두 선택함.
    });
});

//속성(attribute)을 사용하여 속성이 조건에 맞는 특정 HTML 요소를 선택 가능
$(function() {
    $("button").on("click", function() { // <img>요소 중에서 alt 속성값이 "flower"인 요소를 모두 선택함.
        $("img[alt='flower']").attr("src", "/examples/images/img_monalisa.png");
    });
});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * 제이쿼리 선택자
 * 제이쿼리에서는 CSS 선택자뿐만 아니라 몇몇 비표준 선택자까지도 사용가능
 * 이러한 비표준 선택자를 사용하면 선택한 요소를 저장하거나, 그 결과에 대해 필터링까지 가능
 *
 * 선택한 요소의 저장
 * 제이쿼리에서는 선택한 요소들을 변수에 저장하여 사용가능
 **/

$(function() {

    var items = $("li"); // <li>요소를 모두 선택하여 변수 items에 저장함.

    $("button").on("click", function() {

        $("#len").text("저장된 <li>요소의 총 개수는 " + items.length + "개 입니다.");

    });

});



/**
 * 하지만 이렇게 저장된 요소들은 변수에 저장될 당시의 요소들만 저장됩니다.
 * 즉, 요소가 저장된 이후에 문서에 추가되거나 삭제된 요소들을 자동으로 갱신하지는 않습니다.
 *
 * 선택한 요소의 필터링
 * 제이쿼리에서는 선택한 요소 중에서 더욱 세분화된 선택을 하기 위한 필터링을 진행가능
 * 다음 예제는 문서 내의 모든 <li>요소 중에서 <span>요소를 가지고 있는 요소만을 선택하는 예제입니다.
*/


$(function() {

    $("button").on("click", function() {

        $("li:has(span)").text("<span>요소를 가지고 있는 아이템이에요!");

    });

});




/**
 * 필터링에 사용할 수 있는 선택자
 * :eq(n) : 선택한 요소 중에서 인덱스가 n인 요소를 선택함.
 * :gt(n) : 선택한 요소 중에서 인덱스가 n보다 큰 요소를 모두 선택함.
 * :lt(n) : 선택한 요소 중에서 인덱스가 n보다 작은 요소를 모두 선택함.
 * :even : 선택한 요소 중에서 인덱스가 짝수인 요소를 모두 선택함.
 * :odd : 선택한 요소 중에서 인덱스가 홀수인 요소를 모두 선택함.
 * :first : 선택한 요소 중에서 첫 번째 요소를 선택함.
 * :last : 선택한 요소 중에서 마지막 요소를 선택함.
 * :animated : 선택한 요소 중에서 애니메이션 효과가 실행 중인 요소를 모두 선택함.
 * :header : 선택한 요소 중에서 h1부터 h6까지의 요소를 모두 선택함.
 * :lang(언어) : 선택한 요소 중에서 지정한 언어의 요소를 모두 선택함.
 * :not(선택자) : 선택한 요소 중에서 지정한 선택자와 일치하지 않는 요소를 모두 선택함.
 * :root : 선택한 요소 중에서 최상위 루트 요소를 선택함.
 * :target : 선택한 요소 중에서 웹 페이지 URI의 fragment 식별자와 일치하는 요소를 모두 선택함.
 * :contains(텍스트) : 선택한 요소 중에서 지정한 텍스트를 포함하는 요소를 모두 선택함.
 * :has(선택자) : 선택한 요소 중에서 지정한 선택자와 일치하는 자손 요소를 갖는 요소를 모두 선택함.
 * :empty : 선택한 요소 중에서 자식 요소를 가지고 있지 않은 요소를 모두 선택함.
 * :parent : 선택한 요소 중에서 자식 요소를 가지고 있는 요소를 모두 선택함.
 *
 * input 요소의 선택
 * 제이쿼리에서는 입력 양식에 관련된 특정 요소를 손쉽게 선택 가능
 **/


$(function() {

    $("button").on("click", function() {

        // 체크되어 있는 요소를 모두 선택함.

        $(":checked").next().text("체크되어 있는 요소는 이 요소입니다.");

    });

});

/**
 * 특정 <input>요소를 선택할 수 있는 선택자는 다음과 같습니다.
 * :button : type 속성값이 "button"인 요소를 모두 선택함.
 * :checkbox : type 속성값이 "checkbox"인 요소를 모두 선택함.
 * :file : type 속성값이 "file"인 요소를 모두 선택함.
 * :image : type 속성값이 "image"인 요소를 모두 선택함.
 * :password : type 속성값이 "password"인 요소를 모두 선택함.
 * :radio : type 속성값이 "radio"인 요소를 모두 선택함.
 * :reset : type 속성값이 "reset"인 요소를 모두 선택함.
 * :submit : type 속성값이 "submit"인 요소를 모두 선택함.
 * :text : type 속성값이 "text"인 요소를 모두 선택함.
 * :input : <input>, <textarea>, <select>, <button>요소를 모두 선택함.
 * :checked : type 속성값이 "checkbox" 또는 "radio"인 요소 중에서 체크되어 있는 요소를 모두 선택함.
 * :selected : <option>요소 중에서 선택된 요소를 모두 선택함.
 * :focus : 현재 포커스가 가지고 있는 요소를 선택함.
 * :disabled : 비활성화되어있는 요소를 모두 선택함.
 * :enabled : 활성화되어있는 요소를 모두 선택함.
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
선택된 요소에 접근
getter 메소드와 setter 메소드
선택자에 의해 선택된 요소의 값을 읽거나 설정하기 위해서는 제이쿼리 메소드를 통해 해당 요소에 접근해야만 합니다.
 *
 *
 *
getter 메소드는 선택된 요소에 접근하여 그 값을 읽어오기 위한 메소드입니다.
 *
이러한 getter 메소드는 아무런 인수를 전달하지 않고 호출합니다.
 *
 *
 *
setter 메소드는 선택된 요소에 접근하여 그 값을 설정하기 위한 메소드입니다.
 *
이러한 setter 메소드는 대입하고자 하는 값을 인수로 전달하여 호출합니다.
 *
 *
 *
다음 예제는 <h1>요소에 접근하여 그 값을 읽어들인 후, 아이디가 "text"인 요소의 값을 해당 값으로 설정하는 예제입니다.
 *
예제
$(function() {
 *
    $("button").on("click", function() {
 *
①      var newText = $("h1").html(); // <h1>요소의 텍스트를 읽어오는 getter 메소드
 *
②      $("#text").html(newText);     // id가 "text"인 요소에 새로운 텍스트를 설정하는 setter 메소드
 *
    });
 *
});
 *

 *
 *
 *
위 예제의 ①번 라인처럼 .html() 메소드에 인수를 전달하지 않고 호출하면, 해당 HTML 요소에서 값을 읽어오는 getter 메소드로 사용됩니다.
 *
하지만 ②번 라인처럼 인수를 전달하고 호출하면, 해당 HTML 요소에 새로운 값을 설정하는 setter 메소드로 사용됩니다.
 *
메소드 체이닝(method chaining)
getter 메소드는 선택된 요소의 값을 읽어서 그 값을 반환합니다.
 *
만약 선택된 요소가 여러 개 존재하면, getter 메소드는 가장 '첫 번째 요소'의 값만을 반환할 것입니다.
 *
 *
 *
하지만 setter 메소드는 선택된 '모든 요소'에 인수로 전달된 값을 설정합니다.
 *
그리고 선택된 모든 요소에 접근할 수 있는 또 다른 제이쿼리 객체를 반환합니다.
 *
 *
 *
이렇게 반환된 제이쿼리 객체를 이용하면 세미콜론(;)을 사용하지 않고도, 곧바로 다른 제이쿼리 메소드를 호출가능
 *
이런 방식으로 여러 개의 메소드가 연속으로 호출되는 것을 메소드 체이닝(method chaining)이라고 합니다.
 *
 *
 *
다음 예제는 선택된 요소에 .find(), .eq(), .html() 메소드를 연속으로 호출하는 예제입니다.
 *
예제
$(function() {
 *
    $("button").on("click", function() {
 *
        // id가 "list"인 요소의 자손 요소 중에서 <li>요소를 모두 선택한 후에,
 *
        // 그 중에서 두 번째 요소의 값을 설정함.
 *
        $("#list").find("li").eq(1).html("두 번째 아이템을 선택했어요!!");
 *
    });
 *
});
 *
eq() 메소드는 선택한 요소 중에서 지정된 인덱스에 해당하는 요소를 선택하는 메소드입니다.
 *
 *
메소드 체이닝 도중에 .end() 메소드를 사용하면 바로 이전에 선택했던 요소의 집합을 다시 선택가능
 *
예제
$(function() {
 *
    $("button").on("click", function() {
 *
        $("#list")      // id가 "list"인 요소의 자손 요소 중에서
 *
①          .find("li") // <li>요소를 모두 선택한 후에,
 *
②          .eq(1).html("두 번째 아이템을 선택했어요!!")  // 그 중에서 두 번째 요소의 값을 설정함.
 *
③          .end()      // 다시 id가 "list"인 요소의 자손 요소 중에서 <li>요소를 모두 선택한 후에,
 *
④          .eq(2).html("세 번째 아이템도 선택했어요!!"); // 그 중에서 세 번째 요소의 값을 설정함.
 *
    });
 *
});
 *

 *
 *
 *
위 예제의 ②번 라인에서는 .eq() 메소드를 사용하여 ①번 라인에서 .find() 메소드로 선택한 요소의 집합 중 두 번째 요소를 선택합니다.
 *
그리고 ③번 라인에서 .end() 메소드를 사용하여 .eq() 메소드를 사용하기 이전 집합을 다시 선택하고 있습니다.
 *
따라서 ④번 라인에서 또다시 .eq() 메소드를 사용하여 요소를 선택할 수 있게 됩니다.
 *
.width() 메소드와 .height() 메소드
제이쿼리에서는 선택한 요소의 너비나 높이를 반환하거나 설정하기 위한 .width() 메소드와 .height() 메소드를 제공합니다.
 *
예제
$(function() {
 *
    $("#getter").on("click", function() {
 *
①      var size = "너비는 " + $("#box").width() + "px이고, 높이는 "
 *
            + $("#box").height() + "px입니다.<br>";
 *
        $("#text").html(size);
 *
    });
 *
    $("#setter").on("click", function() {
 *
②      w = $("#box").width();
 *
③      h = $("#box").height();
 *
④      $("#box").width(w/2).height(h/2);
 *
 *
 *
⑤      var size = "너비는 " + $("#box").width() + "px이고, 높이는 "
 *
⑥          + $("#box").height() + "px로 변경되었습니다.<br>";
 *
        $("#text").html(size);
 *
    });
 *
});
 *

 *
 *
 *
위의 예제에서는 선택한 요소의 너비와 높이 값을 얻기 위해 ①번부터 ③번, ⑤번과 ⑥번 라인까지 .width() 메소드와 .height() 메소드를 getter 메소드로 사용하고 있습니다.
 *
하지만 ④번 라인에서 .width() 메소드와 .height() 메소드는 인수를 전달받아 너비와 높이 값을 설정하기 위한 setter 메소드로 사용하고 있습니다.
 *
.attr() 메소드
.attr() 메소드는 선택한 요소의 특정 속성값을 반환하거나 설정하기 위해 사용합니다.
 *
예제
$(function() {
 *
    $("button").on("click", function() {
 *
        // <img>요소의 src 속성값을 읽어오는 getter 메소드
 *
①      var imgSrc = $("img").attr("src");
 *
        // <img>요소의 src 속성값을 새로운 값으로 설정하는 setter 메소드
 *
②      $("img").attr("src", "/examples/images/img_flag.png");
 *
    });
 *
});
 *

 *
 *
 *
위 예제의 ①번 라인에서는 .attr() 메소드에 인수를 하나만 전달하여, 해당 HTML 요소에서 인수로 전달받은 이름의 속성값을 읽어오는 getter 메소드로 사용하고 있습니다.
 *
하지만 ②번 라인에서는 인수를 두 개 전달하여, 해당 HTML 요소에 첫 번째 인수로 전달받은 이름의 속성값으로 두 번째 인수로전달받은 값을 설정하는 setter 메소드로 사용하고 있습니다.
 *
대표적인 getter 메소드와 setter 메소드
요소에 접근하여 요소의 값을 읽거나 설정할 수 있도록 해주는 대표적인 getter 메소드와 setter 메소드는 다음과 같습니다.
 *
메소드    설명
.html()    해당 요소의 HTML 콘텐츠를 반환하거나 설정함.
.text()    해당 요소의 텍스트 콘텐츠를 반환하거나 설정함.
.width()    선택한 요소 중에서 첫 번째 요소의 너비를 픽셀 단위의 정수로 반환하거나 설정함.
.height()    선택한 요소 중에서 첫 번째 요소의 높이를 픽셀 단위의 정수로 반환하거나 설정함.
.attr()    해당 요소의 명시된 속성의 속성값을 반환하거나 설정함.
.position()    선택한 요소 중에서 첫 번째 요소에 대해 특정 위치에 존재하는 객체를 반환함. (getter 메소드)
.val()    <form>요소의 값을 반환하거나 설정함.
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

