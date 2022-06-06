package com.BaekjoonCode;

import java.util.Scanner;
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
//public class Main {
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
//    }
//}

public class Main04 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int[] arr = { in.nextInt(), in.nextInt(), in.nextInt(),
                in.nextInt(), in.nextInt(), in.nextInt(),
                in.nextInt(), in.nextInt(), in.nextInt() };
        in.close();

        int cnt = 0, max = 0, idx = 0;

        for(int value : arr) {
            cnt++;

            if(value > max) {
                max = value;
                idx = cnt;
            }
        }
        System.out.print(max + "\n" + idx);
    }
}
