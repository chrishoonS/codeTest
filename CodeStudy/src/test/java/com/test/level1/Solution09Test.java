package com.test.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution09Test {

    @Test
    void solution() {
        Solution09 slt09 = new Solution09();
        assertEquals(slt09.solution(new int[][]{{60, 50},{30, 70},{60, 30},{80, 40}}),4000);
        assertEquals(slt09.solution(new int[][]{{10, 7},{12,3},{8,15},{14,7},{5,15}}),120);
        assertEquals(slt09.solution(new int[][]{{14,4},{19, 6},{6, 16},{18, 7},{7, 11}}),133);
    }
}