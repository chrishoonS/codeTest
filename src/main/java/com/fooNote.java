package com;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

public class fooNote {
    public static void main(String[] args) {
        String str = "2022.12.12";
//        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        if (str != null && !str.isEmpty()) {
            formatter.setTimeZone(TimeZone.getTimeZone(str));
        }
        formatter.format(new Date());
        System.out.println(formatter.format(new Date()).getClass());
    }
}
