package com.programmers.level1;

public class Excercise14 {
    public String solution(String s, int n) {
        String answer = "";
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            //대소문자 판별 -> ASCII code 연산 -> char casting
            if (Character.isLowerCase(ch)) ch = (char) ((ch - 'a' + n) % 26 + 'a');
            else if (Character.isUpperCase(ch)) ch = (char) ((ch - 'A' + n) % 26 + 'A');
            answer += ch;
        }
        return answer;
    }
}