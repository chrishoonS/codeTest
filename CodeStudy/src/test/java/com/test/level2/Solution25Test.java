package com.test.level2;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution25Test {

    @Test
    void solution() {
        Solution25 slt = new Solution25();
        assertEquals(slt.solution("[](){}"),3);
        assertEquals(slt.solution("}]()[{"),2);
        assertEquals(slt.solution("[)(]"),0);
        assertEquals(slt.solution("}}}"),0);
    }
}