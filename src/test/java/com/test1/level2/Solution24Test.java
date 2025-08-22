package com.test1.level2;

import com.programmers.test1.level2.Solution24;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution24Test {

    @Test
    void solution() {
        Solution24 slt = new Solution24();
        assertArrayEquals(slt.solution(new int[][]{{1,1,0,0}, {1,0,0,0}, {1,0,0,1}, {1,1,1,1}}), new int[]{4,9});
        assertArrayEquals(slt.solution(new int[][]{{1, 1, 1, 1, 1, 1, 1, 1},{0,1,1,1,1,1,1,1},{0,0,0,0,1,1,1,1},{0,1,0,0,1,1,1,1},{0,0,0,0,0,0,1,1},{0,0,0,0,0,0,0,1},{0,0,0,0,1,0,0,1},{0,0,0,0,1,1,1,1}}), new int[]{10,15});
    }
}