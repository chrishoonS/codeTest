package com.test3.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise03Test {

    @Test
    void solution() {
        Excercise03 ex = new Excercise03();
        assertEquals(ex.solution(new int[]{5,9,7,10}, 5), new int[]{5,10});
        assertEquals(ex.solution(new int[]{2,36,1,3}, 1), new int[]{1,2,3,36});
        assertEquals(ex.solution(new int[]{3,2,6}, 10), new int[]{-1});
    }
}