package com.test.level1;

public class Solution04 {
    public int solution(int[] abs, boolean[] signs) {
        int answer = 0;
        int num = 0;
        for(int i : abs){
            if(signs[num] == false){
                i = -1 * abs[num];
            }
            answer += i;
            num++;
        }
        return answer;
    }
}
