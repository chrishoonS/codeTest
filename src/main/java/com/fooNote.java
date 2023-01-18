package com;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class fooNote {
    public static void main(String[] args) {

        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter dtfDate = DateTimeFormatter.ofPattern("yyyyMMdd");

        String nowStr = "";
        String plusStr = "";
        String result = "";

        nowStr = now.format(dtfDate);
        plusStr = now.plusDays(1).format(dtfDate);

        System.out.println(nowStr);
        System.out.println(plusStr);
//        System.out.println();
//
//        System.out.println(setBaseDateTime(now.plusMinutes(796), "getUltraSrtNcst"));

    }

    private static String setBaseDateTime(LocalDateTime now, String urlPath) {

        String result = "";

        DateTimeFormatter dtfFull = DateTimeFormatter.ofPattern("yyyyMMddHHmm");
        DateTimeFormatter dtfDate = DateTimeFormatter.ofPattern("yyyyMMdd");

        String baseDate = (now.format(dtfFull)).substring(0, 8);

        int mm = 0;             //계산에 의해 더할 시간
        String addStr = "";     //baseTime 만들어줄 str

        switch (urlPath) {
            case "getUltraSrtNcst":
                mm = 15;
                addStr = "00";
                break;

            case "getUltraSrtFcst":
                mm = 10;
                addStr = "30";
                break;

            case "getVilageFcst":
                mm = 45;
                addStr = "00";
                break;
        }

        int baseTimeIndex = 0;

        if( !urlPath.equals("getVilageFcst") ){ //초단기 실황, 예보

            baseTimeIndex = now.plusMinutes(mm).getHour() / 1;

            if( baseTimeIndex > 0)
                result = baseDate + String.format("%02d", baseTimeIndex - 1) + addStr;
            else{
                if(("getUltraSrtNcst").equals(urlPath)){
                    baseDate = now.minusDays(1).format(dtfDate);
                    result = baseDate + "2300";
                }else{
                    baseDate = now.minusDays(1).format(dtfDate);
                    result = baseDate + "2330";
                }
            }

        } else{ //단기

            baseTimeIndex = now.plusMinutes(mm).getHour() / 3;

            if( baseTimeIndex > 0)
                result = baseDate + String.format("%02d", (baseTimeIndex * 3) - 1) + addStr;
            else{
                baseDate = now.minusDays(1).format(dtfDate);
                result = baseDate + "2300";
            }
        }

        return result;
    }
}
