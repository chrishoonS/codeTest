package com.test3.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise05Test {

    @Test
    void solution() {
        Excercise05 ex = new Excercise05();
        assertEquals(ex.solution(3,5),12);
        assertEquals(ex.solution(3,3),3);
        assertEquals(ex.solution(5,3),12);
    }
}