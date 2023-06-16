package com.openAPI;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import java.io.StringWriter;

public class JavaToXml {
    public static void main(String[] args) {
        try {
            // JAXBContext 인스턴스 생성
            JAXBContext context = JAXBContext.newInstance(Book.class);

            // Marshaller 인스턴스 생성
            Marshaller marshaller = context.createMarshaller();

            // 개행 문자 및 띄어쓰기를 정렬화
            marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);

            StringWriter sw = new StringWriter();

            Book book = new Book(17L, "Head First Java",
                    new Author(5L, "Bert"));

            // Book 객체를 마샬링
            marshaller.marshal(book, sw);

            // 마샬링 결과를 콘솔에 출력
            System.out.println(sw.toString());
        } catch (JAXBException ex) {
            ex.printStackTrace();
        }

    }
}


//<OpenAPI_ServiceResponse>
//    <cmmMsgHeader>
//        <errMsg>SERVICE ERROR</errMsg>
//        <returnAuthMsg>HTTP ROUTING ERROR</returnAuthMsg>
//        <returnReasonCode>04</returnReasonCode>
//    </cmmMsgHeader>
//</OpenAPI_ServiceResponse>