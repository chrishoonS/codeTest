package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

//11654
//public class Main06 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        System.out.println((br.readLine()).charAt(0)-0);
//    }
//}

//11720
//public class Main06 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int a = Integer.parseInt(br.readLine());
//        String b = br.readLine();
//        int sum = 0;
//        for (int i = 0; i < a; i++) {
//            sum += b.charAt(i) - '0';
//        }
//        br.close();
//        System.out.println(sum);
//    }
//}

//10809
//public class Main06 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        String s = br.readLine();
//
//        int[] arr = new int[26];
//
//        for(int i = 0; i < arr.length; i++) {
//            arr[i] = -1;
//        }
//
//        for(int i = 0; i < s.length(); i++) {
//            char ch = s.charAt(i);
//
//            if(arr[ch - 'a'] == -1) {
//                arr[ch - 'a'] = i;
//            }
//        }
//
//        for(int val : arr) {
//            System.out.print(val + " ");
//        }
//
//    }
//}

//2675
//public class Main06 {
//    public static void main(String[] args) throws IOException {
//        Scanner sc = new Scanner(System.in);
//        int n = sc.nextInt();
//        int[] noArr = new int[n];
//        String[] sArr = new String[n];
//        for (int i = 0; i < n; i++) {
//            int no = sc.nextInt();
//            String s = sc.next();
//            noArr[i] = no;
//            sArr[i] = s;
//        }
//        for (int i = 0; i < n; i++) {
//            char[] ch = sArr[i].toCharArray(); //A,B,C
//            for (int j = 0; j < ch.length; j++) {//3,5
//                for (int k = 0; k < noArr[i]; k++) { //3
//                    System.out.print(ch[j]);
//                }
//            }
//            System.out.println();
//        }
//    }
//}

//1157
public class Main06 {
    public static void main(String[] args) throws IOException{

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] arr = new int[26]; // 영문자의 개수는 26개임
        String s = br.readLine();

        for (int i = 0; i < s.length(); i++) {
            if ('a' <= s.charAt(i) && s.charAt(i) <= 'z') arr[s.charAt(i) - 97]++;
            else arr[s.charAt(i) - 65]++;
        }
        int max = -1;
        char ch = '?';
        for (int i = 0; i < 26; i++) {
            if (arr[i] != 0 && arr[i] > max) {
                max = arr[i];
                ch = (char) (i + 65);
            }else if (arr[i] == max) ch = '?';
        }
        System.out.print(ch);
    }

}