package com.test3.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise03Test {

    @Test
    void solution() {
        Excercise03 ex = new Excercise03();
        assertArrayEquals(ex.solution(new int[]{1,1,3,3,0,1,1}), new int[]{1,3,0,1});
        assertArrayEquals(ex.solution(new int[]{4,4,4,3,3}), new int[]{4,3});
    }
}