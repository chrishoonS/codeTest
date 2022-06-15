package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

//1712
//public class Main07 {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int fixAmt = sc.nextInt();   //고정비용
//        int varAmt = sc.nextInt();   //가변비용
//        int price = sc.nextInt();   //책정가
//
//        if (price <= varAmt) System.out.println(-1);
//        else System.out.println((fixAmt / (price-varAmt)) + 1);
//    }
//}

//2292
//public class Main07 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        /**
//         * N = 1        1
//         * N = 2~7      6
//         * N = 8~19     12
//         * N = 20~37    18
//         **/
//        int N = Integer.parseInt(br.readLine());
//        int range = 1;
//        int cnt = 1;
//        if(N == 1) System.out.println(cnt);
//        else{
//            while(N > range){
//                range = range + (6*cnt);
//                cnt++;
//            }
//            System.out.println(cnt);
//        }
//    }
//}

//
public class Main07 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        /**
         * N = 1        1
         * N = 2~7      6
         * N = 8~19     12
         * N = 20~37    18
         **/
        int N = Integer.parseInt(br.readLine());
        int range = 1;
        int cnt = 1;
        if(N == 1) System.out.println(cnt);
        else{
            while(N > range){
                range = range + (6*cnt);
                cnt++;
            }
            System.out.println(cnt);
        }
    }
}