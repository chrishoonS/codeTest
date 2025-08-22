package com.test3.level1;

import com.programmers.level1.Excercise06;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise06Test {

    @Test
    void solution() {
        Excercise06 ex = new Excercise06();
        assertArrayEquals(ex.solution(new String[]{"sun","bed","car"}, 1),new String[]{"car","bed","sun"});
        assertArrayEquals(ex.solution(new String[]{"abce","abcd","cdx"}, 2),new String[]{"abcd","abce","cdx"});
    }
}