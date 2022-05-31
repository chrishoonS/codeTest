package com.test3.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise02Test {

    @Test
    void solution() {
        Excercise02 ex = new Excercise02();
        assertEquals(ex.solution("abcde"), "c");
        assertEquals(ex.solution("qwer"), "we");
    }
}