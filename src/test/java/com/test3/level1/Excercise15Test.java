package com.test3.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise15Test {

    @Test
    void solution() {
        Excercise15 ex = new Excercise15();
        assertEquals(ex.solution(12),28);
        assertEquals(ex.solution(5),6);
    }
}