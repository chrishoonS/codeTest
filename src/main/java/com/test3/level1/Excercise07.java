package com.test3.level1;

import java.util.ArrayList;
import java.util.Collections;

public class Excercise07 {
    boolean solution(String s) {
        boolean answer = true;
        char[] ch = s.toLowerCase().toCharArray();
        int pCnt = 0, yCnt = 0;
        for (int i = 0; i < ch.length; i++) {
            if (String.valueOf(ch[i]).equals("p")) pCnt++;
            else if (String.valueOf(ch[i]).equals("y")) yCnt++;
            else continue;
        }
        if(pCnt == yCnt) answer = true;
        else answer = false;

        return answer;
    }
}