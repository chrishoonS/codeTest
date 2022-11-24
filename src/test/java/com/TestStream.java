package com;

import org.junit.jupiter.api.Test;

import java.io.*;

import static org.assertj.core.api.Assertions.assertThat;
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
    // write(int a) 는 하나씩 쓰기 때문에 굉장히 비효율적
    // 위 코드에서 사용한 write(byte[] data) 나 write(byte[] data, int off, int let) 을 이용하면 효율적으로 1바이트 이상을 한 번에 전송
    // BufferedOutputStream 을 이용하면 버퍼링을 사용
    @Test
    void OuputStream_데이터를_바이트로_처리한다() throws IOException {
        //given
        byte[] bytes = {110, 101, 120, 116, 115, 116, 101, 112};
        final OutputStream outputStream = new ByteArrayOutputStream(bytes.length);
        outputStream.write(bytes);

        System.out.println(outputStream.getClass());
        System.out.println(outputStream);
        System.out.println();

        //when
        String actual = outputStream.toString();

        //then
        System.out.println(actual);
        assertEquals(actual, "nextstep");

        //byte[] -> String 변환
        String str = "JAVA테스트";
        byte[] b = str.getBytes();
        System.out.println("change:::::::::" + b);
        String tmp = new String(b);
        System.out.println("change:::::::::" + tmp);

        outputStream.close();


    }

    //InputStream은 다른 매체로부터 바이트로 데이터를 읽을 때 사용
    // 데이터를 읽을 때 read() 사용
    // read() 메서드는 매체로부터 단일 바이트를 읽고, 0부터 255 사이의 값을 int 타입으로 반환
    // Stream 끝에 도달하면 -1 을 반환
    @Test
    void InputStream은_데이터를_바이트로_읽는다() throws IOException {
        //given
        byte[] bytes = {-16, -97, -92, -87};
        final InputStream inputStream = new ByteArrayInputStream(bytes);
        //when
        String actual = new String(String.valueOf(inputStream.read()));//readAllByte 갑자기 에러!?!?

        //then
        System.out.println(inputStream.getClass());
        System.out.println(inputStream);
        System.out.println();
        System.out.println(actual);
        assertThat(actual).isEqualTo("🤩");
        assertThat(inputStream.read()).isEqualTo(-1);

        inputStream.close();
    }

}
