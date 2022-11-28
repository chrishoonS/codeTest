package com.javaExample;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static java.lang.Integer.parseInt;

public class searchExcute {
    public static void main(String[] args) throws IOException {
        //읽어들일 파일 경로
        BufferedReader reader = new BufferedReader(new FileReader("/Users/song/Downloads/mybatis.api01.part.logbg"));

        String str;
//        Pattern pattern1 = Pattern.compile(".*" + ".java" + ".*");
//        Pattern pattern2 = Pattern.compile(".*" + "executed" + ".*" + "msec}");
        String query = "";
        String tmpOrg = "";

        //라인별로 읽어서 다읽어서 null이면 while문 탈출
        while ((str =reader.readLine()) != null) {
            String tmp = "";
            tmp += str;
            tmpOrg += "\n" + tmp;
            if(str.contains(" {executed")){
                String[] arr = str.split(" ");
                if(arr[3].length() == 4){
                    tmpOrg += "\n ";
                    query += tmpOrg;
                }else{
                    tmp = "";
                }
                tmpOrg = "";
            }
        }
        System.out.println(query);
        //파일이 커서? 텍스트가 많아서 콘솔창에서 짤림 현상 발생, 좀더 좋은 방법 나중에 간구해볼것!!!!!
        reader.close();
    }
}
