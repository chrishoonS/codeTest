package com.designPattern.ch02.extend;

import java.util.ArrayList;

public class MyStack<String> extends ArrayList<String> {

    private ArrayList<String> arrList = this;

    public void push(String element){
        // 위임 메서드를 서브 클래스에 추가한다는 뜻?
        // 어떤 기능을 부모 클래스가 직접 제공하지는 않지만,
        // 자식 클래스가 포함하고 있는 객체(예: 필드)를 통해 그 기능을 대신 제공하는 메서드를 구현하는 것
        arrList.add(element); // = this.add(element)
    }

    public String pop(){
        return arrList.remove(size() - 1);
    }
}
