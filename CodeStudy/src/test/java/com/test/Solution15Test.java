package com.test;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Solution15Test {

    @Test
    void solution() {
        Solution15 slt15 = new Solution15();
        assertEquals(slt15.solution("one4seveneight"),1478);
        assertEquals(slt15.solution("23four5six7"),234567);
        assertEquals(slt15.solution("2three45sixseven"),234567);
        assertEquals(slt15.solution("123"),123);
    }
}