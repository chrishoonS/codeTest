package com.javaExample.thisEx;

/**
 * this : 자신에 대한 레퍼런스 변수, this.price는 멤버 변수 price를 나타냄
 * this() : 같은 클래스에서 생성자가 다른 생성자를 호출할 때 사용, 코드 중복 제거, 생성자 코드에서만 사용, 
 *
 **/
public class Book {
    String title;
    int price;

    public Book(){ //기본 생성자
        this("미입력", -1);
    }

    public Book(String title){ //매개변수 1개를 가진 생성자
        this(title, 0);
    }

    public Book(String title, int price){ //매개변수 2개를 가진 생성자
        this.title = title;
        this.price = price;
    }

    public void showPrice(){
        System.out.println(title + "의 가격은 " + price + "원 입니다.");
    }
}
