package com.BaekjoonCode;

//15596
//public class Main05 {
//    long sum(int[] a){
//        long result = 0;
//        for (int i : a) {
//            result += i;
//        }
//        return result;
//    }
//}

//4673
//public class Main05 {
//    public static void main(String[] args) {
//
//        boolean[] check = new boolean[10001];
//
//        for (int i = 1; i < 10001; i++){
//            int n = checkNum(i);
//
//            if(n < 10001) check[n] = true;
//        }
//
//        StringBuilder sb = new StringBuilder();
//
//        for (int i = 1; i < 10001; i++) {
//            if (!check[i]) sb.append(i).append('\n');
//        }
//        System.out.println(sb);
//    }
//
//    public static int checkNum(int number){
//        int sum = number;
//
//        while(number != 0){
//            sum = sum + (number % 10);
//            number = number / 10;
//        }
//        return sum;
//    }
//}

import java.util.Scanner;

//1065
public class Main05 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.print(hansuFunc(in.nextInt()));
        in.close();


    }

    public static int hansuFunc(int num) {
        int hansuCnt = 0;

        if (num < 100) return num;
        else {
            hansuCnt = 99;

            for (int i = 100; i <= num; i++) {
                int hun = i / 100;
                int ten = (i / 10) % 10;
                int one = i % 10;

                if ((hun - ten) == (ten - one)) hansuCnt++;
            }
        }

        return hansuCnt;
    }

}