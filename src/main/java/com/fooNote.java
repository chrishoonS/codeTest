package com;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;

public class fooNote {
    public static void main(String[] args) throws ParseException {
        //현재시간 Date
        LocalDate now = LocalDate.now();

        // 포맷 정의
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyyMMdd");

        // 포맷 적용
        String formatedNow = now.format(dtf);

        // 결과 출력
        System.out.println(formatedNow);

    }
}
