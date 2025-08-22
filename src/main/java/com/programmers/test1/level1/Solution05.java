package com.programmers.test1.level1;

import java.util.ArrayList;

public class Solution05 {
    public int solution(int left, int right) {
        //13,17
        int answer = 0;
        //범위내에 숫자들을 담을 배열의 크기
        int[] rangeNum = new int[right - left + 1];
        for(int i=0; i < rangeNum.length; i++){
            rangeNum[i] = left + i;
            ArrayList<Integer> arrList = new ArrayList<>();      //약수를 저장하는 ArrayList
            for(int j=1; j <= rangeNum[i]; j++){
                if(rangeNum[i]%j == 0){
                    arrList.add(j);
                }
            }
            //arrList.size() = 약수개수
            //약수개수가 짝수면 더하고, 홀수면 빼기
            answer = (arrList.size()%2 == 0 ? answer+rangeNum[i] : answer-rangeNum[i]);
        }

        return answer;
    }
}
