package com.test3.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise26Test {
    @Test
    void solution() {
        Excercise26 ex = new Excercise26();
        assertEquals(ex.solution(10), true);
        assertEquals(ex.solution(12), true);
        assertEquals(ex.solution(11), false);
        assertEquals(ex.solution(13), false);
    }
}