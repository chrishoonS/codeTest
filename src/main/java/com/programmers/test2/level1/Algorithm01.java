package com.programmers.test2.level1;

import java.util.HashMap;

public class Algorithm01 {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        HashMap<String, Integer> map = new HashMap<>();

        //getOrDefault = 찾는 key가 존재한다면 찾는 key의 value를 반환, 없거나 null이면 default 값 반환
        for (String player : participant) map.put(player, map.getOrDefault(player, 0) + 1);
        for (String player : completion) map.put(player, map.get(player) - 1);

        //entrySet() : key와 value의 값 모두 출력
        //keySet() : key의 값만 출력
        //Iterator : 자바의 컬렉션 프레임워크에서 컬렉션에 저장되어 있는 요소들을 읽어오는 방법
        for (String key : map.keySet()) {
            if (map.get(key) != 0){
                answer = key;
                break;
            }
        }
        return answer;
    }
}