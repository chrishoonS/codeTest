package com.test;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution18Test {

    @Test
    void solution() {
        Solution18 slt18 = new Solution18();
        assertEquals(slt18.solution(5, new int[]{2, 1, 2, 6, 2, 4, 3, 3}), new int[]{3, 4, 2, 1, 5});
        assertEquals(slt18.solution(4, new int[]{4, 4, 4, 4, 4}), new int[]{4,1,2,3});
    }
}