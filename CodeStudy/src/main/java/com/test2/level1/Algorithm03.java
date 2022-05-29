package com.test2.level1;

import java.util.ArrayList;
import java.util.Collections;

public class Algorithm03 {
    public int[] solution(int[] answers) { //answers : 1,2,3,4,5
        int[] _1supo = {1, 2, 3, 4, 5};
        int[] _2supo = {2, 1, 2, 3, 2, 4, 2, 5};
        int[] _3supo = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};

        int[] answer = {};
        int a=0, b=0, c=0;
        for (int i = 0; i < answers.length; i++) {
            if (_1supo[i] == answers[i]){
                a++;
            }else if (_2supo[i] == answers[i]){
                b++;
            }else if (_3supo[i] == answers[i]){
                c++;
            }
        }

        return answer;
    }
}
