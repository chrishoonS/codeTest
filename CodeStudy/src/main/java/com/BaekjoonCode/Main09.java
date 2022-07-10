package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

//10872
//public class Main09 {
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        int N = Integer.parseInt(br.readLine());
//        int result = 0;
//        result = factorial(N);
//        System.out.println(result);
//    }
//
//    private static int factorial(int n) {
//        if(n <= 1) return 1;
//        return n * factorial(n-1);
//    }
//}

//
public class Main09 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int result = 0;
        result = factorial(N);
        System.out.println(result);
    }

    private static int factorial(int n) {
        if(n <= 1) return 1;
        return n * factorial(n-1);
    }
}