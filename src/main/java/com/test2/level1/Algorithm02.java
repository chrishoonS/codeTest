package com.test2.level1;

import java.util.ArrayList;
import java.util.Collections;

public class Algorithm02 {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];

        for(int i = 0; i < commands.length; i++){
            ArrayList<Integer> list = new ArrayList<>();

            for(int j = commands[i][0] - 1; j < commands[i][1]; j++){
                list.add(array[j]);
            }

            Collections.sort(list);

            answer[i] = (int) list.get(commands[i][2]-1);
        }

        return answer;
    }
}
