package com.auth;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AuthInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // Perform authentication checks
        boolean isAuthenticated = true; // Check if the user is authenticated
        if (!isAuthenticated) {
            System.out.println("!!!!!!!!success preHandle!!!!!!");
            response.sendRedirect("/login");
            return false;
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        // Perform any post-processing
        System.out.println("!!!!postHandle!!!!");
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        // Perform any cleanup
        System.out.println("!!!!afterCompletion!!!!");
    }
}