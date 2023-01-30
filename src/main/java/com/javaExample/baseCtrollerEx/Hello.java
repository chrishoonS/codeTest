package com.javaExample.baseCtrollerEx;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/hello")
public class Hello extends BaseController {

    /**
     *
     */
    private static final long serialVersionUID = 6519981277847414078L;

    @Override
    public String doRun(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String view = "hello";
        return view;
    }

}
