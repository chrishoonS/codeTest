package com.javaExample.fileEncodingEx;

import java.io.File;
import java.io.FileInputStream;
import java.util.Base64;

public class FileEncodingExample {
    public static void main(String[] args) {
        /**
         * 출처 : https://nowonbun.tistory.com/476
         **/
        // 해당 경로의 test.txt 파일을 읽어드린다.
        byte[] binary = getFileBinary("/Users/song/Desktop/test.txt");
        //이미지 파일 인코딩
//        byte[] binary = getFileBinary("/Users/song/Desktop/images.jpg");

        // base64의 라이브러리에서 encodeToString를 이용해서 byte[] 형식을 String 형식으로 변환
        String base64data = Base64.getEncoder().encodeToString(binary);
        System.out.println("Encoding ::::: " + base64data);

        // decoding
        byte[] decodeFile = Base64.getDecoder().decode(base64data);
        System.out.println("Decoding ::::: " + new String(decodeFile));
    }

    // 파일 읽어들이는 함수
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
