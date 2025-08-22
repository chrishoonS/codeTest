package com.programmers.test1.level2;

import java.util.ArrayList;

public class Solution27 {
    static int R, C;                                         // 행(row), 열(column)
    static int[] dr = { -1, 0, 1, 0 }, dc = { 0, -1, 0, 1 };
    static boolean[][][] isVisited;

    public int[] solution(String[] grid) {
        // 결과를 저장할 리스트, 각 사이클 길이 저장
        ArrayList<Integer> answer = new ArrayList<Integer>();

        // 격자 크기 저장
        R = grid.length;
        C = grid[0].length();

        // 각 셀의 4방향에 대해 방문 여부 기록하는 3차원 배열
        isVisited = new boolean[R][C][4];

        // 모든 셀 순회
        for (int i = 0; i < R; i++) {
            for (int j = 0; j < C; j++) {
                for (int d = 0; d < 4; d++) {
                    // 해당 셀 방향에서 출발 후 방문하지 않았다면 light() 함수로 사이클을 탐색하고, 사이클 길이 저장
                    if (!isVisited[i][j][d])
                        answer.add(light(grid, i, j, d ));
                }
            }
        }

        // ArrayList를 정렬 후 int[] 배열로 변환
        return answer.stream().sorted().mapToInt(i -> i).toArray();
    }

    // 격자 grid에서 좌표 (r, c)와 방향 d에서 출발해 사이클을 완주하는 함수
    private static int light(String[] grid, int r, int c, int d) {

        int cnt = 0; // 사이클 이동거리

        // 이미 해당 방향으로 방문했다면 사이클 종료
        while (true) {
            if (isVisited[r][c][d])
                break;

            cnt++;	// 거리증가
            isVisited[r][c][d] = true; // 방문처리

            if (grid[r].charAt(c) == 'L')
                d = d == 0 ? 3 : d - 1; // 좌회전
            else if (grid[r].charAt(c) == 'R')
                d = d == 3 ? 0 : d + 1; // 우회전

            r = (r + dr[d] + R) % R;
            c = (c + dc[d] + C) % C;
        }

        return cnt;
    }
}