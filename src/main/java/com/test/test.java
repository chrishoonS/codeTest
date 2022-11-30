package com.test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class test {


    public static void main(String[] args) throws ParseException {
        String s = "2020-11-23";
        String s1 = "09:23";
        String str = s + " " + s1;

        SimpleDateFormat sdf1 = new SimpleDateFormat("yyyyMMdd");
        SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd");
//        SimpleDateFormat sdf3 = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss");

        Date date1 = sdf1.parse(str);
        Date date2 = sdf2.parse(str);
//        Date date3 = sdf3.parse(str);

        System.out.println(date1);
        System.out.println(date2);
//        System.out.println(date3);
    }
}
