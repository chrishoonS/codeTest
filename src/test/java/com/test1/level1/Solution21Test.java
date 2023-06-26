package com.test1.level1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution21Test {

    @Test
    void solution() {
        Solution21 slt21 = new Solution21();
        assertArrayEquals(slt21.solution(new String[]{"muzi", "frodo", "apeach", "neo"}, new String[]{"muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"},2), new int[]{2, 1, 1, 0});
        assertArrayEquals(slt21.solution(new String[]{"con", "ryan"}, new String[]{"ryan con", "ryan con", "ryan con", "ryan con"},3), new int[]{0, 0});
    }
}


