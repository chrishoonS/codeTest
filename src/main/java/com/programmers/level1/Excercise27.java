package com.programmers.level1;

public class Excercise27 {
    public String solution(String phone_number) {
        String answer = "";
        char[] ch = phone_number.toCharArray();
        for (int i = 0; i < phone_number.length()-4; i++) {
            ch[i] = '*';
        }
        for (int i = 0; i < ch.length; i++) {
            answer += ch[i];
        }
        return answer;
    }
}