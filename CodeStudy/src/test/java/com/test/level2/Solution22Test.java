package com.test.level2;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Solution22Test {

    @Test
    void solution() {
        Solution22 slt = new Solution22();
        assertEquals(slt.solution(4), new int[]{1, 2, 9, 3, 10, 8, 4, 5, 6, 7});
        assertEquals(slt.solution(5), new int[]{1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9});
        assertEquals(slt.solution(6), new int[]{1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11});
    }
}