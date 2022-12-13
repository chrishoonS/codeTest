package com;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;

public class fooNote {
    public static void main(String[] args) {
        Map<String, Object> map = new HashMap<>();
        map.put("test1", 123);
        map.put("test2", 234);
        map.put("test3", 345);

        System.out.println(map.containsKey("test1"));
        System.out.println(map.containsKey("test2"));
        System.out.println(map.containsKey("test4"));
        System.out.println(map.get("test5"));
        System.out.println(map.getOrDefault("test5", 123123123));

        String s = "zzzzzzzzzzz;;?ㅜㅁㅇ라ㅜㅏㅇㄹㅁㄴ이마ㅣㅜㄴㅇ라ㅣㅁㄴ아ㅣㄹ미ㅏㄴㅇㄹ마ㅣ;ㄴㅇ럼ㄴ;ㅣㅇㄹ&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;dsasdfasdf11dfasdfdfdfsdfsxcvxcvxcvxcv";
        String s2 = s.substring(0,100);

        System.out.println("길이1 : " + s.length());
        System.out.println(s2);
        System.out.println("길이2 : " + s2.length());
    }
}
