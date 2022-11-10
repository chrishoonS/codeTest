package com.javaExample.ThreadEx;

/**
 * Runnable Interface를 구현한 경우, 구현 클래스 인스턴스를 Thread 클래스의 생성자 매개 변수로 제공
 * Thread는 항상 순서대로 동작하는 것은 아님.(컴퓨터의 성능에 따라 결과가 달라지기도 함.)
 * run()이 끝나지 않으면 애플리케이션은 종료되지 않음.
 * 출처 : https://codingwell.tistory.com/76
 **/
public class ThreadTest {
    public static void main(String[] args) {
        Runnable r = new RunnableExample();
        Thread t1 = new Thread(r); //생성자 Thread

        ThreadExample t2 = new ThreadExample();

        t1.start();
        t2.start();

        //지정하지 않으면 "Thread-번호" 형식으로 이름 정해짐(0부터 시작하여 1씩 증가)
        System.out.println(Thread.currentThread().getName());
        System.out.println("--THE END--");
    }
}

class RunnableExample implements Runnable{
    @Override
    public void run() {
        //Thread 이름은 생성자나 메서드를 통해 지정/변경 가능
        Thread.currentThread().setName("song-Thread");
        System.out.println(Thread.currentThread().getName());
        System.out.println("Executing Runnable Example......");
    }
}

class ThreadExample extends Thread{
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName());
        System.out.println("Executing Thread Example......");
    }
}
