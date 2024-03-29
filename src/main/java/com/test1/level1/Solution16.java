package com.test1.level1;

public class Solution16 {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[n];
        //십진수 -> 이진수
        for (int i=0; i<n; i++) {
            //이진수로 변환시켜 연산 후, int 범위를 벗어나는 경우를 막아주기위해 long으로 타입 변환
            answer[i] = String.format("%0"+n+"d",Long.parseLong(Integer.toBinaryString(arr1[i] | arr2[i])));
            answer[i] = answer[i].replace("0", " ");
            answer[i] = answer[i].replace("1", "#");
        }
        return answer;
    }
}
