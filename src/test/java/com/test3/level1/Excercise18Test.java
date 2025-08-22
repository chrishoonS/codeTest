package com.test3.level1;

import com.programmers.level1.Excercise18;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise18Test {

    @Test
    void solution() {
        Excercise18 ex = new Excercise18();
        assertArrayEquals(ex.solution(12345),new int[]{5,4,3,2,1});
    }
}