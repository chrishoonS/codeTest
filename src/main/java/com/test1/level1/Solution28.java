package com.test1.level1;

import java.util.ArrayList;
import java.util.Arrays;

public class Solution28 {
    public String[] solution(String[] players, String[] callings) {
        String[] answer = players;
        String temp = "";
        for (int i = 0; i < callings.length; i++) {
            for (int j = 0; j < answer.length; j++) {
                if(callings[i] == answer[j]){
                    temp = answer[j-1];
                    answer[j-1] = callings[i];
                    answer[j] = temp;
                    break;
                }
            }

        }
        System.out.println(Arrays.toString(answer));
        return answer;
    }
}