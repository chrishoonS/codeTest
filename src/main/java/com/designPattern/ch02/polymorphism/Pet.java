package com.designPattern.ch02.polymorphism;

public abstract class Pet {
    public abstract void talk();
    // 다형성을 사용하지 않는 경우 클래스별로 다르게 처리
    // 새로운 자식 클래스가 추가되어도 코드에 영향 X
}
