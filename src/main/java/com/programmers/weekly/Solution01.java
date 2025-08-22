package com.programmers.weekly;

class Solution01 {
    /**
     * 경우에 따라서 더 효율적인 던전 파훼법이 존재
     * 단순히 우선순위가 아니기 때문에 완전탐색을 통해 모든 경우의 수를 구해야 함
     *
     **/
    public int answer = 0;
    public boolean[] chkDg;     //던전 방문여부 확인용 배열 선언

    public int solution(int k, int[][] dungeons) {
        chkDg = new boolean[dungeons.length];
        dfs(0, k, dungeons);
        return answer;
    }

    public void dfs(int cnt, int k, int[][] dungeons) {
        for (int i = 0; i < dungeons.length; i++) {
            if (!chkDg[i] && k >= dungeons[i][0]) {
                chkDg[i] = true;    //던전 방문 확인
                //던전방문횟수 cnt에 +1 하고, 현재 피로도-소모 피로도 값으로 다시 재귀호출
                dfs(cnt + 1, k - dungeons[i][1], dungeons);
                //하위 탐색법에서 재귀함수 호출하여 연산 후 다시 상위 조건을 맞춰준 후,
                //이 후에 호출되는 반복문을 통해 다른 경우의 수를 탐색한다.
                chkDg[i] = false;
            }
        }
        answer = Math.max(answer, cnt);
    }
}
/* 모든 경우의 수
 * 최초 : chkDg(f,f,f)
 * dfs(0, 80, dungeons)
 * i=0 -> chkDg(t,f,f)
 *        dfs(1, 60, dungeons)
 *        -> i=0 -> 조건 불충분
 *        -> i=1 -> chkDg(t,t,f)
 *                  dfs(2, 20, dungeons)
 *                  -> i=0 -> 조건 불충분
 *                  -> i=1 -> 조건 불충분
 *                  -> i=2 -> 조건 불충분
 *                  -> answer = Math.max(0, 2) = 2
 *                  chkDg[1] = false -> chkDg(t,f,f)
 *        -> i=2 -> chkDg(t,f,t)
 *                  dfs(2, 50, dungeons)
 *                  -> i=0 -> 조건 불충분
 *                  -> i=1 -> chkDg(t,t,t)
 *                            dfs(3, 10, dungeons)
 *                            -> i=0 -> 조건 불충분
 *                            -> i=1 -> 조건 불충분
 *                            -> i=2 -> 조건 불충분
 *                            -> answer = Math.max(2, 3) = 3
 *                            chkDg[1] = false -> chkDg(t,f,t)
 *                  -> i=2 -> 조건 불충분
 *                         -> answer = Math.max(3, 2) = 3
 *                     chkDg[2] = false -> chkDg(t,f,f)
 *               -> answer = Math.max(3, 1) = 3
 *        -> chkDg[0] = false -> chkDg(f,f,f)
 * i=1 -> chkDg(f,t,f)
 *        dfs(1, 40, dungeons)
 *        -> i=0 -> 조건 불충분
 *        -> i=1 -> 조건 불충분
 *        -> i=2 -> chkDg(f,t,t)
 *                  dfs(2, 30, dungeons)
 *                  -> i=0 -> 조건 불충분
 *                  -> i=1 -> 조건 불충분
 *                  -> i=2 -> 조건 불충분
 *                  -> answer = Math.max(3, 2) = 3
 *                  chkDg[2] = false -> chkDg(f,t,f)
 *                  answer = Math.max(3, 1) = 3
 *        chkDg[1] = false -> chkDg(f,f,f)
 * i=2 -> chkDg(f,f,t)
 *        dfs(1, 70, dungeons)
 *        -> i=0 -> 조건 불충분
 *        -> i=1 -> chkDg(f,t,t)
 *                  dfs(2, 30, dungeons)
 *                  -> i=0 -> 조건 불충분
 *                  -> i=1 -> 조건 불충분
 *                  -> i=2 -> 조건 불충분
 *                  -> answer = Math.max(3, 2) = 3
 *                  chkDg[1] = false -> chkDg(f,f,t)
 *        -> i=2 -> 조건 불충분
 *               -> answer = Math.max(3, 1) = 3
 *        chkDg[2] = false -> chkDg(f,f,f)
 *        -> answer = Math.max(3, 0) = 3
 */
