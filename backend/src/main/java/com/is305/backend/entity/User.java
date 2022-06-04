package com.is305.backend.entity;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class User implements Serializable {
    @NotBlank(message = "username不能为空")
    private String username;
    private byte[] avatar;
    @NotBlank(message = "email不能为空")
    private String email;
    @NotNull(message = "password不能为空")
    private byte[] password;
    private boolean status;
    private Date created;
    private Date lastLogin;
    private byte[] token;
    private String code;

    public void setStatus(boolean status) {
        this.status = status;
    }

    public boolean getStatus() {
        return status;
    }

}
