package com.javaExample.overTest;

public class OverridingTest {
    public static void main(String[] args) {
        Student std = new Student();
        std.name = "SJH";
        std.age = 33;
        std.job = "이직생";

        std.print();
    }
}
