package com.test2.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Algorithm04Test {

    @Test
    void solution() {
        Algorithm04 agr = new Algorithm04();
        assertEquals(agr.solution(5, new int[]{2,4}, new int[]{1,3,5}), 5);
        assertEquals(agr.solution(5, new int[]{2,4}, new int[]{3}), 4);
        assertEquals(agr.solution(3, new int[]{3}, new int[]{1}), 2);
    }
}