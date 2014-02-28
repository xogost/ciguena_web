/*
SQLyog Ultimate v11.11 (32 bit)
MySQL - 5.5.35-0ubuntu0.12.04.2 : Database - ciguena
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`ciguena` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;

USE `ciguena`;

/*Table structure for table `sys_roles` */

DROP TABLE IF EXISTS `sys_roles`;

CREATE TABLE `sys_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador de tabla roles',
  `role` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'Nombre de rol',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `sys_roles` */

insert  into `sys_roles`(`id`,`role`,`createdAt`,`updatedAt`) values (1,'Administrador','2014-02-28 15:08:11','2014-02-28 15:08:15'),(2,'Tienda','2014-02-28 21:46:21','2014-02-28 21:46:21'),(3,'Cliente','2014-02-28 21:48:27','2014-02-28 21:48:27'),(4,'Otro','2014-02-28 21:48:49','2014-02-28 21:48:49'),(5,'Ultimo','2014-02-28 21:50:52','2014-02-28 21:50:52'),(6,'Pruebaaaa','2014-02-28 21:53:50','2014-02-28 21:53:50');

/*Table structure for table `sys_types` */

DROP TABLE IF EXISTS `sys_types`;

CREATE TABLE `sys_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador de tabla types',
  `type` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'Tipo de usuario',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `sys_types` */

/*Table structure for table `sys_users` */

DROP TABLE IF EXISTS `sys_users`;

CREATE TABLE `sys_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador de tabla users',
  `idrol` int(11) DEFAULT NULL COMMENT 'Identificador para tabla roles',
  `idtype` int(11) DEFAULT NULL COMMENT 'Identificador de tabla type',
  `user` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'Nombre de usuario',
  `password` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'Contraseña de usuario',
  PRIMARY KEY (`id`),
  KEY `idtype` (`idtype`),
  KEY `idrol` (`idrol`),
  CONSTRAINT `sys_users_ibfk_2` FOREIGN KEY (`idrol`) REFERENCES `sys_roles` (`id`),
  CONSTRAINT `sys_users_ibfk_1` FOREIGN KEY (`idtype`) REFERENCES `sys_types` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `sys_users` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
