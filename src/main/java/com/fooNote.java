package com;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class fooNote {
    public static void main(String[] args) throws ParseException {
        List<Map<String, Object>> list = new ArrayList<>();
        Map<String, Object> map = new HashMap<>();

        map.put("baseDate", "20230103");
        map.put("baseTime", "1400");
        map.put("category", "TMP");
        map.put("fcstDate", "20230103");
        map.put("fcstTime", "1500");
        map.put("fcstValue", 0);
        map.put("nx", 61.0);
        map.put("ny", 127.0);

        list.add(map);

        System.out.println(list.get(0));

//        item=[{baseDate=20230103, baseTime=1400, category=TMP, fcstDate=, fcstTime=, fcstValue=0, =61.0, ny=127.0}, {baseDate=20230103, baseTime=1400, category=UUU, fcstDate=20230103, fcstTime=1500, fcstValue=2.1, nx=61.0, ny=127.0}]
    }
}
