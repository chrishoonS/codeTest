package com.programmers.level1;

import java.util.HashMap;
import java.util.Map;

public class Excercise31 {
    public String[] solution(String[] players, String[] callings) {
        Map<String, Integer> playersMap = new HashMap<>();
        for(int i=0; i < players.length; i++)
            playersMap.put(players[i], (i+1));

        for(int i=0; i<callings.length; i++) {
            // 호명된 선수를 담을 임시 변수
            String temp = "";
            // 호명된 선수 이름의 순번이 인덱스의 +1이므로, 앞지르고 인덱스를 맞춰줘야 하기 때문에 -2
            temp = players[playersMap.get(callings[i])-2];
            // 호명된 선수 자리에 뒤쳐진 선수 저장
            players[playersMap.get(callings[i])-2] = players[playersMap.get(callings[i])-1];
            players[playersMap.get(callings[i])-1] = temp;

            // 호명된 선수의 변경된 등수 인덱스 변경
            playersMap.put(callings[i], playersMap.get(callings[i])-1);
            playersMap.put(temp, playersMap.get(temp)+1);

        }
        return players;

    }
}