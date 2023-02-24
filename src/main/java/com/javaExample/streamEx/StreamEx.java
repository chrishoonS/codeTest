package com.javaExample.streamEx;

import java.util.Arrays;
import java.util.stream.Stream;

public class StreamEx {
    /**
     * https://velog.io/@gmtmoney2357/%EC%9E%90%EB%B0%94-%EC%8A%A4%ED%8A%B8%EB%A6%BCStream
     **/
    public static void main(String[] args) {
        // Collection의 경우 .stream()으로 스트림 변환
        Stream<Integer> stream = Arrays.asList(1, 2, 3, 4, 5).stream();

        // 객체 배열로부터 스트림 생성
        Stream.of("a", "b", "c");
        Stream.of(new String[]{"a", "b", "c"});
        Arrays.stream(new String[]{"a", "b", "c"});
        Arrays.stream(new String[]{"a", "b", "c"}, 1, 2);

        // 람다식 iterate(), generate()
        //Stream.iterate(T seed, UnaryOperator f); 이전 결과에 종속적
        Stream.iterate(0, n -> n+2); //0, 2, 4, ... 무한 스트림

        //generate는 초기값 지정x, 이전 결과와 무관하다.
        Stream.generate(Math::random);
        Stream.generate(()->1);



    }
}
