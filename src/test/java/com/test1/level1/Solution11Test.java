package com.test1.level1;

import com.programmers.test1.level1.Solution11;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Solution11Test {

    @Test
    void solution() {
        Solution11 slt11 = new Solution11();
        assertEquals(slt11.solution(new int[]{1,3,2,5,4},9), 3);
        assertEquals(slt11.solution(new int[]{2,2,3,3},10), 4);
    }
}