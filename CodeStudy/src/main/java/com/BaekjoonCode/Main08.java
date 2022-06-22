package com.BaekjoonCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

//10757
public class Main08 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int cnt = 0;
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        for (int i = 0; i < N; i++) {
            int a = Integer.parseInt(st.nextToken());
            if(a == 1) continue;
            else{
                if(chkSosu(a) == true) cnt++;
            }
        }
        System.out.println(cnt);
    }

    private static boolean chkSosu(int a){
        for (int i = 2; i < a; i++) {
            if(a%i == 0) return false;
        }
        return true;
    }
}