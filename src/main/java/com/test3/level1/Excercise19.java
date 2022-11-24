package com.test3.level1;

import java.util.Arrays;

public class Excercise19 {
    public long solution(long n) {
        char[] ch = String.valueOf(n).toCharArray();
        Arrays.sort(ch);
        return Long.parseLong(new StringBuilder(new String(ch)).reverse().toString());
    }
}