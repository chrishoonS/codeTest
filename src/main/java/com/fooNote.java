package com;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class fooNote {
    public static void main(String[] args) {

        //리스트 선언
        List<Map<String, Object>> list = new ArrayList();
        Map<String, Object> map = new HashMap<>();

        map.put("test1", "test");
        map.put("test2", 222222);

        //테스트 값입력
        list.add(null);
        list.add(map);

        System.out.println("list value :" + list);

        //리스트 값 체크
        if(list.isEmpty()) {

            //리스트에 값이 존재하지 않음
            System.out.println("List is empty");
        }
        else {

            //리스트에 값이 존재
            System.out.println("List is not empty");

            for(int i = 0; i<list.size(); i++) {

                //리스트 안에 값에 대한 null 체크
                if(list.get(i) == null) {
                    System.out.println("list["+i+"]의 값은 null 입니다. ");
                }
            }
        }
    }
}
