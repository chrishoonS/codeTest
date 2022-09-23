package com.javaExample.overTest;

public class Student extends People{
    String job;

    public void print(){
        System.out.println("이름 : " + this.name);
        System.out.println("나이 : " + this.age);
        System.out.println("직업 : " + this.job);
    }
}
