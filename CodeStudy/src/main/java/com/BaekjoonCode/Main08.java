package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

//10757
//public class Main08 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        int N = Integer.parseInt(br.readLine());
//
//        int cnt = 0;
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//
//        for (int i = 0; i < N; i++) {
//            int a = Integer.parseInt(st.nextToken());
//            if(a == 1) continue;
//            else{
//                if(chkSosu(a) == true) cnt++;
//            }
//        }
//        System.out.println(cnt);
//    }
//
//    private static boolean chkSosu(int a){
//        for (int i = 2; i < a; i++) {
//            if(a%i == 0) return false;
//        }
//        return true;
//    }
//}

//2581
//public class Main08 {
//    public static boolean prime[];
//
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int M = Integer.parseInt(br.readLine());
//        int N = Integer.parseInt(br.readLine());
//
//        prime = new boolean[N + 1];	// 배열 생성
//        get_prime();
//
//        // 소수 합 및 최솟값
//        int sum = 0;
//        int min = Integer.MAX_VALUE;
//        for(int i = M; i <= N; i++) {
//            if(prime[i] == false) {	// false = 소수
//                sum += i;
//                if(min == Integer.MAX_VALUE) {	// 첫 소수가 최솟값임
//                    min = i;
//                }
//            }
//        }
//        if(sum == 0) {	// 소수가 없다면
//            System.out.println(-1);
//        }else {
//            System.out.println(sum);
//            System.out.println(min);
//        }
//    }
//
//    public static void get_prime() {
//        prime[0] = true;
//        prime[1] = true;
//
//        for(int i = 2; i <= Math.sqrt(prime.length); i++) {
//            if(prime[i]) continue;	// 이미 체크된 배열일 경우 skip
//            for(int j = i * i; j < prime.length; j += i) {
//                prime[j] = true;
//            }
//        }
//    }
//}

//11653
public class Main08 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());

        for (int i = 2; i <= Math.sqrt(N); i++) {
            while (N % i == 0) {
                sb.append(i).append('\n');
                N /= i;
            }
        }
        if (N != 1) sb.append(N);
        System.out.print(sb);
    }
}