package com.test1.level1;

public class Solution02 {
    public int solution(int[] a, int[] b) {
        int answer = 0;
        for(int i=0; i < a.length; i++){
            answer += a[i]*b[i];             //a요소와 b요소 값을 순차적으로 곱하여, 순차적으로 더해나감
        }

        return answer;
    }
}
