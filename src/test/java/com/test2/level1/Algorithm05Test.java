package com.test2.level1;

import com.programmers.test2.level2.Algorithm05;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Algorithm05Test {

    @Test
    void solution() {
        Algorithm05 agr = new Algorithm05();
        assertEquals(agr.solution(new String[][]{{"yellow_hat", "headgear"}, {"blue_sunglasses", "eyewear"}, {"green_turban", "headgear"}}), 5);
        assertEquals(agr.solution(new String[][]{{"crow_mask", "face"}, {"blue_sunglasses", "face"}, {"smoky_makeup", "face"}}), 3);
    }
}