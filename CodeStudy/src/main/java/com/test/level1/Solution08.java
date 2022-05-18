package com.test.level1;

public class Solution08 {
    public long solution(int price, int money, int count) {
        long answer = 0;
        long sum = 0;
        for(long i=1; i<=count; i++){
            sum += (price * i);
        }
        answer = money - sum;
        return (sum < money) ? 0 : Math.abs(answer); //answer가 양수면 0, 음수면 절대값
    }
}