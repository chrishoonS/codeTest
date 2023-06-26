package com.test1.level2;

public class Solution24 {
    int[] answer;
    public int[] solution(int[][] arr) {
        answer = new int[2];
        print2d(arr);
        quadZip(arr,0,0, arr.length);
        return answer;
    }

    public void quadZip(int[][] arr, int x, int y, int length){
        if(zipChk(arr,x,y,length, arr[x][y])){
            if(arr[x][y] == 1) answer[1]++;
            else answer[0]++;
            return ;
        }
        quadZip(arr, x,y, length/2);
        quadZip(arr, x,y+length/2, length/2);
        quadZip(arr,x+length/2,y, length/2);
        quadZip(arr,x+length/2,y + length/2, length/2);
    }

    public boolean zipChk(int[][] arr, int x, int y, int length, int arrVal) {
        for(int i = x; i < x + length; i++)
            for(int j = y; j < y + length; j++)
                if(arr[i][j] != arrVal)
                    return false;
        return true;
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