package com.is305.backend.Util;

import com.is305.backend.Exception.AddressException;
import com.is305.backend.Exception.MessagingException;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class EmailUtil {

    private static final String MAIL_HOST = "smtp.163.com"; // 发送邮件的主机
    private static final String FROM = "blogmailsend@163.com"; // 发件人邮箱地址

    /**
     * 用163邮箱发送验证邮件
     *
     * @param subject   标题
     * @param text      邮件内容
     * @param toRecipients 收件人地址
     * @throws AddressException
     * @throws MessagingException
     */
    public static void sentMail(String subject, String text, String toRecipients)
            throws AddressException, MessagingException {
        /*
         * 初始化JavaMail会话
         */
        Properties props = new Properties();
        props.setProperty("mail.smtp.host", MAIL_HOST); // 发送邮件的主机
        props.setProperty("mail.smtp.auth", "true");
        props.setProperty("mail.transport.protocol", "smtp");

        Session session = Session.getInstance(props, null);// 获得Session对象

        Message message = new MimeMessage(session);
        try {
            message.setFrom(new InternetAddress(FROM));
        } catch (Exception exception){
            throw new AddressException();
        }
        try {
            // To: 收件人
            // message.setRecipient(MimeMessage.RecipientType.TO, new InternetAddress(toRecipient));
            message.setRecipients(MimeMessage.RecipientType.TO, InternetAddress.parse(toRecipients, false));

            message.setSubject(subject); // 邮件标题
            message.setText(text); // 邮件内容


            // 简单发送邮件的方式
            Transport.send(message, FROM, "RVYSRSEJVLDHQAQZ"); // 授权码

        } catch (Exception exception){
            throw new MessagingException();
        }
    }

}
