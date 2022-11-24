package com.test.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Solution06Test {

    @Test
    void solution() {
        Solution06 slt6 = new Solution06();
        assertEquals(slt6.solution(new int[]{1,2,3,4,6,7,8,0}), 14);
        assertEquals(slt6.solution(new int[]{5,8,4,0,6,7,9}), 6);

    }
}