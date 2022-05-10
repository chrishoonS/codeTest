package com.test;

import java.util.HashSet;

public class Solution10 {
    public int solution(int[] nums) {
        int answer = 0;
        int tmp1, tmp2, tmp3;
        int sum = 0;

        for(int i=0; i<nums.length-2; i++){
            tmp1 = nums[i];
            for(int j=i+1; j<nums.length; j++){
                tmp2 = nums[j];
                for(int k=j+1; k<nums.length; k++){
                    tmp3 = nums[k];
                    sum = tmp1 + tmp2 + tmp3;
                    if(chkSum(sum) == true)
                        answer++;
                }
            }
        }
        System.out.println();
        return answer;
    }

    private boolean chkSum(int sum) {
        for(int l=2; l<sum; l++){
            if(sum%l == 0){
                return false;
            }
        }
        return true;
    }
}