package com.test3.level1;

public class Excercise15 {
    public int solution(int n) {
        int answer = 0;
        for (int i = 1; i <= n; i++) {
            if(n % i == 0) answer += i;
        }
        return answer;
    }
}