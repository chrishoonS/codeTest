package com.test3.level1;

import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Random;
import java.util.regex.Pattern;
import java.util.stream.DoubleStream;
import java.util.stream.IntStream;
import java.util.stream.LongStream;
import java.util.stream.Stream;

public class Excercise05 {
    public long solution(int a, int b) {
        long answer = 0;

        int minNo = Math.min(a,b);
        int maxNo = Math.max(a,b);

        if (a == b) answer = a;
        else{
            for (int i = minNo; i <= maxNo; i++) {
                answer += i;
            }
        }
        return answer;
    }
}