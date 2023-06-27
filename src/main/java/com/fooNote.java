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
        LocalDateTime ldt = LocalDateTime.of(2023, 6, 27, 00, 01, 55);

        System.out.println(setBaseDateTime(ldt, "getUltraSrtNcst"));
        System.out.println(setBaseDateTime(ldt, "getUltraSrtFcst"));
        System.out.println(setBaseDateTime(ldt, "getVilageFcst"));
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

}
