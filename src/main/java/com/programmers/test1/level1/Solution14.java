package com.programmers.test1.level1;


import java.util.Arrays;

public class Solution14 {
    public String solution(int[] numbers, String hand) {
        String answer = "";
        Integer[] keypadL = {1,4,7,10};          //왼쪽손 고정 키패드, *=10
        Integer[] keypadR = {3,6,9,12};          //오른쪽손 고정 키패드, #=12
        Integer[][] mainKey = {                  //실제 키패드판
                {1,2,3},
                {4,5,6},
                {7,8,9},
                {10,0,12}
        };

        int xl = 3; //왼손 엄지 처음 위치
        int yl = 0;
        int xr = 3; //오른손 엄지 처음 위치
        int yr = 2;

        for (int i=0; i<numbers.length ; i++) { //누를 버튼 만큼 반복
            int pushNo = numbers[i];
            int rLen=0, lLen=0;                 //각 손과 누를 버튼 위치의 거리를 담을 변수

            for (int j=0; j< mainKey.length; j++) {
                for (int k=0; k< mainKey[k].length ; k++) { //실제 키패드판과 누를 버튼과 같은값 찾을때 까지 반복
                    if (pushNo == mainKey[j][k]){
                        if(Arrays.asList(keypadL).contains(pushNo)){    //왼쪽고정
                            answer += "L";
                            xl = j;
                            yl = k;
                        }else if(Arrays.asList(keypadR).contains(pushNo)){//오른쪽고정
                            answer += "R";
                            xr = j;
                            yr = k;
                        }else{
                            rLen = Math.abs(xr-j) + Math.abs(yr-k);
                            lLen = Math.abs(xl-j) + Math.abs(yl-k);
                            if(rLen < lLen){
                                answer+="R";
                                xr = j;
                                yr = k;
                            }else if(rLen > lLen){
                                answer+="L";
                                xl = j;
                                yl = k;
                            }else{  //같을 때 주손으로 판별하기
                                if (hand.equals("right")){
                                    answer+="R";
                                    xr = j;
                                    yr = k;
                                }else{
                                    answer+="L";
                                    xl = j;
                                    yl = k;
                                }
                            }
                        }

                    }else{
                        continue;
                    }
                }
            }
        }
        return answer;
    }
}
