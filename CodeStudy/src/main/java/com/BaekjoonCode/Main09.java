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

//10870
//public class Main09 {
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        int N = Integer.parseInt(br.readLine());
//
//        System.out.println(fibonacci(N));//5
//
//    }
//
//    // 피보나치 함수
//    static int fibonacci(int N) {
//        if (N == 0)	return 0;
//        if (N == 1)	return 1;
//        return fibonacci(N - 1) + fibonacci(N - 2);
//    }
//}

//17478
public class Main09 {
    static int n;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        n = Integer.parseInt(br.readLine());

        System.out.println("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");

        recur(0, "");

    }

    public static void recur(int depth, String under) {
        if (depth == n) {
            System.out.println(under + "\"재귀함수가 뭔가요?\"");
            System.out.println(under + "\"재귀함수는 자기 자신을 호출하는 함수라네\"");
            System.out.println(under + "라고 답변하였지.");
            return;

        }

        System.out.println(under + "\"재귀함수가 뭔가요?\"");
        System.out.println(under + "\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.");
        System.out.println(under + "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.");
        System.out.println(under + "그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\"");


        recur(depth + 1, under + "____");
        System.out.println(under + "라고 답변하였지.");
    }
}