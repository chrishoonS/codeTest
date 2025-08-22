package com.test3.level1;

import com.programmers.level1.Excercise16;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise16Test {

    @Test
    void solution() {
        Excercise16 ex = new Excercise16();
        assertEquals(ex.solution("try hello world"), "TrY HeLlO WoRlD");
        assertEquals(ex.solution("  sss   sssss sssssss  "), "  SsS   SsSsS SsSsSsS  ");
    }
}