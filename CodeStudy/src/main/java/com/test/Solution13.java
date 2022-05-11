package com.test;

import java.util.Stack;

public class Solution13 {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        Stack[] boardStack = new Stack[board.length];  //화면용 stack 배열
        Stack<Integer> basket = new Stack<Integer>();   //바구니 stack
        
        for(int i=0; i<board.length; i++) //화면용 stack배열 안에 stack 만들기
            boardStack[i] = new Stack<Integer>();

        for(int i=board.length-1; i>= 0; i--){
            for(int j=0; j<board.length; j++)
                if(board[i][j] != 0)
                    boardStack[j].push(board[i][j]);
        }

        for(int i = 0; i<moves.length; i++)
        {
            if(boardStack[moves[i]-1].empty())    //해당 stack 비어있으며 그대로 진행
                continue;
            int popNo = (int) boardStack[moves[i]-1].pop(); //moves 배열 순서에 따라 boardStack 맨 위에서 나올 숫자

            if(basket.size() == 0)
                basket.push(popNo);
            else{
                if(popNo == basket.peek()){ //바구니에서 같은 인형일때 숫자 2올리고 삭제
                    answer+=2;
                    basket.pop();
                }else{ 
                    basket.push(popNo);
                }
            }
        }
        return answer;
    }
}
