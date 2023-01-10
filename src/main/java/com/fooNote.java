package com;

import java.text.ParseException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;

public class fooNote {
    public static void main(String[] args) {

        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyyMMddHHmm");
        String nowDate = now.format(dtf);

        System.out.println(now);

        LocalDateTime result = now.plusHours(10);
        result.format(dtf);
        System.out.println(result.format(dtf));

        result = now.minusMonths(1).minusDays(10);
        System.out.println(result.format(dtf));
    }


}
