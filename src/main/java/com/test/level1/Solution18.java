package com.test.level1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Solution18 {
    public int[] solution(int N, int[] lastStages) {
        int nPlayers = lastStages.length;
        int[] nStagePlayers = new int[N + 2];
        //nStagePlayers 배열에 각 스테이지별 플레이어 수 저장
        for (int stage : lastStages) {
            nStagePlayers[stage] += 1;
        }

        int remainingPlayers = nPlayers;
        List<Stage> stages = new ArrayList<>();
        for (int id = 1 ; id <= N; id++) {
            double failure = (double) nStagePlayers[id] / remainingPlayers;
            remainingPlayers -= nStagePlayers[id];

            //Stage 클래스객체에 해당 stage와 실패율을 리스트에 저장
            Stage s = new Stage(id, failure);
            stages.add(s);
        }
        //내림차순으로 정렬
        Collections.sort(stages, Collections.reverseOrder());

        int[] answer = new int[N];
        for (int i = 0; i < N; i++) {
            answer[i] = stages.get(i).id;
        }
        return answer;
    }

    /**
     * 내부 클래스 : 클래스 안에 선언된 클래스
     * 클래스 안에 인스턴스 변수, 즉 필드를 선언하는 위치에 선언되는 경우. 보통 중첩클래스 혹은 인스턴스 클래스라고 한다
     * 메서드 안에 클래스를 선언한 경우, 지역 중첩 클래스 또는 지역 클래스라고 한다. 메서드 안에서 해당 클래스를 이용할 수 있다.
     */
    class Stage implements Comparable<Stage> {
        public int id;
        public double failure;

        public Stage(int id_, double failure_) {
            id = id_;
            failure = failure_;
        }

        /**
         * @Override : 자바 컴파일러에게 부모 클래스로부터 메서드 오버라이딩을 하겠다는 메시지 전달
         * 반환형, 메서드 이름, 매개 변수가 모두 같은 오버라이딩 가능한 메서드가 없다면 잘못 되었다고 알려줌.
         * 자바에서 메서드 오버라이딩이란, 상속의 관계에 있는 클래스 간에 하위 클래스가 상위 클래스와 '완전 동일한 메서드'를 덮어쓴다는 의미
         * 여기서 '완전 동일한 메서드'라는 말은 이름과 반환형이 같으면서 매개변수의 개수와 타입까지 모두 같은 메서드라는 의미
         * Comparable 클래스의 compareTo 메서드는 매개변수로 Generic변수를 받지만 @Override를 사용하여 Stage 클래스객체를 매개변수로 받아 사용
         **/
        @Override
        public int compareTo(Stage o) {
            if (failure < o.failure ) {
                return -1;
            }
            if (failure > o.failure ) {
                return 1;
            }
            return 0;
        }
    }
}