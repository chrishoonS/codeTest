package com.test3.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise23Test {
    @Test
    void solution() {
        Excercise23 ex = new Excercise23();
        assertArrayEquals(ex.solution(3,12), new int[]{3, 12});
        assertArrayEquals(ex.solution(2,5), new int[]{1, 10});
    }
}