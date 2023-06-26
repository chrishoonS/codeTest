package com.test1.level2;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution27Test {
    @Test
    void solution() {
        Solution27 slt = new Solution27();
        assertArrayEquals(slt.solution(new String[]{"SL","LR"}),new int[]{16});
        assertArrayEquals(slt.solution(new String[]{"S"}),new int[]{1,1,1,1});
        assertArrayEquals(slt.solution(new String[]{"R","R"}),new int[]{4,4});
    }
}