package com.test3.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise01Test {

    @Test
    void solution() {
        Excercise01 ex = new Excercise01();
        assertEquals(ex.solution("abcde"), "c");
        assertEquals(ex.solution("qwer"), "we");
    }
}