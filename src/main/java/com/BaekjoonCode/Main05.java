package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// [27866] 문자와 문자열
//public class Main05 {
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//
//        char[] chr = st.nextToken().toCharArray();
//
//        st = new StringTokenizer(br.readLine(), " ");
//        int i = Integer.parseInt(st.nextToken());
//
//        System.out.println(chr[i]);
//    }
//}

// [2743] 단어길이 재기
//public class Main05 {
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//
//        String str = st.nextToken();
//        System.out.println(str.length());
//    }
//}

// [9086] 문자열
//public class Main05 {
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringBuilder sb = new StringBuilder();
//
//        int T = Integer.parseInt(br.readLine());
//        for(int i=0; i<T; i++) {
//            String str = br.readLine();
//            sb.append(str.charAt(0)).append(str.charAt(str.length()-1)).append("\n");
//        }
//        System.out.println(sb.toString());
//    }
//}

//11654
//public class Main05 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        System.out.println((br.readLine()).charAt(0)-0);
//    }
//}


//11720
//public class Main05 {
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
//public class Main05 {
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
//public class Main05 {
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


// 1152
//public class Main05 {
//    public static void main(String[] args) throws IOException{
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        String s = br.readLine();
//        String[] arr = s.trim().split(" ");
//        int cnt = 0;
//        for (int i = 0; i < arr.length; i++) {
//            if (arr[i].isEmpty() || arr[i].isBlank()) continue;
//            else cnt++;
//        }
//        System.out.println(cnt);
//    }
//}

// 1152
//public class Main05 {
//    public static void main(String[] args) throws IOException{
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        String s = br.readLine();
//        String[] arr = s.trim().split(" ");
//        int cnt = 0;
//        for (int i = 0; i < arr.length; i++) {
//            if (arr[i].isEmpty() || arr[i].isBlank()) continue;
//            else cnt++;
//        }
//        System.out.println(cnt);
//    }
//}

// 2908
//public class Main05 {
//    public static void main(String[] args) throws IOException{
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        StringTokenizer st = new StringTokenizer(br.readLine()," ");
//
//        int a = Integer.parseInt(new StringBuilder(st.nextToken()).reverse().toString());
//        int b = Integer.parseInt(new StringBuilder(st.nextToken()).reverse().toString());
//
//        System.out.print(a > b ? a:b);
//    }
//}

// 5622
//public class Main05 {
//    public static void main(String[] args) throws IOException{
//        //숫자 1을 걸려면 총 2초가
//        //WA -> 눌러야할 숫자 9,2 -> 총 13초
//        // 2 ABC / 3 DEF / 4 GHI / 5 JKL / 6 MNO / 7 PQRS / 8 TUV / 9 WXYZ
//        //ASCII
//        // 656667 / 686970 / 717273 / 747576 / 777879/ 80818283 / 848586 / 87888990
//        Scanner sc = new Scanner(System.in);
//        String s = sc.next();
//        int sum = 0;
//        for (int i = 0; i < s.length(); i++) {
//            if(s.charAt(i)-65 <= 2) sum += 3;
//            else if (s.charAt(i)-65 > 2 && s.charAt(i)-65 <= 5) sum += 4;
//            else if (s.charAt(i)-65 > 5 && s.charAt(i)-65 <= 8) sum += 5;
//            else if (s.charAt(i)-65 > 8 && s.charAt(i)-65 <= 11) sum += 6;
//            else if (s.charAt(i)-65 > 11 && s.charAt(i)-65 <= 14) sum += 7;
//            else if (s.charAt(i)-65 > 14 && s.charAt(i)-65 <= 18) sum += 8;
//            else if (s.charAt(i)-65 > 18 && s.charAt(i)-65 <= 21) sum += 9;
//            else if (s.charAt(i)-65 > 21 && s.charAt(i)-65 <= 25) sum += 10;
//        }
//        System.out.println(sum);
//    }
//}


//[11718] 그대로 출력하기
public class Main05 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        while(true){
            String str = br.readLine();

            if (str == null || str.isEmpty())
                break;
            sb.append(str).append("\n");
        }
        br.close();
        System.out.println(sb);

    }
}