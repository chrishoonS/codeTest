package com.test1.level2;

import com.programmers.test1.level2.Solution22;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class Solution22Test {

    @Test
    void solution() {
        Solution22 slt = new Solution22();
        assertArrayEquals(slt.solution(4), new int[]{1, 2, 9, 3, 10, 8, 4, 5, 6, 7});
        assertArrayEquals(slt.solution(5), new int[]{1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9});
        assertArrayEquals(slt.solution(6), new int[]{1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11});
    }
}