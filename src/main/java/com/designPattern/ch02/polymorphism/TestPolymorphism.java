package com.designPattern.ch02.polymorphism;

public class TestPolymorphism {

    public static void groupTalk(Pet[] p){

        for (int i=0 ; i < 3; i++) {
            p[i].talk();
        }

    }

    public static void main(String[] args) {
        Pet[] p = {new Cat(), new Dog(), new Parrot()};
        groupTalk(p);
    }
}
