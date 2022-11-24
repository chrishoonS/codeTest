package com.test.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution16Test {

    @Test
    void solution() {
        Solution16 slt16 = new Solution16();
        assertArrayEquals(slt16.solution(5, new int[]{9,20,28,18,11}, new int[]{30,1,21,17,28}), new String[]{"#####", "# # #", "### #", "#  ##", "#####"});
    }
}