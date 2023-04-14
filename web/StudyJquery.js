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
 * 제이쿼리는 이렇게 생성된 제이쿼리 객체의 메서드를 사용하여 여러 동작을 설정 가능
 *
 * Document 객체의 ready() 메서드
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
 * 자바스크립트에서는 Window 객체의 onload() 메서드를 이용하여 문서가 모두 로드된 뒤에 코드가 실행되도록 설정
 *
 * 문법
 * window.onload = function() {
 *     자바스크립트 코드;
 * };
 *
 * 마찬가지로 제이쿼리에서는 Document 객체의 ready() 메서드를 이용하여 같은 결과를 보장
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
 * 자바스크립트의 getElementsByTagName() 메서드와 같은 동작
 **/
$(function() {
    $("p").on("click", function() {        // <p>요소를 모두 선택함.
        $("span").css("fontSize", "28px"); // <span>요소를 모두 선택함.
    });
});

/**
 * $() 함수에 전달되는 인수는 반드시 따옴표("")를 사용한 문자열 형태로 전달
 * 아이디(id)를 사용하여 특정 HTML 요소를 선택 가능
 * 자바스크립트의 getElementsById() 메서드와 같은 동작
 **/

$(function() {
    $("p").on("click", function() {
        $("#jq").css("border", "2px solid orange"); // 아이디가 "jq"인 요소를 선택함.
    });
});

/**
 * 클래스(class)를 사용하여 같은 클래스에 속하는 HTML 요소를 모두 선택 가능
 * 자바스크립트의 getElementsByClassName() 메서드와 같은 동작
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
 * 즉, 요소가 저장된 이후에 문서에 추가되거나 삭제된 요소들을 자동으로 갱신 X
 *
 * 선택한 요소의 필터링
 * 제이쿼리에서는 선택한 요소 중에서 더욱 세분화된 선택을 하기 위한 필터링을 진행가능
*/


$(function() {

    $("button").on("click", function() {

        // <li>요소 중에서 <span>요소를 가지고 있는 요소만을 선택
        $("li:has(span)").text("<span>요소를 가지고 있는 아이템이에요!");

    });

});

/**
 * 필터링에 사용할 수 있는 선택자
 * :eq(n)           : 선택한 요소 중에서 인덱스가 n인 요소를 선택함.
 * :gt(n)           : 선택한 요소 중에서 인덱스가 n보다 큰 요소를 모두 선택함.
 * :lt(n)           : 선택한 요소 중에서 인덱스가 n보다 작은 요소를 모두 선택함.
 * :even            : 선택한 요소 중에서 인덱스가 짝수인 요소를 모두 선택함.
 * :odd             : 선택한 요소 중에서 인덱스가 홀수인 요소를 모두 선택함.
 * :first           : 선택한 요소 중에서 첫 번째 요소를 선택함.
 * :last            : 선택한 요소 중에서 마지막 요소를 선택함.
 * :animated        : 선택한 요소 중에서 애니메이션 효과가 실행 중인 요소를 모두 선택함.
 * :header          : 선택한 요소 중에서 h1부터 h6까지의 요소를 모두 선택함.
 * :lang(언어)       : 선택한 요소 중에서 지정한 언어의 요소를 모두 선택함.
 * :not(선택자)      : 선택한 요소 중에서 지정한 선택자와 일치하지 않는 요소를 모두 선택함.
 * :root            : 선택한 요소 중에서 최상위 루트 요소를 선택함.
 * :target          : 선택한 요소 중에서 웹 페이지 URI의 fragment 식별자와 일치하는 요소를 모두 선택함.
 * :contains(텍스트) : 선택한 요소 중에서 지정한 텍스트를 포함하는 요소를 모두 선택함.
 * :has(선택자)      : 선택한 요소 중에서 지정한 선택자와 일치하는 자손 요소를 갖는 요소를 모두 선택함.
 * :empty           : 선택한 요소 중에서 자식 요소를 가지고 있지 않은 요소를 모두 선택함.
 * :parent          : 선택한 요소 중에서 자식 요소를 가지고 있는 요소를 모두 선택함.
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
 * 특정 <input>요소를 선택할 수 있는 선택자
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
 * 선택된 요소에 접근
 * getter 메서드와 setter 메서드
 * getter 메서드는 아무런 인수를 전달 없이 호출
 * setter 메서드는 대입하고자 하는 값을 인수로 전달하여 호출
 **/
$(function() {
    $("button").on("click", function() {
        // ① <h1>요소의 텍스트를 읽어오는 getter 메서드
        var newText = $("h1").html();
        // ② id가 "text"인 요소에 새로운 텍스트를 설정하는 setter 메서드
        $("#text").html(newText);
    });
});
//위 예제의 ①번 라인처럼 .html() 메서드에 인수를 전달하지 않고 호출하면, 해당 HTML 요소에서 값을 읽어오는 getter 메서드로 사용
// 하지만 ②번 라인처럼 인수를 전달하고 호출하면, 해당 HTML 요소에 새로운 값을 설정하는 setter 메서드로 사용됩니다.

/**
 * 메서드 체이닝(method chaining)
 * getter 메서드는 선택된 요소의 값을 읽어서 그 값을 반환
 * 만약 선택된 요소가 여러 개 존재하면, getter 메서드는 가장 '첫 번째 요소'의 값만을 반환
 * 하지만 setter 메서드는 선택된 '모든 요소'에 인수로 전달된 값을 설정
 * 선택된 모든 요소에 접근할 수 있는 또 다른 제이쿼리 객체를 반환
 * 이렇게 반환된 제이쿼리 객체를 이용하면 세미콜론(;)을 사용하지 않고도, 곧바로 다른 제이쿼리 메서드를 호출가능
 * 이런 방식으로 여러 개의 메서드가 연속으로 호출되는 것을 메서드 체이닝(method chaining)
 **/

$(function() {
    $("button").on("click", function() {
        // id가 "list"인 요소의 자손 요소 중에서 <li>요소를 모두 선택한 후에,
        // 그 중에서 두 번째 요소의 값을 설정함.
        $("#list").find("li").eq(1).html("두 번째 아이템을 선택했어요!!");
    });
});
/**
 * eq() : 선택한 요소 중에서 지정된 인덱스에 해당하는 요소를 선택하는 메서드
 * 메서드 체이닝 도중에 .end() 메서드를 사용하면 바로 이전에 선택했던 요소의 집합을 다시 선택가능
 **/

$(function() {
    $("button").on("click", function() {
        $("#list")      // id가 "list"인 요소의 자손 요소 중에서
          .find("li") // ① <li>요소를 모두 선택한 후에,
          .eq(1).html("두 번째 아이템을 선택했어요!!")  // ② 그 중에서 두 번째 요소의 값을 설정함.
          .end()      // ③ 다시 id가 "list"인 요소의 자손 요소 중에서 <li>요소를 모두 선택한 후에,
          .eq(2).html("세 번째 아이템도 선택했어요!!"); // ④ 그 중에서 세 번째 요소의 값을 설정함.
    });
});
/**
 * 위 예제의 ②번 라인에서는 .eq() 메서드를 사용하여 ①번 라인에서 .find() 메서드로 선택한 요소의 집합 중 두 번째 요소를 선택
 * 그리고 ③번 라인에서 .end() 메서드를 사용하여 .eq() 메서드를 사용하기 이전 집합을 다시 선택
 * 따라서 ④번 라인에서 또다시 .eq() 메서드를 사용하여 요소를 선택 가능
 * .width() 메서드와 .height() 메서드
 * 제이쿼리에서는 선택한 요소의 너비나 높이를 반환하거나 설정하기 위한 .width() 메서드와 .height() 메서드를 제공
 **/

$(function() {
    $("#getter").on("click", function() {
        // ①
        var size = "너비는 " + $("#box").width() + "px이고, 높이는 "

            + $("#box").height() + "px입니다.<br>";

        $("#text").html(size);

    });

    $("#setter").on("click", function() {
        // ②
        w = $("#box").width();
        // ③
        h = $("#box").height();

        $("#box").width(w/2).height(h/2);

        // ⑤
        var size = "너비는 " + $("#box").width() + "px이고, 높이는 "
        // ⑥
            + $("#box").height() + "px로 변경되었습니다.<br>";
        $("#text").html(size);
    });
});
/**
 * 위의 예제에서는 선택한 요소의 너비와 높이 값을 얻기 위해 ①번부터 ③번, ⑤번과 ⑥번 라인까지 .width() 메서드와 .height() 메서드를 getter 메서드로 사용
 * 하지만 ④번 라인에서 .width() 메서드와 .height() 메서드는 인수를 전달받아 너비와 높이 값을 설정하기 위한 setter 메서드로 사용
 *
 * .attr() 메서드
 * .attr() 메서드는 선택한 요소의 특정 속성값을 반환하거나 설정하기 위해 사용합니다.
 **/
$(function() {
    $("button").on("click", function() {
        // ① <img>요소의 src 속성값을 읽어오는 getter 메서드
        var imgSrc = $("img").attr("src");

        // ② <img>요소의 src 속성값을 새로운 값으로 설정하는 setter 메서드
        $("img").attr("src", "/examples/images/img_flag.png");
    });
});
/**
 * 위 예제의 ①번 라인에서는 .attr() 메서드에 인수를 하나만 전달하여, 해당 HTML 요소에서 인수로 전달받은 이름의 속성값을 읽어오는 getter 메서드로 사용
 * 하지만 ②번 라인에서는 인수를 두 개 전달하여, 해당 HTML 요소에 첫 번째 인수로 전달받은 이름의 속성값으로 두 번째 인수로 전달받은 값을 설정하는 setter 메서드로 사용
 *
 * 대표적인 getter 메서드와 setter 메서드
 *
 * .html() : 해당 요소의 HTML 콘텐츠를 반환하거나 설정함.
 * .text() : 해당 요소의 텍스트 콘텐츠를 반환하거나 설정함.
 * .width() : 선택한 요소 중에서 첫 번째 요소의 너비를 픽셀 단위의 정수로 반환하거나 설정함.
 * .height() : 선택한 요소 중에서 첫 번째 요소의 높이를 픽셀 단위의 정수로 반환하거나 설정함.
 * .attr() : 해당 요소의 명시된 속성의 속성값을 반환하거나 설정함.
 * .position() : 선택한 요소 중에서 첫 번째 요소에 대해 특정 위치에 존재하는 객체를 반환함. (getter 메서드)
 * .val() : <form>요소의 값을 반환하거나 설정함.
 **/
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/**
 * 요소의 추가
 * 제이쿼리는 새로운 요소나 콘텐츠를 손쉽게 추가할 수 있도록 여러 메서드를 제공
 *
 * 기존 요소의 내부에 추가
 * 다음 메서드를 사용하면 기존 요소의 내부에 새로운 요소나 콘텐츠를 추가 가능
 *
 * 1. .append()
 * 2. .prepend()
 * 3. .appendTo()
 * 4. .prependTo()
 *
 * .append()
 * .append() 메서드는 선택한 요소의 '마지막'에 새로운 요소나 콘텐츠를 추가
 **/

$(function() {

    $("button").on("click", function() {

        $("#list").append("<li>새로 추가된 아이템이에요!</li>");

    });

});

//.prepend() : 선택한 요소의 '처음'에 새로운 요소나 콘텐츠를 추가
$(function() {

    $("button").on("click", function() {

        $("li").prepend("새로 추가된 콘텐츠에요!");

    });

});

// .appendTo() : 선택한 요소를 '해당 요소의 마지막'에 삽입합니다.
// .append() 메서드와 같지만, 소스(source)와 타겟(target)의 위치가 서로 반대

$(function() {

    $("#firstBtn").on("click", function() {
        // id가 "list"인 요소의 맨 마지막에 id가 "firstItem"인 요소 추가
        $("#firstItem").appendTo("#list");
    });
});

// .prependTo() : 선택한 요소를 '해당 요소의 처음'에 삽입
// .prepend() 메서드와 같지만, 소스(source)와 타겟(target)의 위치가 서로 반대입니다.

$(function() {
    $("button").on("click", function() {
        $("<b>새로 추가된 콘텐츠에요!</b>").prependTo(".item");
    });
});

// .html() : 해당 요소의 HTML 콘텐츠를 반환하거나 설정함.
// .text() : 해당 요소의 텍스트 콘텐츠를 반환하거나 설정함.

// .before() 메서드
// .before() 메서드는 선택한 요소의 '바로 앞에' 새로운 요소나 콘텐츠를 추가

$(function() {
    $("button").on("click", function() {
        // id가 "firstRow"인 요소의 바로 앞에 새로운 <tr>요소 추가
        $("#firstRow").before("<tr><td>새로운 행이에요!</td></tr>");
    });
});

// .after() 메서드
// .after() 메서드는 선택한 요소의 '바로 뒤에' 새로운 요소나 콘텐츠를 추가
$(function() {
    $("button").on("click", function() {
        // id가 "firstRow"인 요소의 바로 뒤에 새로운 <tr>요소 추가
        $("#firstRow").after("<tr><td>새로운 행이에요!</td></tr>");
    });
});

// .insertBefore() 메서드
// .insertBefore() 메서드는 선택한 요소를 '해당 요소의 앞에' 삽입합니다.
//  동작은 before() 메서드와 같지만, 소스(source)와 타겟(target)의 위치가 서로 반대
$(function() {
    $("button").on("click", function() {
        // id가 "secondColumn"인 요소의 바로 앞에 새로운 <td>요소 추가
        $("<td>새로운 셀이에요!</td>").insertBefore("#secondColumn");
    });
});

// .insertAfter() 메서드
// .insertAfter() 메서드는 선택한 요소를 '해당 요소의 뒤에' 삽입
// 동작은 .after() 메서드와 같지만, 소스(source)와 타겟(target)의 위치가 서로 반대
$(function() {
    $("button").on("click", function() {
        // id가 "secondColumn"인 요소의 바로 뒤에 새로운 <td>요소 추가
        $("<td>새로운 셀이에요!</td>").insertAfter("#secondColumn");
    });
});

// .wrap() : '선택한 요소'를 포함하는 새로운 요소를 추가
$(function() {
    $("button").on("click", function() {
        // class가 "content"인 각 요소를 포함하는 새로운 요소 추가
        $(".content").wrap("<div class='wrapper'></div>");
    });
});

// .wrapAll() : '선택한 모든 요소'를 포함하는 새로운 요소를 추가
$(function() {
    $("button").on("click", function() {
        // class가 "content"인 모든 요소를 포함하는 새로운 요소 추가
        $(".content").wrapAll("<div class='wrapper'></div>");
    });
});

// .wrapInner() : '선택한 요소에 포함되는' 새로운 요소를 추가
$(function() {
    $("button").on("click", function() {
        // class가 "content"인 각 요소에 포함되는 새로운 요소 추가
        $(".content").wrapInner("<div class='wrapper'></div>");
    });
});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/*
 요소의 복사
 다음 메서드를 사용하면 선택한 요소나 콘텐츠를 복사하여 새로운 요소나 콘텐츠를 생성 가능
 .clone() : 선택한 요소를 복사하여 새로운 요소를 생성합니다.
 */
$(function() {
    $("button").on("click", function() {
        // id가 "firstItem"인 요소를 복사하여 id가 "list"인 요소에 추가함.
        $("#firstItem").clone().appendTo("#list");
    });
});

$(function() {
    $("#firstBtn").on("click", function() {
        // id가 "list"인 요소의 맨 마지막에 id가 "firstItem"인 요소 추가
        $("#firstItem").appendTo("#list");
    });
});
/*
위의 예제에서 볼 수 있듯이 .clone() 메서드는 기존의 HTML 요소를 복사하여 새로운 HTML 요소를 생성할 뿐
따라서 반드시 .append() 메서드나 .appendTo() 메서드와 같은 다른 메서드를 이용하여 요소를 추가해야 함
.clone() 메서드를 사용하지 않고 .appendTo() 메서드만을 사용하면, 기존에 존재하는 HTML 요소를 그대로 추가하는 것이 차이점

.appendTo() : 선택한 요소를 '해당 요소의 마지막'에 삽입해 주는 메서드
.clone() : 선택한 요소를 복사하여 새로운 요소를 생성함.

요소의 대체
다음 메서드를 사용하면 선택한 요소나 콘텐츠를 지정된 요소나 콘텐츠로 대체 가능

.replaceAll() : 선택한 요소를 지정된 요소로 대체
이 메서드는 인수로 선택자나 제이쿼리 객체, HTML DOM 요소, 배열 등을 전달 가능
 */

$(function() {
    $("button").on("click", function() {
        // class가 "item"인 각 요소를 id가 "firstItme"인 요소로 대체함.
        $("#firstItem").replaceAll(".item");
    });
});

/*
.replaceWith() : 선택한 요소를 지정된 요소로 대체
이 메서드는 인수로 HTML 코드 형식의 문자열이나 제이쿼리 객체, HTML DOM 요소, 배열 등을 전달받음.
또한, 선택한 요소를 대체할 수 있는 컨텐츠를 반환하는 함수를 인수로 전달받을 수도 있습니다.
.replaceWith() 메서드의 동작은 .replaceAll() 메서드와 비슷하지만, 소스(source)와 타겟(target)의 위치가 서로 반대
또한, .replaceWith() 메서드는 지정된 요소로 대체되어 제거된 기존 요소를 반환
.replaceAll() 와 .replaceWith() 는 제거된 요소와 관련된 모든 데이터와 이벤트 핸들러도 같이 제거
 */
$(function() {
    $("button").on("click", function() {
        // class가 "item"인 모든 요소를 id가 "firstItme"인 요소로 대체함.
        $(".item").replaceWith($("#firstItem"));
    });
});

// .remove() : 선택한 요소를 DOM 트리에서 삭제합니다.
// 이때 삭제되는 요소와 연관된 제이쿼리 데이터나 이벤트도 모두 함께 삭제
$(function() {
    $("button").on("click", function() {
        // class가 "content"인 요소 중에서 class가 각각 "first", "second"인 요소를 모두 삭제함.
        $(".content").remove(".first, .second");
    });
});

// .detach() 메서드는 선택한 요소를 DOM 트리에서 삭제
// 이때 삭제되는 요소와 연관된 제이쿼리 데이터나 이벤트는 삭제되지 않고, 계속 유지
// .detach() 메서드가 반환하는 제이쿼리 객체를 .append()나 .prepend()와 같은 메서드에 인수로 전달하면 삭제한 요소를 다시 복구 가능
$(function() {
    var data;
    $("#detachBtn").on("click", function() {
        data = $(".content").detach(); // class가 "content"인 요소를 모두 삭제함.
    });

    $("#restoreBtn").on("click", function() {
        $("#container").append(data);  // detach() 메서드로 삭제되었던 모든 요소를 다시 추가함.
    });
});

// .empty() 메서드는 선택한 요소의 자식 요소를 모두 삭제
// 이때 .remove()나 .detach() 메서드와는 달리 선택된 요소 그 자체는 삭제
$(function() {
    $("button").on("click", function() {
        $("#container").empty(); // id가 "container"인 요소의 자식 요소를 모두 삭제함.
    });
});

// .unwrap() : 선택한 요소의 부모 요소를 삭제
$(function() {
    $("button").on("click", function() {
        $("span").unwrap(); // 모든 <span>요소의 부모 요소를 삭제함.
    });
});
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/*
조상 요소의 탐색

트리 탐색(tree traversing)
특정 요소로부터 다른 요소들과의 관계를 통해 선택하길 원하는 요소까지 DOM 트리를 검색해 나아가는 과정

조상(ancestor) 요소의 탐색
DOM 트리에서 특정 요소의 부모(parent) 요소를 포함한 상위의 요소를 탐색하기 위한 메서드는 다음과 같습니다.

.parent() : 선택한 요소의 부모(parent) 요소를 선택
이때 선택자를 인수로 전달하여, 전달받은 선택자에 해당하는 부모 요소만을 선택 가능
.css() : 선택한 요소에 인수로 전달받은 스타일을 설정합니다.
*/
$(function() {
    $("button").on("click", function() {
        $("p").parent()                        // <p>요소의 부모 요소를 선택함.
            .css({"border": "2px solid red"}); // 해당 요소의 CSS 스타일을 변경
    });
});

/*
.parents() : 선택한 요소의 조상(ancestor) 요소를 모두 선택
이때 선택자를 인수로 전달하여, 전달받은 선택자에 해당하는 조상 요소만을 선택 가능
*/

$(function() {
    $("button").on("click", function() {
        $("p").parents("div")                  // <p>요소의 조상 요소 중에서 <div>요소를 모두 선택함.
            .css({"border": "2px solid red"}); // 해당 요소의 CSS 스타일을 변경
    });
});


/*
.parentsUntil() : 선택한 요소의 조상 요소 중에서 전달받은 선택자에 해당하는 요소 바로 이전까지의 요소만을 모두 선택
이때 선택자를 인수로 전달하지 않으면, .parent() 메서드와 같이 선택한 요소의 조상 요소를 모두 선택
*/
$(function() {
    $("button").on("click", function() {
        // <p>요소의 조상 요소 중에서 첫 번째 <div>요소의 바로 이전까지의 요소를 모두 선택함.
        $("p").parentsUntil("div")
            .css({"border": "2px solid red"});    // 해당 요소의 CSS 스타일을 변경
    });
});

/*
.closest() : 자신을 포함한 조상 요소 중에서 전달받은 선택자에 해당하는 요소의 집합에서 가장 첫 번째 요소를 선택
이 메서드가 요소의 집합을 구하는 방식은 .parents() 메서드와 비슷하지만, 해당 요소의 조상 요소뿐만 아니라 해당 요소 자신까지도 검사하는 점이 다름
*/
$(function() {
    $("#parents").on("click", function() {
        // 아이디가 "origin"인 요소의 조상 요소 중에서 <div>요소를 모두 선택함.
        $("#origin").parents("div")
            .css({"border": "2px solid red"});
    });
    $("#closest").on("click", function() {
        // 아이디가 "origin"인 요소 자신과 조상 요소 중에서 첫 번째 <div>요소를 선택함.
        $("#origin").closest("div")
            .css({"border": "2px solid green"});
    });
});
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/*
형제(sibling) 요소의 탐색 : DOM 트리에서 특정 요소의 형제(sibling) 요소를 탐색
.siblings() : 선택한 요소의 형제(sibling) 요소 중에서 지정한 선택자에 해당하는 요소를 모두 선택
*/

$(function() {
    $("button").on("click", function() {
        $("h4").siblings()                 // <h4>요소의 형제 요소를 모두 선택함.
        .css({"border": "2px solid red"}); // 해당 요소의 CSS 스타일을 변경
    });
});

// .next() : 선택한 요소의 바로 다음에 위치한 형제 요소를 선택
$(function() {
    $("button").on("click", function() {
        $("h4").next()                     // <h4>요소의 바로 다음 형제 요소를 선택함.
            .css({"border": "2px solid red"}); // 해당 요소의 CSS 스타일을 변경
    });
});

// .nextAll() : 선택한 요소의 다음에 위치한 형제 요소를 모두 선택
// 이때 선택자를 인수로 전달하여, 전달받은 선택자에 해당하는 형제 요소만을 선택 가능

$(function() {
    $("button").on("click", function() {
        $("h4").nextAll()                  // <h4>요소의 다음에 있는 형제 요소를 모두 선택함.
        .css({"border": "2px solid red"}); // 해당 요소의 CSS 스타일을 변경
    });
});

// .nextUntil() : 선택한 요소의 형제 요소 중에서 전달받은 선택자에 해당하는 요소 바로 이전까지의 요소만을 모두 선택
// 이때 선택자를 인수로 전달하지 않으면, .nextAll() 메서드와 같이 선택한 요소의 다음에 위치한 형제 요소를 모두 선택

$(function() {
    $("button").on("click", function() {
        // <h4>요소의 형제 요소 중에서 첫 번째 <p>요소의 바로 이전까지의 모든 요소를 선택함.
        $("h4").nextUntil("p")
            .css({"border": "2px solid red"}); // 해당 요소의 CSS 스타일을 변경
    });
});


// .prev(), .prevAll(), .prevUntil() 메서드
// 이 메서드들은 각각 .next(), .nextAll(), .nextUntil() 메서드와 정반대로 동작하여 요소들을 선택
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/*
자손(descendant) 요소의 탐색
DOM 트리에서 특정 요소의 자손(descendant) 요소를 탐색하기 위한 메서드는 다음과 같습니다.

.children() : 선택한 요소의 자식(child) 요소를 모두 선택
이때 선택자를 인수로 전달하여, 전달받은 선택자에 해당하는 자식 요소만을 선택할 수도 있습니다.
*/

$(function() {
    $("button").on("click", function() {
        $("ul").children()                         // <ul>요소의 자식 요소를 모두 선택함.
            .css({"border": "2px solid red"}); // 해당 요소의 CSS 스타일을 변경
    });
});

/*
.find() : 선택한 요소의 자손(descendant) 요소 중에서 전달받은 선택자에 해당하는 자손 요소를 모두 선택
이때 별표("*")를 인수로 전달하여, 선택한 요소의 자손 요소를 모두 선택할 수도 있습니다.
*/

$(function() {
    $("button").on("click", function() {
        $("li").find("*")                            // 각 <li>요소의 자손 요소을 모두 선택함.
            .css({"border": "2px solid red"}); // 해당 요소의 CSS 스타일을 변경
    });
});
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/*
DOM 트리에서 요소의 탐색을 위해 사용되는 기타 메서드는 다음과 같습니다.
.add() : 선택한 요소의 집합에 전달받은 요소를 추가
*/
$(function() {
    $("button").on("click", function() {
        $("li").add("p")                         // 선택한 <li>요소의 집합에 <p>요소를 추가함.
            .css({"border": "2px solid green"}); // 해당 요소의 CSS 스타일을 변경
    });
});

$(function() {
    $("button").on("click", function() {
        $("#list").append("<li>새로 추가된 아이템이에요!</li>");
    });
});

// 위의 예제에서 알 수 있듯이 .add() 메서드는 선택한 '요소의 집합'에 인수로 전달받은 요소를 추가하는 메서드
// 하지만 .append() 메서드는 선택한 '요소'의 마지막에 새로운 요소나 콘텐츠를 추가

// .each() : 선택한 요소 집합의 요소마다 전달받은 콜백 함수를 실행
$(function() {
    $("button").on("click", function() {
        $("li").each(function() {            // 선택한 <li>요소 집합의 각 <li>요소를 선택함.
            $(this).toggleClass("boldFont"); // 각 <li>요소마다 클래스를 추가하거나 제거함.
        });
    });
});
// 위의 예제는 선택한 <li>요소 집합의 각 <li>요소에 .each() 메서드를 사용하여 클래스를 추가하거나 제거하는 예제
// 이처럼 .each() 메서드를 사용하면, 선택한 요소 집합의 각 요소마다 콜백 함수를 따로 실행가능

// .end() : 마지막으로 실행한 메서드의 실행 전 상태로 선택한 요소의 집합을 복원해 줍니다.
$(function() {
    $("button").on("click", function() {
        $("#divBox")     // id가 "divBox"인 요소의
            .find("p")   // 자손 요소 중에서 <p>요소를 모두 선택하고,
            .end()       // 선택된 요소의 집합을 find() 메서드의 실행 전으로 복원함.
            .css("border", "2px solid green"); // 따라서 id가 "divBox"인 요소의 CSS 스타일을 설정함.
    });
});

// 위의 예제에서 만약 .end() 메서드가 없다면, 아이디가 "divBox"인 요소의 자손 요소 중에서 모든 <p>요소에 스타일을 설정하게 될 것입니다.

// .offsetParent() : 선택한 요소를 위치시킬 때 기준으로 사용된 조상 요소를 선택 가능
$(function() {
    $("button").on("click", function() {
        // id가 "para"인 요소가 위치할 때 기준이 된 조상 요소를 선택함.
        $("#para").offsetParent()
            .css("border", "1px solid red"); // 해당 요소의 CSS 스타일을 변경
    });
});
// 위의 예제에서 아이디가 "para"인 요소를 웹 페이지에 위치시킬 때 기준이 되는 부모 요소는 position 속성값이 relative로 설정된 <ul>요소입니다.
// 이렇게 정적 위치(static position) 지정 방식을 제외한 다른 방식(relative, fixed, absolute)으로 위치가 설정된 요소가 위치를 정할 때 기준
// 만약 위와 같은 위치가 설정된 요소가 존재하지 않으면, <html>요소를 기준으로 함!!

// .contents() : 선택한 요소의 자식(child) 요소를 텍스트 노드와 주석 노드까지 모두 포함하여 선택해 줍니다.
$(function() {
    $("button").on("click", function() {
        $("iframe")     // <iframe>요소의
            .contents() // 자식 요소를 모두 선택한 후,
            .find("a")  // 그 중에서 <a>요소를 모두 선택하고,
            .css("backgroundColor", "aqua"); // 선택된 모든 <a>요소의 CSS 스타일을 설정함.
    });
});
// 위의 예제는 <iframe>요소의 모든 자식 요소를 선택한 후, 그 중에서 <a>요소만의 CSS 스타일을 변경하는 예제
// 버튼을 누르면, <iframe>요소에 로드된 모든 자식 요소 중 <a>요소의 배경색만이 변경될 것입니다.
// 이처럼 제이쿼리의 .contents() 메서드를 사용하면, <iframe>요소의 내용에도 직접 접근 가능
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/*
필터링(filtering) 메서드
DOM 트리에서 선택한 요소를 필터링하기 위한 메서드는 다음과 같습니다.

.first() : 선택한 요소 중 첫 번째 요소를 선택
.last()  : 선택한 요소 중 마지막 요소를 선택
*/
$(function() {
    $("#firstBtn").on("click", function() {
        $("li").first()                           // 선택한 <li>요소 중에서 첫 번째 요소만을 선택함.
            .css({"border": "2px solid green"});  // 해당 요소의 CSS 스타일을 변경
    });

    $("#lastBtn").on("click", function() {
        $("li").last()                            // 선택한 <li>요소 중에서 마지막 요소만을 선택함.
            .css({"border": "2px solid orange"}); // 해당 요소의 CSS 스타일을 변경
    });
});

// .eq() : 선택한 요소 중에서 전달받은 인덱스에 해당하는 요소를 선택
$(function() {
    $("#clockwiseBtn").on("click", function() {
        $("li").eq(1)                             // 선택한 <li>요소 중에서 두 번째 요소만을 선택함.
            .css({"border": "2px solid green"});  // 해당 요소의 CSS 스타일을 변경
    });

    $("#counterBtn").on("click", function() {
        $("li").eq(-1)                            // 선택한 <li>요소 중에서 뒤에서부터 첫 번째 요소만을 선택함.
            .css({"border": "2px solid orange"}); // 해당 요소의 CSS 스타일을 변경
    });
});
// 위의 예제처럼 .eq() 메서드는 음의 정수도 인수로 전달받을 수 있습니다.
// 이때는 선택한 요소 집합의 맨 마지막 요소를 인덱스 -1로 놓고, 뒤에서부터 검색

// .filter() : 선택한 요소 중에서 전달받은 선택자에 해당하거나, 함수 호출의 결과가 참(true)인 요소를 모두 선택
// 이 메서드는 인수로 선택자나 제이쿼리 객체, HTML DOM 요소 등을 전달받을 수 있습니다.
// 또한, 요소 집합의 각 요소를 검사할 수 있는 함수를 전달할 수도 있습니다.
$(function() {
    $("button").on("click", function() {
        $("li").filter(":odd")                   // 선택한 <li>요소 중에서 인덱스가 홀수인 요소만을 선택함.
            .css({"border": "2px solid green"}); // 해당 요소의 CSS 스타일을 변경
    });
});

// :odd 선택자는 인덱스가 홀수인 요소를 모두 선택하는 선택자입니다.
// 하지만 위의 예제에서 :odd 선택자는 두 번째와 네 번째 요소를 선택해 줍니다.
// 이것은 제이쿼리의 인덱스가 언제나 0부터 시작하기 때문입니다.
// 따라서 :odd나 :even 선택자를 사용할 때는 언제나 인덱스가 0부터 시작한다는 사실을 염두에 두고 사용

// .not() : 선택한 요소 중에서 전달받은 선택자에 해당하거나, 함수 호출의 결과가 참(true)인 요소를 제외한 나머지 요소를 모두 선택
// 즉, .filter() 메서드와는 정반대로 동작하여 요소를 선택
$(function() {
    $("button").on("click", function() {
    // 선택한 <li>요소 중에서 인덱스가 2보다 작지 않은 요소만을 선택함.
    $("li").not(":lt(2)")
        .css({"border": "2px solid green"}); // 해당 요소의 CSS 스타일을 변경
    });
});
// 위의 예제에서 .not() 메서드에 인수로 전달된 식별자는 '인덱스가 2보다 작은'이라는 의미를 가지는 식별자
// 따라서 .not() 메서드는 인덱스가 2보다 작지 않은, 즉 인덱스가 2인 요소와 2보다 큰 요소를 모두 선택해 줍니다.

// .has() : 선택한 요소 중에서 전달받은 선택자에 해당하는 요소를 자손 요소로 가지고 있는 요소를 모두 선택
// 다음 예제는 선택한 <li>요소 중에서 자손 요소로 <span>요소를 가지고 있는 요소만의 스타일을 변경하는 예제
$(function() {
    $("button").on("click", function() {
        // 선택한 <li>요소 중에서 자손 요소로 <span>요소를 가지고 있는 요소만을 선택함.
        $("li").has("span")
            .css({"border": "2px solid green"}); // 해당 요소의 CSS 스타일을 변경
    });
});

// .is() 메서드는 선택한 요소 중에서 전달받은 선택자에 해당하는 요소가 하나라도 존재하면 참을 반환
$(function() {
    $("button").on("click", function() {
        // 선택한 <span>요소의 조상 요소 중에서 <ul>요소가 하나라도 존재하면 true를 반환함.
        if ($("span").parents().is("ul")) {
            $("#text").html("span 요소의 조상 요소에는 ul 요소도 존재합니다.");
        }
    });
});

// 위의 예제에서는 우선 선택한 <span>요소의 모든 조상 요소를 다시 선택
// 그리고서 선택된 모든 조상 요소 중에 <ul>요소가 존재하는지 여부를 .is() 메서드를 통해 검사하고 있습니다.

// .map() : 선택한 요소 집합의 각 요소마다 지정된 콜백 함수를 실행하고, 그 반환값으로 구성된 제이쿼리 객체를 반환
$(function() {
    $("button").on("click", function() {
        // 선택한 <li>요소마다 콜백함수를 실행하여 각 <li>요소의 id 값을 반환함.
        var ids = $("li").map(function() {
            return this.id;
        })
        .get()   // 반환된 모든 id 값을 하나의 배열로 반환함.
        .join(); // 배열의 모든 요소를 쉼표(,)로 구분하는 하나의 문자열로 반환함.
        $("#text").html(ids);
    });
});
// 위의 예제는 선택한 <li>요소 집합의 각 요소마다 해당 요소의 id 값을 반환하는 콜백함수를 실행
// 콜백함수의 실행으로 반환되는 값들은 .get() 메서드를 통해 하나의 배열로 반환되며, 다시 .join() 메서드를 통해 하나의 문자열로 변환되어 반환

// .slice() : 선택한 요소 중에서 전달받은 인덱스 범위에 해당하는 요소만을 선택

// 다음 예제는 선택한 <li>요소 중에서 인덱스가 1과 같거나 그 이상인 요소만의 스타일을 변경하는 예제
$(function() {
    $("button").on("click", function() {
        // 선택한 <li>요소 중에서 인덱스가 1과 같거나 그 이상인 요소만을 선택함.
        $("li").slice(1)
            .css({"border": "2px solid green"}); // 해당 요소의 CSS 스타일을 변경
    });
});
/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/
/*
요소의 크기
제이쿼리는 선택한 요소의 크기에 관한 정보를 손쉽게 받아오거나 설정할 수 있도록 다양한 메소드를 제공합니다.

inner와 outer
제이쿼리에서 요소의 크기는 다음과 같이 구성됩니다.(사이트 구성도 참조)



요소의 크기
접두사로 inner가 붙은 메소드는 선택한 요소의 크기에 패딩(padding) 영역이 포함된 크기 정보를 반환합니다.

접두사로 outer가 붙은 메소드는 패딩 영역뿐만 아니라 테두리(border) 영역까지 포함된 크기 정보를 반환합니다.

또한, 접두사로 outer가 붙은 메소드에 인수로 true 값을 전달하면, 패딩과 테두리 영역뿐만 아니라 마진(margin) 영역까지 포함된 크기 정보를 반환합니다.



위의 내용을 표로 정리하면 다음과 같습니다.

메소드	반환값
.width(), .height()	요소의 크기
.innerWidth(), .innerHeight()	요소의 크기 + 패딩(padding)의 크기
.outerWidth(), .outerHeight()	요소의 크기 + 패딩의 크기 + 테두리(border)의 크기
.outerWidth(true), .outerHeight(true)	요소의 크기 + 패딩의 크기 + 테두리의 크기 + 마진(margin)의 크기
.width()와 .height() 메소드
.width() 메소드는 선택한 요소 집합의 첫 번째 요소의 너비를 반환하거나, 선택된 요소의 너비를 전달된 값으로 설정합니다.

.height() 메소드는 .width() 메소드와 같은 동작을 높이에 대해 실행합니다.

예제
$(function() {

    $("button").on("click", function() {

        var str = "이 div 요소의 ";

        str += "너비는 " + $("#divBox").width() + "픽셀이고,<br>"; // id가 "divBox"인 요소의 너비를 반환함.

        str += "높이는 " + $("#divBox").height() + "픽셀입니다."   // id가 "divBox"인 요소의 높이를 반환함.

        $("#text").html(str);

    });

});

코딩연습 ▶




이 메소드들을 이용하면 브라우저의 뷰포트(viewport)나 HTML 문서의 크기도 알아낼 수 있습니다.

예제
$(function() {

    $("button").on("click", function() {

        var str = "";

        str += "브라우저 뷰포트의 크기는 " + $(window).width() + "X" + $(window).height() + "입니다.<br>";

        str += "HTML 문서의 크기는 " + $(document).width() + "X" + $(document).height() + "입니다.";

        $("#text").html(str);

    });

});

코딩연습 ▶



.width()와 .height() 메소드가 호출될 때 인수를 전달받으면, 선택된 요소의 크기를 인수로 전달받은 값으로 설정합니다.

예제
$(function() {

    $("button").on("click", function() {

        $("#divBox").width("400");  // id가 "divBox"인 요소의 너비를 설정함.

        $("#divBox").height("200"); // id가 "divBox"인 요소의 높이를 설정함.

    });

});

코딩연습 ▶

다양한 크기 정보를 반환하는 메소드
다음 예제는 위에서 살펴본 크기 정보를 반환하는 다양한 메소드 사이의 차이점을 확인하는 예제입니다.

예제
$(function() {

    $("button").on("click", function() {

        var str = "이 div 요소의 ";

        // id가 "divBox"인 요소의 크기를 반환함.

        str += "크기는 " + $("#divBox").width() + "X" + $("#divBox").height() + "이고,<br>";

        // id가 "divBox"인 요소의 패딩 영역을 포함한 크기를 반환함.

        str += "패딩 영역을 포함한 크기는 " + $("#divBox").innerWidth() +

            "X" + $("#divBox").innerHeight() + "이고,<br>";

        // id가 "divBox"인 요소의 패딩 영역과 테두리를 포함한 크기를 반환함.

        str += "테두리까지 포함한 크기는 " + $("#divBox").outerWidth() +

            "X" + $("#divBox").outerHeight() + "이고,<br>";

        // id가 "divBox"인 요소의 패딩 영역과 테두리, 마진 영역까지 포함한 크기를 반환함.

        str += "마진 영역까지 포함한 크기는 " + $("#divBox").outerWidth(true) +

            "X" + $("#divBox").outerHeight(true) + "입니다.";

        $("#text").html(str);

    });

});

코딩연습 ▶

요소의 크기에 관한 메소드
메소드	설명
.width()

선택한 요소 집합의 첫 번째 요소의 너비를 반환하거나, 선택된 요소의 너비를 인수로 전달받은 값으로 설정함.
.height()

선택한 요소 집합의 첫 번째 요소의 높이를 반환하거나, 선택된 요소의 높이를 인수로 전달받은 값으로 설정함.
.innerWidth()	선택한 요소 집합의 첫 번째 요소의 너비에 패딩 영역을 포함한 너비를 반환함.
.innerHeight()	선택한 요소 집합의 첫 번째 요소의 높이에 패딩 영역을 포함한 높이를 반환함.
.outerWidth()
선택한 요소 집합의 첫 번째 요소의 너비에 패딩 영역과 테두리를 포함한 너비를 반환함.

또한, 인수로 true를 전달받으면 마진 영역까지 포함한 너비를 반환함.

.outerHeight()
선택한 요소 집합의 첫 번째 요소의 높이에 패딩 영역과 테두리를 포함한 높이를 반환함.

또한, 인수로 true를 전달받으면 마진 영역까지 포함한 높이를 반환함.
 */
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/*

 */
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/*

 */
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/*

 */
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/*

 */
/****************************************************************************************************************************************************/
/****************************************************************************************************************************************************/
/*

 */
/****************************************************************************************************************************************************/
