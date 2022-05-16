package com.is305.backend.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;
@Data
public class Blog implements Serializable {
    private int id;
    private String username;
    private String title;
    private String description;
    private String content;
    private Date created;
    private boolean status;

    public void setStatus(boolean status) {
        this.status = status;
    }

    public boolean getStatus() {
        return status;
    }
}
