package com.programmers.level1;

public class Excercise02 {
    public String solution(String s) {
        int len = s.length();
        int mid = len / 2;

        return (len % 2 == 0)
                ? s.substring(mid - 1, mid + 1)  // 짝수: 가운데 두 글자
                : s.substring(mid, mid + 1);     // 홀수: 가운데 한 글자
    }

}