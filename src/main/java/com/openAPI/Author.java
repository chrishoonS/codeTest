package com.openAPI;

import lombok.Data;

@Data
public class Author {
    private Long id;
    private String name;

    public Author() {
    }

    public Author(Long id, String name) {
        this.id = id;
        this.name = name;
    }

}
