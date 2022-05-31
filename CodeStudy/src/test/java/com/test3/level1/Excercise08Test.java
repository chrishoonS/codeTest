package com.test3.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise08Test {

    @Test
    void solution() {
        Excercise08 ex = new Excercise08();
        assertEquals(ex.solution("Zbcdefg"), "gfedcbZ");
    }
}