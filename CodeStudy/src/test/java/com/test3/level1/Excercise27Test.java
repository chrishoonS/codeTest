package com.test3.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise27Test {
    @Test
    void solution() {
        Excercise27 ex = new Excercise27();
        assertEquals(ex.solution("01033334444"), "*******4444");
        assertEquals(ex.solution("027778888"), "*****8888");
    }
}