-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: tcc
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `model_loading`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_loading` (
  `id` int NOT NULL AUTO_INCREMENT,
  `library` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scene` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ms` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=231 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_loading`
--

LOCK TABLES `model_loading` WRITE;
/*!40000 ALTER TABLE `model_loading` DISABLE KEYS */;
INSERT INTO `model_loading` VALUES (169,'Three','pirate_perto',81),(170,'Three','pirate_longe',82),(171,'Three','floresta_perto',63),(172,'Three','floresta_longe',51),(173,'Three','floresta_sombra',64),(174,'Three','floresta28',66),(175,'Three','floresta_fxaa',65),(176,'Three','floresta_colors',66),(177,'pc','pirate_perto',91),(178,'pc','pirate_longe',84),(179,'pc','pirate_longe2',82),(180,'pc','floresta_perto',105),(181,'pc','floresta_longe',92),(182,'pc','floresta_sombra',391),(183,'Three','pirate_longe',76),(184,'pc','pirate_longe',82),(185,'pc','pirate_longe',80),(186,'claygl','pirate_longe',46),(187,'Babylon','pirate_longe',159),(188,'Three','pirate_perto',81),(189,'pc','floresta28',103),(190,'Three','floresta28',65),(191,'claygl','floresta28',35),(192,'Three','floresta_sombra',63),(193,'pc','floresta_sombra',94),(194,'Babylon','floresta_sombra',139),(195,'Three','floresta_perto',64),(196,'Three','floresta_longe',64),(197,'pc','pirate_perto',83),(198,'pc','floresta_perto',93),(199,'pc','floresta_longe',98),(200,'claygl','pirate_perto',47),(201,'claygl','floresta_perto',41),(202,'claygl','floresta_longe',40),(203,'Babylon','floresta_longe',170),(204,'Babylon','floresta_perto',159),(205,'claygl','floresta_sombra',342),(206,'Three','floresta_longe',374),(207,'Babylon','skull',107),(208,'Three','skull',414),(209,'pc','skull',431),(210,'claygl','skull',425),(211,'Three','sponza',809),(212,'Three','sponza',455),(213,'Three','sponza_sombra',776),(214,'pc','sponza',371),(215,'Three','floresta_merged',290),(216,'Babylon','floresta_merged',572),(217,'pc','floresta_merged',675),(218,'claygl','floresta_merged',273),(219,'Three','floresta_fxaa',427),(220,'Three','floresta_colors',378),(221,'Babylon','floresta_fxaa',472),(222,'Babylon','floresta_colors',161),(223,'claygl','floresta_colors',350),(224,'claygl','floresta_fxaa',350),(225,'claygl','floresta_colors_adv',27),(226,'Three','floresta_colors',372),(227,'Three','desert',3348),(228,'Babylon','desert',6810),(229,'pc','desert',3691),(230,'claygl','desert',1492);
/*!40000 ALTER TABLE `model_loading` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rendering`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rendering` (
  `id` int NOT NULL AUTO_INCREMENT,
  `total_ms` int NOT NULL,
  `total_frames` int NOT NULL,
  `fps_avg` double NOT NULL,
  `fps_truncated_avg` double NOT NULL,
  `fps_max_avg` double NOT NULL,
  `fps_min_avg` double NOT NULL,
  `fps_low` double NOT NULL,
  `library` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scene` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=227 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rendering`
--

LOCK TABLES `rendering` WRITE;
/*!40000 ALTER TABLE `rendering` DISABLE KEYS */;
INSERT INTO `rendering` VALUES (179,30011,2264,1137.1170266199,1887.4999999999,3000,120.80536912752,77.357630979499,'Three','pirate_longe'),(180,30003,2250,756.89616505941,750,1250,520.23121387283,465.51724137931,'pc','pirate_longe'),(181,30009,2250,747.59109535938,750,750,604.02684563758,557.85123966942,'pc','pirate_longe'),(182,30004,2251,2969.6569920844,3000,3000,1698.1132075472,1468.0434782609,'claygl','pirate_longe'),(183,30003,2250,776.75489067892,750,2500,412.84403669725,355.26315789474,'Babylon','pirate_longe'),(184,30002,2260,1888.5793871866,3000,3000,118.57707509881,76.437429537768,'Three','pirate_perto'),(185,30008,2250,474.91732920566,475.93865679533,666.66666666667,257.14285714286,231.16438356164,'pc','floresta28'),(186,30007,2250,393.03598462793,411.0527517698,428.57142857143,207.3732718894,192.85714285714,'Three','floresta28'),(187,30011,2250,257.18204678809,258.65785313983,306.12244897959,167.91044776119,152.37020316027,'claygl','floresta28'),(188,30007,2250,205.67354276486,206.56414964425,230.76923076923,154.1095890411,141.21338912134,'Three','floresta_sombra'),(189,30001,2250,242.88438703177,244.56521739131,300,144.46227929374,127.35849056604,'pc','floresta_sombra'),(190,30011,2251,185.77716643741,187.5,220.58823529412,117.49347258486,121.23877917415,'Babylon','floresta_sombra'),(191,30001,2250,533.09113884061,565.68196103078,697.67441860465,297.0297029703,249.07749077491,'Three','floresta_perto'),(192,30008,2250,295.94878989829,300,300,203.16027088036,179.0450928382,'Three','floresta_longe'),(193,30008,2251,786.23821166607,750,2307.6923076923,638.29787234042,587.21739130435,'pc','pirate_perto'),(194,30005,2250,723.78297233539,750,937.5,310.34482758621,268.92430278884,'pc','floresta_perto'),(195,30002,2250,707.39886816179,750,750,307.16723549488,256.65399239544,'pc','floresta_longe'),(196,30004,2250,2900.7305543618,3000,3000,865.38461538461,675,'claygl','pirate_perto'),(197,30004,2250,420.9804166147,428.57142857142,428.57142857143,266.27218934911,213.60759493671,'claygl','floresta_perto'),(198,30010,2250,294.05358309737,300,300,163.33938294011,154.46224256293,'claygl','floresta_longe'),(199,30009,2251,412.24589463403,428.57142857142,428.57142857143,191.48936170213,172.27040816327,'Babylon','floresta_longe'),(200,30004,2250,362.57184293926,372.28541882109,434.78260869565,200.44543429844,188.54748603352,'Babylon','floresta_perto'),(201,30003,2250,188.11660442561,187.5,223.88059701493,127.84090909091,114.40677966102,'claygl','floresta_sombra'),(202,30002,2250,296.65113826141,300,326.08695652174,213.27014218009,196.79300291545,'Three','floresta_longe'),(203,30001,2250,747.0946319867,750,810.81081081081,548.78048780488,496.32352941176,'Babylon','skull'),(204,30003,2260,1715.1530483178,3000,3000,129.68299711816,74.342105263158,'Three','skull'),(205,30005,2250,2593.1617364578,3000,3000,569.62025316456,485.61151079137,'pc','skull'),(206,30009,2250,841.54095499312,788.78177037686,3000,529.41176470588,475.35211267606,'claygl','skull'),(211,30009,2250,1875.5209780494,2255.6390977443,3000,450,392.44186046512,'Three','floresta_merged'),(212,30002,2263,1565.3677657367,3000,3000,102.15664018161,78.667439165701,'Babylon','floresta_merged'),(213,30011,2251,2889.6020539152,3000,3000,857.14285714286,619.54128440367,'pc','floresta_merged'),(214,30002,2250,991.33499779701,957.95635976587,3000,538.92215568862,485.61151079137,'claygl','floresta_merged'),(215,30004,2250,423.11790885727,428.57142857142,428.57142857143,278.63777089783,219.15584415584,'Three','floresta_fxaa'),(216,30009,2250,314.08496579965,308.85380919699,428.57142857143,216.34615384615,191.21813031161,'Three','floresta_colors'),(217,30005,2251,297.29253797051,300.00000000001,348.83720930233,184.80492813142,179.12466843501,'Babylon','floresta_fxaa'),(218,30006,2249,296.76709918629,300.00000000001,326.08695652174,189.0756302521,176.16187989556,'Babylon','floresta_colors'),(219,30005,2250,287.88331129783,300,312.5,166.05166051661,139.46280991736,'claygl','floresta_colors'),(220,30015,2278,113.93607975859,117.43497295905,130.62409288824,89.285714285714,106.11801242236,'claygl','floresta_fxaa'),(221,30011,2497,87.151266956747,88.185989059468,91.743119266055,67.415730337079,61.051344743276,'claygl','floresta_colors_adv'),(222,30008,2250,329.83141949671,336.3857222949,428.57142857143,180,157.71028037383,'Three','floresta_colors'),(223,30031,1064,35.433595311043,35.486692490316,37.128712871287,32.119914346895,28.297872340426,'Three','desert'),(224,30035,1699,56.569221548911,56.765098431765,60.606060606061,49.668874172185,46.933701657459,'Babylon','desert'),(225,30024,1964,65.455757373771,65.606610742456,71.428571428571,50.761421319797,45.88785046729,'pc','desert'),(226,30030,1212,40.360984381764,40.534893439198,42.553191489362,35.714285714286,30.224438902743,'claygl','desert');
/*!40000 ALTER TABLE `rendering` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `startup`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `startup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `library` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scene` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ms` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=230 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `startup`
--

LOCK TABLES `startup` WRITE;
/*!40000 ALTER TABLE `startup` DISABLE KEYS */;
INSERT INTO `startup` VALUES (168,'Three','pirate_perto',35),(169,'Three','pirate_longe',37),(170,'Three','floresta_perto',35),(171,'Three','floresta_longe',30),(172,'Three','floresta_sombra',37),(173,'Three','floresta28',36),(174,'Three','floresta_fxaa',40),(175,'Three','floresta_colors',38),(176,'pc','pirate_perto',191),(177,'pc','pirate_longe',183),(178,'pc','pirate_longe2',185),(179,'pc','floresta_perto',181),(180,'pc','floresta_longe',186),(181,'pc','floresta_sombra',73),(182,'Three','pirate_longe',32),(183,'pc','pirate_longe',183),(184,'pc','pirate_longe',188),(185,'claygl','pirate_longe',30),(186,'Babylon','pirate_longe',405),(187,'Three','pirate_perto',37),(188,'pc','floresta28',188),(189,'Three','floresta28',37),(190,'claygl','floresta28',33),(191,'Three','floresta_sombra',44),(192,'pc','floresta_sombra',184),(193,'Babylon','floresta_sombra',438),(194,'Three','floresta_perto',16),(195,'Three','floresta_longe',39),(196,'pc','pirate_perto',191),(197,'pc','floresta_perto',186),(198,'pc','floresta_longe',185),(199,'claygl','pirate_perto',32),(200,'claygl','floresta_perto',32),(201,'claygl','floresta_longe',42),(202,'Babylon','floresta_longe',444),(203,'Babylon','floresta_perto',405),(204,'claygl','floresta_sombra',30),(205,'Three','floresta_longe',33),(206,'Babylon','skull',124),(207,'Three','skull',39),(208,'pc','skull',181),(209,'claygl','skull',31),(210,'Three','sponza',43),(211,'Three','sponza',36),(212,'Three','sponza_sombra',39),(213,'pc','sponza',86),(214,'Three','floresta_merged',39),(215,'Babylon','floresta_merged',400),(216,'pc','floresta_merged',182),(217,'claygl','floresta_merged',32),(218,'Three','floresta_fxaa',41),(219,'Three','floresta_colors',293),(220,'Babylon','floresta_fxaa',413),(221,'Babylon','floresta_colors',404),(222,'claygl','floresta_colors',33),(223,'claygl','floresta_fxaa',49),(224,'claygl','floresta_colors_adv',57),(225,'Three','floresta_colors',40),(226,'Three','desert',47),(227,'Babylon','desert',404),(228,'pc','desert',172),(229,'claygl','desert',36);
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

-- Dump completed on 2023-10-26  0:06:22
