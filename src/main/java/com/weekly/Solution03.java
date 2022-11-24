package com.weekly;

import java.util.LinkedList;
import java.util.Queue;

class Solution03 {
    static int[][] arr;
    public int solution(int n, int[][] wires) {
        int answer = n;
        arr= new int[n+1][n+1];

        for(int i=0; i<wires.length; i++){
            arr[wires[i][0]][wires[i][1]]=1;
            arr[wires[i][1]][wires[i][0]]=1;
        }

        int a, b;
        for(int i=0; i<wires.length; i++){
            a= wires[i][0];
            b= wires[i][1];

            arr[a][b]=0;
            arr[b][a]=0;

            answer= Math.min(answer, bfs(n, a));

            arr[a][b]=1;
            arr[b][a]=1;
        }

        return answer;
    }

    public int bfs(int n, int start){
        int[] visit= new int[n+1];
        int cnt=1;

        Queue<Integer> queue= new LinkedList<>();
        queue.offer(start);

        while(!queue.isEmpty()){
            int point= queue.poll();
            visit[point]= 1;

            for(int i=1; i<=n; i++){
                if(visit[i]==1) continue;
                if(arr[point][i]==1) {
                    queue.offer(i);
                    cnt++;
                }
            }
        }
        return (int)Math.abs(n-2*cnt);
    }
}

/*완전탐색
-모든 경우의 수 시도
-경우의 수에 따라 실행시간 비례

순차탐색(Sequential search)
-완전탐색 알고리즘

이진탐색
-탐색의 범위를 반씩 좁혀 나가는 것

경우의 수
-순열 : 순서있게 나열, 순서 상관 O
-조합 : 선택 순서 상관X*/
