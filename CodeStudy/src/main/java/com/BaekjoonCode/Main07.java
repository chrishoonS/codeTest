package com.BaekjoonCode;

import java.util.Scanner;

//1712
public class Main07 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int fixAmt = sc.nextInt();   //고정비용
        int varAmt = sc.nextInt();   //가변비용
        int price = sc.nextInt();   //책정가

        if (price <= varAmt) System.out.println(-1);
        else System.out.println((fixAmt / (price-varAmt)) + 1);
    }
}