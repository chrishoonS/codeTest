package com.javaExample.asyncEx;

public class asyncTest {
    /**
     * 자바의 Multi Thread 처리는 비동기식으로 처리되며, 처리 순서는 보장X(아래코드도 실행 할 때마다 실행 순서 변경)
     * 장점 : 요청에 따른 결과가 반환되는 시간 동안 다른 작업을 수행 가능
     * 단점 : 동기식보다 설계가 복잡하고 논증적
     * 출처 : https://webheck.tistory.com/entry/Java%EB%8F%99%EA%B8%B0%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0-%EB%B0%A9%EC%8B%9DAsynchronous-processing-model
     **/
    public static void main(String[] args) {

        Thread t1 = new Thread(()->{
            method1();
        });
        Thread t2 = new Thread(()->{
            method2();
        });
        Thread t3 = new Thread(()->{
            method3();
        });


        t1.start();
        t2.start();
        t3.start();
    }

    public static void method1() {
        System.out.println("method1");
    }
    public static void method2() {
        System.out.println("method2");
    }
    public static void method3() {
        System.out.println("method3");
    }
}

