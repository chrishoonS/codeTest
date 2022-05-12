package com.test;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class Solution14Test {

    @Test
    void solution() {
        Solution14 slt14 = new Solution14();
        assertEquals(slt14.solution(new int[]{1,3,4,5,8,2,1,4,5,9,5}, "right"),"LRLLLRLLRRL");
        assertEquals(slt14.solution(new int[]{7,0,8,2,8,3,1,5,7,6,2}, "left"),"LRLLRRLLLRR");
        assertEquals(slt14.solution(new int[]{1,2,3,4,5,6,7,8,9,0}, "right"),"LLRLLRLLRL");
    }

    @Test
    void test(){
        String[] a = {"a","b", "c"};
        System.out.println(Arrays.asList(a).contains("a"));
        System.out.println(Arrays.asList(a).contains("d"));
    }
}