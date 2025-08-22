package com.programmers.level1;

public class Excercise10 {
    public String solution(String[] seoul) {
        String answer = "";
        for (int i = 0; i < seoul.length; i++) {
            if (seoul[i].equals("Kim")){
                answer ="김서방은 "+ String.valueOf(i) + "에 있다";
                break;
            }else continue;
        }
        return answer;
    }
}