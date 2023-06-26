package com.test1.level1;

public class Solution09 {
    public static int solution(int[][] size) {
        int answer = 0;
        int sizeL = size.length;
        //가로쪽에 긴 길이 몰아주기
        int[] x = new int[sizeL];    //큰수 저장할 배열
        int[] y = new int[sizeL];    //작은수 저장할 배열

        int tmp1 = 0;       //큰 수중의 최대값 저장할 변수
        int tmp2 = 0;       //작은 수중의 최대값 저장할 변수

        for(int i=0; i < sizeL ;i++){
            int j = 0;
            x[i] = (size[i][j] < size[i][j+1]) ? size[i][j+1] : size[i][j];
            y[i] = (size[i][j] < size[i][j+1]) ? size[i][j] : size[i][j+1];

            tmp1 = tmp1 <= x[i] ? x[i] : tmp1;
            tmp2 = tmp2 <= y[i] ? y[i] : tmp2;
        }

        answer = tmp1 * tmp2;
        return answer;
    }
}