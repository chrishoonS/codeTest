package com.javaExample.finalEx;

import java.util.Arrays;

/**
 * final : 객체 생성 후 상수처럼 작용해야하는 특성의 변수 앞에 붙여 선언
 * 멤버변수, 메서드, 클래스 앞에 붙여서 모두 사용가능
 * 고정값이기 때문에 메모리를 객체마다 잡을 필요가 없어서 static을 붙여준다.
 *
 * final Person person = new Person("Eric");
 * person = new Person("Tom") // Compile Error
 *
 * final class Person {
 *   String name;
 * }
 *
 * class Doctor extends Person { // 상속 불가능
 *
 * }
 *
 * 참고 : https://inpa.tistory.com/entry/JAVA-%E2%98%95-%EC%97%B4%EA%B1%B0%ED%98%95Enum-%ED%83%80%EC%9E%85-%EB%AC%B8%EB%B2%95-%ED%99%9C%EC%9A%A9-%EC%A0%95%EB%A6%AC
 **/

public class FinalExample {
    //선언시 변수에 값을 딱 한번만 할당
    //할당된 멤버 변수의 값은 다른 값으로 변경 X

    public static void main(String[] args) {
        Week monday = Week.MONDAY;
        Season spring = Season.SPRING;
        LoginResult status = LoginResult.LOGIN_SUCCESS;

        Week[] days = Week.values();
        Season[] seasons = Season.values();
        LoginResult[] loginResults = LoginResult.values();

        System.out.println(Arrays.toString(days));
        System.out.println(Arrays.toString(seasons));
        System.out.println(Arrays.toString(loginResults));

    }
}
