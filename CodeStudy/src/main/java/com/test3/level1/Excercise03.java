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

public class Excercise03 {
    public int[] solution(int[] arr, int divisor) {
        int[] answer = Arrays.stream(arr).filter(factor -> factor % divisor == 0).toArray();
        if(answer.length == 0) answer = new int[] {-1};
        Arrays.sort(answer);
        return answer;
    }

    /** 스트림 참고 공부
     * https://hbase.tistory.com/171
     **/
    public static void main(String[] args) throws IOException {
        String[] arr = {"a", "b", "c"};
        //스트림생성 - 배열 = 배열을 순회하는 스트림 객체 생성
        Stream<String> str1 = Arrays.stream(arr);
        Stream<String> str2 = Arrays.stream(arr, 1, 3); //인덱스 1포함 3제외???

        //스트림생성 - 빌더 = 직접 값을 입력하여 스트림 객체 생성 및 문자열 데이터 처리
        Stream<String> str3 = Stream.<String>builder()
                .add("Apple")
                .add("Bannana")
                .add("Melon")
                .build();

        //스트림생성 - Generator = 데이터를 생성하는 람다식 이용하여 스트림 생성
        //generate() 메서드의 인자로 "Hello"를 무한대로 스트림을 생성하는 람다식
        //limit() 메서드로 문자열 5개만 찍도록 제한
        Stream<String> str4 = Stream.generate(() -> "Hello").limit(5);

        //스트림생성 - iterator = 수열 형태의 데이터 생성
        //100부터 10씩 증가하는 스트림 생성
        Stream<Integer> str5 = Stream.iterate(100, n -> n+10).limit(5);

        //스트림생성 - empty = stream 객체를 참조하는 변수가 null이라면 exception 발생 할 수 있음
        Stream<String> str6 = Stream.empty();

        //스트림생성 - 기본타입 = 오토박싱/언박싱 발생(오버헤드 발생시 성능저하 생길 수 있음), 오토박싱을 하지 않으려면 다음과 같은 스트림 사용
        IntStream intStr = IntStream.range(1, 10);
        LongStream longStr = LongStream.range(1, 10000);
        DoubleStream doubleStr = new Random().doubles(3);

        //스트림생성 - 문자열 스트림
        // 문자열을 구성하고 있는 문자들의 ASCII 코드 값 -> 스트림 형태로!
        IntStream stream1 = "Hello, World".chars();
        // 특정 구분자로 스플릿하여 스트림으로!
        Stream<String> stream2 = Pattern.compile(",").splitAsStream("Apple,Banana,Melon");

        //스트림 생성 - 파일 = 텍스트 파일을 읽어서 라인단위로 처리(생성시 IOException throws)
        //텍스트 파일을 읽어서 라인단위로 처리하는 스트림 객체, 이 때 UTF-8로 디코딩해서 읽어드림
        Stream<String> stream3 = Files.lines(Paths.get("test.txt"), Charset.forName("UTF-8"));

        //스트림생성 - 스트림 연결 = 두개의 스트림을 연결해 하나의 새로운 스트림 생성
        Stream<String> stream4 = Stream.of("Apple", "Banana", "Mellon");
        Stream<String> stream5 = Stream.of("Kim", "Lee", "Song");
        Stream<String> stream6 = Stream.concat(stream4, stream5);

        //filter() = 스트림에서 뽑아져 나오는 데이터에서 특정 데이터 골라냄
        //1~9까지 뽑아내는 스트림 생성 후, filter 메소드에 짝수 선별 람다식을 넘겨주면 짝수데이터만 뽑아주는 스트림 객체 생성
        Stream<Integer> stream7 = IntStream.range(1,10).boxed();
        stream7.filter(v -> (v%2)==0).forEach(System.out::println);

        //map() = 값을 변환해주는 람다식을 받아
        //1~9까지 뽑아내는 스트림 생성 후, filter 메소드로 짝수데이터만 뽑은후 10을 곱해 스트림 객체 생성
        Stream<Integer> stream8 = IntStream.range(1,10).boxed();
        stream8.filter(v -> (v%2)==0).map(v -> v*10).forEach(System.out::println);

    }
}