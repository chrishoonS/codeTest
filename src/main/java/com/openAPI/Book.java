package com.openAPI;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

// 최상위 클래스에서 XML 문서의 루트 Element를 지정하기 위해 사용
// name은 선택 사항으로 생략하면 클래스 이름이 루트 Element 이름으로 설정
// 회사 자바 버전 확인할 것. 집 : java11
@XmlRootElement(name = "book")
public class Book {
    private Long id;
    private String title;
    private Author author;

    // Book 생성자
    public Book() {
    }

    public Book(Long id, String title, Author author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    public Long getId() {
        return id;
    }

    // XML 문서의 루트 Element의 Attribute를 나타내는데 사용
    @XmlAttribute(name = "id")
    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    // 루트 Element의 하위 Element가 되는 클래스의 필드에 사용
    @XmlElement(name = "title")
    public void setTitle(String title) {
        this.title = title;
    }

    public Author getAuthor() {
        return author;
    }

    @XmlElement(name = "author")
    public void setAuthor(Author author) {
        this.author = author;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author=" + author +
                '}';
    }
}
