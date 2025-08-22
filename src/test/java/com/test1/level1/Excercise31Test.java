package com.test1.level1;

import com.programmers.level1.Excercise31;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Excercise31Test {

    @Test
    void solution() {
        Excercise31 slt = new Excercise31();
        assertArrayEquals(slt.solution(new String[]{"mumu", "soe", "poe", "kai", "mine"}
                                     , new String[]{"kai", "kai", "mine", "mine"})
                        , new String[]{"mumu", "kai", "mine", "soe", "poe"});
        assertArrayEquals(slt.solution(new String[]{"mumu", "soe", "poe", "kai", "mine"}
                        , new String[]{"mine", "mine", "mine", "mine"})
                , new String[]{"mine", "mumu", "soe", "poe", "kai"});
        assertArrayEquals(slt.solution(new String[]{"mumu", "soe", "poe", "kai", "mine"}
                        , new String[]{"kai", "soe", "poe", "mine"})
                , new String[]{"soe", "mumu", "poe", "mine", "kai"});


    }
}