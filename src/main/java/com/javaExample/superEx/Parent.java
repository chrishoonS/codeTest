package com.javaExample.superEx;

public class Parent {
    String name = "부모님";
    int age = 60;
    int code = 100;

    public Parent(){};

    public Parent(String name, int age){
        this.name = name;
        this.age = age;
    }

    public void showParents() {
        System.out.println(name + "의 나이는 " + age + "세 입니다.");
    }
}
