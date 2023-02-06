package com;

import java.time.Duration;
import java.time.Instant;

public class fooNote {
    public static void main(String[] args) {
        Instant start = Instant.now();

        for (long i = 0; i < 1000000000; i++) {
            long a = i * i;
        }

        Instant finish = Instant.now();
        long terms = Duration.between(start, finish).toMillis();
        System.out.println("시간차이(ms) : " + terms);
    }
}
