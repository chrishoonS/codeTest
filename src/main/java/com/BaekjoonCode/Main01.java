package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Main01 {
//    [2557]
//    public static void main(String[] args){
//        System.out.println("Hello World!");
//    }

//    [1000]
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int a, b;
//        a = sc.nextInt();
//        b = sc.nextInt();
//        System.out.println(a + b);
//    }

//    [1001]
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int a, b;
//        a = sc.nextInt();
//        b = sc.nextInt();
//        System.out.println(a - b);
//    }

//    [10998]
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int a, b;
//        a = sc.nextInt();
//        b = sc.nextInt();
//        System.out.println(a * b);
//    }

//    [1008]
//    public class Main {
//        public static void main(String[] args) {
//            Scanner sc = new Scanner(System.in);
//            double a, b;
//            a = sc.nextInt();
//            b = sc.nextInt();
//            System.out.println(a / b);
//        }
//    }

//    [10869]
//    public class Main {
//        public static void main(String[] args) {
//            Scanner sc = new Scanner(System.in);
//            int a, b;
//            a = sc.nextInt();
//            b = sc.nextInt();
//            System.out.println(a + b);
//            System.out.println(a - b);
//            System.out.println(a * b);
//            System.out.println(a / b);
//            System.out.println(a % b);
//        }
//    }
//
//    [10926]
//    public class Main {
//        public static void main(String[] args) {
//            Scanner sc = new Scanner(System.in);
//            String s = sc.nextLine();
//            System.out.println(s.concat("??!"));
//        }
//    }
//
//    [18108]
//    public class Main {
//        public static void main(String[] args) {
//            Scanner sc = new Scanner(System.in);
//            int y;
//            y = sc.nextInt();
//            System.out.println(y - 543);
//        }
//    }

// [3003]
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        int king = 1;
//        int queen = 1;
//        int rook = 2;
//        int bishop = 2;
//        int knight = 2;
//        int pawn = 8;
//
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//        king = king - Integer.parseInt(st.nextToken());
//        queen = queen - Integer.parseInt(st.nextToken());
//        rook = rook - Integer.parseInt(st.nextToken());
//        bishop = bishop - Integer.parseInt(st.nextToken());
//        knight = knight - Integer.parseInt(st.nextToken());
//        pawn = pawn - Integer.parseInt(st.nextToken());
//
//        System.out.print(king + " ");
//        System.out.print(queen + " ");
//        System.out.print(rook + " ");
//        System.out.print(bishop + " ");
//        System.out.print(knight + " ");
//        System.out.print(pawn + " ");
//    }

//    [10430]
//    public class Main {
//        public static void main(String[] args) {
//            Scanner sc = new Scanner(System.in);
//            int A,B,C;
//            A = sc.nextInt();
//            B = sc.nextInt();
//            C = sc.nextInt();
//            System.out.println((A+B)%C);
//            System.out.println(((A%C) + (B%C))%C);
//            System.out.println((A * B)%C);
//            System.out.println(((A%C) * (B%C))%C);
//
//        }
//    }


//    [2588]
//        public static void main(String[] args) {
//            Scanner sc = new Scanner(System.in);
//            int a, b;
//            a = sc.nextInt();
//            b = sc.nextInt();
//            String s = String.valueOf(b);
//
//            for (int i = 0; i < s.length(); i++) {
//                System.out.println(a * Integer.parseInt(s.substring(s.length()-i-1, s.length()-i)));
//            }
//            System.out.println(a * b);
//        }


//    [10171]
//    public static void main(String args[]){
//        System.out.println("\\    /\\\n" +
//                " )  ( \')\n"+
//                "(  /  )\n"+
//                " \\(__)|\n");
//    }

//    [10172]
//    public static void main(String args[]){
//            System.out.println("|\\_/|\n" +
//                    "|q p|   /}\n" +
//                    "( 0 )\"\"\"\\\n" +
//                    "|\"^\"`    |\n" +
//                    "||_/=\\\\__|");
//    }

//    [25083]
//    public static void main(String[] args) {
//        System.out.println("         ,r'\"7\n" +
//                "r`-_   ,'  ,/\n" +
//                " \\. \". L_r'\n" +
//                "   `~\\/\n" +
//                "      |\n" +
//                "      |");
//
//    }
//    [11382]
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] s = br.readLine().split(" ");
        long A = Long.parseLong(s[0]);
        long B = Long.parseLong(s[1]);
        long C = Long.parseLong(s[2]);
        System.out.println(A+B+C);
    }
}