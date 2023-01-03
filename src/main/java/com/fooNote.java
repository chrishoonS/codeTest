package com;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;

public class fooNote {
    public static void main(String[] args) throws ParseException {
        //현재시간 Date
        String reqDateStr = "202301022235";

        Date nowDate = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("YYYYMMddHHmm");

        //요청시간을 Date로 parsing 후 time가져오기
        Date reqDate = dateFormat.parse(reqDateStr);
        long reqDateTime = reqDate.getTime();

        //현재시간을 요청시간의 형태로 format 후 time 가져오기
        try {
            nowDate = dateFormat.parse(dateFormat.format(nowDate));
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        long curDateTime = nowDate.getTime();

        //분으로 표현
        long minute = (curDateTime - reqDateTime) / 60000;
        System.out.println("요청시간 : " + reqDate);
        System.out.println("현재시간 : " + nowDate);
        System.out.println(minute+"분 차이");
    }
}
