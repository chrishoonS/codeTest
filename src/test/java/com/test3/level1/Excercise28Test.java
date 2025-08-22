package com.test3.level1;

import com.programmers.level1.Excercise28;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise28Test {
    @Test
    void solution() {
        Excercise28 ex = new Excercise28();
        assertArrayEquals(ex.solution(new int[][]{{1,2},{2,3}}, new int[][]{{3,4},{5,6}}), new int[][]{{4,6},{7,9}});
        assertArrayEquals(ex.solution(new int[][]{{1,2,5},{2,3,6}}, new int[][]{{3,4,2},{5,6,3}}), new int[][]{{4,6,7},{7,9,9}});
        assertArrayEquals(ex.solution(new int[][]{{1},{2}}, new int[][]{{3},{4}}), new int[][]{{4},{6}});
    }
}