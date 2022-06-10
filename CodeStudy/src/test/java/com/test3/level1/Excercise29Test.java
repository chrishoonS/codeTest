package com.test3.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise29Test {
    @Test
    void solution() {
        Excercise29 ex = new Excercise29();
        assertArrayEquals(ex.solution(2,5), new long[]{2,4,6,8,10});
        assertArrayEquals(ex.solution(4,3), new long[]{4,8,12});
        assertArrayEquals(ex.solution(-4,2), new long[]{-4,-8});
        assertArrayEquals(ex.solution(-10000000,3), new long[]{-10000000,-20000000,-30000000});
    }
}