package com.test2.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Algorithm03Test {

    @Test
    void solution() {
        Algorithm03 agr = new Algorithm03();
        assertArrayEquals(agr.solution(new int[]{1,2,3,4,5}), new int[]{1});
        assertArrayEquals(agr.solution(new int[]{1,3,2,4,2}), new int[]{1,2,3});
    }
}