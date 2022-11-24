package com.test.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution05Test {

    @Test
    void solution() {
        Solution05 slt5 = new Solution05();
        assertEquals(slt5.solution(13,17), 43);
        assertEquals(slt5.solution(24, 27), 52);
    }
}