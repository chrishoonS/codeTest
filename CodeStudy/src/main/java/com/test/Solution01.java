package com.test;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Solution01 {
    //문제2
//    public static int solution(int[] numbers) {
//        int answer = 0;
//        numbers = new int[]{1,2,3,4,5};
//        if(numbers.length <= 10){
//            for(int i=0; i < numbers.length; i++){
//                answer += numbers[i];
//            }
//        }else {
//            System.out.println("길이초과");
//        }
//        answer = 45 - answer;
//        return answer;
//    }

    public static int[] solution(int[] numbers) {
        Set<Integer> sumSet = new HashSet<>();

        for(int i=0; i<numbers.length-1; i++) {
            for(int j=i+1; j<numbers.length; j++) {
                sumSet.add(numbers[i] + numbers[j]);
            }
        }
        int[] answer = new int[sumSet.size()];
        int no = 0;
        for(int num: sumSet) {
            answer[no++] = num;
        }
        Arrays.sort(answer);

        return answer;
    }

    public static void main(String[] args) {
        int[] result = {};
        result = solution(new int[]{1,1,0,1,1,100,89,32,14});
        System.out.println(Arrays.toString(result));
    }
}
