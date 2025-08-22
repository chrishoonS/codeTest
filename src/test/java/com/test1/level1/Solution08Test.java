package com.test1.level1;

import com.programmers.test1.level1.Solution08;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution08Test {

    @Test
    void solution() {
        Solution08 slt8 = new Solution08();
        assertEquals(slt8.solution(3,20,4), 10);
    }
}