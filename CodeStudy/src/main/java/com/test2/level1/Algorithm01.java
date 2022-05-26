package com.test2.level1;

import java.util.ArrayList;
import java.util.Arrays;

public class Algorithm01 {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        Arrays.sort(participant);
        Arrays.sort(completion);

        ArrayList<String> compleList = new ArrayList<>(Arrays.asList(completion));

        for (int i = 0; i < participant.length; i++) {
            if (compleList.indexOf(participant[i]) == -1){
                answer = participant[i];
                break;
            }else{
                compleList.remove(participant[i]);
            }
        }
        return answer;
    }
}