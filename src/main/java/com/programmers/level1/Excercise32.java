package com.programmers.level1;

import java.util.HashMap;
import java.util.Map;

public class Excercise32 {
    public int[] solution(String[] name, int[] yearning, String[][] photo) {

        int[] answer = new int[photo.length];
        Map<String, Integer> pointMap = new HashMap<>(); //해당 인물의 점수를 담는 map

        for (int i = 0; i < name.length; i++) {
            pointMap.put(name[i], yearning[i]);
        }

        for (int i = 0; i < photo.length; i++) {
            int point = 0;

            for (int j = 0; j < photo[i].length; j++) {
                if (pointMap.containsKey(photo[i][j])){
                    point += pointMap.get(photo[i][j]);
                }
            }
            answer[i] = point;
        }

        return answer;
    }
}

// 다른풀이
//class Solution {
//    public int[] solution(String[] name, int[] yearning, String[][] photo) {
//        int[] answer = new int[photo.length];
//        for(int i = 0; i < photo.length; i++){
//            for(int j = 0; j < photo[i].length; j++){
//                for(int k = 0; k < name.length; k++){
//                    if(photo[i][j].equals(name[k])) answer[i] += yearning[k];
//                }
//            }
//        }
//        return answer;
//    }
//}