package com.test.level1;
import java.util.Arrays;
import java.util.HashSet;
import java.util.stream.Collectors;

public class Solution12 {
//    public int solution(int[] nums) {
//        int answer = 0;
//        HashSet<Integer> poketSet = new HashSet<>();
//        for(int i : nums){ //중복제거
//            poketSet.add(i);
//        }
//        answer = (poketSet.size() >= nums.length / 2) ? nums.length / 2 : poketSet.size();
//        return answer;
//    }

    public int solution(int[] nums) {
        /**
         * nums 배열을 받아 Arrays.stream(nums).boxed로 스트림을 생성한뒤,
         * Collectors.collectingAndThen로 Set으로 만들고,
         * phonekemons로 Set을 입력받아 phonkemons Set의 사이즈와 num.length/2의 최소값을 구해서,
         * Set의 int값 return
         * https://wakestand.tistory.com/419
         **/
        return Arrays.stream(nums)
                .boxed()
                .collect(Collectors.collectingAndThen(Collectors.toSet(),
                        phonekemons -> Integer.min(phonekemons.size(), nums.length / 2)));
    }
}
