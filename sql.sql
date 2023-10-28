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
) ENGINE=InnoDB AUTO_INCREMENT=237 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
(236,'Babylon','skull',228);
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
  `fps_avg` double NOT NULL,
  `fps_truncated_avg` double NOT NULL,
  `fps_max_avg` double NOT NULL,
  `fps_min_avg` double NOT NULL,
  `fps_low` double NOT NULL,
  `library` varchar(50) NOT NULL,
  `scene` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=233 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rendering`
--

LOCK TABLES `rendering` WRITE;
/*!40000 ALTER TABLE `rendering` DISABLE KEYS */;
INSERT INTO `rendering` VALUES
(181,30010,1442,130.22706952968,145.34005037782,392.15686274438,29.964043148207,98.228882833787,'Three','pirate_perto'),
(182,30008,1802,244.9234784027,248.74792278809,350.87719298246,154.98536249358,144.08315565032,'Three','pirate_longe'),
(183,30010,1193,111.59336239311,125.37854254552,346.4203233234,19.50035750655,42.673184690585,'pc','pirate_perto'),
(184,30011,1802,225.56014519965,227.35753364902,385.60411311054,119.93603411514,130.01443001443,'pc','pirate_longe'),
(185,30015,1268,89.577333449509,89.588036117387,209.35101186363,21.037868162678,59.896079357555,'claygl','pirate_perto'),
(186,30010,1803,273.39307646817,282.21626801744,384.12291933419,121.5230893868,157.10136508859,'claygl','pirate_longe'),
(187,30012,1682,152.78824929377,175.62477709838,391.98606272206,43.670241156865,100.69846338056,'Babylon','pirate_perto'),
(188,30009,1807,241.15412333067,253.57048979235,386.10038610039,83.018171755288,125.02306273031,'Babylon','pirate_longe'),
(189,30013,1803,93.269716569731,91.786108048513,131.34851138354,70.977917981057,95.212110543918,'Three','floresta_perto'),
(190,30008,1815,93.702567915003,92.145928371812,142.5855513308,66.391265860177,96.457041629761,'Three','floresta_longe'),
(191,30004,1813,107.2969416722,109.49152968697,151.82186234818,76.284115951802,95.740186586868,'pc','floresta_perto'),
(192,30009,1809,94.868500406429,93.62219020359,144.02304368699,68.368277119431,95.528956169688,'pc','floresta_longe'),
(193,30009,1769,44.183908964663,54.589723109004,90.334236675472,9.5690727568567,13.157307549275,'claygl','floresta_perto'),
(194,30006,2126,52.25513088362,59.939919211417,107.14285714321,12.061271257989,10.122845443292,'claygl','floresta_longe'),
(195,30007,1884,82.46038925037,79.018383476685,134.58950201867,20.038295408999,99.489526491815,'Babylon','floresta_perto'),
(196,30013,1847,88.98088701467,86.596054873443,136.90295101928,51.212017753532,97.845664841957,'Babylon','floresta_longe'),
(197,30010,1358,119.85172981879,127.85259348047,312.60854463568,30.215537500862,97.324414715719,'Three','pirate_perto_colors'),
(200,30010,942,36.244570047821,34.708103621023,117.66243953488,5.958291956307,52.410979228487,'claygl','pirate_perto_colors'),
(201,30011,1805,243.17624552045,253.29695050337,398.93617021277,108.76132930521,130.26220832331,'Three','pirate_longe_colors'),
(202,30019,1358,61.853604027626,63.270282739078,138.46153846136,12.933821944387,12.77636654436,'claygl','pirate_longe_colors'),
(203,30015,1465,120.18540547191,130.61633539334,334.94603647086,25.179755476561,99.86366734833,'Babylon','pirate_perto_colors'),
(204,30007,1805,214.4206287296,220.52427293122,288.46153846154,108.43373493994,123.54551676926,'Babylon','pirate_longe_colors'),
(205,30024,2091,52.134844160614,58.927747466599,89.802434643734,14.91053677931,10.377171215871,'pc','floresta_sombra'),
(206,30014,2752,59.704514720029,59.771986970683,83.487940630798,42.857142857143,42.338461538462,'pc','floresta_sombra_brave'),
(207,30030,2207,49.377652156405,49.774180524126,50.167224080268,34.522439585731,31.985507246377,'claygl','floresta_sombra_brave'),
(208,30003,2509,55.264317180619,56.027069989681,83.256244218316,34.013605442177,54.464544138929,'Three','floresta_sombra_brave'),
(209,30006,2505,54.440741813969,55.165772458384,73.83100902379,36.585365853659,35.084033613445,'Babylon','floresta_sombra_brave'),
(210,30030,409,18.453847333894,23.580904962029,88.495575220947,2.964280420927,31.063291139197,'pc','floresta28'),
(211,30005,852,25.889338272163,23.897681481052,94.696969696469,3.9868169253669,96.598639456394,'Three','floresta28'),
(212,30005,902,25.887280314474,27.419665191454,79.449152541628,4.6379321006744,14.582884242359,'claygl','floresta28'),
(213,30033,2143,67.33904460047,63.228914478129,133.491545536,19.041574103448,71.600400935472,'Three','floresta_fxaa'),
(214,30098,572,19.039820519733,19.01559029292,21.229920033973,17.393320964714,12.206572769963,'claygl','floresta_fxaa'),
(215,30015,1925,73.042831557556,71.221142958392,137.44654856398,19.131026273283,52.088031027539,'Babylon','floresta_fxaa'),
(216,30007,1176,30.928512880308,31.6702528241,74.943792156092,5.2399000925734,13.404764618719,'Three','floresta_ssao'),
(217,30006,1040,28.573024683613,29.451431686484,71.22507122567,5.286716244318,10.81755772833,'Three','floresta_fxaa_ssao'),
(218,30003,672,20.727562105576,20.361896759886,61.923764964696,4.6847184484193,13.130128956605,'Three','floresta_all'),
(219,30041,444,14.802319029981,14.757210721364,15.945572446079,13.101580924094,11.897106109289,'claygl','floresta_ssao'),
(220,30014,440,14.678360427141,14.565014999482,15.685454355339,13.109023377774,11.937059142654,'claygl','floresta_fxaa_ssao'),
(221,30098,433,14.421315570356,14.369422531419,15.479876160976,12.879405830079,11.702702702703,'claygl','floresta_all'),
(222,30031,1369,35.695816366885,38.726622523098,79.393083981218,6.2778579948433,10.198912314685,'Babylon','floresta_ssao'),
(223,30045,1201,32.483690536722,32.710773451513,80.335624386205,5.9667057817397,9.8032813647821,'Babylon','floresta_fxaa_ssao'),
(224,30008,1202,31.812070589978,33.32467307526,73.571486961565,5.716790212858,12.745201993469,'Babylon','floresta_all'),
(225,30014,1775,125.84903787522,135.93836695382,249.1004705235,44.130626654729,99.551318003365,'pc','floresta_merged'),
(226,30013,1679,148.92145036536,169.80679479669,381.03302285838,47.453337551352,100.09936406995,'Three','floresta_merged'),
(227,30014,1239,98.036371309154,99.200799200844,251.81869054517,21.268550902707,96.370235934664,'claygl','floresta_merged'),
(228,30013,1544,123.96727392434,131.96293080133,359.28143712655,27.204304325429,98.868729989328,'Babylon','floresta_merged'),
(229,30010,1803,207.4106454693,208.94874022589,291.54518950437,145.32536735023,139.01310717039,'pc','skull'),
(230,30008,1801,244.68778870713,242.52454417952,449.77511244378,169.07758782624,154.10724472333,'Three','skull'),
(231,30013,1583,121.68997627183,131.98649924992,316.78986272252,26.682478505759,100.65705807546,'claygl','skull'),
(232,30011,1635,151.70963302043,173.93961943231,351.56250000307,43.872477332649,98.632616127308,'Babylon','skull');
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
) ENGINE=InnoDB AUTO_INCREMENT=236 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
(235,'Babylon','skull',433);
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

-- Dump completed on 2023-10-27 22:50:31
