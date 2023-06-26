package com.test1.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution19Test {

    @Test
    void solution() {
        Solution19 slt19 = new Solution19();
        assertEquals(slt19.solution("...!@BaT#*..y.abcdefg   hijklm"),"bat.y.abcdefghi");
        assertEquals(slt19.solution("z-+.^."),"z--");
        assertEquals(slt19.solution("=.="),"aaa");
        assertEquals(slt19.solution("123_.def"),"123_.def");
        assertEquals(slt19.solution("abcdefghijklmn.p"),"abcdefghijklmn");
    }
}