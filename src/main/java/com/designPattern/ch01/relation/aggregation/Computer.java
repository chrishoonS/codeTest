package com.designPattern.ch01.relation.aggregation;

import com.designPattern.ch01.relation.part.CPU;
import com.designPattern.ch01.relation.part.MainBoard;
import com.designPattern.ch01.relation.part.Memory;
import com.designPattern.ch01.relation.part.PowerSupply;

/**
 * 집약(aggregation)
 * 전체 객체와 부분 객체의 생명주기가 다름
 * 부분 객체를 여러 전체 객체가 공유 가능
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

    // 생성자를 통해 외부에서 부품 전달 받음(객체 생성시 아래 부품도 자동으로 생성) - DI
    public Computer(MainBoard mb, CPU cpu, Memory m, PowerSupply ps) {
        this.mb = mb;
        this.cpu = cpu;
        this.m = m;
        this.ps = ps;
    }
}
