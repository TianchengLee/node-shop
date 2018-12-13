# Host: localhost  (Version: 5.5.53)
# Date: 2018-12-12 21:04:34
# Generator: MySQL-Front 5.3  (Build 4.234)

#
# Database "shop"
#

CREATE DATABASE IF NOT EXISTS `shop` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */;
USE `shop`;

#
# Structure for table "receiver_address"
#

CREATE TABLE `receiver_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `receiver_name` varchar(255) NOT NULL DEFAULT '',
  `mobile` varchar(255) NOT NULL DEFAULT '',
  `postcode` varchar(11) NOT NULL DEFAULT '',
  `province` varchar(255) NOT NULL DEFAULT '',
  `city` varchar(255) NOT NULL DEFAULT '',
  `area` varchar(255) NOT NULL DEFAULT '',
  `detailed_address` varchar(255) NOT NULL DEFAULT '',
  `del_state` tinyint(3) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "receiver_address"
#

INSERT INTO `receiver_address` VALUES (1,1,'前端大法好','13838383838','430000','湖北省','武汉市','洪山区','光谷大道云计算孵化中心1栋3楼',1),(2,1,'传智大法好','13030303030','430070','湖北省','武汉市','东湖高新区','金融港B15栋',0),(4,21,'酷酷222','13838383838','430000','湖北省','武汉市','洪山区','汤逊湖北路长城科技园6栋知乐楼',0),(5,21,'凯文2','13838383838','430000','湖北省','武汉市','洪山区','汤逊湖北路长城科技园6栋知乐楼',1),(6,21,'嘿嘿嘿','13838383838','430000','湖北省','武汉市','洪山区','汤逊湖北路长城科技园6栋知乐楼',0),(7,21,'嘿嘿嘿','13838383838','430000','湖北省','武汉市','洪山区','汤逊湖北路长城科技园6栋知乐楼',0),(8,21,'酷酷222','13838383838','430000','湖北省','武汉市','洪山区','汤逊湖北路长城科技园6栋知乐楼',0);

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
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

#
# Data for table "users"
#

INSERT INTO `users` VALUES (1,'ltc','$2a$10$d2xPVa0lHElDCoa8PmcTuuOBWyTaw2gLUAcPC/tx1zWCNoTKcPqMi','12345678999','2018-12-12 23:46:27'),(21,'ltc2','$2a$10$N3LJbMp5RyyhKy5vFtwTdugZ24Z5Arm/bZ4wDFhxkcddaw3Wum5Mq','12345678991','2018-12-13 21:43:34'),(22,'ltc3','$2a$10$cRc/QgX4VssbEeI.byfWaOQfoUdp0WCqT6j26HrFS4K.EEYB26Mgm','13838383838','2018-12-13 22:04:31'),(23,'ltc4','$2a$10$f/WxuvhYVVxeR2io0Mu8cOYcry7kHIpPb05V1rZ3V2nmHGKOOPPTC','13838383838','2018-12-13 22:09:10'),(24,'ltc5','$2a$10$9RU3OBrX4zDRrvJiYzl/Re1eJgHerKaPunlBJa6p7UEl6aUsSXUEC','13838383838','2018-12-13 22:13:47'),(25,'ltc6','$2a$10$F55d9VkhSWmDV6n0sck8YOyR5htJafExTi7/ChIIFhSTLDy/Z52SS','13838383838','2018-12-13 22:14:25'),(26,'ltc7','$2a$10$3STzTRZ2cg6WZjoNVj2aYeBz83jCFuZgvec82mld4d2u5TIABNN2u','13838383838','2018-12-13 22:15:24'),(27,'ltc8','$2a$10$BnLC5Dkj7s//.Y/X1My03.I3Tm.KXW5TssBiS6qvWa6iIxmMs5gue','13838383838','2018-12-13 22:16:19'),(29,'ltc30','$2a$10$VuAqTZsYy3NUILJFTs20keQvrKMFEnSuEXeRjaanu7zFpRtC.psSy','13838383838','2018-12-13 23:25:08');

#
# Structure for table "users_auth"
#

CREATE TABLE `users_auth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `token` varchar(255) NOT NULL DEFAULT '',
  `ctime` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

#
# Data for table "users_auth"
#

INSERT INTO `users_auth` VALUES (11,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3MDMwNDQsImV4cCI6MTU0NzI5NTA0NH0.cNTpsfxJUAJ5GEy9wK2VtOAt9nnt_CFXd3_3jomq8fE','2018-12-13 20:10:44'),(12,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3MDg1OTIsImV4cCI6MTU0NzMwMDU5Mn0.xTp7kuBVT1L34C1bhL096MEZar3Z2sYyck4mBp6LWtY','2018-12-13 21:43:12'),(13,21,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3MDg2MTQsImV4cCI6MTU0NzMwMDYxNH0.qdlfhgbLnzwD2-n1_W44w2jg_7ADDmFFeVKQG5uMv3o','2018-12-13 21:43:34'),(14,22,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3MDk4NzEsImV4cCI6MTU0NzMwMTg3MX0.iGvef7oroufbKeo9kpEz9osFfoAPKuo1AhakOZaIu60','2018-12-13 22:04:31'),(15,27,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3MTA1NzksImV4cCI6MTU0NzMwMjU3OX0.a4FB6nLH3jwKANfUpbjD0daTUQs7UxZeE-hq82ulgz8','2018-12-13 22:16:19'),(16,21,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3MTE3NDgsImV4cCI6MTU0NzMwMzc0OH0.a45D-O5xBgL201XAdOAXS_XkU_8hMObGvQW7vvXBunk','2018-12-13 22:35:48'),(17,28,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3MTMzMTksImV4cCI6MTU0NzMwNTMxOX0.ErQdBdX9Uojw7Jk6wUd8rPF3jBXSuc99k6v947dN2AY','2018-12-13 23:01:59'),(18,29,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3MTQ3MDgsImV4cCI6MTU0NzMwNjcwOH0.eDa6nqHrwD9AwLVvfTg8639vYqyEDM0SDy0Mqyo93fM','2018-12-13 23:25:08'),(19,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3MTcxNDAsImV4cCI6MTU0NzMwOTE0MH0.rKh7kZRtxge7mbGj1QnKylo9mhAmECkxCuDFA8Ov0Ik','2018-12-14 00:05:40');
