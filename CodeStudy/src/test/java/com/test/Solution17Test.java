package com.test;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution17Test {

    @Test
    void solution() {
        Solution17 slt17 = new Solution17();
        assertEquals(slt17.solution("10D10S0D"),110);
        assertEquals(slt17.solution("1S2D*3T"),37);
    }
}