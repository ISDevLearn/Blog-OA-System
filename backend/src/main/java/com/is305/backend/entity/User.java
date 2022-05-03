package com.is305.backend.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class User implements Serializable {
    private String username;
    private byte[] avatar;
    private String email;
    private byte[] password;
    private boolean status;
    private Date created;
    private Date lastLogin;
    private byte[] token;

    public void setStatus(boolean status) {
        this.status = status;
    }

    public boolean getStatus() {
        return status;
    }

}
