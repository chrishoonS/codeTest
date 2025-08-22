package com.test3.level1;

import com.programmers.level1.Excercise10;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise10Test {

    @Test
    void solution() {
        Excercise10 ex = new Excercise10();
        assertEquals(ex.solution(new String[]{"Jane", "Kim"}), "김서방은 1에 있다");
    }
}