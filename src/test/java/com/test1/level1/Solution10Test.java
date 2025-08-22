package com.test1.level1;

import com.programmers.test1.level1.Solution10;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution10Test {

    @Test
    void solution() {
        Solution10 slt10 = new Solution10();
        assertEquals(slt10.solution(new int[]{1,2,3,4}), 1);
        assertEquals(slt10.solution(new int[]{1,2,7,6,4}), 4);
    }
}