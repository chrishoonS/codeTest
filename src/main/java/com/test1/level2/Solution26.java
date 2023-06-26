package com.test1.level2;

public class Solution26 {
    public long[] solution(long[] numbers) {
        long[] answer = new long[numbers.length];

        for(int i=0; i<numbers.length; i++){
            String bStr =  Long.toBinaryString(numbers[i]);
            if(numbers[i]%2==0){
                answer[i] = numbers[i]+1;
            }else{
                //홀수 가장 낮은 0을 1로 바꾸고 , 방금 바꾼것보다는 나중 위치에서 1을 0으로 바꾸기
                int lstIdx =  bStr.lastIndexOf("0");
                int _1stIdx = bStr.indexOf("1",lstIdx);
                if(lstIdx==-1){
                    bStr = Long.toBinaryString(numbers[i]+1);
                    bStr = bStr.substring(0,2) + bStr.substring(2, bStr.length()).replace("0","1");

                }else{
                    bStr = bStr.substring(0, lstIdx) +"1"+ bStr.substring(lstIdx+1, _1stIdx) +"0"+ bStr.substring(_1stIdx+1, bStr.length());
                }
                answer[i] = Long.parseLong(bStr,2);
            }
        }
        return answer;
    }
}