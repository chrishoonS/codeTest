package com.designPattern.ch02.extend;

import java.util.ArrayList;

public class MyStackDelegation<String> {

    private ArrayList<String> arrList = new ArrayList<String>();

    // ArrayList에서 필요한 함수만 가져와 사용
    // 외부에서는 arrList 직접 접근 불가 = → 스택으로만 사용 가능
    //나중에 LinkedList로 구조 바꾸고 싶으면 내부만 바꾸면 됨
    // 스택 인터페이스에 집중한 설계

    public void push(String element){
        arrList.add(element);
    }

    public String pop(){
        return arrList.remove(arrList.size() - 1);
    }

    public boolean isEmpty(){
        return arrList.isEmpty();
    }

    public int size(){
        return arrList.size();
    }
}
