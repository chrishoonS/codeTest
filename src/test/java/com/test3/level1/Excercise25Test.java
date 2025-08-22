package com.test3.level1;

import com.programmers.level1.Excercise25;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise25Test {
    @Test
    void solution() {
        Excercise25 ex = new Excercise25();
        assertEquals(ex.solution(new int[]{1,2,3,4}), 2.5);
        assertEquals(ex.solution(new int[]{5,5}), 5);
    }
}