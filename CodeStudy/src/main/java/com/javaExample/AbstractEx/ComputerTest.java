package com.javaExample.AbstractEx;

public class ComputerTest {
    public static void main(String[] args) {
        Computer computer = new Desktop();
        computer.display();
        computer.turnOn();
        computer.turnOff();

        Notebook myNote = new MyNotebook();
    }
    /**
     * 추상클래스 : 구현 코드 없이 선언만 있는 abstract method를 포함한 클래스
     * 추상클래스는 추상 메서드, 일반 메서드, 필드(멤버변수), 생성자로 구성
     * 추상클래스는 new 불가능(인스턴스화 X)
     * 자체 객체 생성 불가로 상속하여 인스턴스 생성
     * 템플릿 메서드 패턴에 유용!!!!!
     * https://prodo-developer.tistory.com/131
     **/
}
