package com.test3.level1;

import com.programmers.level1.Excercise22;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise22Test {

    @Test
    void solution() {
        Excercise22 ex = new Excercise22();
        assertEquals(ex.solution(3), "Odd");
        assertEquals(ex.solution(4),"Even");
    }
}