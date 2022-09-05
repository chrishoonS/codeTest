package com.javaExample.gsonEx;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

public class GsonExample {
    public static void main(String[] args) {
        /**
         * Gson : 구글 오픈소스로 Java -> Json 파싱, 생성
         * Java Object -> Json 문자열로 반환
         * Json 문자열 -> Java Object로 반환
         * 참고 : https://hianna.tistory.com/629
         **/
        //Gson 객체 생성방법
        Gson gson1 = new Gson();
        Gson gson2 = new GsonBuilder().create();
        //가독성이 더 좋게 생성
        Gson gson3 = new GsonBuilder().setPrettyPrinting().serializeNulls().create();
        //값이 null인 json property(null 제외)
        Gson gson4 = new Gson();
        //값이 null인 json property(null 포함)
        Gson gson5 = new GsonBuilder().serializeNulls().create();

        //Json key, value 추가
        JsonObject jsonObject = new JsonObject();
        jsonObject.addProperty("name","GSON");
        jsonObject.addProperty("id", 1);

        JsonObject jsonObject1 = new JsonObject();
        jsonObject1.addProperty("name", "Song");
        jsonObject1.addProperty("id", (Number) null);

        //JsonObject를 json 문자열로 변환
        String jsonStr1 = gson1.toJson(jsonObject);
        String jsonStr2 = gson2.toJson(jsonObject);
        String jsonStr3 = gson3.toJson(jsonObject1);
        String jsonStr4 = gson4.toJson(jsonObject1);
        String jsonStr5 = gson5.toJson(jsonObject1);

        System.out.println(jsonStr1);
        System.out.println(jsonStr2);
        System.out.println(jsonStr3);
        System.out.println(jsonStr4);
        System.out.println(jsonStr5);
    }
}
