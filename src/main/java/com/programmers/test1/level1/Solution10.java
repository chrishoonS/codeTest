package com.programmers.test1.level1;

public class Solution10 {
    public int solution(int[] nums) {
        int answer = 0;
        int tmp1, tmp2, tmp3;
        int sum = 0;

        for(int i=0; i<nums.length-2; i++){ //마지막 두자리는 밑에 for문에 의해 돌기 때문에 불필요한 길이 빼줌
            tmp1 = nums[i];
            for(int j=i+1; j<nums.length; j++){
                tmp2 = nums[j];
                for(int k=j+1; k<nums.length; k++){
                    tmp3 = nums[k];
                    sum = tmp1 + tmp2 + tmp3;
                    if(chkSum(sum) == true) //소수 판별 함수 참일때 answer count up!
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
                return false;   //한개라도 나눠지면 false return
            }
        }
        return true;
    }
}