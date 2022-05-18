package com.test.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution04Test {

    @Test
    void solution() {
        Solution04 slt4 = new Solution04();
        assertEquals(slt4.solution(new int[]{4,7,12}, new boolean[]{true, false, true}), 9);
        assertEquals(slt4.solution(new int[]{1,2,3}, new boolean[]{false, false, true}), 0);
    }
}