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
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

#
# Data for table "users"
#

INSERT INTO `users` VALUES (11,'ltc','$2a$10$NRim0Rvao0Rf/GDF.a6l9uvb8G5Sz49GlU5v.WENi7kYIIKIpYSpC','13838383838');
