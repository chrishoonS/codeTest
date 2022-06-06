package com.test3.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise12Test {

    @Test
    void solution() {
        Excercise12 ex = new Excercise12();
        assertEquals(ex.solution(3), "수박수");
        assertEquals(ex.solution(4), "수박수박");
    }
}