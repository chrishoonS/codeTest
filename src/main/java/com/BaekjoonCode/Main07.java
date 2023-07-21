package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// 2738 행렬의 덧셈
public class Main07 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int[][] arr1 = new int[N][M];
        int[][] arr2 = new int[N][M];
        int[][] result = new int[N][M];

        for (int i = 0; i < arr1.length; i++) {
            st = new StringTokenizer(br.readLine(), " ");
            for (int j = 0; j < arr1[0].length; j++) {
                arr1[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        for (int i = 0; i < arr2.length; i++) {
            st = new StringTokenizer(br.readLine(), " ");
            for (int j = 0; j < arr1[0].length; j++) {
                arr2[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        for (int i = 0; i <result.length; i++) {
            for (int j = 0; j < result[0].length; j++) {
                result[i][j] = arr1[i][j] + arr2[i][j];
            }
        }
        print2d(arr1);
        print2d(arr2);
        print2d(result);

    }

    public static void print2d(int[][] result) {
        int m = result.length;
        int n = result[0].length;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(result[i][j] + "\t");
            } System.out.println();
        }
        System.out.println("----------------------");
    }
}

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