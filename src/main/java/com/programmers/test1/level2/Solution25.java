package com.programmers.test1.level2;

import java.util.Stack;

public class Solution25 {
    public int solution(String s) {
        int answer = 0;
        for (int i = 0; i < s.length(); i++) {
            if (isAnswer(s)) {
                answer++;
            }
            s = String.format("%s%s", s.substring(1), s.charAt(0));
        }
        return answer;
    }

    private boolean isAnswer(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            switch (c) {
                case '[': 
                case '{': 
                case '(': 
                    stack.push(c);
                    break;
                case ']': 
                    if (!isValid(stack, '[')) return false;
                    break;
                case '}': 
                    if (!isValid(stack, '{')) return false;
                    break;
                case ')': 
                    if (!isValid(stack, '(')) return false;
                    break;
            }
        }
        return stack.isEmpty();
    }

    private boolean isValid(Stack<Character> stack, char brk) {
        if (!stack.isEmpty() && stack.peek() == brk) {
            stack.pop();
            return true;
        }
        return false;
    }
}