package com.javaExample.jsonEx;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class JsonExample {
    public static void main(String args[]) {
        List<String> list = new ArrayList<String>();
        list.add("Raja");
        list.add("Jai");
        list.add("Adithya");
        JSONArray array = new JSONArray();
        for(int i = 0; i < list.size(); i++) {
            array.add(list.get(i));
        }
        JSONObject obj = new JSONObject();
        try {
            obj.put("Employee Names:", array);
        } catch(Exception e) {
            e.printStackTrace();
        }
        System.out.println(obj.toString());
    }
}

