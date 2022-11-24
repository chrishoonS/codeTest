package com.test3.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise24Test {
    @Test
    void solution() {
        Excercise24 ex = new Excercise24();
        assertEquals(ex.solution(6), 8);
        assertEquals(ex.solution(16), 4);
        assertEquals(ex.solution(626331), -1);
    }
}