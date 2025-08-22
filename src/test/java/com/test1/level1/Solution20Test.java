package com.test1.level1;

import com.programmers.test1.level1.Solution20;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution20Test {

    @Test
    void solution() {
        Solution20 slt20 = new Solution20();
        assertArrayEquals(slt20.solution(new int[]{44, 1, 0, 0, 31, 25}, new int[]{31, 10, 45, 1, 6, 19}), new int[]{3, 5});
        assertArrayEquals(slt20.solution(new int[]{0, 0, 0, 0, 0, 0}, new int[]{38, 19, 20, 40, 15, 25}), new int[]{1, 6});
        assertArrayEquals(slt20.solution(new int[]{45, 4, 35, 20, 3, 9}, new int[]{20, 9, 3, 45, 4, 35}), new int[]{1, 1});
    }
}