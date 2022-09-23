package com.javaExample.autowiredEx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestService {
    /**
     * https://jjingho.tistory.com/6
     **/
    TestRepository testRepository;

    @Autowired //spring이 의존성 주입시도
    public void setTestService(TestRepository testRepository){
        this.testRepository = testRepository;
    }
}
