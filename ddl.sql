-- MariaDB dump 10.19-11.1.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: tcc
-- ------------------------------------------------------
-- Server version	11.1.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `model_loading`
--

DROP TABLE IF EXISTS `model_loading`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `model_loading` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `library` varchar(40) DEFAULT 'pc-editor',
  `scene` varchar(50) NOT NULL,
  `ms` int(11) NOT NULL,
  `pc` varchar(40) DEFAULT 'windows',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2490 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `rendering`
--

DROP TABLE IF EXISTS `rendering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rendering` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total_ms` int(11) NOT NULL,
  `total_frames` int(11) NOT NULL,
  `fps_avg` decimal(5,1) DEFAULT NULL,
  `fps_truncated_avg` decimal(5,1) DEFAULT NULL,
  `fps_max_avg` decimal(5,1) DEFAULT NULL,
  `fps_min_avg` decimal(5,1) DEFAULT NULL,
  `fps_low` decimal(5,1) DEFAULT NULL,
  `library` varchar(50) NOT NULL,
  `scene` varchar(50) NOT NULL,
  `browser` varchar(40) DEFAULT NULL,
  `pc` varchar(40) DEFAULT 'windows',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2387 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary table structure for view `rendering_vw`
--

DROP TABLE IF EXISTS `rendering_vw`;
/*!50001 DROP VIEW IF EXISTS `rendering_vw`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `rendering_vw` AS SELECT
 1 AS `Media`,
  1 AS `Media (truncado)`,
  1 AS `Máximo`,
  1 AS `Mínimo`,
  1 AS `1% low`,
  1 AS `scene`,
  1 AS `library`,
  1 AS `browser`,
  1 AS `pc` */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `startup`
--

DROP TABLE IF EXISTS `startup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `startup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `library` varchar(40) DEFAULT 'pc-editor',
  `scene` varchar(40) DEFAULT 'none',
  `ms` int(11) NOT NULL,
  `pc` varchar(40) DEFAULT 'windows',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1835 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Final view structure for view `rendering_vw`
--

/*!50001 DROP VIEW IF EXISTS `rendering_vw`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `rendering_vw` AS select `rendering`.`fps_avg` AS `Media`,`rendering`.`fps_truncated_avg` AS `Media (truncado)`,`rendering`.`fps_max_avg` AS `Máximo`,`rendering`.`fps_min_avg` AS `Mínimo`,`rendering`.`fps_low` AS `1% low`,`rendering`.`scene` AS `scene`,`rendering`.`library` AS `library`,`rendering`.`browser` AS `browser`,`rendering`.`pc` AS `pc` from `rendering` order by `rendering`.`pc`,`rendering`.`browser`,`rendering`.`scene`,`rendering`.`library` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-14  6:03:57
