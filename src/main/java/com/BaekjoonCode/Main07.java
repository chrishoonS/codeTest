package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// 2738 행렬의 덧셈
//public class Main07 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//
//        int N = Integer.parseInt(st.nextToken());
//        int M = Integer.parseInt(st.nextToken());
//
//        int[][] arr1 = new int[N][M];
//        int[][] arr2 = new int[N][M];
//        int[][] result = new int[N][M];
//
//        for (int i = 0; i < arr1.length; i++) {
//            st = new StringTokenizer(br.readLine(), " ");
//            for (int j = 0; j < arr1[0].length; j++) {
//                arr1[i][j] = Integer.parseInt(st.nextToken());
//            }
//        }
//
//        for (int i = 0; i < arr2.length; i++) {
//            st = new StringTokenizer(br.readLine(), " ");
//            for (int j = 0; j < arr1[0].length; j++) {
//                arr2[i][j] = Integer.parseInt(st.nextToken());
//            }
//        }
//
//        for (int i = 0; i <result.length; i++) {
//            for (int j = 0; j < result[0].length; j++) {
//                result[i][j] = arr1[i][j] + arr2[i][j];
//            }
//        }
//        print2d(arr1);
//        print2d(arr2);
//        print2d(result);
//
//    }
//
//    // 2차원 배열 출력용 함수
//    public static void print2d(int[][] result) {
//        int m = result.length;
//        int n = result[0].length;
//        for (int i = 0; i < m; i++) {
//            for (int j = 0; j < n; j++) {
//                System.out.print(result[i][j] + "\t");
//            } System.out.println();
//        }
//        System.out.println("----------------------");
//    }
//}

//
//public class Main {
//    static Reader in = new Reader();
//
//    public static void main(String[] args) throws Exception {
//        StringBuilder sb = new StringBuilder();
//
//        int N = in.nextInt();
//        int M = in.nextInt();
//
//        int[][] mat = new int[N][M];
//
//        for(int i = 0; i < N; i++) {
//            for(int j = 0; j < M; j++) {
//                mat[i][j] = in.nextInt();
//            }
//        }
//
//        for(int i = 0; i < N; i++) {
//            for(int j = 0; j < M; j++) {
//                sb.append(mat[i][j] + in.nextInt()).append(" ");
//            }
//            sb.append("\n");
//        }
//
//        System.out.println(sb);
//    }
//
//    static class Reader {
//        final int SIZE = 1 << 13;
//        byte[] buffer = new byte[SIZE];
//        int index, size;
//
//        int nextInt() throws Exception {
//            int n = 0;
//            byte c;
//            while ((c = read()) <= 32)
//                ;
//            boolean neg = c == '-' ? true : false;
//            if (neg)
//                c = read();
//            do
//                n = (n << 3) + (n << 1) + (c & 15);
//            while (isNumber(c = read()));
//            if (neg)
//                return -n;
//            return n;
//        }
//
//        boolean isNumber(byte c) {
//            return 47 < c && c < 58;
//        }
//
//        byte read() throws Exception {
//            if (index == size) {
//                size = System.in.read(buffer, index = 0, SIZE);
//                if (size < 0)
//                    buffer[0] = -1;
//            }
//            return buffer[index++];
//        }
//    }
//}


//public class Main {
//    public static void main(String[] args) throws IOException {
//        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
//        StringBuilder output = new StringBuilder();
//        StringTokenizer tokens = new StringTokenizer(reader.readLine());
//
//        int N = Integer.parseInt(tokens.nextToken());
//        int M = Integer.parseInt(tokens.nextToken());
//
//        int[][] matrix = new int[N][M];
//
//        for(int i = 0; i < N; i++) {
//            tokens = new StringTokenizer(reader.readLine());
//            for(int j = 0; j < M; j++) {
//                matrix[i][j] = Integer.parseInt(tokens.nextToken());
//            }
//        }
//
//        for(int i = 0; i < N; i++) {
//            tokens = new StringTokenizer(reader.readLine());
//            for(int j = 0; j < M; j++) {
//                matrix[i][j] += Integer.parseInt(tokens.nextToken());
//                output.append(matrix[i][j]).append(" ");
//            }
//            output.append("\n");
//        }
//        System.out.print(output);
//    }
//}

// 2566 최댓값
//public class Main07 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        int max = 0;    // 최대값 담는 변수
//        int x=0, y=0;   // 최대값이 있는 이차원 배열 인덱스
//
//        int[][] arr = new int[9][9];
//
//        for (int i = 0; i < 9; i++) {
//            // 첫번째 줄을 입력받아 공백(" ")울 기준으로 문자열 배열을 만듦
//            String[] strArr = br.readLine().split(" ");
//
//            for (int j = 0; j < strArr.length; j++) {
//                // 만든 문자열 배열을 parsing 해서 arr 배열 만들어주기
//                arr[i][j] = Integer.parseInt(strArr[j]);
//
//                // arr을 이용해 최대값을 찾는 로직
//                if(max < arr[i][j]){
//                    max = arr[i][j];
//                    x = i+1;
//                    y = j+1;
//                }
//            }
//
//        }
//
//        System.out.println(max + "\n" + x + " " + y);
//        br.close();
//    }
//}

// 2566 다른풀이
//import java.io.*;
//import java.util.*;
//
//public class Main {
//    static Reader r = new Reader(); //https://hsunnystory.tistory.com/157 Reader 클래스 참고용
//    static StringBuilder sb = new StringBuilder();
//
//    public static void main(String args[]) throws IOException{
//        int a,max = -1;
//        int b=0,c=0;
//        for(int i=0;i<9;i++){
//            for(int j=0;j<9;j++){
//                if(max<(a=r.readInt())){
//                    max = a;
//                    b = i; c = j;
//                }
//            }
//        }
//        System.out.println(max);
//        System.out.println(b+1+" "+(c+1));
//    }
//}
//class Reader {
//    final private int BUFFER_SIZE = 1 << 16;
//    private DataInputStream din;
//    private byte[] buffer;
//    private int bufferPointer, bytesRead;
//
//    public Reader() {
//        din = new DataInputStream(System.in);
//        buffer = new byte[BUFFER_SIZE];
//        bufferPointer = bytesRead = 0;
//    }
//
//    public String readLine() throws IOException {
//        byte[] buf = new byte[2001]; // line length
//        int cnt = 0, c;
//        while((c=read())!=-1){
//            if(c=='\n'){
//                if(cnt!=0) break;
//                else continue;
//            }
//            buf[cnt++] = (byte)c;
//        }
//        return new String(buf, 0, cnt);
//    }
//
//    public int readInt() throws IOException {
//        int ret = 0;
//        byte c = read();
//        while(c <= ' '){ c = read();}
//        boolean neg = (c == '-');
//        if(neg) c = read();
//        do{
//            ret = (ret<<3) + (ret<<1) + c - '0';
//        } while ((c = read()) >= '0' && c <= '9');
//        return neg ? -ret : ret;
//    }
//
//    public long readLong() throws IOException {
//        long ret = 0;
//        byte c = read();
//        while(c <= ' '){ c = read();}
//        boolean neg = (c == '-');
//        if(neg) c = read();
//        do{
//            ret = (ret<<3) + (ret<<1) + c - '0';
//        } while ((c = read()) >= '0' && c <= '9');
//        return neg ? -ret : ret;
//    }
//
//    private void fillBuffer() throws IOException {
//        bytesRead = din.read(buffer, bufferPointer = 0, BUFFER_SIZE);
//        if(bytesRead == -1) buffer[0] = -1;
//    }
//
//    private byte read() throws IOException {
//        if(bufferPointer == bytesRead) fillBuffer();
//        return buffer[bufferPointer++];
//    }
//
//    public void close() throws IOException {
//        if(din==null) return;
//        din.close();
//    }
//}


public class Main07 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int max = 0;    // 최대값 담는 변수
        int x=0, y=0;   // 최대값이 있는 이차원 배열 인덱스

        int[][] arr = new int[9][9];

        for (int i = 0; i < 9; i++) {
            // 첫번째 줄을 입력받아 공백(" ")울 기준으로 문자열 배열을 만듦
            String[] strArr = br.readLine().split(" ");

            for (int j = 0; j < strArr.length; j++) {
                // 만든 문자열 배열을 parsing 해서 arr 배열 만들어주기
                arr[i][j] = Integer.parseInt(strArr[j]);

                // arr을 이용해 최대값을 찾는 로직
                if(max < arr[i][j]){
                    max = arr[i][j];
                    x = i+1;
                    y = j+1;
                }
            }

        }

        System.out.println(max + "\n" + x + " " + y);
        br.close();
    }
}