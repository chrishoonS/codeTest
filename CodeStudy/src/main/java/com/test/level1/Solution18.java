package com.test.level1;

import java.util.Arrays;

public class Solution18 {
    public int[] solution(int N, int[] stages) {
        /**
         * 스테이지 수 만큼 반복
         * 실패율 계산
         * 배열에 각 스테이지별 실패율과 해당 스테이지 담기
         * 담긴 배열의 순서 정렬
         **/
        int[] answer = new int[N];
        double[] failArr = new double[N];
        for (int i=0; i<N; i++) {               // 스테이지 수 N만큼 반복
            double clearCnt = 0;                //스테이지 도달한 플레이어 수 - 분모
            double ingCnt = 0;                  //스테이지 중인 플레이어 수 - 분자
            for (int j=0; j<stages.length; j++) {
                if(i+1 == stages[j]){           //i+1번째 스테이지 깻는지 체크하여 분모/분자 증가
                    ingCnt++;
                    clearCnt++;
                }else if (i+1 < stages[j]){
                    clearCnt++;
                }
            }
            if(clearCnt != 0){                  //분모가 0일때는 연산하지 않고 0값 넣기
                failArr[i] = ingCnt / clearCnt;
                answer[i] = i+1;
            }else{
                failArr[i] = 0;
                answer[i] = i+1;
            }
        }
//        System.out.println(Arrays.toString(answer));
//        System.out.println(Arrays.toString(failArr));
        double tmp = 0;     //실패율 배열 값을 담을 임시 변수
        int stgTmp = 0;     //해당 스테이지 값을 담을 임시 변수

        for (int i=0; i<failArr.length; i++) {
            for (int j=i+1; j<failArr.length; j++) {
                if (failArr[i] > failArr[j]){
                    continue;
                }else if(failArr[i] == failArr[j]){
                    if(answer[i] < answer[j]){
                        continue;
                    }else{
                        stgTmp = answer[i];
                        answer[i] = answer[j];
                        answer[j] = stgTmp;
                    }
                }else{
                    tmp = failArr[i];
                    failArr[i] = failArr[j];
                    failArr[j] = tmp;
                    stgTmp = answer[i];
                    answer[i] = answer[j];
                    answer[j] = stgTmp;
                }
            }
        }
//        System.out.println(Arrays.toString(answer));
//        System.out.println(Arrays.toString(failArr));

        return answer;
    }
}