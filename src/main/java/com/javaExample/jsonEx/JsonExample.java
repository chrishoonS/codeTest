package com.javaExample.jsonEx;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class JsonExample {
    public static void main(String args[]) {
        List<Object> list = new ArrayList<Object>();

        list.add("Song Ji-hoon");
        list.add(33);
        list.add('프');
        list.add(10f);
        list.add(20L);
        list.add(30D);

        JSONArray array = new JSONArray();

        for(int i = 0; i < list.size(); i++)
            array.add(list.get(i));

        JSONObject obj = new JSONObject();

        try {
            obj.put("SongInfo :", array);
        } catch(Exception e) {
            e.printStackTrace();
        }

        System.out.println(obj.toString());
    }
}

