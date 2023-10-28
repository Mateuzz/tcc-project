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
  `library` varchar(50) NOT NULL,
  `scene` varchar(50) NOT NULL,
  `ms` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=282 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_loading`
--

LOCK TABLES `model_loading` WRITE;
/*!40000 ALTER TABLE `model_loading` DISABLE KEYS */;
INSERT INTO `model_loading` VALUES
(185,'Three','piratePerto',267),
(186,'Three','pirate_longe',207),
(187,'pc','pirate_perto',163),
(188,'pc','pirate_longe',205),
(189,'claygl','pirate_perto',111),
(190,'claygl','pirate_longe',140),
(191,'Babylon','pirate_perto',303),
(192,'Babylon','pirate_longe',302),
(193,'Three','floresta_perto',149),
(194,'Three','floresta_longe',204),
(195,'pc','floresta_perto',270),
(196,'pc','floresta_longe',234),
(197,'claygl','floresta_perto',129),
(198,'claygl','floresta_longe',132),
(199,'Babylon','floresta_perto',305),
(200,'Babylon','floresta_longe',335),
(201,'Three','pirate_perto_colors',219),
(202,'Babylon','pirate_perto_colors',296),
(203,'claygl','pirate_perto_colors',153),
(204,'claygl','pirate_perto_colors',135),
(205,'Three','pirate_longe_colors',151),
(206,'claygl','pirate_longe_colors',130),
(207,'Babylon','pirate_perto_colors',329),
(208,'Babylon','pirate_longe_colors',315),
(209,'pc','floresta_sombra',252),
(210,'pc','floresta_sombra_brave',223),
(211,'claygl','floresta_sombra_brave',121),
(212,'Three','floresta_sombra_brave',217),
(213,'Babylon','floresta_sombra_brave',334),
(214,'pc','floresta28',331),
(215,'Three','floresta28',199),
(216,'claygl','floresta28',134),
(217,'Three','floresta_fxaa',211),
(218,'claygl','floresta_fxaa',138),
(219,'Babylon','floresta_fxaa',286),
(220,'Three','floresta_ssao',187),
(221,'Three','floresta_fxaa_ssao',185),
(222,'Three','floresta_all',191),
(223,'claygl','floresta_ssao',118),
(224,'claygl','floresta_fxaa_ssao',136),
(225,'claygl','floresta_all',108),
(226,'Babylon','floresta_ssao',316),
(227,'Babylon','floresta_fxaa_ssao',292),
(228,'Babylon','floresta_all',313),
(229,'pc','floresta_merged',1518),
(230,'Three','floresta_merged',460),
(231,'claygl','floresta_merged',431),
(232,'Babylon','floresta_merged',442),
(233,'pc','skull',414),
(234,'Three','skull',200),
(235,'claygl','skull',198),
(236,'Babylon','skull',228),
(237,'Three','pirate_perto',225),
(238,'Three','pirate_longe',603),
(239,'claygl','pirate_longe',126),
(240,'pc','pirate_longe',224),
(241,'Babylon','pirate_longe',238),
(242,'pc','pirate_perto',246),
(243,'claygl','pirate_perto',119),
(244,'Babylon','pirate_perto',167),
(245,'pc','floresta_longe',203),
(246,'claygl','floresta_longe',57),
(247,'Babylon','floresta_longe',339),
(248,'Three','floresta_longe',128),
(249,'pc','floresta_perto',264),
(250,'claygl','floresta_perto',102),
(251,'Babylon','floresta_perto',273),
(252,'Three','floresta_perto',115),
(253,'claygl','pirate_perto_colors',147),
(254,'Babylon','pirate_perto_colors',245),
(255,'Three','pirate_perto_colors',163),
(256,'claygl','pirate_longe_colors',118),
(257,'Babylon','pirate_longe_colors',226),
(258,'pc','floresta_sombra',326),
(259,'claygl','floresta_sombra',105),
(260,'Babylon','floresta_sombra',342),
(261,'Three','floresta_sombra',130),
(262,'pc','floresta28',338),
(263,'claygl','floresta28',109),
(264,'Three','floresta28',156),
(265,'claygl','floresta_fxaa',115),
(266,'Babylon','floresta_fxaa',349),
(267,'Three','floresta_fxaa',130),
(268,'claygl','floresta_ssao',102),
(269,'Babylon','floresta_ssao',322),
(270,'Three','floresta_ssao',203),
(271,'claygl','floresta_all',107),
(272,'Babylon','floresta_all',348),
(273,'Three','floresta_all',114),
(274,'pc','floresta_merged.glb',1261),
(275,'pc','skull',436),
(276,'claygl','floresta_merged',1127),
(277,'claygl','skull',365),
(278,'Babylon','floresta_merged.glb',1064),
(279,'Three','floresta_merged',602),
(280,'Babylon','skull',174),
(281,'Three','skull',204);
/*!40000 ALTER TABLE `model_loading` ENABLE KEYS */;
UNLOCK TABLES;

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=278 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rendering`
--

LOCK TABLES `rendering` WRITE;
/*!40000 ALTER TABLE `rendering` DISABLE KEYS */;
INSERT INTO `rendering` VALUES
(181,30010,1442,130.2,145.3,392.2,30.0,98.2,'Three','pirate_perto','chrome'),
(182,30008,1802,244.9,248.7,350.9,155.0,144.1,'Three','pirate_longe','chrome'),
(183,30010,1193,111.6,125.4,346.4,19.5,42.7,'pc','pirate_perto','chrome'),
(184,30011,1802,225.6,227.4,385.6,119.9,130.0,'pc','pirate_longe','chrome'),
(185,30015,1268,89.6,89.6,209.4,21.0,59.9,'claygl','pirate_perto','chrome'),
(186,30010,1803,273.4,282.2,384.1,121.5,157.1,'claygl','pirate_longe','chrome'),
(187,30012,1682,152.8,175.6,392.0,43.7,100.7,'Babylon','pirate_perto','chrome'),
(188,30009,1807,241.2,253.6,386.1,83.0,125.0,'Babylon','pirate_longe','chrome'),
(189,30013,1803,93.3,91.8,131.3,71.0,95.2,'Three','floresta_perto','chrome'),
(190,30008,1815,93.7,92.1,142.6,66.4,96.5,'Three','floresta_longe','chrome'),
(191,30004,1813,107.3,109.5,151.8,76.3,95.7,'pc','floresta_perto','chrome'),
(192,30009,1809,94.9,93.6,144.0,68.4,95.5,'pc','floresta_longe','chrome'),
(193,30009,1769,44.2,54.6,90.3,9.6,13.2,'claygl','floresta_perto','chrome'),
(194,30006,2126,52.3,59.9,107.1,12.1,10.1,'claygl','floresta_longe','chrome'),
(195,30007,1884,82.5,79.0,134.6,20.0,99.5,'Babylon','floresta_perto','chrome'),
(196,30013,1847,89.0,86.6,136.9,51.2,97.8,'Babylon','floresta_longe','chrome'),
(197,30010,1358,119.9,127.9,312.6,30.2,97.3,'Three','pirate_perto_colors','chrome'),
(200,30010,942,36.2,34.7,117.7,6.0,52.4,'claygl','pirate_perto_colors','chrome'),
(201,30011,1805,243.2,253.3,398.9,108.8,130.3,'Three','pirate_longe_colors','chrome'),
(202,30019,1358,61.9,63.3,138.5,12.9,12.8,'claygl','pirate_longe_colors','chrome'),
(203,30015,1465,120.2,130.6,334.9,25.2,99.9,'Babylon','pirate_perto_colors','chrome'),
(204,30007,1805,214.4,220.5,288.5,108.4,123.5,'Babylon','pirate_longe_colors','chrome'),
(205,30024,2091,52.1,58.9,89.8,14.9,10.4,'pc','floresta_sombra','chrome'),
(206,30014,2752,59.7,59.8,83.5,42.9,42.3,'pc','floresta_sombra_brave','brave'),
(207,30030,2207,49.4,49.8,50.2,34.5,32.0,'claygl','floresta_sombra_brave','brave'),
(208,30003,2509,55.3,56.0,83.3,34.0,54.5,'Three','floresta_sombra_brave','brave'),
(209,30006,2505,54.4,55.2,73.8,36.6,35.1,'Babylon','floresta_sombra_brave','brave'),
(210,30030,409,18.5,23.6,88.5,3.0,31.1,'pc','floresta28','chrome'),
(211,30005,852,25.9,23.9,94.7,4.0,96.6,'Three','floresta28','chrome'),
(212,30005,902,25.9,27.4,79.4,4.6,14.6,'claygl','floresta28','chrome'),
(213,30033,2143,67.3,63.2,133.5,19.0,71.6,'Three','floresta_fxaa','chrome'),
(214,30098,572,19.0,19.0,21.2,17.4,12.2,'claygl','floresta_fxaa','chrome'),
(215,30015,1925,73.0,71.2,137.4,19.1,52.1,'Babylon','floresta_fxaa','chrome'),
(216,30007,1176,30.9,31.7,74.9,5.2,13.4,'Three','floresta_ssao','chrome'),
(217,30006,1040,28.6,29.5,71.2,5.3,10.8,'Three','floresta_fxaa_ssao','chrome'),
(218,30003,672,20.7,20.4,61.9,4.7,13.1,'Three','floresta_all','chrome'),
(219,30041,444,14.8,14.8,15.9,13.1,11.9,'claygl','floresta_ssao','chrome'),
(220,30014,440,14.7,14.6,15.7,13.1,11.9,'claygl','floresta_fxaa_ssao','chrome'),
(221,30098,433,14.4,14.4,15.5,12.9,11.7,'claygl','floresta_all','chrome'),
(222,30031,1369,35.7,38.7,79.4,6.3,10.2,'Babylon','floresta_ssao','chrome'),
(223,30045,1201,32.5,32.7,80.3,6.0,9.8,'Babylon','floresta_fxaa_ssao','chrome'),
(224,30008,1202,31.8,33.3,73.6,5.7,12.7,'Babylon','floresta_all','chrome'),
(225,30014,1775,125.8,135.9,249.1,44.1,99.6,'pc','floresta_merged','chrome'),
(226,30013,1679,148.9,169.8,381.0,47.5,100.1,'Three','floresta_merged','chrome'),
(227,30014,1239,98.0,99.2,251.8,21.3,96.4,'claygl','floresta_merged','chrome'),
(228,30013,1544,124.0,132.0,359.3,27.2,98.9,'Babylon','floresta_merged','chrome'),
(229,30010,1803,207.4,208.9,291.5,145.3,139.0,'pc','skull','chrome'),
(230,30008,1801,244.7,242.5,449.8,169.1,154.1,'Three','skull','chrome'),
(231,30013,1583,121.7,132.0,316.8,26.7,100.7,'claygl','skull','chrome'),
(232,30011,1635,151.7,173.9,351.6,43.9,98.6,'Babylon','skull','chrome'),
(233,30002,1464,158.5,151.1,1080.0,56.3,99.1,'Three','pirate_perto','Firefox'),
(234,30006,1841,236.5,269.0,438.3,90.3,116.4,'Three','pirate_longe','Firefox'),
(235,30003,1824,227.2,243.8,415.1,88.4,116.6,'claygl','pirate_longe','Firefox'),
(236,30003,1861,131.7,141.4,181.7,78.3,100.5,'pc','pirate_longe','Firefox'),
(237,30055,1928,166.6,205.9,364.2,82.7,100.6,'Babylon','pirate_longe','Firefox'),
(238,30010,1076,145.7,137.3,1007.5,50.3,98.8,'pc','pirate_perto','Firefox'),
(239,30060,1649,165.9,160.3,961.7,66.0,97.9,'claygl','pirate_perto','Firefox'),
(240,30002,1472,151.2,142.7,1157.8,54.5,99.4,'Babylon','pirate_perto','Firefox'),
(241,30001,1755,161.8,155.3,1472.1,62.2,98.1,'pc','floresta_longe','Firefox'),
(242,30002,1384,158.0,150.0,1385.8,65.0,99.9,'claygl','floresta_longe','Firefox'),
(243,30003,1687,148.7,140.6,1281.0,53.2,100.1,'Babylon','floresta_longe','Firefox'),
(244,30002,2878,95.4,83.0,1272.0,48.1,105.0,'Three','floresta_longe','Firefox'),
(245,30014,1839,125.1,115.8,325.2,64.1,97.3,'pc','floresta_perto','Firefox'),
(246,30010,1287,157.0,149.4,1107.0,59.2,99.9,'claygl','floresta_perto','Firefox'),
(247,30005,1513,152.8,145.0,1071.6,56.9,95.3,'Babylon','floresta_perto','Firefox'),
(248,30002,2256,80.4,74.3,147.6,53.2,101.2,'Three','floresta_perto','Firefox'),
(249,30001,841,150.2,142.6,829.5,73.9,95.1,'claygl','pirate_perto_colors','Firefox'),
(250,30003,1389,152.8,145.1,1085.9,58.1,99.8,'Babylon','pirate_perto_colors','Firefox'),
(251,30007,1438,152.7,144.9,1029.7,60.0,96.7,'Three','pirate_perto_colors','Firefox'),
(252,30003,1452,146.5,139.9,713.3,67.3,97.2,'claygl','pirate_longe_colors','Firefox'),
(253,30004,1877,173.4,195.9,309.4,90.5,108.0,'Babylon','pirate_longe_colors','Firefox'),
(254,30015,1228,164.3,157.8,1525.6,64.4,95.3,'pc','floresta_sombra','Firefox'),
(255,30005,1084,160.3,152.7,1275.4,59.2,99.9,'claygl','floresta_sombra','Firefox'),
(256,30001,1106,151.1,142.7,1130.5,54.6,93.3,'Babylon','floresta_sombra','Firefox'),
(257,30013,1312,122.8,111.5,1522.5,37.5,95.0,'Three','floresta_sombra','Firefox'),
(258,30001,262,110.1,103.2,572.9,42.5,22.0,'pc','floresta28','Firefox'),
(259,30001,460,162.5,155.7,793.7,74.3,93.6,'claygl','floresta28','Firefox'),
(260,30000,586,129.5,119.5,907.7,57.2,98.8,'Three','floresta28','Firefox'),
(261,30011,1033,56.2,47.5,1236.6,18.3,97.1,'claygl','floresta_fxaa','Firefox'),
(262,30003,1412,146.8,138.2,1152.7,48.3,94.7,'Babylon','floresta_fxaa','Firefox'),
(263,30010,1997,129.1,117.8,1218.0,45.7,101.7,'Three','floresta_fxaa','Firefox'),
(264,30210,898,36.4,30.7,774.4,14.6,105.0,'claygl','floresta_ssao','Firefox'),
(265,30002,622,128.2,117.8,854.1,41.9,89.5,'Babylon','floresta_ssao','Firefox'),
(266,30001,805,107.2,97.2,1003.4,28.8,90.1,'Three','floresta_ssao','Firefox'),
(267,30022,886,36.6,32.8,2194.6,14.8,101.6,'claygl','floresta_all','Firefox'),
(268,30002,576,130.0,120.3,834.5,32.9,97.6,'Babylon','floresta_all','Firefox'),
(269,30099,659,110.5,99.7,1148.1,27.2,95.1,'Three','floresta_all','Firefox'),
(270,30003,1469,152.6,145.6,766.8,60.6,98.9,'pc','floresta_merged.glb','Firefox'),
(271,30004,1813,204.9,211.5,303.8,118.5,115.7,'pc','skull','Firefox'),
(272,30003,1312,161.1,154.5,850.4,57.1,94.9,'claygl','floresta_merged','Firefox'),
(273,30003,1417,166.6,161.3,908.5,69.7,95.1,'claygl','skull','Firefox'),
(274,30002,1384,163.5,157.8,866.5,61.1,99.8,'Babylon','floresta_merged.glb','Firefox'),
(275,30071,1434,172.1,167.9,541.1,69.1,96.7,'Three','floresta_merged','Firefox'),
(276,30003,1476,157.4,150.2,1116.3,63.0,100.5,'Babylon','skull','Firefox'),
(277,30004,1849,268.7,324.4,513.3,92.2,117.5,'Three','skull','Firefox');
/*!40000 ALTER TABLE `rendering` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `startup`
--

DROP TABLE IF EXISTS `startup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `startup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `library` varchar(50) NOT NULL,
  `scene` varchar(50) NOT NULL,
  `ms` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=281 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `startup`
--

LOCK TABLES `startup` WRITE;
/*!40000 ALTER TABLE `startup` DISABLE KEYS */;
INSERT INTO `startup` VALUES
(184,'Three','piratePerto',35),
(185,'Three','pirate_longe',51),
(186,'pc','pirate_perto',163),
(187,'pc','pirate_longe',121),
(188,'claygl','pirate_perto',39),
(189,'claygl','pirate_longe',39),
(190,'Babylon','pirate_perto',442),
(191,'Babylon','pirate_longe',445),
(192,'Three','floresta_perto',41),
(193,'Three','floresta_longe',43),
(194,'pc','floresta_perto',111),
(195,'pc','floresta_longe',185),
(196,'claygl','floresta_perto',40),
(197,'claygl','floresta_longe',47),
(198,'Babylon','floresta_perto',424),
(199,'Babylon','floresta_longe',435),
(200,'Three','pirate_perto_colors',46),
(201,'Babylon','pirate_perto_colors',435),
(202,'claygl','pirate_perto_colors',52),
(203,'claygl','pirate_perto_colors',57),
(204,'Three','pirate_longe_colors',47),
(205,'claygl','pirate_longe_colors',40),
(206,'Babylon','pirate_perto_colors',422),
(207,'Babylon','pirate_longe_colors',425),
(208,'pc','floresta_sombra',134),
(209,'pc','floresta_sombra_brave',143),
(210,'claygl','floresta_sombra_brave',78),
(211,'Three','floresta_sombra_brave',46),
(212,'Babylon','floresta_sombra_brave',430),
(213,'pc','floresta28',116),
(214,'Three','floresta28',48),
(215,'claygl','floresta28',42),
(216,'Three','floresta_fxaa',88),
(217,'claygl','floresta_fxaa',43),
(218,'Babylon','floresta_fxaa',438),
(219,'Three','floresta_ssao',80),
(220,'Three','floresta_fxaa_ssao',69),
(221,'Three','floresta_all',82),
(222,'claygl','floresta_ssao',43),
(223,'claygl','floresta_fxaa_ssao',42),
(224,'claygl','floresta_all',45),
(225,'Babylon','floresta_ssao',427),
(226,'Babylon','floresta_fxaa_ssao',433),
(227,'Babylon','floresta_all',438),
(228,'pc','floresta_merged',116),
(229,'Three','floresta_merged',43),
(230,'claygl','floresta_merged',39),
(231,'Babylon','floresta_merged',432),
(232,'pc','skull',109),
(233,'Three','skull',42),
(234,'claygl','skull',42),
(235,'Babylon','skull',433),
(236,'Three','pirate_perto',69),
(237,'Three','pirate_longe',55),
(238,'claygl','pirate_longe',43),
(239,'pc','pirate_longe',146),
(240,'Babylon','pirate_longe',326),
(241,'pc','pirate_perto',161),
(242,'claygl','pirate_perto',41),
(243,'Babylon','pirate_perto',340),
(244,'pc','floresta_longe',139),
(245,'claygl','floresta_longe',34),
(246,'Babylon','floresta_longe',339),
(247,'Three','floresta_longe',47),
(248,'pc','floresta_perto',150),
(249,'claygl','floresta_perto',47),
(250,'Babylon','floresta_perto',346),
(251,'Three','floresta_perto',56),
(252,'claygl','pirate_perto_colors',40),
(253,'Babylon','pirate_perto_colors',324),
(254,'Three','pirate_perto_colors',51),
(255,'claygl','pirate_longe_colors',37),
(256,'Babylon','pirate_longe_colors',313),
(257,'pc','floresta_sombra',133),
(258,'claygl','floresta_sombra',32),
(259,'Babylon','floresta_sombra',349),
(260,'Three','floresta_sombra',54),
(261,'pc','floresta28',137),
(262,'claygl','floresta28',47),
(263,'Three','floresta28',47),
(264,'claygl','floresta_fxaa',49),
(265,'Babylon','floresta_fxaa',331),
(266,'Three','floresta_fxaa',53),
(267,'claygl','floresta_ssao',44),
(268,'Babylon','floresta_ssao',334),
(269,'Three','floresta_ssao',50),
(270,'claygl','floresta_all',39),
(271,'Babylon','floresta_all',310),
(272,'Three','floresta_all',35),
(273,'pc','floresta_merged.glb',131),
(274,'pc','skull',140),
(275,'claygl','floresta_merged',45),
(276,'claygl','skull',25),
(277,'Babylon','floresta_merged.glb',545),
(278,'Three','floresta_merged',49),
(279,'Babylon','skull',335),
(280,'Three','skull',67);
/*!40000 ALTER TABLE `startup` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-28 17:46:25
