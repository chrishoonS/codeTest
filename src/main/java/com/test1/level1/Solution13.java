package com.test1.level1;

import java.util.Stack;

public class Solution13 {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        Stack[] boardStack = new Stack[board.length];   //화면용 Stack 배열
        Stack<Integer> basket = new Stack<Integer>();   //인형을 뽑아 담을 바구니 Stack

        //화면용 stack배열 안에 stack 만들기
        for(int i = 0; i < board.length; i++){
            boardStack[i] = new Stack<Integer>();
        }
        //배열 index를 맞춰주기 위해 입력 배열(board)의 길이-1
        for(int i = board.length-1; i >= 0; i--){
            for(int j=0; j < board.length; j++){
                if(board[i][j] != 0)
                    boardStack[j].push(board[i][j]);
            }
        }

        for(int i = 0; i< moves.length; i++) {
            // 이동은 최소 1이기에 -1로 index 조절
            // 해당 stack 비어있으며 그대로 진행
            if(boardStack[moves[i]-1].empty()) continue;
            //boardStack 맨 위에서 나올 숫자
            int popNo = (int) boardStack[moves[i]-1].pop();

            if(basket.size() == 0)          //빈 바구니에 최초 put
                basket.push(popNo);
            else{
                if(popNo == basket.peek()){ //바구니에서 같은 인형인지 값 확인
                    answer += 2;            //2개일 때 인형이 사라지므로 return값 +2
                    basket.pop();           //pop으로 해당값 삭제
                }else{ 
                    basket.push(popNo);     //아니면 그냥 push
                }
            }
        }
        return answer;
    }
}
