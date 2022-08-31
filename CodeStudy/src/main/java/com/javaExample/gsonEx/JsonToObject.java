package com.javaExample.gsonEx;

import com.google.gson.Gson;
import com.javaExample.compEx.Student;

public class JsonToObject {
    public static void main(String[] args) {
        String jsonStr = "{\"name\":\"chris\",\"id\":1333,\"score\":78.0}";
        Gson gson = new Gson();
        //json문자열 -> Student 객체
        Student student = gson.fromJson(jsonStr, Student.class);
        System.out.println(student);
    }
}
