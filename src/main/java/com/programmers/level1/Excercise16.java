package com.programmers.level1;

import java.util.Arrays;

public class Excercise16 {
    public String solution(String s) {
        String answer = "";
        String[] arr = s.split("");

        int idx = 0;
        for (int i = 0; i < arr.length; i++) {
            if(arr[i].equals(" ")) idx = 0;
            else if(idx % 2 == 0){
                arr[i] = arr[i].toUpperCase();
                idx++;
            }else if(idx % 2 != 0) {
                arr[i] = arr[i].toLowerCase();
                idx++;
            }
            answer += arr[i];
        }
        return answer;
    }
}