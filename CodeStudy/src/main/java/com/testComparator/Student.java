package com.testComparator;

public class Student implements Comparable<Student>{
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