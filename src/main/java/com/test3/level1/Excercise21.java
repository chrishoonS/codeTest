package com.test3.level1;

import java.util.Arrays;

public class Excercise21 {
    public int[] solution(int[] arr) {
        int[] answer = {};
        if (arr.length == 1) {
            answer = new int[]{-1};
            return answer;
        }else{
            int[] org = Arrays.copyOf(arr, arr.length);
            Arrays.sort(arr);
            int cnt = 1;
            for (int i = 0; i < arr.length; i++) {
                if (i == 0) continue;
                else{
                    if (Math.min(arr[i-1], arr[i]) == arr[i]) cnt++;
                    else break;
                }
            }
            int idx = 0;
            answer = new int[org.length - cnt];
            for (int i = 0; i < org.length; i++) {
                if (org[i] == arr[0]) continue;
                else{
                    answer[idx] = org[i];
                    idx++;
                }
            }
        }
        return answer;
    }
}