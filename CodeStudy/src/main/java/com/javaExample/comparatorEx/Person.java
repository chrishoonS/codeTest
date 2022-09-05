package com.javaExample.comparatorEx;

import lombok.Data;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Data
public class Person {
    private int no;
    private String name;
    private String hobby;

    public Person(int no, String name, String hobby) {
        setNo(no);
        setName(name);
        setHobby(hobby);
    }
    @Override
    public String toString() {
        return getNo()+" "+getName()+" "+getHobby();
    }

    /**
     * return값 : 음수, 0, 양수로 반환하며 정렬
     **/
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(4);
        list.add(2);
        list.add(1);
        list.add(3);
        comp c = new comp();
        Collections.sort(list, c);
        System.out.println(list);
    }

    public static class comp implements Comparator<Integer> { //static으로 선언해야함
        public int compare(Integer o1, Integer o2) {
            //o1보다 o2의 수가 크면 오름차순 정렬
            if(o1 < o2) return -1;
            else if(o1 > o2) return 1;
            else return 0;
        }
    }
}
