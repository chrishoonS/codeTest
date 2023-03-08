package com.BaekjoonCode;

import java.util.Scanner;

//1330
public class Main02 {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int a, b;
//        a = sc.nextInt();
//        b = sc.nextInt();
//
//        if(a > b) System.out.println(">");
//        else if(a < b) System.out.println("<");
//        else System.out.println("==");
//    }
//}

//9498
//public class Main02 {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int a;
//        a = sc.nextInt();
//        if (a >= 90 && a <= 100) System.out.println("A");
//        else if(a >= 80 && a < 90) System.out.println("B");
//        else if(a >= 70 && a < 80) System.out.println("C");
//        else if(a >= 60 && a < 70) System.out.println("D");
//        else System.out.println("F");
//    }
//}

//2753
//public class Main02 {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int a;
//        a = sc.nextInt();
//        if ((a % 4 == 0) && ((a % 100) != 0 || (a % 400 == 0))) System.out.println(1);
//        else System.out.println(0);
//    }
//}

//14681
//public class Main02 {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int x, y;
//        x = sc.nextInt();
//        y = sc.nextInt();
//
//        if(x>0 && y>0)
//            System.out.println(1);
//        else if(x<0 && y>0)
//            System.out.println(2);
//        else if(x>0 && y<0)
//            System.out.println(4);
//        else
//            System.out.println(3);
//    }

//2884
//public class Main02 {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int hh, mm;
//        hh = sc.nextInt();
//        mm = sc.nextInt();
//        sc.close();
//        if (mm < 45){
//            hh--;
//            mm = 60 - (45-mm);
//            if (hh < 0) hh = 23;
//            System.out.print(hh+" "+mm);
//        } else System.out.print(hh+" "+(mm-45));
//
//    }
//}

//2525
//import java.util.Scanner;
//public class Main02 {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int h = sc.nextInt();
//        int m = sc.nextInt();
//        int n = sc.nextInt();
//
//        int a = h*60 + m + n;
//        h = a / 60;
//        m = a % 60;
//
//        if (h >= 24) {
//            h= h-24;
//        }
//        System.out.println(h + " "+ m);
//    }
//}

//2480
//public class Main02 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        sc.close();

        if (a==b && b==c && a==c){
            System.out.println(10000 + a*1000);
        }else if(a==b && a!=c){
            System.out.println(1000 + a*100);
        }else if(b==c && b!=a){
            System.out.println(1000 + b*100);
        }else if(c==a && c!=b){
            System.out.println(1000 + c*100);
        }else{
            System.out.println(Math.max(a,Math.max(b,c))*100);
        }
    }
}