package com.javaExample.encodeEx;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

/**
 * URL 규칙에 맞는 문자를 사용 및 쿠키와 같이 한글을 표현하지 못하는 경우
 * ASCII 값으로 인코딩 해주어야함!!!!
 * 이 때 사용하는 것이 URLEncoder, URLDecoder!!
 **/
public class URLDecodeEx {
    public static void main(String[] args) {
        String url = null;
        try{
            url = URLDecoder.decode("Encoding+%ED%85%8C%EC%8A%A4%ED%8A%B8+%EC%A4%91%21%21%21%21%21%21","UTF-8");
            url = URLDecoder.decode("%ED%95%9C%EA%B8%80+%EC%9D%B8%EC%BD%94%EB%94%A9+%ED%85%8C%EC%8A%A4%ED%8A%B8+%EC%A4%91%21%21%21%21%21%21","UTF-8");
        }catch (UnsupportedEncodingException e){
            e.printStackTrace();
        }
        System.out.println(url);
        //첫번째 디코딩 : Encoding 테스트 중!!!!!!
        //두번째 디코딩 : 한글 인코딩 테스트 중!!!!!!
    }
}
