package com.javaExample.mapInitEx;

import java.util.HashMap;

public class MapIntializationEx {
    public static final HashMap<String, Object> MAP = new HashMap<String, Object>();
    {
        MAP.put("testInt", 123);
        MAP.put("testString", "testStr");
    }

    public static void main(String[] args) {
        System.out.println(MAP.get("testInt"));
        System.out.println(MAP.get("testString"));
    }

}
