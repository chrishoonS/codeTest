package com;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class fooNote {
    public static void main(String[] args) {
        Function(5);
    }

    public static void Function(int num) {
        if(num == 0)
            return;
        else {
            System.out.println("반갑습니다");
            Function(num - 1);
        }
    }
}
