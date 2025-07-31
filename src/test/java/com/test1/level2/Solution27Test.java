package com.test1.level2;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

@Slf4j
class Solution27Test {
    @Test
    void solution() {

        Solution27 slt = new Solution27();

        assertArrayEquals(slt.solution(new String[]{"SL","LR"}),new int[]{16});
        assertArrayEquals(slt.solution(new String[]{"S"}),new int[]{1,1,1,1});
        assertArrayEquals(slt.solution(new String[]{"R","R"}),new int[]{4,4});

        log.debug("input: {} / output: {}", new String[]{"SL","LR"}, Arrays.toString(slt.solution(new String[]{"SL","LR"})));
        log.debug("input: {} / output: {}", new String[]{"S"}, Arrays.toString(slt.solution(new String[]{"S"})));
        log.debug("input: {} / output: {}", new String[]{"R","R"}, Arrays.toString(slt.solution(new String[]{"R","R"})));
    }
}