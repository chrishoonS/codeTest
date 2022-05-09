package com.test;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution07Test {

    @Test
    void solution() {
        Solution07 slt7 = new Solution07();
        assertEquals(slt7.solution(10), 3);
        assertEquals(slt7.solution(12), 11);
        assertEquals(slt7.solution(8), 7);
        assertEquals(slt7.solution(3), 2);
        assertEquals(slt7.solution(1000000), 3);
    }
}