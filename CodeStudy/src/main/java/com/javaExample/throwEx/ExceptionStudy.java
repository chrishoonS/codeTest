package com.javaExample.throwEx;

import java.io.IOException;

public class ExceptionStudy {
    public static void main(String[] args){
        try {
            throw new IOException();
        }catch(IOException e) {
            e.printStackTrace();
        }finally {
            System.out.println("try/catch 끝나고 예외 처리 완료");
            System.out.println("try/catch 끝나고 예외 처리 완료");
        }
    }
}
