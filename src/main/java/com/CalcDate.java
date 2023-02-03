package com;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class CalcDate {
    public static void main(String[] args) {

        LocalDateTime     now         = LocalDateTime.parse("2023-02-03T02:15:00.001");

        //테스트 함수
        String s1 = setBaseDateTime(now, "getUltraSrtNcst");
        String s2 = setBaseDateTime(now, "getUltraSrtFcst");
        String s3 = setBaseDateTime(now, "getVilageFcst");
        String s4 = setMidTmFc(now);
        String s5 = setMidTmFc(now);

        System.out.println(s1);
        System.out.println("^^^^^^^^^^^^");

        System.out.println(s2);
        System.out.println("^^^^^^^^^^^^");

        System.out.println(s3);
        System.out.println("^^^^^^^^^^^^");

        System.out.println(s4);
        System.out.println("^^^^^^^^^^^^");

        System.out.println(s5);
        System.out.println("^^^^^^^^^^^^");

    }

    private static String setBaseDateTime(LocalDateTime now, String urlPath) {

        String result = "";

        DateTimeFormatter dtfDate = DateTimeFormatter.ofPattern("yyyyMMdd");

        String baseDate = now.format(dtfDate);

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

        String plusDate = now.plusMinutes(mm).format(dtfDate);

        DateFormat format = new SimpleDateFormat("yyyyMMdd");

        long days = 0L, sec = 0L;

        try {
            Date d1 = format.parse(baseDate);
            Date d2 = format.parse(plusDate);

            sec = (d2.getTime() - d1.getTime()) / 1000; // 초
            days = sec / (24 * 60 * 60);                // 일자수

        } catch (ParseException e) {
            throw new RuntimeException(e);
        }

        int baseTimeIndex = 0;

        if( !urlPath.equals("getVilageFcst") ){ //초단기 실황, 예보

            baseTimeIndex = now.plusMinutes(mm).getHour() / 1;

            if( baseTimeIndex > 0) {
                result = baseDate + String.format("%02d", baseTimeIndex - 1) + addStr;

            }else{

                if(days > 0){ //시간 더했을때 하루 지난경우

                    if(("getUltraSrtNcst").equals(urlPath)){

                        baseDate = now.minusDays(1).format(dtfDate);
                        result = baseDate + "2300";

                    }else{

                        baseDate = now.minusDays(1).format(dtfDate);
                        result = baseDate + "2330";

                    }

                } else{ //시간 더했을 때 하루 안지난 경우(하루 지난 상태에서 전날꺼를 호출해야 할 때)

                    if(("getUltraSrtNcst").equals(urlPath)){

                        if(baseTimeIndex == 0){
                            baseDate = now.minusDays(1).format(dtfDate);
                        }

                        result = baseDate + "2300";

                    }else{
                        if(baseTimeIndex == 0){
                            baseDate = now.minusDays(1).format(dtfDate);
                        }

                        result = baseDate + "2330";
                    }

                }
            }

        } else{ //단기

            baseTimeIndex = now.plusMinutes(mm).getHour() / 3;

            if( baseTimeIndex > 0) {
                result = baseDate + String.format("%02d", (baseTimeIndex * 3) - 1) + addStr;

            }else{
                if(days > 0){ //시간 더했을때 하루 지난경우

                    baseDate = now.minusDays(1).format(dtfDate);
                    result = baseDate + "2300";

                } else{ //하루 안지난 경우

                    if(baseTimeIndex == 0){
                        baseDate = now.minusDays(1).format(dtfDate);
                    }
                    result = baseDate + "2300";
                }
            }
        }

        return result;
    }


    private static String setMidTmFc(LocalDateTime now) {

        //1일 2회, 발표시각 : 0600, 1800
        //전날1805 ~ 0604 0605이후 당일 0600 나머지 전날 1800
        //0605 ~ 1804 1805이후 당일 1800 나머지 당일 0600

        String result = "";
        DateTimeFormatter dtfDate = DateTimeFormatter.ofPattern("yyyyMMdd");

        String currentDate = now.format(dtfDate);

        int timeIndex = now.minusMinutes(5).getHour() / 6;

        if(timeIndex >= 0 && timeIndex < 1){
            result = now.minusDays(1).format(dtfDate) + "1800";

        } else if( timeIndex >= 1 && timeIndex < 3 ){
            result = currentDate + "0600";

        }else {
            result = currentDate + "1800";
        }

        return result;
    }
}
