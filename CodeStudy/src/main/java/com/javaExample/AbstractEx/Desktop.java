package com.javaExample.AbstractEx;

public class Desktop extends Computer{
    @Override
    void display() {
        System.out.println("Desktop Display");
    }

    @Override
    void typing() {
        System.out.println("Desktop Typing");
    }

    @Override
    public void turnOff() {
        System.out.println("Desktop turnOFF!!!!!");
    }
}
