package com;

import org.springframework.util.Assert;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class fooNote {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter dtfFull     = DateTimeFormatter.ofPattern("yyyyMMddHHmm");
        String            currentDate = now.format(dtfFull).substring(0, 8);

        System.out.println(now);
        System.out.println(dtfFull);
        System.out.println(currentDate);
    }
}
