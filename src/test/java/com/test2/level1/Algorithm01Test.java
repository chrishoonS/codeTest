package com.test2.level1;

import com.programmers.test2.level1.Algorithm01;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Algorithm01Test {

    @Test
    void solution() {
        Algorithm01 agr = new Algorithm01();
        assertEquals(agr.solution(new String[]{"leo", "kiki", "eden"}, new String[]{"eden", "kiki"}),"leo");
        assertEquals(agr.solution(new String[]{"marina", "josipa", "nikola", "vinko", "filipa"}, new String[]{"josipa", "filipa", "marina", "nikola"}),"vinko");
        assertEquals(agr.solution(new String[]{"mislav", "stanko", "mislav", "ana"}, new String[]{"stanko", "ana", "mislav"}),"mislav");
    }
}