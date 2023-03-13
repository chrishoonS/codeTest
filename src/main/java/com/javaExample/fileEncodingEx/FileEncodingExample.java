package com.javaExample.fileEncodingEx;

import java.io.File;
import java.io.FileInputStream;
import java.util.Base64;

public class FileEncodingExample {
    public static void main(String[] args) {

        // d드라이브의 work라는 폴더의 test.txt 파일을 읽어드린다.
        byte[] binary = getFileBinary("/Users/song/Desktop/images.jpg");

        // base64의 라이브러리에서 encodeToString를 이용해서 byte[] 형식을 String 형식으로 변환합니다.
        String base64data = Base64.getEncoder().encodeToString(binary);
        // 콘솔에 결과 출력
        System.out.println(base64data);
    }

    // 파일 읽어드리는 함수
    private static byte[] getFileBinary(String filepath) {
        File file = new File(filepath);
        byte[] data = new byte[(int) file.length()];
        try (FileInputStream stream = new FileInputStream(file)) {
            stream.read(data, 0, data.length);
        } catch (Throwable e) {
            e.printStackTrace();
        }
        return data;
    }
}
