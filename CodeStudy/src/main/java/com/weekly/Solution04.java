package com.weekly;

class Solution04 {
    public int solution(String word) {
        int answer = word.length();
        String str = "AEIOU";
        int cnt[] = {781,156,31,6,1}; //각 자리수 변하는 횟수 규칙
        /*
        A AA AAA AAAA AAAAA E I O U 9
                 AAAE AAAEA E I O U 15
                 AAAI AAAIA E I O U 21
                 AAAO AAAOA E I O U 27
                 AAAU AAAOA E I O U 33
             34 AAE AAEA AAEAA E I O U

        */
        int idx=0; //word 각 문자열 인덱스
        for(int i=0; i<word.length(); i++){
            idx = str.indexOf(word.charAt(i));
            answer += cnt[i] * idx;
        }
        return answer;
    }
}