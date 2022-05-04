package com.is305.backend.Util;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

public class UserUtil {

    static public byte[] hashPassword(String password) {
        byte[] token = null;
        try {
            token = MessageDigest.getInstance("md5").digest(password.getBytes(StandardCharsets.UTF_8));
        } catch (NoSuchAlgorithmException ignored) {
        }
        return token;
    }

}
