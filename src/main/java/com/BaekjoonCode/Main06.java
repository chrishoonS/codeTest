package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

//    [25083] 새싹
//    public static void main(String[] args) {
//        System.out.println("         ,r'\"7\n" +
//                "r`-_   ,'  ,/\n" +
//                " \\. \". L_r'\n" +
//                "   `~\\/\n" +
//                "      |\n" +
//                "      |");
//
//    }

// [2444] 별 찍기 - 7
public class Main06 {
    public static void main(String[] args) throws IOException {BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n-i; j++) {
                sb.append(" ");
            }
            for (int j = 1; j <= 2*i-1; j++) {
                sb.append("*");
            }
            sb.append("\n");
        }
        for (int i = n-1; i >= 1; i--) {
            for (int j = 1; j <= n-i; j++) {
                sb.append(" ");
            }
            for (int j = 1; j <= 2*i-1; j++) {
                sb.append("*");
            }
            sb.append("\n");
        }
        System.out.print(sb);
    }
}

//11654
//public class Main06 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        System.out.println((br.readLine()).charAt(0)-0);
//    }
//}


//1157
//public class Main06 {
//    public static void main(String[] args) throws IOException{
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        int[] arr = new int[26];
//        String s = br.readLine();
//
//        for (int i = 0; i < s.length(); i++) {
//            if ('a' <= s.charAt(i) && s.charAt(i) <= 'z') arr[s.charAt(i) - 97]++;
//            else arr[s.charAt(i) - 65]++;
//        }
//        int max = -1;
//        char ch = '?';
//        for (int i = 0; i < 26; i++) {
//            if (arr[i] != 0 && arr[i] > max) {
//                max = arr[i];
//                ch = (char) (i + 65);
//            }else if (arr[i] == max) ch = '?';
//        }
//        System.out.print(ch);
//    }
//}



// 2941
//public class Main06 {
//    public static void main(String[] args) throws IOException{
//        Scanner sc = new Scanner(System.in);
//        String s = sc.next();
//        String[] arr = new String[]{"c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="};
//        for (int i = 0; i < arr.length; i++) {
//            if (s.contains(arr[i])) {
//                s = s.replace(arr[i], "X");
//            }
//        }
//        System.out.println(s.length());
//    }
//}

//1316
//public class Main06 {
//    static Scanner sc = new Scanner(System.in);
//
//    public static void main(String[] args) {
//
//        int count = 0;
//        int N = sc.nextInt();
//
//        for (int i = 0; i < N; i++) {
//            if (check() == true) count++;
//        }
//        System.out.println(count);
//    }
//
//    public static boolean check() {
//        boolean[] check = new boolean[26];
//        int prev = 0;       //이전 문자열 계산을 위한 변수
//        String str = sc.next();
//
//        for(int i = 0; i < str.length(); i++) {
//            int now = str.charAt(i);	// 현재 i번째 문자열 저장
//            if (prev != now) {
//                // 해당 문자가 처음 나오는 경우 (false 인 경우)
//                if ( check[now - 'a'] == false ) {
//                    check[now - 'a'] = true;
//                    prev = now;
//                }
//                // 해당 문자가 이미 나온 적이 있는 경우 (그룹단어가 아니게 됨)
//                else return false;
//            }
//        }
//        return true;
//    }
//}

//15596
//public class Main06 {
//    long sum(int[] a){
//        long result = 0;
//        for (int i : a) {
//            result += i;
//        }
//        return result;
//    }
//}

//4673
//public class Main06 {
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

//import java.util.Scanner;
//
////1065
//public class Main06 {
//    public static void main(String[] args) {
//        Scanner in = new Scanner(System.in);
//
//        System.out.print(hansuFunc(in.nextInt()));
//        in.close();
//
//
//    }
//
//    public static int hansuFunc(int num) {
//        int hansuCnt = 0;
//
//        if (num < 100) return num;
//        else {
//            hansuCnt = 99;
//
//            for (int i = 100; i <= num; i++) {
//                int hun = i / 100;
//                int ten = (i / 10) % 10;
//                int one = i % 10;
//
//                if ((hun - ten) == (ten - one)) hansuCnt++;
//            }
//        }
//
//        return hansuCnt;
//    }
//
//}