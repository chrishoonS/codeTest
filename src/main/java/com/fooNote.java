package com;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.Period;
import java.time.temporal.ChronoUnit;

public class fooNote {
    public static void main(String[] args) {

        LocalTime startTime = LocalTime.of(15, 42);
        LocalTime endTime = LocalTime.of(16, 42);

        Duration between1 = Duration.between(startTime, endTime);
        System.out.println("초 간격 = " + between1.getSeconds());
        System.out.println("나노 초 간격 = " + between1.getNano());
        System.out.println("간격이 음수인지 확인 = " + between1.isNegative());
        System.out.println("간격이 0인지 확인 = " + between1.isZero());

        LocalDate startDate = LocalDate.of(2021,3,11);
        LocalDate endDate = LocalDate.of(2021, 4, 15);

        Period between2 = Period.between(startDate, endDate);
        System.out.println("년간격 = " + between2.getYears());
        System.out.println("월간격 = " + between2.getMonths());
        System.out.println("일자간격 = " + between2.getDays());
        System.out.println("between.getUnits() = " + between2.getUnits());
        System.out.println("between.get(ChronoUnit.DAYS) = " + between2.get(ChronoUnit.DAYS));
    }

}
