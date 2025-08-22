package com.programmers.level1;

import java.util.Arrays;

public class Excercise23 {
    public int[] solution(int n, int m) {
        int[] answer = {};
        int min = (n < m) ? n: m;
        int val = 0;
        for (int i = 1; i <= min; i++) {
            if(n%i == 0 && m%i ==0) val = i;
        }
        answer = new int[]{val, n * m / val};
        return answer;
    }
}