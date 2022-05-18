package com.test;

public class Solution19 {
    public String solution(String new_id) {
        String answer = "";
        //1단계 대문자 -> 소문자
        new_id = new_id.toLowerCase();
        //2단계 특정문자 제거
        for (int i=0; i<new_id.length(); i++) {
            if(String.valueOf(new_id.charAt(i)).matches("[a-z0-9._-]")){
                answer += new_id.charAt(i);
            }
        }
        //3단계 .. -> .
        answer = answer.replaceAll("[.]{2,}", ".");
        //4단계 처음이나 끝에 위치하면 제거
        answer = answer.replaceAll("^[.]|[.]$","");
        //5단계 빈문자열 -> a
        if (answer.length() == 0){
            answer += "a";
        }
        //6단계 15자리까지 자르고, 끝에 . 제거
        if(answer.length() >= 16) {
            answer = answer.substring(0, 15);
            answer = answer.replaceAll("[.]$", "");
        }
        //7단계 2자이하면 길이 3될때까지 반복
        if(answer.length() <= 2) {
            while(answer.length() < 3){
                answer += answer.charAt(answer.length()-1);
            }
        }
        return answer;
    }
}