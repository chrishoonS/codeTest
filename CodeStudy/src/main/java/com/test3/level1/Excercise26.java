package com.test3.level1;

public class Excercise26 {
    public boolean solution(int x) {
        boolean answer = true;
        char[] ch = String.valueOf(x).toCharArray();
        int sum = 0;
        for (int i = 0; i < ch.length; i++) {
            sum += Integer.parseInt(String.valueOf(ch[i]));
        }
        if (x%sum == 0) return answer;
        else answer = false;
        return answer;
    }
}