package com.test1.level1;

import com.test1.level2.Solution24;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Solution28Test {

    @Test
    void solution() {
        Solution28 slt = new Solution28();
        assertArrayEquals(slt.solution(new String[]{"mumu", "soe", "poe", "kai", "mine"}
                                     , new String[]{"kai", "kai", "mine", "mine"})
                        , new String[]{"mumu", "kai", "mine", "soe", "poe"});
        assertArrayEquals(slt.solution(new String[]{"mumu", "soe", "poe", "kai", "mine"}
                        , new String[]{"mine", "mine", "mine", "mine"})
                , new String[]{"mine", "mumu", "soe", "poe", "kai"});
        assertArrayEquals(slt.solution(new String[]{"mumu", "soe", "poe", "kai", "mine"}
                        , new String[]{"soe", "mumu", "soe", "mumu"})
                , new String[]{"mumu", "soe", "poe", "kai", "mine"});


    }
}