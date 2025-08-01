package com;


import lombok.extern.slf4j.Slf4j;

import java.util.*;

@Slf4j
public class fooNote {

    public static void main(String[] args) {
        String[] eventLoungeArr = { "1", "4"};
        String[] eventLoungeArrBk = { "1", "2", "3"};

        compareEventLoungeArrays(eventLoungeArr, eventLoungeArrBk);
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
