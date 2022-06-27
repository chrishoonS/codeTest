package com.weekly;

import java.util.ArrayList;
import java.util.List;

public class Solution02 {

    public String[] solution(int[][] line) {
        List<long[]> list = new ArrayList<>();
        //x,y 좌표의 각각 최소,최대 값을 가져오기 위해 기본 값을 반대로 셋팅
        long minX = Long.MAX_VALUE; //Long타입 가장 큰 수
        long maxX = Long.MIN_VALUE; //Long타입 가장 작은 수
        long minY = Long.MAX_VALUE;
        long maxY = Long.MIN_VALUE;

        for(int i = 0; i < line.length; i++){
            long a = line[i][0]; //2
            long b = line[i][1]; //-1
            long e = line[i][2]; //4

            for(int j = i+1; j < line.length; j++){
                long c = line[j][0]; //-2
                long d = line[j][1]; //-1
                long f = line[j][2]; //4

                long xUp = b*f - e*d; //-4 - -4 = 0
                long yUp = e*c - a*f; //-8 - 8 = -16
                long down = a*d - b*c; //공통 분모 : -4


                if(down != 0){
                    double x = xUp / (double)down; //0
                    double y = yUp / (double)down; //4

                    if(x == Math.ceil(x) && y == Math.ceil(y)){
                        list.add(new long[]{(long)x, (long)y});
                        minX = Math.min(minX, (long) x);
                        maxX = Math.max(maxX, (long) x);
                        minY = Math.min(minY, (long) y);
                        maxY = Math.max(maxY, (long) y);
                    }
                }
            }
        }
        //2차원배열에서 x,y축은 각각 [y][x]로 셋팅되어야 해당배열에서 실제 좌표처럼 x,y로 형성
        //boolean 배열에 true, false로 문자열을 구분하여 찍을 예정!
        boolean[][] chkYn = new boolean[(int) (maxY- minY +1)][(int) (maxX - minX + 1)];

        //좌표의 음수를 양수로 만들어주기 위해, x는 minX를, y는 maxY를 빼주고 절대값을 씌워준다
        for (long[] point : list) {
            int x = (int) (point[0] - minX);
            int y = (int) (point[1] - maxY);

            chkYn[Math.abs(y)][Math.abs(x)] = true;
        }

        String[] answer = new String[chkYn.length];

        int i = 0;
        for (boolean[] bs : chkYn) {
            //for문 안에서는 +나 concat을 사용하기 보다는 StringBuilder를 이용해서 append해주는게 성능상 더 좋음!
            StringBuilder sb = new StringBuilder();
            for (boolean b : bs) {
                if(b){
                    sb.append("*");
                }else{
                    sb.append(".");
                }
            }
            answer[i] = sb.toString();
            i++;
        }

        return answer;
    }
}