package com.BaekjoonCode;

import java.io.*;

//10807
//public class Main04 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int n = Integer.parseInt(br.readLine());
//        int[] arr = new int[n];
//
//        //문자열(br.readLine())을 받아 띄어쓰기 기준으로 문자열 분리
//        StringTokenizer st = new StringTokenizer(br.readLine());
//        //구분자를 기준으로 문자열 분리
////        StringTokenizer st = new StringTokenizer(br.readLine(), ",");
//
//        int num = Integer.parseInt(br.readLine());
//        int cnt = 0;
//
//        for(int i=0; i < arr.length; i++){
//            arr[i] = Integer.parseInt(st.nextToken());
//            if(arr[i] == num){
//                cnt++;
//            }
//        }
//
//        System.out.println(cnt);
//        br.close();
//
//    }
//}

//10871
//public class Main04 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//
//        int N = Integer.parseInt(st.nextToken());
//        int X = Integer.parseInt(st.nextToken());
//
//        StringBuilder sb = new StringBuilder();
//
//        st = new StringTokenizer(br.readLine(), " ");
//
//        for (int i = 0; i < N; i++) {
//            int value = Integer.parseInt(st.nextToken());
//
//            if (value < X)
//                sb.append(value).append(' ');
//        }
//        System.out.println(sb);
//    }
//}

//10818
//public class Main04 {
//    public static void main(String[] args) {
//
//        Scanner in = new Scanner(System.in);
//
//        int N = in.nextInt();
//        int[] arr = new int[N];
//
//        for (int i = 0; i < N; i++) {
//            arr[i] = in.nextInt();
//        }
//
//        in.close();
//        Arrays.sort(arr);
//        System.out.print(arr[0] + " " + arr[N - 1]);
//    }
//}

//public class Main04 {
//
//    static BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
//
//    public static void main(String[] args) throws IOException {
//        StringBuilder result = new StringBuilder();
//
//        int n = readInt();
//
//        int max = Integer.MIN_VALUE;
//        int min = Integer.MAX_VALUE;
//        for (int i = 0; i < n; i++) {
//            int a = readInt();
//
//            if (a > max) max = a;
//            if (a < min) min = a;
//        }
//
//        result.append(min).append(' ').append(max).append('\n');
//
//        writer.write(result.toString());
//        writer.flush();
//    }
//
//    static int readInt() throws IOException {
//        boolean isNegative = false;
//        int sum = 0;
//        while (true) {
//            int input = System.in.read();
//            if (input == '\n' || input == ' ')
//                return isNegative ? -1 * sum : sum;
//            else if (input == '-')
//                isNegative = true;
//            else sum = (sum * 10) + (input - '0');
//        }
//    }
//}
//
//public class Main {
//
//    public static void main(String[] args) throws IOException {
//        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        int size = Integer.parseInt(br.readLine());
//        int sign = 1;
//        int num = 0;
//        int min = 1000000;
//        int max = -1000000;
//
//        for(int ch : br.readLine().getBytes()) {
//            if(ch == '-')
//                sign = -1;
//            else if(ch >= '0' && ch <= '9') {
//                num = num * 10 + (ch - '0');
//            }
//            else if(ch == ' ') {
//                num *= sign;
//                max = Math.max(max, num);
//                min = Math.min(min, num);
//
//                num = 0;
//                sign = 1;
//            }
//
//        }
//        num *= sign;
//        max = Math.max(max, num);
//        min = Math.min(min, num);
//        bw.write(min + " " + max);
//        bw.flush();
//    }
//}

//2562
//public class Main04 {
//    public static void main(String[] args) throws NumberFormatException, IOException{
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        ArrayList<Integer> list = new ArrayList<Integer>();
//
//        for (int i = 0; i < 9; i++) {
//            list.add(Integer.parseInt(br.readLine()));
//        }
//
//        int max = list.get(0);
//
//        for (int j = 1; j < list.size(); j++) {
//            if(list.get(j) > max)
//                max = list.get(j);
//        }
//
//        System.out.println(max);
//        System.out.println(list.indexOf(max) + 1);
//
//        br.close();
//
//    }
//}

//10810
//public class Main04 {
//    public static void main(String[] args) throws IOException{
//
//          // BufferedReader의 Garbage Collector에 의하여 사용되지않는 자원이 정리되기 전에 연속/반복적으로 BufferedReader가 close 되지않고 사용되면 정상적으로 reading이 되지지 않는다.
//          // BufferedWriter의 close()를 해주어야 한다고 명시한 이유는, 자원 관리의 중요성 이유로, 자바에서는 자원관리를 쉽게 해주는 Garbage Collector가 있기 때문에 큰문제가 되지 않을 수 있습니다.
//          // Native언어의 경우 자원관리를 프로그래머가 직접 해야하는 경우가 많기 때문에, 자원관리를 해주는 습관을 들이는 것이 좋다.
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
//
//        StringTokenizer st = new StringTokenizer(br.readLine()); // StringTokenizer로 N과 M, " "(공백)으로 구분
//
//        int N = Integer.parseInt(st.nextToken());
//        int M = Integer.parseInt(st.nextToken());
//
//        //바구니 배열
//        int[] basket = new int[N];
//
//        for(int i = 0; i < M; i++) {
//            st = new StringTokenizer(br.readLine());			 // StringTokenizer로 " "(공백)으로 구분
//
//            int startBasket = Integer.parseInt(st.nextToken());
//            int endBasket = Integer.parseInt(st.nextToken());
//            int ballNo = Integer.parseInt(st.nextToken());
//
//            for(int j = startBasket - 1; j < endBasket; j++) {
//                basket[j] = ballNo;
//            }
//        }
//        for(int k = 0; k < basket.length; k++) {
//            bw.write(basket[k] + " ");
//        }
//        br.close();
//        bw.flush();
//        bw.close();
//    }
//
//}

// 10813
// 바구니 총 5개, 둘째줄부터 4개 줄에 걸쳐 공 교환방법
//public class Main04 {
//    public static void main(String[] args) throws IOException{
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
//
//        StringTokenizer st = new StringTokenizer(br.readLine()); // StringTokenizer로 N과 M, " "(공백)으로 구분
//
//        int N = Integer.parseInt(st.nextToken());   // 1~N개 바구니 갯수
//        int M = Integer.parseInt(st.nextToken());   // M번의 공 교환 방법
//
//        // index : 바구니 숫자
//        // value : 바구니 안에 들어있는 공 숫자
//        int[] basket = new int[N];
//        for (int i = 0; i < basket.length; i++) { // 바구니의 공 초기화
//            basket[i] = i+1;
//        }
////        System.out.println(Arrays.toString(basket));
//
//        for(int i = 0; i < M; i++) {
//            st = new StringTokenizer(br.readLine());			 // StringTokenizer로 " "(공백)으로 구분
//
//            int changeBall1 = Integer.parseInt(st.nextToken());
//            int changeBall2 = Integer.parseInt(st.nextToken());
//
//            int tmp = basket[changeBall1-1];
//
//            basket[changeBall1-1] = basket[changeBall2-1];
//            basket[changeBall2-1] = tmp;
//
////            System.out.println((i+1) + "번째");
////            System.out.println(Arrays.toString(basket));
//        }
//
//        for(int k = 0; k < basket.length; k++) {
//            bw.write(basket[k] + " ");
//        }
//        br.close();
//        bw.flush();
//        bw.close();
//    }
//
//}

// 5597
//public class Main04 {
//    public static void main(String[] args) throws IOException{
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
//
//        boolean[] arr = new boolean[30];
//        //온 사람은 출석 체크
//        for (int i = 0; i < 28; i++) {
//            int n = Integer.parseInt(br.readLine());
//            arr[n-1] = true;
//        }
//
//        for (int i = 0; i < arr.length; i++) {
//            if (!arr[i]){
//                bw.write((i+1) + "\n");  //나중에 이거 출력 안되는 이유 찾아보기 -> bw.flush를 반드시 붙여줘야함.
//                bw.flush();
//            }
//        }
//
//        br.close();
//        bw.close();
//    }
//
//}

// 10811
//public class Main04 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//
//        int n = Integer.parseInt(st.nextToken());
//        int m = Integer.parseInt(st.nextToken());
//
//        int[] basket = new int[n];
//
//        //초기 바구니 셋팅
//        for(int i=0; i < basket.length; i++) {
//            basket[i] = i+1;
//        }
//
//        for(int j=0; j<m; j++) {
//            st = new StringTokenizer(br.readLine(), " ");
//            // 바구니의 넘버링에 -1을 해야 basket 배열의 인덱스가 됨!
//            int x = Integer.parseInt(st.nextToken())-1;
//            int y = Integer.parseInt(st.nextToken())-1;
//
//            for(int k=x; k<=y; k++, y--) {
//                int tmp = basket[k];    // 임시로 바구니의 공을 담을 변수
//                basket[k] = basket[y];  // 자리바꾸기
//                basket[y] = tmp;        // 임시로 받은 값 넣으면 바뀜
//            }
//        }
//
//        //하나씩 꺼내서 붙이기
//        for(int z=0; z<basket.length; z++)
//            System.out.print(basket[z] + " ");
//
//        br.close();
//    }
//}

// 10811 다른풀이
//public class Main {
//    public static void main(String[] args) throws IOException {
//        StringBuilder sb = new StringBuilder();
//        int n = read();
//        int[] lst = new int[n];
//        for (int i = 0; i < n; i++) lst[i] = i + 1;
//        int m = read();
//        for (int j = 0; j < m; j++) {
//            int a = read() - 1;
//            int b = read() - 1;
//            for (int l = 0; l < (b - a + 1) / 2; l++) {
//                int tmp = lst[a + l];
//                lst[a + l] = lst[b - l];
//                lst[b - l] = tmp;
//            }
//
//        }
//        for (int k = 0; k < n; k++) sb.append(lst[k]).append(' ');
//        System.out.print(sb);
//
//    }
//    static int read() throws IOException{
//        int c, n = System.in.read() & 15;
//        while ((c = System.in.read()) > 32) n = (n << 3) + (n << 1) + (c & 15);
//        return n;
//    }
//}

//2577
//public class Main04 {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int a = sc.nextInt();
//        int b = sc.nextInt();
//        int c = sc.nextInt();
//
//        int abc = a * b * c;
//        char[] ch = String.valueOf(abc).toCharArray();
//        Arrays.sort(ch);
//
//        int[] cnt = new int[10];
//
//        for (int i = 0; i < ch.length; i++) {
//            for (int j = 0; j < cnt.length; j++) {
//                if (j == Integer.parseInt(String.valueOf(ch[i]))) cnt[j]++;
//            }
//        }
//        sc.close();
//
//        for (int i = 0; i < cnt.length; i++) {
//            System.out.println(cnt[i]);
//        }
//
//    }
//}

//public class Main {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        //StringTokenizer st = new StringTokenizer(br.readLine());
//        int N = Integer.parseInt(br.readLine());
//        for(int i=0;i<2;i++) {
//            N = N* Integer.parseInt(br.readLine());
//        }
//        String str = Integer.toString(N);
//
//        int[] arr= new int[10];
//
//        for(int i=0;i<str.length();i++){
//            //System.out.println(str.charAt(i));	//str의 i인덱스값
//            //System.out.println(arr[str.charAt(i)-'0']);
//            arr[str.charAt(i)-'0']= arr[str.charAt(i)-'0']+ 1;
//        }
//
//
//        for(int i=0;i<10;i++){ System.out.println(arr[i]); }
//    }
//}

//public class Main{
//    public static void main(String[] args) throws IOException{
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int[] arr = new int[10];
//        int val = Integer.parseInt(br.readLine())*Integer.parseInt(br.readLine())*Integer.parseInt(br.readLine());
//        String str = String.valueOf(val);
//        for(int i=0;i<str.length();i++){
//            arr[(str.charAt(i)-48)]++;
//        }
//        for(int v : arr){
//            System.out.println(v);
//        }
//    }
//}

//3052
//public class Main04 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        HashSet<Integer> set = new HashSet<>();
//        for (int i = 0; i < 10; i++) {
//            set.add(Integer.parseInt(br.readLine()) % 42);
//        }
//        System.out.println(set.size());
//    }
//}

public class Main04 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] nums = new int[42];
        int cnt = 0;

        for (int i = 0; i < 10; ++i) {
            nums[Integer.parseInt(br.readLine()) % 42]++;
        }
        for (int i = 0; i < 42; ++i) {
            if (nums[i] != 0 ) cnt++;
        }
        System.out.println(cnt);
    }
}

//1546
//public class Main04 {
//    public static void main(String[] args) throws IOException{
//        Scanner sc = new Scanner(System.in);
//        int N = sc.nextInt();
//        double[] score = new double[N];
//        int M = 0;
//        float sum = 0;
//
//        for (int i = 0; i < N; i++) {
//            score[i] = sc.nextInt();
//        }
//        for (int i = 0; i < score.length; i++) {
//            if (i == 0) M = (int) score[i];
//            else M = (int) Math.max(M, score[i]);
//        }
//        for (int i = 0; i < N; i++) {
//            score[i] = (score[i]/M) * 100;
//            sum += score[i];
//        }
//        System.out.println(sum/N);
//    }
//}

//8958
//public class Main04 {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        String arr[] = new String[sc.nextInt()];
//
//        for (int i = 0; i < arr.length; i++) {
//            arr[i] = sc.next();
//        }
//        sc.close();
//
//        for (int i = 0; i < arr.length; i++) {
//            int cnt = 0;
//            int sum = 0;
//
//            for (int j = 0; j < arr[i].length(); j++) {
//                if (arr[i].charAt(j) == 'O') cnt++;
//                else cnt = 0;
//
//                sum += cnt;
//            }
//
//            System.out.println(sum);
//        }
//    }
//}

//4344
//public class Main04 {
//    public static void main(String[] args) {
//        Scanner in = new Scanner(System.in);
//
//        int[] arr;
//
//        int testCase = in.nextInt();
//
//        for(int i = 0 ; i < testCase ; i++) {
//
//            int N = in.nextInt();	//학생 수
//            arr = new int[N];
//
//            double sum = 0;
//
//            for(int j = 0 ; j < N ; j++) {
//                int score = in.nextInt();
//                arr[j] = score;
//                sum += score;
//            }
//
//            double avg = sum / N ;
//            double cnt = 0;
//
//            for(int j = 0 ; j < N ; j++) {
//                if(arr[j] > avg) cnt++;
//            }
//
//            System.out.printf("%.3f%%\n",(cnt/N)*100);
//        }
//        in.close();
//    }
//}