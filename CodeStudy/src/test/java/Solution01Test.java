import com.test.Solution01;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Solution01Test {
    Solution01 slt = new Solution01();
    @Test
    public void test(){
        assertEquals(slt.solution(new int[]{1,1,0,1,1,100,89,32,14}), new int[]{1, 2, 14, 15, 32, 33, 46, 89, 90, 100, 101, 103, 114, 121, 132, 189});
    }

}