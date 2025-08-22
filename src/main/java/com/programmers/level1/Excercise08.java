package com.programmers.level1;

import java.util.Arrays;
import java.util.Collections;

public class Excercise08 {
    public String solution(String s) {
        String answer = "";
        String lower = "";
        String upper = "";
        char[] ch = s.toCharArray();
        Arrays.sort(ch);
        for (int i = 0; i < ch.length; i++) {
            if (Character.isLowerCase(ch[i])) lower = ch[i] + lower;
            else upper = ch[i] + upper;
        }
        answer = lower + upper;
        return answer;
    }
}