package com.javaExample.throwEx;

import java.io.IOException;

public class ExceptionStudy {
    public static void main(String[] args){
        //try{}안에서 예외가 발생하면 catch(){}에 있는 구문이 실행되게 된다. e.printStackTrace();는 예외상황을 console에 보여준다.
        try {
            //예외처리의 계층적인 구조를 보면 Exception Interface를 가져다 쓰기 때문에 new로 예외처리 오브젝트를 생성해 예외를 강제로 발생시켰다.
            //throw new IOException();
//            testExecption tEx = new testExecption();
//            tEx.read();

            //try~catch 구문은 예외를 처리한 후 이후의 코드를 실행한다는
//            System.out.println("Running main method...");
            TException te = new TException();
            try {
                te.read(); //예외처리를 하지않아 에러 발생
            } catch (IOException e) {
                throw new RuntimeException(e); // 에러 throw 1
            }
            System.out.println("Running main method...");

        }catch(Exception e) {
            e.printStackTrace();
        }finally {
            System.out.println("try/catch 끝나고 예외 처리 완료");
        }
    }
}

/** 결론
 * throws는 예외를 넘기고 try~catch는 예외를 처리
 * 또 throws는 예외 발생 이후의 코드는 실행하지 않고, try~catch는 예외 발생 이후의 코드를 실행
 * 함수는 특별한 경우를 빼고 throws로 사용자가 예외처리를 하게 만들어 놓았다. 사용자는 예외를 만나면 try~catch로 예외를 처리해줄 수 있게 만들면 된다.
 **/

class testExecption{
    public void read(){
        try {
            throw new IOException();
        }catch(IOException e) {
            e.printStackTrace();
        }
        System.out.println("Running read method...");
    }
}

class TException{
    public void read() throws IOException  {
        throw new IOException();  // 에러 throw 2
    }
}
