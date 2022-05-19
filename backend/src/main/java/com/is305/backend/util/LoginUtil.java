package com.is305.backend.util;


import com.is305.backend.exception.IllegalHexException;

import java.io.ByteArrayOutputStream;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

public class LoginUtil {

    static public byte[] getRandomToken() {
        byte[] token = new byte[0x10];
        try {
            SecureRandom.getInstanceStrong().nextBytes(token);
        } catch (NoSuchAlgorithmException ignored) {
        }
        return token;
    }

    static public byte[] stringToBytes(String hex) throws IllegalHexException {
        if (hex == null) {
            return null;
        }
        byte b = 0;
        boolean flag = false;
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        for (char n : hex.toCharArray()) {
            if (n >= '0' && n <= '9') {
                b += (byte) (n - '0');
            } else if (n >= 'a' && n <= 'f') {
                b += (byte) (n - 'a' + 0xa);
            } else if (n >= 'A' && n <= 'F') {
                b += (byte) (n - 'A' + 0xa);
            } else {
                throw new IllegalHexException();
            }
            if (flag) {
                outputStream.write(b);
                b = 0;
            } else {
                b *= 0x10;
            }
            flag = !flag;
        }
        return outputStream.toByteArray();
    }

    static public String bytesToString(byte[] bytes) {
        if (bytes == null) {
            return null;
        }
        StringBuilder builder = new StringBuilder();
        for (byte b : bytes) {
            byte[] bs = {(byte) (((int) b & 0xff) / 0x10), (byte) (((int) b & 0xff) % 0x10)};
            for (byte d : bs) {
                if (d < 0xa) {
                    builder.append((char) (d + '0'));
                } else {
                    builder.append((char) (d + 'a' - 0xa));
                }
            }
        }
        return builder.toString();
    }

}
