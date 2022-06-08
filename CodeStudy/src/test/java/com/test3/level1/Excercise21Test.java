package com.test3.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise21Test {

    @Test
    void solution() {
        Excercise21 ex = new Excercise21();
        assertArrayEquals(ex.solution(new int[]{4,1,3,1,2,1}), new int[]{4,3,2});
        assertArrayEquals(ex.solution(new int[]{4,3,2,1}), new int[]{4,3,2});
        assertArrayEquals(ex.solution(new int[]{10}), new int[]{-1});
    }
}