package com.test2.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Algorithm02Test {

    @Test
    void solution() {
        Algorithm02 agr = new Algorithm02();
        assertArrayEquals(agr.solution(new int[]{1,5,2,6,3,7,4}, new int[][]{{2,5,3},{4,4,1},{1,7,3}}),new int[]{5,6,3});
    }
}