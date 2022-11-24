package com.test3.level1;

public class Excercise09 {
    public boolean solution(String s) {
        boolean answer = true;
        if (s.length() == 4 || s.length() == 6){
            char[] ch = s.toCharArray();
            for (int i = 0; i < ch.length ; i++) {
                if (!Character.isDigit(ch[i])){
                    answer = false;
                    break;
                }else answer = true;
            }
        }else answer = false;
        return answer;
    }
}