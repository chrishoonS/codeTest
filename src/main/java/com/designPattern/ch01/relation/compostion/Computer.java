package com.designPattern.ch01.relation.compostion;

import com.designPattern.ch01.relation.part.CPU;
import com.designPattern.ch01.relation.part.MainBoard;
import com.designPattern.ch01.relation.part.Memory;
import com.designPattern.ch01.relation.part.PowerSupply;

/**
 * 합성(compostion)
 * 전체 객체가 없어지면 부분 객체도 없어짐
 * 부분 객체를 여러 전체 객체가 공유할 수 없다.
 *
 * Computer 클래스 관계 다이어그램
 *  ├── MainBoard mb
 *  ├── CPU cpu
 *  ├── Memory m
 *  └── PowerSupply ps
**/
public class Computer {

    // 부품 필드로 선언
    private MainBoard mb;
    private CPU cpu;
    private Memory m;
    private PowerSupply ps;

    // 생성자 내부에서 각 부품 직접 생성(컴퓨터 객체 생성시 아래 부품도 자동으로 생성)
    public Computer() {
        this.mb = new MainBoard();
        this.cpu = new CPU();
        this.m = new Memory();
        this.ps = new PowerSupply();
    }
}
