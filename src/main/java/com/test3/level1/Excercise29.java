package com.test3.level1;

public class Excercise29 {
    public long[] solution(int x, int n) {
        long[] answer = new long[n];
        for (long i = 0; i < n; i++) {
            answer[(int) i] = x * (i+1);
        }
        return answer;
    }
}