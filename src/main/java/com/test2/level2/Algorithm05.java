package com.test2.level2;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class Algorithm05 {
    public int solution(String[][] clothes) {

        int answer = 1;
        Map<String, Integer> hm = new HashMap<>();

        // 용도별 의상 개수 카운트
        for (int i = 0; i < clothes.length; i++) {
            String key = clothes[i][1];
            hm.put(key, hm.getOrDefault(key, 0) + 1);
            //{eyewear=1, headgear=2}
        }

        // 종류별 옷 가지수 iterator
        Iterator<Integer> iter = hm.values().iterator(); // 1,2


        while (iter.hasNext()) {
            // 옷의 종류를 입는 경우들과 안입는 경우를 더해준다.
            answer *= iter.next().intValue() + 1;
        }

        // 아무 것도 안입는 경우는 제외
        return answer - 1;
    }
}
