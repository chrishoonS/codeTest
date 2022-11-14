package com.javaExample.ThreadEx;

import javax.swing.*;

/**
 * Runnable Interface를 구현한 경우, 구현 클래스 인스턴스를 Thread 클래스의 생성자 매개 변수로 제공
 * Thread는 항상 순서대로 동작하는 것은 아님.(컴퓨터의 성능에 따라 결과가 달라지기도 함.)
 * run()이 끝나지 않으면 애플리케이션은 종료되지 않음.
 *
 * 쓰레드의 실행
 * 쓰레드는 생성 후 start()를 호출해야 실행
 * 한 쓰레드가 실행후 종료하면 다시 실행할 수 없다.
 * 다시 실행하려면 새로운 쓰레드를 생성후 start() 호출
 * start() : 메서드 호출시 새로운 쓰레드가 작업을 실행하는데 필요한 새로운 call stack 생성 후 run() 호출
 * run() 메서드 수행이 종료된 쓰레드는 call stack 비워지면서 생성된 call stack도 소멸
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
        System.out.println("------------THE END------------");

        ThreadExample2 t3 = new ThreadExample2();
        t3.start();
        String value = JOptionPane.showInputDialog("값을 입력하세요!!!!");
        System.out.println("너가 입력한 값은 " + value + " 입니다.");
        t3.interrupt(); //interrupted 상태를 true로 변경
        System.out.println("인터럽트 상태 : " + t3.isInterrupted());

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

/**
 * 사용자 입력후 interrupt()가 발생
 * count를 하다가 sleep()에 의해 멈춰있을 때 interrupt()가 발생하면서 InterruptedException 발생
 * InterruptedException 발생시 쓰레드의 interrupted 상태 false로 자동 초기화되기 때문에 카운트가 종료되지 않는다.
 * 사용자 입력 받을시, 카운트를 종료하기 위해 InterruptedException의 발생
 * catch 블록에 interrupt()를 추가로 넣어서 interrupted 상태를 다시 true로 바꿔줘야함.
 **/
class ThreadExample2 extends Thread{
    @Override
    public void run() {
        System.out.println("Start Thread Example2......");
        int i = 10;
        while(i > 0 && !isInterrupted()){
            System.out.println(i--);
            try {
                Thread.sleep(1000); //1초 시간 지연
            } catch (InterruptedException e) {
//                throw new RuntimeException(e);
            }
        }
        System.out.println("END Thread Example2......");
    }
}