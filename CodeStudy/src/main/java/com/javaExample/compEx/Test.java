package com.javaExample.compEx;

import java.util.Arrays;
import java.util.Comparator;

public class Test {
    public static void main(String[] args) {
        Student student[] = new Student[5];
        student[0] = new Student("Dave", 20120001, 4.2);
        student[1] = new Student("Amie", 20150001, 4.5);
        student[2] = new Student("Emma", 20110001, 3.5);
        student[3] = new Student("Brad", 20130001, 2.8);
        student[4] = new Student("Cara", 20140001, 4.2);
        Arrays.sort(student, new Comparator<Student>() {
            @Override
            public int compare(Student o1, Student o2) {
                double o1Score = o1.score;
                double o2Score = o2.score;
                if(o1Score == o2Score){ //학점 같으면 학번 오름차순
                    return Double.compare(o1.id, o2.id);
                }
                return Double.compare(o1Score, o2Score);
            }
        });
        for (int i = 0; i < 5; i++) {
            System.out.println(student[i]);
        }
    }
}
