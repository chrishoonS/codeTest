package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// 2745 진법변환
//public class Main08 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//
//        String N = st.nextToken();
//        int B = Integer.parseInt(st.nextToken());
//        int tmp = 1;
//        int result = 0;
//
//        for (int i = N.length()-1; i >= 0; i--) {
//            char c = N.charAt(i);
//
//            if('A'<= c && c <= 'Z')
//                result += (c-'A'+10) * tmp;   // 'A' = 65(ASCII code)
//            else
//                result += (c-'0') * tmp;      // '0' = 48(ASCII code) 로 int형으로 형변환 가능
//
//            tmp *= B;
//        }
//
//        System.out.println(result);
//    }
//}


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

// 11005 진법 변환 2
//public class Main08 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//
//        int N = Integer.parseInt(st.nextToken());
//        int B = Integer.parseInt(st.nextToken());
//
//        String result = "";
//
//        List<Character> list = new ArrayList<>();
//
//        while (N > 0) {
//            if (N % B < 10)
//                list.add((char) (N % B + '0'));
//            else
//                list.add((char) (N % B - 10 + 'A'));
//
//            N /= B;
//        }
//
//        for (int i = list.size() - 1; i >= 0; i--) {
//            System.out.print(list.get(i));
//        }
//
//    }
//}

//public class Main {
//
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st = new StringTokenizer(br.readLine());
//        int n = Integer.parseInt(st.nextToken());
//        int b = Integer.parseInt(st.nextToken());
//        StringBuilder ans = new StringBuilder();
//        while (n != 0) {
//            int temp = n % b;
//            if (temp < 10) ans.append((char)(temp + 48));
//            else ans.append((char)(temp + 55));
//            n /= b;
//        }
//        ans.reverse();
//        System.out.println(ans);
//    }
//}

//public class Main {
//
//    public static void main(String[] args) throws IOException{
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st = new StringTokenizer(br.readLine());
//        int n = Integer.parseInt(st.nextToken());
//        int b = Integer.parseInt(st.nextToken());
//
//        System.out.println(Integer.toString(n, b).toUpperCase());
//
//    }
//
//}

// 2720 세탁소 사장 동혁
//public class Main08 {
//
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int t = Integer.parseInt(br.readLine());  //테스트 케이스 개수
//        int quarter = 25;
//        int dime = 10;
//        int nickel = 5;
//        int penny = 1;
//        StringBuilder sb = new StringBuilder();
//
//        for (int i = 0; i < t; i++) {
//            int change = Integer.parseInt(br.readLine());
//            sb.append(change / quarter + " ");
//            change %= quarter;
//            sb.append(change / dime + " ");
//            change %= dime;
//            sb.append(change / nickel + " ");
//            change %= nickel;
//            sb.append(change / penny + "\n");
//        }
//        System.out.print(sb);
//        br.close();
//    }
//}


// 다른 풀이
//class Main08 {
//    static int read() throws Exception {
//        int c, n = System.in.read() & 15;
//        while ((c = System.in.read()) > 32) n = (n << 3) + (n << 1) + (c & 15);
//        if (c == 13) System.in.read();
//        return n;
//    }
//
//    public static void main(String[] args) throws Exception {
//        int t = read();
//        StringBuilder sb = new StringBuilder();
//
//        for (int i = 0; i < t; i++) {
//            int change = read();
//
//            sb.append(change / 25).append(" ")
//                    .append((change % 25) / 10).append(" ")
//                    .append(((change % 25) % 10) / 5).append(" ")
//                    .append((change % 5)).append('\n');
//        }
//
//        System.out.println(sb);
//    }
//}

// 2903 중앙이동 알고리즘
class Main08 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        System.out.print((int) Math.pow(Math.pow(2, N)+1, 2));

    }
}

// 2903 다른 풀이
//public class Main {
//
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        int N = Integer.parseInt(br.readLine());
//        int temp = 2;
//
//        for(int i = 0; i < N; i++) {
//            temp = temp * 2 - 1;
//        }
//
//        System.out.println(temp * temp);
//    }
//
//}


// 1 9 3^2 3
// 2 81 (3^2)^2 5
// 3 289 17^2 9

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









////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 여기부터는 나중에 다른 파일로 이동


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