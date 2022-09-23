package com.javaExample.capsulEx;

public class Person {
    private int age; //외부 직접 접근 제한, 은닉화

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        if(age >= 0)    //데이터 유효성 검사
            this.age = age;
    }
}
