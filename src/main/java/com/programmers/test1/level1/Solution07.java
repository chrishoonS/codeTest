package com.programmers.test1.level1;

public class Solution07 {
    public int solution(int n) {
        int answer = 0;
        int idx = 0;
        int[] arr = new int[n];     //1로 떨어지는 수를 저장할 배열
        for(int i=1; i<n ;i++){
            if(n%i == 1){           //1로 나누어 떨어질때만 저장
                arr[idx] = i;
            }
        }
        answer = arr[0];            //0번째 인덱스가 최소값
        return answer;
    }
}


