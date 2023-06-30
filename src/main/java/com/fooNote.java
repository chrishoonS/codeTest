package com;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class fooNote {

    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter dtfFull     = DateTimeFormatter.ofPattern("yyyyMMddHHmm");
        String            currentDate = now.format(dtfFull).substring(0, 8);


        LocalDateTime ldt = LocalDateTime.of(2023, 6, 28, 00, 01, 55);
        LocalDateTime ldt2 = LocalDateTime.of(2023, 6, 28, 00, 05, 00);
        LocalDateTime ldt3 = LocalDateTime.of(2023, 6, 28, 01, 59, 55);
        LocalDateTime ldt4 = LocalDateTime.of(2023, 6, 28, 02, 00, 00);
        LocalDateTime ldt5 = LocalDateTime.of(2023, 6, 28, 02, 14, 00);

        System.out.println(Integer.parseInt(currentDate.substring(6,8)) > Integer.parseInt(setBaseDateTime(ldt, "getVilageFcst").substring(6,8)));
        System.out.println("----------------------------------------");
        System.out.println("now : " + setBaseDateTime(now, "getUltraSrtNcst"));
        System.out.println("now : " + setBaseDateTime(now, "getUltraSrtFcst"));
        System.out.println("now : " + setBaseDateTime(now, "getVilageFcst"));
        System.out.println("----------------------------------------");
        System.out.println("ldt : " + setBaseDateTime(ldt, "getUltraSrtNcst"));
        System.out.println("ldt : " + setBaseDateTime(ldt, "getUltraSrtFcst"));
        System.out.println("ldt : " + setBaseDateTime(ldt, "getVilageFcst"));
        System.out.println("----------------------------------------");
//        System.out.println("ldt2 : " + setBaseDateTime(ldt2, "getUltraSrtNcst"));
//        System.out.println("ldt2 : " + setBaseDateTime(ldt2, "getUltraSrtFcst"));
//        System.out.println("ldt2 : " + setBaseDateTime(ldt2, "getVilageFcst"));
//        System.out.println("----------------------------------------");
//        System.out.println("ldt3 : " + setBaseDateTime(ldt3, "getUltraSrtNcst"));
//        System.out.println("ldt3 : " + setBaseDateTime(ldt3, "getUltraSrtFcst"));
//        System.out.println("ldt3 : " + setBaseDateTime(ldt3, "getVilageFcst"));
//        System.out.println("----------------------------------------");
//        System.out.println("ldt4 : " + setBaseDateTime(ldt4, "getUltraSrtNcst"));
//        System.out.println("ldt4 : " + setBaseDateTime(ldt4, "getUltraSrtFcst"));
//        System.out.println("ldt4 : " + setBaseDateTime(ldt4, "getVilageFcst"));
//        System.out.println("----------------------------------------");
//        System.out.println("ldt5 : " + setBaseDateTime(ldt5, "getUltraSrtNcst"));
//        System.out.println("ldt5 : " + setBaseDateTime(ldt5, "getUltraSrtFcst"));
//        System.out.println("ldt5 : " + setBaseDateTime(ldt5, "getVilageFcst"));
        System.out.println("----------------------------------------");

//        System.out.println("현재시각기준 : " + setMidTmFc(now));
//        System.out.println("0001기준 : " + setMidTmFc(ldt));
//        System.out.println("0005기준 : " + setMidTmFc(ldt2));
//        System.out.println("0559기준 : " + setMidTmFc(ldt3));
//        System.out.println("0600기준 : " + setMidTmFc(ldt4));
//        System.out.println("0605기준 : " + setMidTmFc(ldt5));
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

        int hour = now.getHour();
        int hourBefore5 = now.minusMinutes(5).getHour();
        int timeIndex = hourBefore5 / 6;

        // 현재시간이 5분을 빼고난 시간보다 크거나 같을때
        if (hour >= hourBefore5){
            if(timeIndex < 1){
                //0000~0604
                result = now.minusDays(1).format(dtfDate) + "1800";

            } else if( timeIndex >= 1 && timeIndex < 3 ){
                //0605~1804
                result = currentDate + "0600";

            }else {
                //1805~
                result = currentDate + "1800";
            }

        }else{
            //5분을 뺐을때 어제인 경우
            result = now.minusDays(1).format(dtfDate) + "1800";
        }

        return result;
    }

}
