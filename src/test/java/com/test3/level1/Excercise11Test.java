package com.test3.level1;

import com.programmers.level1.Excercise11;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise11Test {

    @Test
    void solution() {
        Excercise11 ex = new Excercise11();
        assertEquals(ex.solution(10), 4);
        assertEquals(ex.solution(5), 3);
    }
}