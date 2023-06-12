package com;

import java.time.Duration;
import java.time.Instant;

public class fooNote {
    public static void main(String[] args) {
        Instant start = Instant.now();

        String a = "1.3";
        String b = "1.3";


        Instant finish = Instant.now();
        long terms = Duration.between(start, finish).toMillis();
        System.out.println("시간차이(ms) : " + terms);
        System.out.println(Double.parseDouble(a));
        System.out.println(Double.parseDouble(b));
        if(Double.parseDouble(a) > Double.parseDouble(b)){
            System.out.println("a > b");
        }else{
            System.out.println("a <= b");
        }
    }
}
