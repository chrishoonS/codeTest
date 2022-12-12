<%--
  Created by IntelliJ IDEA.
  User: song
  Date: 2022/11/29
  Time: 10:19 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <title>Title</title>
        <%-- <head> 태그 내부 자바스크립트 적용 예제--%>
        <script>
            function printDate() {
                document.getElementById("date").innerHTML = Date();
            }
        </script>
    </head>

    <body>
        <h2>Hello World</h2>
        <%--외부 자바스크립트 적용 예제(helloWorld.js)--%>
        <script type="text/javascript" src="${pageContext.request.contextPath}/helloWorld.js"></script>

        <%--내부 자바스크립트 적용 예제--%>
        <script>
            document.getElementById("text").innerHTML = "여러분을 환영합니다!";
        </script>

    </body>
</html>
