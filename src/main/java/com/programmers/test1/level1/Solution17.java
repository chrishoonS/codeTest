package com.programmers.test1.level1;

public class Solution17 {
    public int solution(String dartResult) {
        int answer = 0;
        // 각 게임별 점수
        int[] score = new int[3];
        char[] charArr = dartResult.toCharArray();
        // 첫 번째는 0이 되기 위한 -1
        int idx = -1;
        for (int i=0; i<charArr.length; i++) {
            // n번째 라운드 점수가 0~9인 경우
            if (charArr[i] >= '0' && charArr[i] <= '9') {
                idx++; // 점수 배열 인덱스를 맞춰주기 위한 증가
                score[idx] += Integer.parseInt(String.valueOf(charArr[i])); // 점수 추가
                if (charArr[i] == '1' && charArr[i+1] == '0') { //10점인 경우
                    score[idx] -= Integer.parseInt(String.valueOf(charArr[i])); //이미 들어가 있는 인덱스 제거
                    score[idx] = 10;
                    i++;    //10일때는 다음 문자열 건너뛰기 위한 증가
                }
            } else if (charArr[i] == 'D') {
                score[idx] = (int) Math.pow(score[idx],2);
            } else if(charArr[i] == 'T') {
                score[idx] = (int) Math.pow(score[idx],3);
            } else if (charArr[i] == '*') { // 이전 라운드와 현재 라운드에 2배
                if (idx > 0) score[idx-1] *=2;
                score[idx] *= 2;
            } else if (charArr[i] == '#') { // 현재 라운드에 -1 곱하기
                score[idx] *= -1;
            }
        }
        answer = score[0] + score[1] + score[2];
        return answer;
    }
}