package com.programmers.test2.level1;

import java.util.Arrays;

public class Algorithm04 {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = n - lost.length;

        Arrays.sort(lost);
        Arrays.sort(reserve);

        for(int i = 0; i < lost.length; i++) {  //여벌 체육복 있는애가 도둑맞은 경우
            for(int j = 0; j < reserve.length; j++) {
                if(lost[i] == reserve[j]) {
                    answer++;
                    lost[i] = -1;
                    reserve[j] = -1;
                    break;
                }
            }
        }

        for(int i = 0; i < lost.length; i++) {
            for(int j = 0; j < reserve.length;j++) {    //자기번호 +1, -1인 번호에게만 대여가능
                if((lost[i]-1 == reserve[j]) || (lost[i]+1 == reserve[j])) {
                    answer++;
                    reserve[j] = -1;
                    break;
                }
            }
        }

        return answer;
    }
}
