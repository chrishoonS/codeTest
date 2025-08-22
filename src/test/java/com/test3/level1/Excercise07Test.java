package com.test3.level1;

import com.programmers.level1.Excercise07;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise07Test {

    @Test
    void solution() {
        Excercise07 ex = new Excercise07();
        assertEquals(ex.solution("pPoooyY"), true);
        assertEquals(ex.solution("Pyy"), false);
    }
}