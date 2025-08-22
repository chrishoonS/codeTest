package com.programmers.test1.level1;

public class Solution03 {
    public int solution(int n) {
        int answer = 0;
        String org = "";
        String chg = "";
        while(n > 0){           //3진법 만드는 로직
            org = (n%3) + org;  //3나눈 나머지 스트링으로 더하기
            n /= 3;             //3나눈채로 저장하고 반복
        }
//        System.out.println(org);
        for (int i=0; i<org.length(); i++){
            chg = org.substring(i, i+1) + chg;  //위치별로 자른 스트링값을 순차적으로 뒤쪽부터 저장
        }
//        System.out.println("chg value----"+chg);//chg = 0021
        for (int j=0; j<chg.length(); j++){
            int tmp =0;
            tmp = Integer.parseInt(chg.substring(j, j+1));      //스트링 앞자리부터 Integer로 변환
            answer += tmp * (int) Math.pow(Double.parseDouble("3"), Double.parseDouble(String.valueOf(chg.length()-j-1)));  //0*3^3 + 0*3^2 + 2*3^1 + 1*3^0 = 7
        }
        System.out.println(answer);

        return answer;
    }
}
