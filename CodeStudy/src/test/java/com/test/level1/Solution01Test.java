package com.test.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class Solution01Test {
    Solution01 slt = new Solution01();
    @Test
    public void test(){
        assertArrayEquals(slt.solution(new int[]{1,1,2,3}), new int[]{2,3,4,5});
    }

}