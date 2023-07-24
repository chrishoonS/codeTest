package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// 2745 진법변환
public class Main08 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        String N = st.nextToken();
        int B = Integer.parseInt(st.nextToken());
        int tmp = 1;
        int result = 0;

        for (int i = N.length()-1; i >= 0; i--) {
            char c = N.charAt(i);

            if('A'<= c && c <= 'Z')
                result += (c-'A'+10) * tmp;
            else
                result += (c-'0') * tmp;

            tmp *= B;
        }

        System.out.println(result);
    }
}


// 다른풀이
//public class Main {
//
//    public static void main(String[] args) {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        /*
//         * String[] input : 수와 진법 정보 입력
//         *
//         * 문제 풀이
//         * 	- Integer.parseInf([String n진법수], [int n진법]) : 진법과 해당 진법의 수를 입력하면 10진수로 변환시켜준다.
//         */
//        try {
//            String[] input = br.readLine().split(" ");
//
//            System.out.println(Integer.parseInt(input[0], Integer.parseInt(input[1])));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }
//}














//2292
//public class Main08 {
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

//  1193 분수찾기
//public class Main08 {
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int x = Integer.parseInt(br.readLine());
//        int crossCnt = 1, prevCntSum = 0;
//
//        while (true) {
//            if (x <= prevCntSum + crossCnt) {
//                if (crossCnt % 2 == 1) {
//                    System.out.print((crossCnt - (x - prevCntSum - 1)) + "/" + (x - prevCntSum));
//                    break;
//                }
//
//                else {
//                    System.out.print((x - prevCntSum) + "/" + (crossCnt - (x - prevCntSum - 1)));
//                    break;
//                }
//
//            } else {
//                prevCntSum += crossCnt;
//                crossCnt++;
//            }
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
//public class Main08 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//
//        int A = Integer.parseInt(st.nextToken());
//        int B = Integer.parseInt(st.nextToken());
//        int V = Integer.parseInt(st.nextToken());
//        int day = (V-B) / (A-B);
//        if ((V-B) % (A-B) != 0) day++;
//
//        System.out.println(day);
//    }
//}












//1712
//public class Main08 {
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




//10250
//public class Main08 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int T = Integer.parseInt(br.readLine());
//        int[] ho = new int[T];
//        for (int i = 0; i < T; i++) {
//            StringTokenizer st = new StringTokenizer(br.readLine());
//            int H = Integer.parseInt(st.nextToken());   //높이
//            int W = Integer.parseInt(st.nextToken());   //층
//            int N = Integer.parseInt(st.nextToken());   //N번째 손님
//
//            if(N % H == 0) System.out.println((H*100) + (N / H));
//            else System.out.println(((N % H) * 100) + ((N / H) + 1));
//        }
//    }
//}

//2775
//public class Main08 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        /**
//         * a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다
//         * k층 n호에 몇명 사는지 구하기!!!
//         * 0층엔 1호부터 있고 i호에 i명이 산다
//         * 2 /1 3/ 2 3
//         * 1층 1호 = 1
//         * 1층 2호 = 1+2 = 3
//         * 1층 3호 = 1+2+3 = 6
//         * 2층 1호 = 1
//         * 2층 2호 = 1+3 = 4
//         * 2층 3호 = 1+3+6 = 10
//         **/
//
//
//        int[][] arr = new int[15][15];
//
//        for (int i = 0; i < arr.length ; i++) {
//            arr[i][1] = 1;
//            arr[0][i] = i;
//        }
//
//        for (int i = 1; i < 15; i++) {
//            for (int j = 2; j < 15; j++) {
//                arr[i][j] = arr[i][j-1] + arr[i-1][j];
//            }
//        }
//
//        int T = Integer.parseInt(br.readLine());
//
//        for (int i = 0; i < T; i++) {
//            int k = Integer.parseInt(br.readLine());
//            int n = Integer.parseInt(br.readLine());
//            System.out.println(arr[k][n]);
//        }
//    }
//}


//2839
//public class Main08 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int N = Integer.parseInt(br.readLine());
//
//        if (N == 4 || N == 7) {
//            System.out.println(-1);
//        }
//        else if (N % 5 == 0) {
//            System.out.println(N / 5);
//        }
//        else if (N % 5 == 1 || N % 5 == 3) {
//            System.out.println((N / 5) + 1);
//        }
//        else if (N % 5 == 2 || N % 5 == 4) {
//            System.out.println((N / 5) + 2);
//        }
//    }
//}

//10757
//public class Main08 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//
//        BigInteger a = new BigInteger(st.nextToken());
//        BigInteger b = new BigInteger(st.nextToken());
//
//        a = a.add(b);
//
//        System.out.println(a.toString());
//    }
//}