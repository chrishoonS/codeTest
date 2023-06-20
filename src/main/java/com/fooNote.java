package com;

import java.util.Random;

public class fooNote {
    private static final int MAX_RETRIES = 5;

    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i <= MAX_RETRIES; i++) {
            try {
                // 동일한 확률로 0 또는 1 생성
                int zeroOrOne = new Random().nextInt(2);

                System.out.println("Random number is.. " + zeroOrOne);

                // 50% java.lang.ArithmeticException 발생 확률: / 0
                int rand = 1 / zeroOrOne;

                // 성공 시 재시도하지 않음
                break;
            } catch (Exception ex) {
                // 예외 처리
                System.out.println("예외 발생 : " + ex.getMessage());    // 예외를 기록

                // 재시도하기 전에 1초 동안 휴면(선택 사항)
                Thread.sleep(1000);

                // 마지막 재시도가 실패하면 예외를 던진다.
                if (i == MAX_RETRIES) {
                    throw ex;
                }
            }
        }
    }

}
