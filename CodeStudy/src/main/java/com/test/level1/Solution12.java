package com.test.level1;
import java.util.HashSet;

public class Solution12 {
    public int solution(int[] nums) {
        int answer = 0;
        HashSet<Integer> poketSet = new HashSet<>();
        for(int i : nums){ //중복제거
            poketSet.add(i);
        }
        answer = (poketSet.size() >= nums.length / 2) ? nums.length / 2 : poketSet.size();
        return answer;
    }
}
