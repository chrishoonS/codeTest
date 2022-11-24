package com.test.level1;

public class Solution20 {
    public int[] solution(int[] lottos, int[] win_nums) {
        int[] answer = new int[2];
        int winCnt = 0; //당첨번호 체크
        int _0cnt = 0;  //0개수 체크
        int sum = 0;
        for (int i=0; i<win_nums.length; i++) {
            if(lottos[i] == 0){
                _0cnt++;
            }
            for(int j=0; j<lottos.length ; j++) {
                if(win_nums[i] == lottos[j]){
                    winCnt++;
                }
            }
        }
        sum = winCnt + _0cnt; //4
        answer[0] = rankChk(sum);
        answer[1] = rankChk(winCnt);
        return answer;
    }

    public int rankChk(int no) {
        switch (no){
            case 6: return 1;
            case 5: return 2;
            case 4: return 3;
            case 3: return 4;
            case 2: return 5;
            default: return 6;
        }
    }
}
