package com.javaExample.equalFnEx;

public class EqualFunctionEx {
    public static void main(String[] args) throws Exception{

        String str1 = "APPLE";
        String str2 = "apple";

        System.out.println("====== equalsIgnoreCase start ======");
        System.out.println("str1 : " + str1);
        System.out.println("str2 : " + str2);

        if(str1.equalsIgnoreCase(str2))
            System.out.println("str1, str2 는 같다");
        else
            System.out.println("str1, str2 는 다르다");


        System.out.println("====== equals start ======");
        System.out.println("str1 : " + str1);
        System.out.println("str2 : " + str2);

        if(str1.equals(str2))
            System.out.println("str1, str2 는 같다");
        else
            System.out.println("str1, str2 는 다르다");

    }

}
