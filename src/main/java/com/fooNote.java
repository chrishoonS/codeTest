package com;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class fooNote {
    public static void main(String[] args) {

        String date1 = "20230119";
        String date2 = "20230118";

        DateFormat format = new SimpleDateFormat("yyyyMMdd");

        /* Date타입으로 변경 */

        Date d1 = null;
        try {
            d1 = format.parse(date1);
            Date d2 = format.parse(date2);
            long Sec = (d1.getTime() - d2.getTime()) / 1000; // 초
//            long Min = (d1.getTime() - d2.getTime()) / 60000; // 분
//            long Hour = (d1.getTime() - d2.getTime()) / 3600000; // 시
            long Days = Sec / (24 * 60 * 60); // 일자수

            System.out.println(Sec + "초 차이");
//            System.out.println(Min + "분 차이");
//            System.out.println(Hour + "시 차이");
            System.out.println(Days + "일 차이");
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }
}
