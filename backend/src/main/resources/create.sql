CREATE TABLE IF NOT EXISTS `m_user`
(
    `username`   varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `avatar`     blob,
    `email`      varchar(64)                                            NOT NULL,
    `password`   binary(16)                                             NOT NULL,
    `status`     tinyint                                                NOT NULL,
    `created`    datetime                                               NOT NULL,
    `last_login` datetime                                               NOT NULL,
    `token`      binary(16)                                             NOT NULL,
    PRIMARY KEY (`username`),
    KEY `UK_USERNAME` (`username`) USING BTREE,
    CONSTRAINT `m_user_chk_1` CHECK ((`status` < 2))
) ENGINE = InnoDB
  AUTO_INCREMENT = 3
  DEFAULT CHARSET = utf8mb3;