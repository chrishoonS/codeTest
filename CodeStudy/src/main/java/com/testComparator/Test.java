package com.testComparator;

import java.util.Arrays;
import java.util.Comparator;

class Student implements Comparable<Student>{
    String name;
    int id;
    double score;
    public Student(String name, int id, double score){
        this.name = name;
        this.id = id;
        this.score = score;
    }

    public String toString(){
        return "이름: " +name+ " / 학번: " +id+ " / 학점: " +score;
    }

    public int compareTo(Student anotherStd) {
        //정렬이 진행도리 때 정렬 여부를 결정하는 값을 넘겨줌
        //return 값이 0 or 음수 = 자리바꿈 X, 양수면 자리바꿈(오름차순)
        return Integer.compare(id, anotherStd.id);
    }
}

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
