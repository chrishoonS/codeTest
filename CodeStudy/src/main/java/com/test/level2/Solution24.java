package com.test.level2;

public class Solution24 {
    public int[] solution(int[][] arr) {
        int[] answer = {};
        print2d(arr);
        return answer;
    }

    //2차원 배열 출력용 함수
    public static void print2d(int[][] result) {
        int m = result.length;
        int n = result[0].length;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(result[i][j] + "\t");
            } System.out.println();
        }
        System.out.println("----------------------");
    }
}