package com.test3.level1;

public class Excercise02 {
    public String solution(String s) {
        String answer = "";
        if(s.length()%2 == 0)
            answer = s.substring((int) Math.floor((s.length()-1)/2), (int) Math.floor((s.length()-1)/2)+2);
        else
            answer = s.substring(s.length()/2, (s.length()/2)+1);
        return answer;
    }
}