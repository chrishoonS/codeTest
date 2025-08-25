package com;


import lombok.extern.slf4j.Slf4j;
import io.hypersistence.tsid.TSID;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.*;

@Slf4j
public class fooNote {

    public static void main(String[] args) {
//        String[] eventLoungeArr = { "1", "4"};
//        String[] eventLoungeArrBk = { "1", "2", "3"};
//        compareEventLoungeArrays(eventLoungeArr, eventLoungeArrBk);
        log.info("[generateStringId ] ::::: {}", generateStringId());
        log.info("[generateLongId   ] ::::: {}", generateLongId());
        log.info("[generateWithParam] ::::: {}", generateWithParam("3"));
    }

    // TSID의 문자열 버전(27자리 Base62) 반환
    public static String generateStringId() {
        // TSID(Time-Sorted Unique Identifier)
        // UUID처럼 전역 고유성 보장, 생성된 ID 시간순 정렬 가능
        // DB 인덱스 효율이 좋아져 UUID보다 성능이 우수
        return TSID.Factory.getTsid().toString(); // 27자리
    }

    // TSID를 Long 타입으로 반환 (시간 정렬된 숫자 ID)
    public static long generateLongId() {
        return TSID.Factory.getTsid().toLong();
    }

    public static String generateWithParam(String inputKey) {
        String tsid = TSID.Factory.getTsid().toString(); // 27자리
        String hash = shortHash(inputKey); // 6자리
        return tsid + "-" + hash; // 34자
    }

    private static String shortHash(String input) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hashBytes = digest.digest(input.getBytes(StandardCharsets.UTF_8));
            return Base64.getUrlEncoder()
                    .withoutPadding()
                    .encodeToString(hashBytes)
                    .substring(0, 6); // 길이 고정
        } catch (Exception e) {
            throw new RuntimeException("Hashing failed", e);
        }
    }

    public static void compareEventLoungeArrays(String[] eventLoungeArr, String[] eventLoungeArrBk) {
        Set<String> setA = new HashSet<>(Arrays.asList(eventLoungeArr));
        Set<String> setB = new HashSet<>(Arrays.asList(eventLoungeArrBk));

        if (eventLoungeArr.length > eventLoungeArrBk.length) {
            // A가 더 긴 경우 → A에만 있는 값
            Set<String> diff = new HashSet<>(setA);
            diff.removeAll(setB);
            System.out.println("eventLoungeArr에만 있는 값: " + diff);
            System.out.println("eventLoungeArr에 있는 값: " + setA);
            System.out.println("eventLoungeArrBk에 있는 값: " + setB);

        } else if (eventLoungeArr.length < eventLoungeArrBk.length) {
            // B가 더 긴 경우 → B에만 있는 값
            Set<String> diff = new HashSet<>(setB);
            List<String> list = new ArrayList<>();
            list.addAll(diff);
            System.out.println("TEST :::::  " + list);
            diff.removeAll(setA);
            System.out.println("eventLoungeArrBk에만 있는 값: " + diff);
            System.out.println("eventLoungeArrBk에 있는 값: " + setB);
            System.out.println("eventLoungeArr에 있는 값: " + setA);

        } else {
            // 길이는 같지만 내용이 다름
            if (!setA.equals(setB)) {
                Set<String> diffA = new HashSet<>(setA);
                diffA.removeAll(setB);

                Set<String> diffB = new HashSet<>(setB);
                diffB.removeAll(setA);

                System.out.println("eventLoungeArr에만 있는 값: " + diffA);
                System.out.println("eventLoungeArrBk에만 있는 값: " + diffB);
            } else {
                System.out.println("두 배열은 동일한 값을 가지고 있습니다.");
            }
        }
    }

}
