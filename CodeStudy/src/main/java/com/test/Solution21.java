package com.test;

import java.util.*;

public class Solution21 {
    public int[] solution(String[] id_list, String[] report, int k) {
        int[] answer = new int[id_list.length];
        String[] tmp1 = {}; //신고자, 피신고자
        Set<String> banSet = new HashSet<>();//정지당한 유저

        HashMap<String, Integer> rptMap = new HashMap<>();        //해당유저가 신고당한 횟수를 담는 맵
        HashMap<String, List<String>> userRptMap = new HashMap<>(); //유저가 신고한 유저리스트를 담는 맵

        for (int i=0; i< id_list.length; i++) {
            int rptCnt = 0;                     //유저가 신고당한 횟수
            rptMap.put(id_list[i],rptCnt);
            List<String> banNm= new ArrayList<>();

            for (int j=0; j< report.length; j++) { //tmp1[신고자, 피신고자]
                tmp1 = report[j].split(" ",2);
                if(tmp1[0].equals(id_list[i])){
                    if(!banNm.contains(tmp1[1])){
                        banNm.add(tmp1[1]);
                    }else{
                        banNm.remove(tmp1[1]);
                    }
                }
                if(tmp1[1].equals(id_list[i])){
                    rptCnt++;
                    rptMap.put(id_list[i], rptCnt);
                }
            }
            userRptMap.put(id_list[i], banNm);
            if(rptMap.get(id_list[i]) >= k){    //k번 이상시 신고셋에 들어감
                banSet.add(id_list[i]);
            }
        }
        for (int i=0; i< id_list.length; i++) {
            int mailCnt = 0;
            for (int j=0; j<userRptMap.get(id_list[i]).size(); j++) {
                if(banSet.contains(userRptMap.get(id_list[i]).get(j))){
                    mailCnt++;
                }
            }
            answer[i] = mailCnt;
        }
        System.out.println(banSet);
        System.out.println(userRptMap);
        System.out.println(rptMap);
        System.out.println(Arrays.toString(answer));

        return answer;
    }
}
