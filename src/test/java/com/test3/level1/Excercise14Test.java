package com.test3.level1;

import com.programmers.level1.Excercise14;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise14Test {

    @Test
    void solution() {
        Excercise14 ex = new Excercise14();
        assertEquals(ex.solution("AB",1),"BC");
        assertEquals(ex.solution("z",1),"a");
        assertEquals(ex.solution("a B z",4),"e F d");
    }
}