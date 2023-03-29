package com.BaekjoonCode;

import java.util.Scanner;

//2739
//public class Main03 {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int a = sc.nextInt();
//        sc.close();
//
//        for (int i = 1; i < 10; i++) {
//            System.out.println(a+" * "+i+" = "+ a*i);
//        }
//    }
//}

//10950
//public class Main03 {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int c = sc.nextInt();
//
//        for (int i = 0; i < c; i++) {
//            int a = sc.nextInt();
//            int b = sc.nextInt();
//            System.out.println(a+b);
//        }
//        sc.close();
//    }
//}

//8393
public class Main03 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        sc.close();

        System.out.println(a*(a+1)/2);
    }
}

//25304
//public class Main03 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st;
//
//        int X = Integer.parseInt(br.readLine());
//        int N = Integer.parseInt(br.readLine());
//
//        int total = 0;
//        for(int i = 0; i < N; i++) {
//            st = new StringTokenizer(br.readLine());
//            total += Integer.parseInt(st.nextToken()) * Integer.parseInt(st.nextToken());
//        }
//        if(X == total)
//            System.out.println("Yes");
//        else
//            System.out.println("No");
//    }

//25314
//public class Main03 {
//    public static void main(String[] args) throws Exception {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int n = Integer.parseInt(br.readLine());
//
//        StringBuilder sb = new StringBuilder();
//
//        for (int i = 0; i < n/4; i++) {
//            sb.append("long ");
//        }
//        sb.append("int");
//        System.out.println(sb);
//    }




//15552
//public class Main03 {
/**    기본적으로 자바의 경우 Scanner를 사용해서는 풀 수 없다.
 * java.util.Scanner 자체가 regular expression, 즉 정규식을 빈번하게 사용하기 때문이다.
 * 물론 사용자 입장에서 편리한 점은 있겠지만 알고리즘에서는 사용자가 집적 필요에 따라 파싱(parsing)하는게 더욱 빠르기 때문에 BufferedReader을 쓰게 되는 것이다.
 * Scanner 자체가 입력을 받으면 구문분석을 위해 정규식을 거치게 되고 BufferedReader은 그런 특별한 구문분석이 없어서 속도차이가 발생 할 수 밖에 없다.
 * 우리가 흔히 쓰는 Scanner.nextInt() 만 보더라도 다음과 같은 정규식에 맞는지를 분석한다.
 **/
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st;
//        int c = Integer.parseInt(br.readLine());
//
//        for (int i = 0; i < c; i++) {
//            st = new StringTokenizer(br.readLine()," ");
//            int a = Integer.parseInt(st.nextToken());
//            int b = Integer.parseInt(st.nextToken());
//            System.out.println(a+b);
//        }
//    }

/**
 * 모든 입력은 BufferedReader.readLine() 으로 받았다.
 * 테스트 케이스에서 주어지는 두 정수는 문자열 분리를 위해 매 반복마다 StringTokenizer 을 생성과 동시에 문자를 입력받는다.
 * ( st = new StringTokenizer(br.readLine(), " ");
 * 또한 다음 열에서 각 StringTokenizer 의 토큰 (분리되어있는 문자)을 반환하며,
 * 반환되는 타입은 String 이므로 Integer.parseInt를 통해 int형으로 바꾸어 준다. 이렇게 바꾼 두 토큰을 더해준 값을 BufferedWriter.write() 에 넣어준다.
 * ( bw.write((Integer.parseInt(st.nextToken())+Integer.parseInt(st.nextToken()))+ "\n"); )
 * 그리고 거의 필수적으로 버퍼를 비운 뒤(flush) 닫아줘야한다(close).
 **/
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
//
//        int N = Integer.parseInt(br.readLine());
//        StringTokenizer st;
//        for (int i = 0; i < N; i++) {
//            st = new StringTokenizer(br.readLine()," ");
//            bw.write((Integer.parseInt(st.nextToken()) + Integer.parseInt(st.nextToken()))+ "\n");
//        }
//        br.close();
//        bw.flush();
//        bw.close();
//    }

/**
 * StringBuilder 를 쓰는 방식이다. 알고리즘 자체는 위 방법 1 과 동일하다.
 * 다만 BufferedWriter 대신 StringBuilder 로 대체할 뿐이다.
 * 데이터 양을 보았을 때 StringBuilder 가 더 빠를 수도 있다.
 * (물론 데이터 양이 커지면 커질 수록 BufferedWriter 가 더 빠르다.)
 **/
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        int N = Integer.parseInt(br.readLine());
//
//        StringTokenizer st;
//        StringBuilder sb = new StringBuilder();
//
//        for (int i = 0; i < N; i++) {
//            st = new StringTokenizer(br.readLine()," ");
//            sb.append(Integer.parseInt(st.nextToken()) + Integer.parseInt(st.nextToken())).append('\n');
//        }
//        br.close();
//        System.out.println(sb);
//    }
/**
 * StringTokenizer 가 속도가 빠르긴 하나 매 반복문마다 생성해주고 함수를 호출해주는 것이 ( 그 것도 한 번씩만 분리하기 위해)
 * 시간이 지연되는 원인 중 하나 일 수 있다. 그래서 이 시간도 줄이기 위해 고안한 방법이 String.substring() 메서드다.
 * 우리는 문자열 분리 규칙이 매우 단순하다는 것을 알 수 있다.
 * 그것은 바로 " " (공백) 을 기준으로 분리되니 이 위치만 알면 간단하면서도 빠르게 분리할 수 있을 것이라는 점이다.
 * 또한 StringTokenizer 을 생성하지 않으니 메모리 또한 많이 줄어들 수 있다.
 **/
//    public static void main(String[] args) throws Exception {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int N = Integer.parseInt(br.readLine());
//        StringBuilder sb = new StringBuilder();
//
//        for (int i = 0; i < N; i++) {
//            String str = br.readLine();
//            int target = str.indexOf(" ");
//            int result = Integer.parseInt(str.substring(0,target)) + Integer.parseInt(str.substring(target + 1));
//            sb.append(result+"\n");
//        }
//
//        br.close();
//        System.out.print(sb);
//    }
//}

//2741
//public class Main03 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int a = Integer.parseInt(br.readLine());
//        for(int i = 1; i <= a; i ++) {
//            System.out.println(i);
//        }
//    }
//}

//
//public class Main03 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int a = Integer.parseInt(br.readLine());
//        StringBuilder sb = new StringBuilder();
//
//        for(int i = a; i >= 1; i--) {
//            sb.append(i).append('\n');
//        }
//        System.out.println(sb);
//    }
//}

//11021
//public class Main03 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int N = Integer.parseInt(br.readLine());
//        StringBuilder sb = new StringBuilder();
//
//        for (int i = 1; i <= N; i++) {
//            String str = br.readLine();
//            int target = str.indexOf(" ");
//            int result = Integer.parseInt(str.substring(0,target)) + Integer.parseInt(str.substring(target + 1));
//            sb.append("Case #"+ i + ": " + result+"\n");
//        }
//
//        br.close();
//        System.out.println(sb);
//    }
//}

//11022
//public class Main03 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int N = Integer.parseInt(br.readLine());
//        StringBuilder sb = new StringBuilder();
//
//        for (int i = 1; i <= N; i++) {
//            String str = br.readLine();
//            int target = str.indexOf(" ");
//            int result = Integer.parseInt(str.substring(0,target)) + Integer.parseInt(str.substring(target + 1));
//            sb.append("Case #"+ i + ": " +str.substring(0,target)+ " + " +str.substring(target + 1)+ " = " + result+"\n");
//        }
//
//        br.close();
//        System.out.println(sb);
//    }
//}

//2438
//public class Main03 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringBuilder sb = new StringBuilder();
//
//        int a = Integer.parseInt(br.readLine());
//        for(int i = 0; i < a; i++) {
//            for(int j = 0; j < i + 1; j++) {
//                sb.append("*");
//            }
//            sb.append("\n");
//        }
//        br.close();
//        System.out.println(sb);
//    }
//}

//2439
//public class Main03 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringBuilder sb = new StringBuilder();
//
//        int a = Integer.parseInt(br.readLine());
//        for(int i = 1; i <= a; i++) {
//            for(int j = 0; j < a-i; j++) {
//                sb.append(" ");
//            }
//            for (int k = 1; k <= i; k++) {
//                sb.append("*");
//            }
//            sb.append("\n");
//        }
//        br.close();
//        System.out.print(sb);
//    }
//}

//10952
//public class Main03 {
//    public static void main(String[] args) throws Exception {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringBuilder sb = new StringBuilder();
//        while(true){
//            String str = br.readLine();
//            int target = str.indexOf(" ");
//            int result = 0;
//            if (str.substring(0,target).equals("0") && str.substring(target+1).equals("0")){
//                break;
//            }else result = Integer.parseInt(str.substring(0,target)) + Integer.parseInt(str.substring(target + 1));
//            sb.append(result+"\n");
//        }
//        br.close();
//        System.out.print(sb);
//    }
//}

//1110
//public class Main03 {
//    public static void main(String args[]) throws IOException {
//        Scanner sc = new Scanner(System.in);
//        int a = sc.nextInt();
//        int cycle = 0, newNo=0, org=a;
//        while(true){
//            char[] ch = String.valueOf(a).toCharArray();//5,0
//            int sum = 0;
//            for (int i = 0; i < ch.length; i++) {
//                sum += Integer.parseInt(String.valueOf(ch[i])); //5
//            }
//            if (ch.length == 1){
//                if (sum >= 10){
//                    newNo = Integer.parseInt(ch[0] + String.valueOf(sum).substring(1,2));
//                }else {
//                    newNo = Integer.parseInt(ch[0] + String.valueOf(sum));
//                }
//
//                cycle++;
//                if (org == newNo) break;
//                else a = newNo;
//
//            }else{
//                if (sum >= 10){
//                    newNo = Integer.parseInt(ch[1] + String.valueOf(sum).substring(1,2));
//                }else {
//                    newNo = Integer.parseInt(ch[1] + String.valueOf(sum));
//                }
//
//                cycle++;
//                if (org == newNo) break;
//                else a = newNo;
//            }
//        }
//        System.out.println(cycle);
//    }
//}
//public class Main03 {
//    public static void main(String[] args) throws IOException{
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        int N = Integer.parseInt(br.readLine());
//        int N_tmp = N; // N 복사
//        int N_first; // 첫째 자리
//        int N_second; // 둘째 자리
//        int N_sum; // 첫째 자리 + 둘째 자리
//        int cnt = 0;
//
//        // 처음 N_tmp와 N이 같기때문에
//        // do-while문을 써준다.
//        do{
//            // ex.) 26
//            cnt++;
//            N_first = N_tmp % 10; // N_first : 6
//            N_second = N_tmp / 10; // N_second : 2
//            N_sum = N_first + N_second; // N_sum : 8
//
//            N_second = N_first; // N_second : 6
//            N_first = N_sum % 10; // N_first : 8
//            N_tmp = N_second * 10 + N_first; // N_tmp : 68
//        }while(N_tmp != N);
//
//        System.out.println(cnt);
//    }
//}
