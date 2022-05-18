package com.test.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution13Test {

    @Test
    void solution() {
        Solution13 slt13 = new Solution13();
        assertEquals(slt13.solution(new int[][]{
                 {0,0,0,0,0}
                ,{0,0,1,0,3}
                ,{0,2,5,0,1}
                ,{4,2,4,4,2}
                ,{3,5,1,3,1}} , new int[]{1,5,3,5,1,2,1,4}),4);
    }
}