package com;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;

public class fooNote {
    public static void main(String[] args) {

        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyyMMddHHmm");
        DateTimeFormatter dtf1 = DateTimeFormatter.ofPattern("HHmm");
        DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("yyyyMMdd");
        String nowDate = now.format(dtf);

        System.out.println(nowDate);

        LocalDateTime result = now.minusHours(16);
        System.out.println(result.format(dtf));
        System.out.println(result.format(dtf1));
        System.out.println(result.format(dtf2));

        result = now.minusMonths(1).minusDays(10);
        System.out.println();
        System.out.println(result.format(dtf2));



        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmm");

        Date d1 = null;
        Date d2 = null;
        Date d3 = null;
        Date d4 = null;
        Date d5 = null;

        try {
            d1 = sdf.parse("202101010000");
            d2 = sdf.parse("202101020000");
            d3 = sdf.parse("202101030000");
            d4 = sdf.parse("202101020011");
            d5 = sdf.parse("202101020011");
        } catch (ParseException e) {
            e.printStackTrace();
        }
        System.out.println("============================");
        System.out.println(d1.before(d2));  //true
        System.out.println(d4.equals(d5));  //true
        System.out.println(d2.equals(d3));  //false
        System.out.println(d1.after(d3)); //false


    }

}
