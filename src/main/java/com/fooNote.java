package com;

import java.io.IOException;

public class fooNote {
    public static void main(String[] args) throws IOException {
        int w = read();
        int x = read();
        int y = read();
        int z = read();

        System.out.println(w);
        System.out.println(x);
        System.out.println(y);
        System.out.println(z);
    }
    static int read() throws IOException {
        int c;
        int n = System.in.read() & 15;

        n = (n << 3);
        System.out.println("n1 ::: " + n);
        n = (n << 1);
        System.out.println("n2 ::: " + n);

        while ((c = System.in.read()) > 32) {

            n = (c & 15);
            System.out.println("n3 ::: " + n);
            n = (n << 3) + (n << 1) + (c & 15);
            System.out.println("n4 ::: " + n);
        }
        return n;
    }
}
