package com;

import org.junit.jupiter.api.Test;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import static org.junit.jupiter.api.Assertions.assertEquals;


/**
 * Stream : 어느 한쪽에서 다른 쪽으로 데이터를 전달하기 위해서는 두 대상을 연결하고 데이터를 전송할 수 있는 통로
 * 스트림은 단방향통신만 가능
 * 입력과 출력을 위한 스트림이 각각 존재
 * 입력 스트림이 InputStream, 출력 스트림이 OutputStream이다. 스트림은 FIFO 다.
 * https://bepoz-study-diary.tistory.com/390
 **/
public class TestStream {
    //OutputStream은 다른 매체에 바이트로 데이터를 쓸 때 사용
    // 데이터를 쓰기위해 write(int a) 메서드를 이용
    @Test
    void OuputStream_데이터를_바이트로_처리한다() throws IOException {
        byte[] bytes = {110, 101, 120, 116, 115, 116, 101, 112};
        final OutputStream outputStream = new ByteArrayOutputStream(bytes.length);
        outputStream.write(bytes);
        System.out.println(outputStream.getClass());
        System.out.println(outputStream);
        System.out.println();
        String actual = outputStream.toString();
        System.out.println(actual);
        assertEquals(actual, "nextstep");
        outputStream.close();
    }

    //InputStream 공부할것!!!!!!!!!!
}
