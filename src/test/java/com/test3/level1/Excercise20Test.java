package com.test3.level1;

import com.programmers.level1.Excercise20;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise20Test {

    @Test
    void solution() {
        Excercise20 ex = new Excercise20();
        assertEquals(ex.solution(121), 144);
        assertEquals(ex.solution(3), -1);
    }
}