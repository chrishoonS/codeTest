package com.test1.level2;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution26Test {

    @Test
    void solution() {
        Solution26 slt = new Solution26();
        assertArrayEquals(slt.solution(new long[]{2, 7}),new long[]{3, 11});
    }
}