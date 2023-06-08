package com;

import java.time.Duration;
import java.time.Instant;

public class fooNote {
    public static void main(String[] args) {
        Instant start = Instant.now();

        double a = 1.256;


        Instant finish = Instant.now();
        long terms = Duration.between(start, finish).toMillis();
        System.out.println("시간차이(ms) : " + terms);
        System.out.println(String.valueOf(a).substring(0,3));
    }
}
