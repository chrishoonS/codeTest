package com.test3.level1;

import com.programmers.level1.Excercise09;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise09Test {

    @Test
    void solution() {
        Excercise09 ex = new Excercise09();
        assertEquals(ex.solution("a234"), false);
        assertEquals(ex.solution("1234"), true);
    }
}