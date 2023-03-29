package com.javaExample.superEx;

public class Son extends Parent{

    String name = "큰아들";
    int age = 33;

    public Son(){};

    public Son(String name, int age){
        super(name, age);
    }

    public void showInfo(){
        super.showInfo();       //부모 클래스 메서드 호출

        String name = "둘째아들";
        int age = 28;

        System.out.println("name       = " + name);
        System.out.println("this.name  = " + this.name);
        System.out.println("super.name = " + super.name);

        System.out.println("age       = " + age);
        System.out.println("this.age  = " + this.age);
        System.out.println("super.age = " + super.age);
    }
}