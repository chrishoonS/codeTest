package com.test.level1;

import java.util.*;
import java.util.stream.Collectors;

public class Solution21 {
    /*public int[] solution(String[] id_list, String[] report, int k) {
        int[] answer = new int[id_list.length];
        Map<String, HashSet<String>> userMap = new HashMap<>();
        Map<String, Integer> idxMap = new HashMap<>();

        for (int i = 0; i < id_list.length; i++) {
            String name = id_list[i];
            userMap.put(name, new HashSet<>());
            idxMap.put(name, i);
        }

        for (String s : report) {
            String[] str = s.split(" ");
            String rpt = str[0];
            String rpted = str[1];
            userMap.get(rpted).add(rpt);
        }

        for (int i = 0; i < id_list.length; i++) {
            HashSet<String> mailSend = userMap.get(id_list[i]);
            if (mailSend.size() >= k) {
                for (String name : mailSend) {
                    answer[idxMap.get(name)]++;
                }
            }
        }
        return answer;
    }*/

    public int[] solution(String[] id_list, String[] report, int k) {
        List<String> list = Arrays.stream(report).distinct().collect(Collectors.toList());
        HashMap<String, Integer> count = new HashMap<>();
        for (String s : list) {
            String target = s.split(" ")[1];
            count.put(target, count.getOrDefault(target, 0) + 1);
        }

        return Arrays.stream(id_list).map(_user -> {
            final String user = _user;
            List<String> reportList = list.stream().filter(s -> s.startsWith(user + " ")).collect(Collectors.toList());
            return reportList.stream().filter(s -> count.getOrDefault(s.split(" ")[1], 0) >= k).count();
        }).mapToInt(Long::intValue).toArray();
    }
}
