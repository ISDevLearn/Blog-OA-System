CREATE TABLE IF NOT EXISTS `m_user`
(
    `username`   varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `avatar`     mediumblob,
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

CREATE TABLE IF NOT EXISTS `m_follower`
(
    `follower`  varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `following` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    PRIMARY KEY (`follower`, `following`)
);

CREATE TABLE IF NOT EXISTS `m_blog`
(
    `id`          bigint(20)                                             NOT NULL AUTO_INCREMENT,
    `username`    varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `title`       varchar(255)                                           NOT NULL,
    `description` varchar(255)                                           NOT NULL,
    `content`     longtext,
    `created`     datetime                                               NOT NULL,
    `status`      tinyint(4) DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `id` (`id`) USING BTREE,
    KEY `username` (`username`) USING BTREE
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb3;

CREATE TABLE IF NOT EXISTS `m_star`
(
    `id`       bigint(20)                                             NOT NULL,
    `username` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    PRIMARY KEY (`id`, `username`)
);