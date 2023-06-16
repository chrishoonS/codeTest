package com;

import org.springframework.util.Assert;

public class fooNote {
    public static void main(String[] args) {
        String url = "ttttttt", method = "nullsdfsdfsdf";
        Assert.notNull(url, "'url' must not be null");
        Assert.notNull(method, "'method' must not be null");
    }
}
