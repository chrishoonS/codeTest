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

// [2444] 별 찍기 - 7
//public class Main06 {
//    public static void main(String[] args) throws IOException {BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        int n = Integer.parseInt(br.readLine());
//        StringBuilder sb = new StringBuilder();
//
//        for (int i = 1; i <= n; i++) {
//            for (int j = 1; j <= n-i; j++) {
//                sb.append(" ");
//            }
//            for (int j = 1; j <= 2*i-1; j++) {
//                sb.append("*");
//            }
//            sb.append("\n");
//        }
//        for (int i = n-1; i >= 1; i--) {
//            for (int j = 1; j <= n-i; j++) {
//                sb.append(" ");
//            }
//            for (int j = 1; j <= 2*i-1; j++) {
//                sb.append("*");
//            }
//            sb.append("\n");
//        }
//        System.out.print(sb);
//    }
//}

//10988 팰린드롬인지 확인하기
//public class Main06 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        char[] input = br.readLine().toCharArray();
//        int cnt = 0;
//
//        for (int i = 0; i < input.length; i++) {
//            if(input[i] != input[input.length-1-i])
//                break;
//            else cnt++;
//        }
//
//        if (cnt == input.length) {
//            System.out.println(1);
//        } else {
//            System.out.println(0);
//        }
//        br.close();
//
//        // 좀더 빠른 다른 사람 소스
////        for( int i = 0; i < str.length/2; i++) {
////            if( !(str[i] == str[str.length-1-i])) {
////                System.out.println(0);
////                return;
////            }
////        }
////
////        System.out.println(1);
//
//    }
//}


// 1157 단어공부
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



// 2941 크로아티아 알파벳
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

//1316 그룹단어 체크
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


// 25206 너의 평점은
// A+	4.5
// A0	4.0
// B+	3.5
// B0	3.0
// C+	2.5
// C0	2.0
// D+	1.5
// D0	1.0
// F	0.0
// P/F 과목의 경우 등급이 P또는 F로 표시되는데, 등급이 P인 과목은 계산에서 제외
public class Main06 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String str[] = new String[20];
        double totalSum = 0; // (학점 * 과목평점)의 합
        double scoreSum = 0; // 학점의 총합
        String gradeArr[] = {"A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0", "F", "P"};
        double scoreArr[] = {4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.0, 0.0};

        // 전공평점 = (학점 * 과목평점)의 합 / 학점의 총합
        for (int i = 0; i < str.length; i++) {
            str[i] = br.readLine();
            StringTokenizer st = new StringTokenizer(str[i], " ");
            String subject = st.nextToken();
            double score = Double.parseDouble(st.nextToken());
            String grade = st.nextToken();

            for (int j = 0; j < gradeArr.length; j++) {
                if (grade.equals(gradeArr[j])) {
                    totalSum += score * scoreArr[j];
                    if (j != 9) { // j=9, P 학점인 경우 패스
                        scoreSum += score;
                    }
                    break;
                }
            }
        }

        // 전공평점 = (학점 * 과목평점)의 합 / 학점의 총합
        double average = totalSum / scoreSum;
        System.out.printf("%.6f\n", average);

        br.close();
    }

}

// 25206 다른 풀이
//public class Main {
//
//    public static void main(String[] args) throws Exception {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        String[] arr1 = {"A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0", "F"};
//        double[] arr2 = {4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.0};
//
//        double total = 0;
//        double totalgrade=0;
//
//        for(int k=0; k<20; k++) {
//            String[] str = br.readLine().split(" ");
//            if(!str[2].equals("P")) {
//                int idx = Arrays.binarySearch(arr1, str[2]);
//                totalgrade += arr2[idx]*Double.parseDouble(str[1]);
//                total += Double.parseDouble(str[1]);
//
//            }
//        }
//
//        System.out.println(totalgrade/total);
//
//    }
//
//}



// 해당 챕터 아닌애들 일단 킵
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