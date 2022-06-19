package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

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

//2869
//public class Main{
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//
//        int A = Integer.parseInt(st.nextToken());
//        int B = Integer.parseInt(st.nextToken());
//        int V = Integer.parseInt(st.nextToken());
//        int climb = 0;
//        int day = 0;
//
//        while(V > climb){
//            day++;
//            climb += A;
//            if (climb == V)
//                break;
//            else{
//                climb -= B;
//            }
//        }
//        System.out.println(day);
//    }
//}

//2869
public class Main07 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int A = Integer.parseInt(st.nextToken());
        int B = Integer.parseInt(st.nextToken());
        int V = Integer.parseInt(st.nextToken());
        int day = (V-B) / (A-B);
        if ((V-B) % (A-B) != 0) day++;

        System.out.println(day);
    }
}

//10250 <- 여기서부터 풀기

//2775
