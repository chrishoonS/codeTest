package com.test2.level1;

import java.util.ArrayList;
import java.util.Collections;

public class Algorithm03 {
    public int[] solution(int[] answers) {
        int[] supo1 = {1, 2, 3, 4, 5};
        int[] supo2 = {2, 1, 2, 3, 2, 4, 2, 5};
        int[] supo3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};

        int a=0, b=0, c=0;

        for (int i = 0; i < answers.length; i++) {
            if (answers[i % answers.length] == supo1[i % supo1.length]) a++;
            if (answers[i % answers.length] == supo2[i % supo2.length]) b++;
            if (answers[i % answers.length] == supo3[i % supo3.length]) c++;
        }

        int maxVal = Math.max(Math.max(a,b), c);
        ArrayList<Integer> ansList = new ArrayList<>();

        if (maxVal == a) ansList.add(1);
        if (maxVal == b) ansList.add(2);
        if (maxVal == c) ansList.add(3);

        int[] answer = new int[ansList.size()];
        for (int i = 0; i < ansList.size(); i++) {
            answer[i] = ansList.get(i);
        }

        return answer;
    }
}
