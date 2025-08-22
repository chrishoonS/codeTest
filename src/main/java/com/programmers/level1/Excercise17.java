package com.programmers.level1;

public class Excercise17 {
    public int solution(int n) {
        int answer = 0;
        char[] ch = String.valueOf(n).toCharArray();
        for (int i = 0; i < ch.length; i++) {
            answer += Integer.parseInt(String.valueOf(ch[i]));
        }
        return answer;
    }
}