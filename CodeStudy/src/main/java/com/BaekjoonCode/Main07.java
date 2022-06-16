package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

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

//1193
public class Main07 {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int x = Integer.parseInt(br.readLine());

        int crossCnt = 1, prevCntSum = 0;

        while (true) {
            // 직전 대각선 누적합 + 해당 대각선 개수 이용한 범위 판별
            if (x <= prevCntSum + crossCnt) {
                if (crossCnt % 2 == 1) {
                    /**
                     * 대각선의 개수가 홀수면
                     * 분모 = 큰 수부터 시작, 대각선 개수 - (x번째 - 직전 대각선까지의 누적합 - 1)
                     * 분자 = x번째 - 직전 대각선까지의 누적합
                     **/
                    System.out.print((crossCnt - (x - prevCntSum - 1)) + "/" + (x - prevCntSum));
                    break;
                }

                else {
                    /**
                     * 대각선의 개수 짝수면
                     * 홀수일 때의 출력을 반대로
                     **/
                    System.out.print((x - prevCntSum) + "/" + (crossCnt - (x - prevCntSum - 1)));
                    break;
                }

            } else {
                prevCntSum += crossCnt;
                crossCnt++;
            }
        }
    }
}
