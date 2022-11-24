package com.javaExample.capsulEx;

public class EncapsulationEx {
    public static void main(String[] args) {
        Person p = new Person();
        p.setAge(33);
        System.out.println("몇살이고? -> " + p.getAge());
    }
}
