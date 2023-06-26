package com.test1.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Solution02Test {
    Solution02 slt02 = new Solution02();
    @Test
    public void test(){
        assertEquals(slt02.solution(new int[]{1,2,3,4}, new int[]{-3,-1,0,2}), 3);
        assertEquals(slt02.solution(new int[]{-1,0,1}, new int[]{1,0,-1}), -2);
    }
}