package com.test;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution10Test {

    @Test
    void solution() {
        Solution10 slt10 = new Solution10();
        assertEquals(slt10.solution(new int[]{1,2,3,4}), 1);
        assertEquals(slt10.solution(new int[]{1,2,7,6,4}), 4);
    }
}