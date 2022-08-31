package com.javaExample.gsonEx;

import com.google.gson.Gson;
import com.javaExample.compEx.Student;

public class ObjectToJson {
    public static void main(String[] args) {
        Student student = new Student("anna", 1419, 95);
        Gson gson = new Gson();
        //Student 객체 -> Json 문자열
        String studentJson = gson.toJson(student);
        System.out.println(studentJson);
    }
}
