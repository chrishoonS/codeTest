package com.test;

import java.util.Arrays;

public class Solution11 {
    public static int solution(int[] d, int budget) {
        int answer = 0;
        int sum = 0;                //부서별로 신청한 금액 배열
        int part = d.length;        //요청한 부서 수
        Arrays.sort(d);             //정렬 후 작은값들을 먼저 더해서 많은팀 추출하기 위한 정렬
        for (int i=0; i<part; i++){
            sum += d[i];
            if (sum > budget){  //sum이 예산보다 커지면 리턴
                return answer;
            }else {
                answer++;
            }
        }
        return answer;
    }
}
