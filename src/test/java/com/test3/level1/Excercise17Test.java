package com.test3.level1;

import com.programmers.level1.Excercise17;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise17Test {

    @Test
    void solution() {
        Excercise17 ex = new Excercise17();
        assertEquals(ex.solution(123),6);
        assertEquals(ex.solution(987),24);
    }
}