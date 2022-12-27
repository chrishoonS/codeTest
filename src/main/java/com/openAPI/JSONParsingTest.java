package com.openAPI;

import com.openAPI.vo.WeatherVO;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;

public class JSONParsingTest {
    enum WeatherConstants {
        POP,	//강수확률
        PTY,	//강수형태
        PCP,    //1시간 강수량
        REH,	//습도
        SNO,    //1시간 신적설
        SKY,    //하늘상태
        TMP,	//1시간 기온
        TMN,	//일 최저기온
        TMX,    //일 최고기온
        UUU,    //풍속(동서성분)
        VVV,    //풍속(남북성분)
        WAV,    //파고
        VEC,    //풍향
        WSD,    //풍속
        RN1     //1시간 강수량
    }

    public static void main(String[] args) throws Exception {

        SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date now = new Date();
        String stTime = sdf1.format(now);
        System.out.println(stTime);

        //System.out.println(sdf1.format(now));
        //System.out.println(sdf2.format(now));

        // 입력받을 weather 객체
        WeatherVO weather = new WeatherVO();
        // 변수 설정
        String apiURL = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";   //단기예보 조회
        String authKey = "Eg%2FOMvZgWeH%2B0Nq17%2FH8HM9kTyJQ6rHzxh1PSK2YTSi5xryIqd3EUQ4KYYabYEyQglhmN8Eui3nwmGsg%2B2bj2A%3D%3D"; // 본인 서비스 키

        String nx = "69";
        String ny = "100";
        String baseDate = "20221227";
        String baseTime = "1600";
        String dataType = "JSON";

        StringBuilder urlBuilder = new StringBuilder(apiURL);
        urlBuilder.append("?" + URLEncoder.encode("serviceKey", "UTF-8") + "=" + authKey);
        urlBuilder.append("&" + URLEncoder.encode("numOfRows=10", "UTF-8"));    // 숫자 표
        urlBuilder.append("&" + URLEncoder.encode("pageNo=1", "UTF-8"));    // 페이지 수
        urlBuilder.append("&" + URLEncoder.encode("dataType", "UTF-8") + "=" + URLEncoder.encode(dataType, "UTF-8")); // 받으려는 타입
        urlBuilder.append("&" + URLEncoder.encode("base_date", "UTF-8") + "=" + URLEncoder.encode(baseDate, "UTF-8")); /* 조회하고싶은 날짜*/
        urlBuilder.append("&" + URLEncoder.encode("base_time", "UTF-8") + "=" + URLEncoder.encode(baseTime, "UTF-8")); /* 조회하고싶은 시간 AM 02시부터 3시간 단위 */
        urlBuilder.append("&" + URLEncoder.encode("nx", "UTF-8") + "=" + URLEncoder.encode(nx, "UTF-8")); //경도
        urlBuilder.append("&" + URLEncoder.encode("ny", "UTF-8") + "=" + URLEncoder.encode(ny, "UTF-8")); //위도

        URL url = new URL(urlBuilder.toString());
        System.out.println("<<Access OpenAPI URL>>");
        System.out.println(url);

        HttpURLConnection conn = (HttpURLConnection) url.openConnection();

        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");
        System.out.println("Response code: " + conn.getResponseCode());

        BufferedReader rd;

        if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }

        StringBuilder sb = new StringBuilder();
        String line;

        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }

        rd.close();
        conn.disconnect();
        String result = sb.toString();

        System.out.println(result);

        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObject = (JSONObject) jsonParser.parse(result);
        JSONObject parse_response = (JSONObject) jsonObject.get("response");
        JSONObject parse_body = (JSONObject) parse_response.get("body"); // response 로 부터 body 찾아오기
        JSONObject parse_items = (JSONObject) parse_body.get("items"); // body 로 부터 items 받아오기
        // items 로 부터 itemList : 뒤에 [ 로 시작하므로 jsonArray 이다.
        JSONArray parse_item = (JSONArray) parse_items.get("item");
        System.out.println("--------------------------");

        // item 들을 담은 List 를 반복자 안에서 사용하기 위해 미리 명시
        JSONObject object;
        // item 내부의 category 를 보고 사용하기 위해서 사용
        String category;
        Double value;
        String obsrValue;

        // jsonArray를 반복자로 반복
        for (int temp = 0; temp < parse_item.size(); temp++) {
            object = (JSONObject) parse_item.get(temp);
            category = (String) object.get("category"); // item 에서 카테고리를 검색

            obsrValue = (String) object.get("obsrValue");
            if("".equals(obsrValue) || obsrValue == null){
                value = 0D;
            }else{
                // Error 발생할수도 있으며 받아온 정보를 double이 아니라 문자열로 읽으면 오류
                value = Double.parseDouble(obsrValue);
            }

            WeatherConstants weatherValue = WeatherConstants.valueOf(category);

            switch (weatherValue) {
                case PTY:
                    weather.setPTY(value);
                    break;
                case REH:
                    weather.setREH(value);
                    break;
                case POP:
                    weather.setPOP(value);
                    break;
                case TMP:
                    weather.setTMP(value);
                    break;
                case TMN:
                    weather.setTMN(value);
                    break;
                case TMX:
                    weather.setTMX(value);
                    break;
                case RN1:
                    weather.setTMX(value);
                    break;
                default:
                    break;
            }
        }

        weather.setDate(baseDate);
        weather.setTime(baseTime);

        System.out.println(weather);

        String edTime = sdf1.format(now);
        System.out.println(edTime);
    }
}
