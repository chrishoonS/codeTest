package com.test;

import java.util.Arrays;

public class Solution17 {
    public int solution(String dartResult) {
        int answer = 0;
        String regExp1 = "\\D+";    //숫자를 제외한 모든 문자
        String regExp2 = "\\d+";    //0~9 숫자
        String[] score  = dartResult.split(regExp1); //해당 정규식을 기준으로 점수만 분리
        String[] option = dartResult.split(regExp2); //옵션만
        String[] chgOpt = new String[option.length - 1];

        int _1p = Integer.parseInt(score[0]);

        for (int i=0; i<option.length-1; i++) {     //0번째 빈 인덱스 삭제
            chgOpt[i] = option[i+1];
        }

        for (int i=0; i< score.length; i++) {
            if (chgOpt[i].contains("S")) {
                answer += Integer.parseInt(score[i]);
                if (chgOpt[i].contains("*")) {
                    answer *= 2;
                } else if (chgOpt[i].contains("#")) {
                    answer *= -1;
                }
            } else if (chgOpt[i].contains("D")) {
                answer = (int) Math.pow(_1p, 2);
                if (chgOpt[i].contains("*")) {
                    answer *= 2;
                } else if (chgOpt[i].contains("#")) {
                    answer *= -1;
                }
            } else if (chgOpt[i].contains("T")) {
                answer = (int) Math.pow(_1p, 3);
                if (chgOpt[i].contains("*")) {
                    answer *= 2;
                } else if (chgOpt[i].contains("#")) {
                    answer *= -1;
                }
            }
        }

        System.out.println(Arrays.toString(score));
        System.out.println(Arrays.toString(option));
        System.out.println(Arrays.toString(chgOpt));
        return answer;
    }

    private int solve(String score, String chgOpt) {
        int val = Integer.parseInt(score);

        return val;
    }
}
