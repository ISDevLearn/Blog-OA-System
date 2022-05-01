package com.is305.backend.Util;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

public class UserUtil {

    static public byte[] hashPassword(String password) {
        byte[] token = new byte[0x10];
        try {
            SecureRandom.getInstanceStrong().nextBytes(token);
        } catch (NoSuchAlgorithmException ignored) {
        }
        return token;
    }

}
