package com.test1.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Solution12Test {

    @Test
    void solution() {
        Solution12 slt12 = new Solution12();
        assertEquals(slt12.solution(new int[]{3,1,2,3}), 2);
        assertEquals(slt12.solution(new int[]{3,3,3,2,2,4}), 3);
        assertEquals(slt12.solution(new int[]{3,3,3,2,2,2}), 2);
    }
}