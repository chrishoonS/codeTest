package com.openAPI.vo;

import lombok.Data;

@Data
public class WeatherVO {

    private int locationCode;
    private String date;
    private String time;

    private double POP; //강수확률
    private double PTY; //강수형태
    private double PCP; //1시간 강수량
    private double REH; //습도
    private double SNO; //1시간 신적설
    private double SKY; //하늘상태
    private double TMP; //1시간 기온
    private double TMN; //일 최저기온
    private double TMX; //일 최고기온
    private double UUU; //풍속(동서성분)
    private double VVV; //풍속(남북성분)
    private double WAV; //파고
    private double VEC; //풍향
    private double WSD; //풍속
    private double RN1; //1시간 강수량

    @Override
    public String toString() {
        return "WeatherVO{" +
                "locationCode=" + locationCode +
                ", date='" + date + '\'' +
                ", time='" + time + '\'' +
                ", POP=" + POP +
                ", PTY=" + PTY +
                ", PCP=" + PCP +
                ", REH=" + REH +
                ", SNO=" + SNO +
                ", SKY=" + SKY +
                ", TMP=" + TMP +
                ", TMN=" + TMN +
                ", TMX=" + TMX +
                ", UUU=" + UUU +
                ", VVV=" + VVV +
                ", WAV=" + WAV +
                ", VEC=" + VEC +
                ", WSD=" + WSD +
                ", RN1=" + RN1 +
                '}';
    }
}

