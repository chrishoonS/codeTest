package com.test3.level1;

import java.util.ArrayList;

public class Excercise02 {
    public int[] solution(int[] arr) {
        ArrayList<Integer> list = new ArrayList<>();
        int[] answer = {};
        for(int i = 0; i < arr.length - 1; i++){
            if(arr[i] != arr[i+1])
                list.add(arr[i]);
            if(i == arr.length - 2)
                list.add(arr[arr.length - 1]);
        }

        answer = new int[list.size()];
        for(int i = 0; i < list.size(); i++){
            answer[i] = list.get(i);
        }
        return answer;
    }
}