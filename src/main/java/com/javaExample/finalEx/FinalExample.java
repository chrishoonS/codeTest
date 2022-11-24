package com.javaExample.finalEx;

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
 **/

public class FinalExample {
    //선언시 변수에 값을 딱 한번만 할당
    //할당된 멤버 변수의 값은 다른 값으로 변경 X
    private final int num = 0;
}
