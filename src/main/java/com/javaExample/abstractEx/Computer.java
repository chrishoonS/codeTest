package com.javaExample.abstractEx;

public abstract class Computer {    //추상 클래스
    //추상 메서드
    abstract void display();
    abstract void typing();

    public void turnOn(){
        System.out.println("turn ON!!!!!!!!");
    }

    public void turnOff(){
        System.out.println("turn OFF!!!!!!!!");
    }

}
