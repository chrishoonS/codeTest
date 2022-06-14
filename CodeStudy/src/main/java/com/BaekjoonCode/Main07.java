package com.BaekjoonCode;

import java.util.Scanner;

//1712
public class Main07 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long fixAmt = sc.nextLong();   //고정비용 3
        long varAmt = sc.nextLong();   //가변비용 2
        long price = sc.nextLong();   //책정가 1

        long prdtAmt = 0;
        int cnt = 0;
        //생산비용 계산 및 손익분기점 개수 구하기
        do{
            if(varAmt > price){
                cnt = -1;
                break;
            }
            cnt++; //물품 판매개수 1
            prdtAmt = fixAmt + varAmt*cnt; //3+2 = 5
        }while(prdtAmt >= price*cnt);
        System.out.println(cnt);
    }
}