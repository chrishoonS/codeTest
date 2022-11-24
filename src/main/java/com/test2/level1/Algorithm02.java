package com.test2.level1;

import java.util.ArrayList;
import java.util.Collections;

public class Algorithm02 {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];

        for(int i = 0; i < commands.length; i++){
            answer[i] = result(commands[i][0], commands[i][1], commands[i][2], array);
        }

        return answer;
    }

    public int result(int st, int ed, int _th, int[] array){
        ArrayList<Integer> list = new ArrayList<>();

        for(int j = st - 1; j < ed; j++){
            list.add(array[j]);
        }

        Collections.sort(list);

        return (int) list.get(_th-1);
    }
}
