# Host: localhost  (Version: 5.5.53)
# Date: 2018-12-12 21:04:34
# Generator: MySQL-Front 5.3  (Build 4.234)

#
# Database "shop"
#

CREATE DATABASE IF NOT EXISTS `shop` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */;
USE `shop`;

#
# Structure for table "users"
#

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `mobile` varchar(255) NOT NULL DEFAULT '',
  `ctime` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

#
# Data for table "users"
#

INSERT INTO `users` VALUES (13,'ltc','$2a$10$0bxUi3aPEjdrGHwmfnsKV.eH9QpqhRYweKVVsV.Fa2XCBb53yT3YS','13838383838','2018-12-12 21:29:28');
