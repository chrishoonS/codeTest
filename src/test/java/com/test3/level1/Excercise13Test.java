package com.test3.level1;

import com.programmers.level1.Excercise13;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise13Test {

    @Test
    void solution() {
        Excercise13 ex = new Excercise13();
        assertEquals(ex.solution("1234"), 1234);
        assertEquals(ex.solution("-1234"), -1234);
    }
}