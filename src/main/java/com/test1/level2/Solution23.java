package com.test1.level2;

public class Solution23 {
    public int[] solution(String s) {
        int[] answer = new int[2];
        while (!s.equals("1")){
            char[] charArr = s.toCharArray();
            for (int i = 0; i < charArr.length; i++) {
                if ("1".equals(String.valueOf(charArr[i]))) {
                    continue;
                }else{
                    answer[1]++;
                }
            }
            s = Integer.toBinaryString(s.replaceAll("0", "").length());
            answer[0]++;
        }
        return answer;
    }
}