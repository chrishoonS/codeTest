package com.test1.level1;

public class Solution15 {
    public int solution(String s) {
        int answer = 0;
        String[] alphabet = new String[]{"zero","one","two","three","four","five","six","seven","eight","nine"};

        for (int i=0; i<alphabet.length; i++) {
            s = s.replace(alphabet[i], String.valueOf(i));
        }
        answer = Integer.parseInt(s);
        return answer;
    }
}
