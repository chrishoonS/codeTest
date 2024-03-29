package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

// 5086 배수와 약수
//public class Main09 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        // 입력 받아서 두 수의 크기 비교
//        StringTokenizer st;
//
//        // 0을 입력받았을때 프로그램 종료
//        while(true){
//            st = new StringTokenizer(br.readLine(), " ");
//            int no1 = Integer.parseInt(st.nextToken());
//            int no2 = Integer.parseInt(st.nextToken());
//
//            if(no1 == 0 && no2 == 0) break;
//            else if(no1 > no2){
//                if (no1 % no2 == 0) System.out.println("multiple");
//                else System.out.println("neither");
//
//            }else{
//                if (no2 % no1 == 0) System.out.println("factor");
//                else System.out.println("neither");
//            }
//
//        }
//    }
//
//}



// 2501 약수 구하기
//public class Main09 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        // 입력 받아서 두 수
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//        int N = Integer.parseInt(st.nextToken());
//        int K = Integer.parseInt(st.nextToken());
//
//        System.out.print(chkYaksu(N, K));
//
//    }
//
//    private static int chkYaksu(int n, int k) {
//        int cnt = 0;
//
//        for (int i = 1; i <= n; i++)
//            if(n%i == 0) cnt++;
//
//        int[] yaksu = new int[cnt];
//        cnt = 0;
//
//        for (int i = 1; i <= n; i++) {
//            if(n%i == 0){
//                yaksu[cnt] = i;
//                cnt++;
//            }
//        }
//
//        return yaksu.length < k ? 0 : yaksu[k-1];
//    }
//}

// 다른 풀이
//public class Main {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st = new StringTokenizer(br.readLine());
//        int N = Integer.parseInt(st.nextToken());
//        int K = Integer.parseInt(st.nextToken());
//        int cnt = 0;
//        int inx = 0;
//        for (int i = 1; i <=N ; i++) {
//            if(N%i == 0){
//                cnt++;
//                inx = i;
//
//                if(cnt == K) break;
//            }
//        }
//
//        if(cnt == K) System.out.println(inx);
//        else System.out.println(0);
//    }
//}




// 9506 약수들의 합
public class Main09 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringBuilder sb = new StringBuilder();

        while(true){
            int N = Integer.parseInt(br.readLine());

            if(N == -1) break;

            // 약수를 담아 둘 list
            ArrayList<Integer> list = new ArrayList<>();

            int sum = 0;

            for(int i = 1; i < N; i++){
                // 약수라면 list에 추가하고 합을 구한다.
                if(N % i == 0) {
                    list.add(i);
                    sum += i;
                }
            }

            sb.append(N);

            if(N == sum) {
                sb.append(" = ");

                for (int i = 0; i < list.size()-1; i++){
                    sb.append(list.get(i) + " + ");
                }

                sb.append(list.get(list.size()-1));
            } else sb.append(" is NOT perfect.");

            sb.append("\n");
        }

        System.out.print(sb);
        br.close();

    }
}




// 1978 소수찾기
//public class Main09 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        int N = Integer.parseInt(br.readLine());
//
//        int cnt = 0;
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//
//        for (int i = 0; i < N; i++) {
//            int a = Integer.parseInt(st.nextToken());
//            if(a == 1) continue;
//            else{
//                if(chkSosu(a) == true) cnt++;
//            }
//        }
//        System.out.println(cnt);
//    }
//
//    private static boolean chkSosu(int a){
//        for (int i = 2; i < a; i++) {
//            if(a%i == 0) return false;
//        }
//        return true;
//    }
//}




//2581 소수
//public class Main09 {
//    public static boolean prime[];
//
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int M = Integer.parseInt(br.readLine());
//        int N = Integer.parseInt(br.readLine());
//
//        prime = new boolean[N + 1];	// 배열 생성
//        get_prime();
//
//        // 소수 합 및 최솟값
//        int sum = 0;
//        int min = Integer.MAX_VALUE;
//        for(int i = M; i <= N; i++) {
//            if(prime[i] == false) {	// false = 소수
//                sum += i;
//                if(min == Integer.MAX_VALUE) {	// 첫 소수가 최솟값임
//                    min = i;
//                }
//            }
//        }
//        if(sum == 0) {	// 소수가 없다면
//            System.out.println(-1);
//        }else {
//            System.out.println(sum);
//            System.out.println(min);
//        }
//    }
//
//    public static void get_prime() {
//        prime[0] = true;
//        prime[1] = true;
//
//        for(int i = 2; i <= Math.sqrt(prime.length); i++) {
//            if(prime[i]) continue;	// 이미 체크된 배열일 경우 skip
//            for(int j = i * i; j < prime.length; j += i) {
//                prime[j] = true;
//            }
//        }
//    }
//}





//11653
//public class Main09 {
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringBuilder sb = new StringBuilder();
//
//        int N = Integer.parseInt(br.readLine());
//
//        for (int i = 2; i <= Math.sqrt(N); i++) {
//            while (N % i == 0) {
//                sb.append(i).append('\n');
//                N /= i;
//            }
//        }
//        if (N != 1) sb.append(N);
//        System.out.print(sb);
//    }
//}








////////////////////////////////////////// 여기 밑에는 나중에 다른 경로로 이동 //////////////////////////////////////////







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
//public class Main09 {
//    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
//
//    public static void main(String[] args) throws IOException {
//
//        int count = Integer.parseInt(br.readLine());
//        bw.write("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n" );
//        recursive(count, count);
//
//        br.close();
//        bw.close();
//    }
//
//    static void recursive(int num, int k) throws IOException {
//        if (k >= 0) {
//            for (int i = num - k; i > 0; i--) {
//                bw.write("____" );
//            }
//            bw.write("\"재귀함수가 뭔가요?\"\n" );
//
//            if (k == 0) {
//                for (int i = num - k; i > 0; i--) {
//                    bw.write("____" );
//                }
//                bw.write("\"재귀함수는 자기 자신을 호출하는 함수라네\"\n" );
//            }
//
//            else {
//                for (int i = num - k; i > 0; i--) {
//                    bw.write("____" );
//                }
//                bw.write("\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n" );
//                for (int i = num - k; i > 0; i--) {
//                    bw.write("____" );
//                }
//                bw.write("마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n" );
//                for (int i = num - k; i > 0; i--) {
//                    bw.write("____" );
//                }
//                bw.write("그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\"\n" );
//            }
//            recursive(num, --k);
//            for (int i = num - k; i > 1; i--) {
//                bw.write("____" );
//            }
//            bw.write("라고 답변하였지.\n" );
//        }
//    }
//}




//10757
//public class Main09 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        int N = Integer.parseInt(br.readLine());
//
//        int cnt = 0;
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//
//        for (int i = 0; i < N; i++) {
//            int a = Integer.parseInt(st.nextToken());
//            if(a == 1) continue;
//            else{
//                if(chkSosu(a) == true) cnt++;
//            }
//        }
//        System.out.println(cnt);
//    }
//
//    private static boolean chkSosu(int a){
//        for (int i = 2; i < a; i++) {
//            if(a%i == 0) return false;
//        }
//        return true;
//    }
//}





//1929
//public class Main09 {
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringBuilder sb = new StringBuilder();
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//
//        int M = Integer.parseInt(st.nextToken());
//        int N = Integer.parseInt(st.nextToken());
//        br.close();
//        for (int i = M; i <= N; i++) {
//            if(chkSosu(i) == true)
//                System.out.println(i);
//        }
//
//    }
//
//    private static boolean chkSosu(int a){
//        for (int i = 2; i < a; i++) {
//            if(a%i == 0) return false;
//        }
//        return true;
//    }
//}

//public class Main09 {
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringBuilder sb = new StringBuilder();
//
//        StringTokenizer st = new StringTokenizer(br.readLine()," ");
//        int M = Integer.parseInt(st.nextToken());
//        int N = Integer.parseInt(st.nextToken());
//
//        boolean[] prime = new boolean[N + 1];
//
//        for(int i = 2; i <= N; i++) {
//            if(prime[i]) continue;
//            if(i >= M) sb.append(i).append('\n');
//            for(int j = i + i; j <= N; j += i) {
//                prime[j] = true;
//            }
//        }
//        System.out.println(sb);
//    }
//}

//4948
//public class Main09 {
//
//    public static boolean[] prime = new boolean[246912];
//
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringBuilder sb = new StringBuilder();
//        get_prime();	// 소수를 얻는 메서드 실행
//
//        while(true){
//            int n = Integer.parseInt(br.readLine());
//            if(n == 0) break;
//
//            int cnt = 0;
//            for (int i = n+1; i < 2 * n; i++) {
//                if(!prime[i]) cnt++;
//            }
//            sb.append(cnt).append('\n');
//        }
//        System.out.print(sb);
//    }
//
//    public static void get_prime() {
//        prime[0] = prime[1] = true;
//
//        for(int i = 2; i <= Math.sqrt(prime.length); i++) {
//            if(prime[i]) continue;
//            for(int j = i * i; j < prime.length; j += i) {
//                prime[j] = true;
//            }
//        }
//    }
//
//}










// Main09 이동
//9020
//public class Main09 {
//    public static boolean[] prime = new boolean[10001];
//
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringBuilder sb = new StringBuilder();
//
//        get_prime();
//
//        int T = Integer.parseInt(br.readLine());	// 테스트케이스
//
//        while (T-- > 0) {
//            int n = Integer.parseInt(br.readLine());
//            int _1stNo = n / 2;
//            int _2ndNo = n / 2;
//
//            while (true) {
//                if (!prime[_1stNo] && !prime[_2ndNo]) {
//                    sb.append(_1stNo).append(' ').append(_2ndNo).append('\n');
//                    break;
//                }
//                _1stNo--;
//                _2ndNo++;
//            }
//        }
//        System.out.print(sb);
//    }
//
//    public static void get_prime() {
//        prime[0] = prime[1] = true;
//
//        for(int i = 2; i <= Math.sqrt(prime.length); i++) {
//            if(prime[i]) continue;
//            for(int j = i * i; j < prime.length; j += i) {
//                prime[j] = true;
//            }
//        }
//    }
//}