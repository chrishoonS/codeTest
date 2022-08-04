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

    /*public int[] solution(String[] id_list, String[] report, int k) {
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
    }*/

    public int[] solution(String[] id_list, String[] report, int k) {
        class User{
            String name;
            HashSet<String> reportList;
            HashSet<String> reportedList;
            public User(String name){
                this.name = name;
                reportList = new HashSet<>();
                reportedList = new HashSet<>();
            }
        }

        int[] answer = new int[id_list.length];
        ArrayList<User> users = new ArrayList<>();
        HashMap<String, Integer> suspendedList = new HashMap<>();
        HashMap<String, Integer> idIdx = new HashMap<String,Integer>();
        int idx = 0;

        for(String name : id_list) {
            idIdx.put(name, idx++);
            users.add(new User(name));
        }

        for(String re : report){
            String[] str = re.split(" ");
            users.get( idIdx.get(str[0])).reportList.add(str[1]);
            users.get( idIdx.get(str[1])).reportedList.add(str[0]);
        }

        for(User user : users){
            if(user.reportedList.size() >= k)
                suspendedList.put(user.name,1);
        }

        for(User user : users){
            for(String nameReport : user.reportList){
                if(suspendedList.get(nameReport) != null){
                    answer[idIdx.get(user.name)]++;
                }

            }
        }
        return answer;
    }
}
