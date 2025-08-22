package com.test1.level2;

import com.programmers.test1.level2.Solution23;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution23Test {

    @Test
    void solution() {
        Solution23 slt = new Solution23();
        assertArrayEquals(slt.solution("110010101001"), new int[]{3,8});
        assertArrayEquals(slt.solution("01110"), new int[]{3,3});
        assertArrayEquals(slt.solution("1111111"), new int[]{4,1});
    }
}