package com;

import jdk.jfr.internal.JVM;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.Assert;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Slf4j
public class fooNote {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter dtfFull = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        String currentDate = now.format(dtfFull).substring(0, 10);

        log.debug(String.valueOf(now));
        log.debug(String.valueOf(dtfFull));
        log.debug(currentDate);

        String totalStr = "20231031140000";
        String dateStr = totalStr.substring(0, 4) +"-"+ totalStr.substring(4, 6) +"-"+ totalStr.substring(6, 8) +" "+
                         totalStr.substring(8,10) +":"+ totalStr.substring(10,12) +":"+ totalStr.substring(12,14);
        log.debug(dateStr);
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        try {
            Date date = formatter.parse(dateStr);
            Date nowDate = new Date();
            log.debug(String.valueOf(date));
            log.debug(String.valueOf(date.after(nowDate)));
            log.debug(String.valueOf(date.before(nowDate)));
        } catch (Exception e) {
            log.error("errororor:::::{}", e);
        }

    }
}
