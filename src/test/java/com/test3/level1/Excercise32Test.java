package com.test3.level1;

import com.programmers.level1.Excercise32;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise32Test {

    @Test
    void solution() {
        Excercise32 slt = new Excercise32();
        assertArrayEquals(slt.solution(new String[]{"may", "kein", "kain", "radi"}, new int[]{5, 10, 1, 3},
                new String[][]{{"may", "kein", "kain", "radi"},{"may", "kein", "brin", "deny"}, {"kon", "kain", "may", "coni"}}), new int[]{19, 15, 6});
        assertArrayEquals(slt.solution(new String[]{"kali", "mari", "don"}, new int[]{11, 1, 55},
                new String[][]{{"kali", "mari", "don"},{"pony", "tom", "teddy"}, {"con", "mona", "don"}}), new int[]{67, 0, 55});
        assertArrayEquals(slt.solution(new String[]{"may", "kein", "kain", "radi"}, new int[]{5, 10, 1, 3},
                new String[][]{{"may"},{"kein", "deny", "may"}, {"kon", "coni"}}), new int[]{5, 15, 0});
    }
}