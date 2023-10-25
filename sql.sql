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
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_loading`
--

LOCK TABLES `model_loading` WRITE;
/*!40000 ALTER TABLE `model_loading` DISABLE KEYS */;
/* INSERT INTO `model_loading` VALUES */
/* (82,'Three','pirate_longe',191), */
/* (83,'Three','pirate_perto',188), */
/* (84,'Three','floresta_longe',171), */
/* (85,'Three','floresta_perto',155), */
/* (86,'Three','floresta_merged',3393), */
/* (87,'Three','floresta28',331), */
/* (88,'Three','floresta_sombra',185), */
/* (89,'Three','floresta_fxaa',198), */
/* (90,'Three','floresta_perto',221), */
/* (91,'Three','pirate_longe',233), */
/* (92,'Three','pirate_perto',151), */
/* (93,'Three','floresta_longe',189), */
/* (94,'Three','floresta_perto',200), */
/* (95,'Three','floresta_sombra',227), */
/* (96,'Three','floresta28',231), */
/* (97,'Three','floresta_fxaa',208), */
/* (98,'Three','floresta_colors',191), */
/* (99,'Three','floresta_colors',192), */
/* (100,'Babylon','pirate_longe',418), */
/* (101,'Babylon','pirate_perto',266), */
/* (102,'Babylon','floresta_longe',361), */
/* (103,'Babylon','floresta_perto',350), */
/* (104,'Babylon','floresta_sombra',366), */
/* (105,'Babylon','floresta_dark',318), */
/* (106,'Babylon','floresta_sombra2',284), */
/* (107,'Babylon','floresta_fxaa',342), */
/* (108,'Babylon','floresta_colors',319), */
/* (109,'claygl','pirate_longe',260), */
/* (110,'claygl','pirate_perto',97), */
/* (111,'claygl','floresta_longe',132), */
/* (112,'claygl','floresta_perto',118), */
/* (113,'claygl','floresta28',112), */
/* (114,'claygl','floresta_fast',141), */
/* (115,'claygl','pirate_fast',180), */
/* (116,'claygl','floresta_perto_advanced',111), */
/* (117,'claygl','floresta_sombra_advanced',116), */
/* (118,'claygl','floresta_sombra',127), */
/* (119,'claygl','floresta_sombra_enabled',122), */
/* (120,'claygl','floresta_fxaa',165), */
/* (121,'claygl','floresta_colors',180), */
/* (122,'pc','pirate_longe',269), */
/* (123,'pc','pirate_perto',190), */
/* (124,'pc','floresta_longe',272), */
/* (125,'pc','floresta_perto',215), */
/* (126,'pc','floresta28',360), */
/* (127,'pc','floresta_sombra',197), */
/* (128,'pc','pirate_perto',272), */
/* (129,'pc','pirate_longe',186), */
/* (130,'pc','floresta28',288), */
/* (131,'pc','floresta_sombra',800), */
/* (132,'pc','floresta_perto',195), */
/* (133,'pc','floresta_longe',230), */
/* (134,'claygl','pirate_perto',146), */
/* (135,'claygl','pirate_longe',107), */
/* (136,'claygl','floresta_perto',137), */
/* (137,'claygl','floresta_longe',53), */
/* (138,'claygl','floresta28',138), */
/* (139,'claygl','floresta_sombra',129), */
/* (140,'claygl','floresta_fxaa',188), */
/* (141,'claygl','floresta_colors',120), */
/* (142,'Babylon','pirate_perto',274), */
/* (143,'Babylon','pirate_longe',294), */
/* (144,'Babylon','floresta_perto',235), */
/* (145,'Babylon','floresta_longe',330), */
/* (146,'Babylon','floresta_sombra',322), */
/* (147,'Babylon','floresta_fxaa',259), */
/* (148,'Babylon','floresta_colors',236), */
/* (149,'Three','pirate_perto',212), */
/* (150,'Three','pirate_longe',205), */
/* (151,'Three','floresta_perto',195), */
/* (152,'Three','floresta_longe',125), */
/* (153,'Three','floresta28',209), */
/* (154,'Three','floresta_sombra',159), */
/* (155,'Three','floresta_fxaa',158), */
/* (156,'Three','floresta_colors',215), */
/* (157,'Three','floresta_merged',1260), */
/* (158,'Babylon','floresta_merged',635), */
/* (159,'claygl','floresta_merged',639), */
/* (160,'pc','floresta_merged',842), */
/* (161,'Three','skull',156), */
/* (162,'claygl','skull',276), */
/* (163,'pc','skull',276), */
/* (164,'Babylon','skull',226), */
/* (165,'pc','skull_perto',281), */
/* (166,'claygl','skull_perto',245), */
/* (167,'Three','skull_perto',246), */
/* (168,'Babylon','skull_perto',194); */
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
) ENGINE=InnoDB AUTO_INCREMENT=165 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rendering`
--

LOCK TABLES `rendering` WRITE;
/*!40000 ALTER TABLE `rendering` DISABLE KEYS */;
/* INSERT INTO `rendering` VALUES */
/* (89,30002,1805,217.71469926021,218.5640818796,337.07865168539,111.24845488257,5.7617728531856,'Three','pirate_longe'), */
/* (90,30002,1731,110.01885553272,110.85320954058,335.82089552239,46.296296296296,11.57327171192,'Three','pirate_perto'), */
/* (91,30001,1803,85.365276265328,85.411569726148,106.7615658363,69.177555726364,11.98003327787,'Three','floresta_longe'), */
/* (92,30007,1807,88.353217289262,88.499724776255,123.96694214876,66.273932253314,12.193322265265,'Three','floresta_perto'), */
/* (93,30000,2484,54.404882714112,54.396701903519,77.653149266609,34.052213393871,19.645732689211,'Three','floresta_sombra'), */
/* (94,30002,744,23.426184428724,22.866789441375,27.480916030534,16.882386043894,53.629032258065,'Three','floresta28'), */
/* (95,30009,1805,86.587354888227,86.966116315928,117.64705882353,67.365269461078,12.18836565097,'Three','floresta_fxaa'), */
/* (96,30001,1805,84.941176470588,85.036682490487,103.09278350515,70.148090413094,12.18836565097,'Three','floresta_colors'), */
/* (97,30013,1804,86.751622986294,84.271957980742,112.64080100125,69.177555726364,98.221415607985,'Three','floresta_colors'), */
/* (98,30011,1808,188.01344933966,193.41911928402,306.12244897959,103.8062283737,113.94957983193,'Babylon','pirate_longe'), */
/* (99,30013,1789,93.522923310157,92.180028732553,280.3738317757,43.352601156069,102.81609195402,'Babylon','pirate_perto'), */
/* (100,30020,1866,84.802763133975,81.985805224263,114.79591836735,62.981105668299,101.59709618875,'Babylon','floresta_longe'), */
/* (101,30018,2344,71.601669891047,67.015956180041,117.80104712042,43.668122270742,101.03448275862,'Babylon','floresta_perto'), */
/* (102,30037,2370,52.08638574694,52.706684705053,72.756669361358,34.522439585731,32.916666666667,'Babylon','floresta_sombra'), */
/* (103,30022,2419,51.61120554161,52.169463222817,66.964285714286,36.144578313253,34.118476727786,'Babylon','floresta_dark'), */
/* (104,30020,2458,52.022265021484,52.60484884125,69.444444444444,36.764705882353,34.717514124294,'Babylon','floresta_sombra2'), */
/* (105,30011,2519,60.703183362654,61.175590423809,93.167701863354,38.265306122449,112.12166172107,'Babylon','floresta_fxaa'), */
/* (106,30012,2372,71.500341626137,69.115362206252,108.17307692308,47.169811320755,102.24137931034,'Babylon','floresta_colors'), */
/* (107,30011,1805,199.29336424864,203.62628587533,285.71428571429,88.321884200196,139.2030848329,'claygl','pirate_longe'), */
/* (108,30012,1807,163.08664259928,163.6199163243,254.23728813559,98.468271334792,107.13438735178,'claygl','pirate_perto'), */
/* (109,30007,2354,70.133275071005,69.598197244146,107.14285714286,45.477513895907,101.46551724138,'claygl','floresta_longe'), */
/* (110,30010,2609,60.39351851852,61.489403453687,88.582677165354,36.319612590799,47.52276867031,'claygl','floresta_perto'), */
/* (111,30007,910,26.226799369788,26.321815530353,22.813688212928,15.31393568147,12.871287128713,'claygl','floresta28'), */
/* (112,30007,2621,58.451840233125,59.646727536478,81.743869209809,36.764705882353,35.07136485281,'claygl','floresta_perto_advanced'), */
/* (113,30041,1760,44.551698533508,44.94190747755,48.780487804878,28.625954198473,20.63305978898,'claygl','floresta_sombra_advanced'), */
/* (114,30051,1594,42.347065282846,42.052994682954,46.320123520329,30.769230769231,27.673611111111,'claygl','floresta_sombra'), */
/* (115,30027,1254,41.774935038977,41.814168506101,48,36.452004860267,34.1689373297,'claygl','floresta_sombra_enabled'), */
/* (116,30051,735,24.462490847367,24.535532783471,28.846153846154,20.297699594046,15.840517241379,'claygl','floresta_fxaa'), */
/* (117,30069,793,26.376184932646,26.404424300387,30.425963488844,22.288261515602,18.271889400922,'claygl','floresta_colors'), */
/* (118,30010,1806,206.04677695379,212.32440898634,277.77777777778,129.4964028777,131.18644067797,'pc','pirate_longe'), */
/* (119,30012,1413,89.900746521888,88.304184884449,272.72727272727,37.453183520599,97.448275862069,'pc','pirate_perto'), */
/* (120,30009,1808,86.714628297361,83.951762523192,114.94252873563,67.415730337079,98.439201451906,'pc','floresta_longe'), */
/* (121,30013,1810,92.825273090928,91.423760917607,129.87012987013,68.965517241379,98.548094373866,'pc','floresta_perto'), */
/* (122,30013,534,17.718298954819,21.658457593955,32.537960954447,9.1547146780592,8.989898989899,'pc','floresta28'), */
/* (123,30007,2575,65.607324240314,65.524952045864,96.774193548387,43.795620437956,102.45358090186,'pc','floresta_sombra'), */
/* (124,30006,1469,88.83289659343,87.256282897177,315.78947368421,38.659793814433,101.31034482759,'pc','pirate_perto'), */
/* (125,30009,1801,191.75894378194,189.66349317773,275.22935779816,138.6748844376,121.96388261851,'pc','pirate_longe'), */
/* (126,30002,497,16.447876447876,17.189384800965,21.116846550915,8.7260034904014,10.081135902637,'pc','floresta28'), */
/* (127,30017,2673,63.281749382493,63.187435379841,89.285714285714,43.923865300146,102.41379310345,'pc','floresta_sombra'), */
/* (128,30010,1809,94.091334650993,93.087498393937,129.31034482759,69.018404907975,98.493647912886,'pc','floresta_perto'), */
/* (129,30018,1809,86.422702082935,85.34741719514,114.79591836735,64.562410329986,98.493647912886,'pc','floresta_longe'), */
/* (130,30014,1805,177.83251231527,182.90367495042,222.22222222222,114.06844106464,117.46203904555,'claygl','pirate_perto'), */
/* (131,30010,1804,178.36662052601,178.16895615694,272.72727272727,103.8062283737,122.16704288939,'claygl','pirate_longe'), */
/* (132,30006,2538,59.74248118826,60.549474562465,89.641434262948,36.630036630037,72.307692307692,'claygl','floresta_perto'), */
/* (133,30010,2554,67.25713432993,67.943092673844,99.118942731278,41.379310344828,104.95890410959,'claygl','floresta_longe'), */
/* (134,30002,1277,33.708458350565,30.552209534997,29.663810151615,18.072289156627,113.34319526627,'claygl','floresta28'), */
/* (135,30051,1433,42.092173930072,41.576047556909,48.596112311015,32.858707557503,28.489065606362,'claygl','floresta_sombra'), */
/* (136,30011,726,24.195160967806,24.397400964158,33.632286995516,18.214936247723,14.124513618677,'claygl','floresta_fxaa'), */
/* (137,30006,770,25.662389601733,25.734218991519,33.975084937712,19.442644199611,15.77868852459,'claygl','floresta_colors'), */
/* (138,30014,1819,92.692621280064,92.193794688997,305.08474576271,45.112781954887,99.038112522686,'Babylon','pirate_perto'), */
/* (139,30010,1812,188.84835852006,196.29963898917,290.32258064516,79.505300353357,108.9378757515,'Babylon','pirate_longe'), */
/* (140,30020,2457,70.874318516166,66.65461815635,117.64705882353,41.743970315399,101.66896551724,'Babylon','floresta_perto'), */
/* (141,30016,1822,85.144165615215,82.368227783742,121.9512195122,62.893081761006,99.201451905626,'Babylon','floresta_longe'), */
/* (142,30003,2397,53.39203908437,54.116806572601,74.257425742574,35.460992907801,34.992700729927,'Babylon','floresta_sombra'), */
/* (143,30023,2523,58.805705761702,59.504278374314,86.206896551724,37.735849056604,50.730563002681,'Babylon','floresta_fxaa'), */
/* (144,30010,2518,72.889026120013,68.446486572128,110.02444987775,45.988758303526,100.18567639257,'Babylon','floresta_colors'), */
/* (145,30010,1818,118.39020578276,124.03100775194,294.11764705882,50.420168067227,98.983666061706,'Three','pirate_perto'), */
/* (146,30009,1811,202.55005032994,214.69847384797,309.27835051546,76.335877862595,129.66587112172,'Three','pirate_longe'), */
/* (147,30008,1804,87.581318574618,85.25209587909,121.45748987854,67.014147431124,98.221415607985,'Three','floresta_perto'), */
/* (148,30011,1803,82.710216064956,82.127070250992,102.04081632653,69.713400464756,98.166969147005,'Three','floresta_longe'), */
/* (149,30003,998,28.634003117797,28.649532654498,33.210332103321,18.192844147968,16.307189542484,'Three','floresta28'), */
/* (150,30018,2517,54.111189141934,55.314593170088,74.503311258278,34.052213393871,32.186700767263,'Three','floresta_sombra'), */
/* (151,30005,1802,87.650177537817,85.330492928577,126.58227848101,70.754716981132,98.112522686025,'Three','floresta_fxaa'), */
/* (152,30007,1805,84.33791234464,82.795370335002,103.44827586207,69.984447900467,98.275862068966,'Three','floresta_colors'), */
/* (153,30015,1886,116.98300459,123.29550093901,310.34482758621,51.575931232092,102.68602540835,'Three','floresta_merged'), */
/* (154,30017,1751,92.112646419303,89.844167503903,306.12244897959,42.796005706134,100.63218390805,'Babylon','floresta_merged'), */
/* (155,30017,1578,87.81139285118,85.15989938915,218.97810218978,40.705563093623,102.02586206897,'claygl','floresta_merged'), */
/* (156,30017,1961,94.583514204407,93.798573193576,196.93654266958,44.291338582677,101.43103448276,'pc','floresta_merged'), */
/* (157,30010,1804,222.22222222222,227.79618236314,277.77777777778,139.75155279503,132.97297297297,'Three','skull'), */
/* (158,30008,1804,178.77316420573,178.69812721722,229.00763358779,130.05780346821,117.14285714286,'claygl','skull'), */
/* (159,30011,1805,168.80202001309,170.85763834148,217.39130434783,112.78195488722,110.28513238289,'pc','skull'), */
/* (160,30012,1805,175.01616031028,181.00208768267,238.09523809524,107.52688172043,98.813868613139,'Babylon','skull'), */
/* (161,30010,1804,181.05178643115,180.5752396832,270.27027027027,117.80104712042,117.39696312364,'pc','skull_perto'), */
/* (162,30014,1812,93.471121275168,92.863394744146,230.76923076923,44.665012406948,98.656987295826,'claygl','skull_perto'), */
/* (163,30010,1805,203.04473358581,202.74062295388,275.22935779816,139.75155279503,135.03740648379,'Three','skull_perto'), */
/* (164,30049,1750,96.196130167106,94.814547260539,263.15789473684,44.820717131474,100.57471264368,'Babylon','skull_perto'); */
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
) ENGINE=InnoDB AUTO_INCREMENT=168 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `startup`
--

LOCK TABLES `startup` WRITE;
/*!40000 ALTER TABLE `startup` DISABLE KEYS */;
/* INSERT INTO `startup` VALUES */
/* (81,'Three','pirate_longe',267), */
/* (82,'Three','pirate_perto',43), */
/* (83,'Three','floresta_longe',35), */
/* (84,'Three','floresta_perto',40), */
/* (85,'Three','floresta_merged',44), */
/* (86,'Three','floresta28',39), */
/* (87,'Three','floresta_sombra',40), */
/* (88,'Three','floresta_fxaa',38), */
/* (89,'Three','floresta_perto',57), */
/* (90,'Three','pirate_longe',44), */
/* (91,'Three','pirate_perto',110), */
/* (92,'Three','floresta_longe',32), */
/* (93,'Three','floresta_perto',56), */
/* (94,'Three','floresta_sombra',49), */
/* (95,'Three','floresta28',63), */
/* (96,'Three','floresta_fxaa',49), */
/* (97,'Three','floresta_colors',54), */
/* (98,'Three','floresta_colors',615), */
/* (99,'Babylon','pirate_longe',1737), */
/* (100,'Babylon','pirate_perto',473), */
/* (101,'Babylon','floresta_longe',425), */
/* (102,'Babylon','floresta_perto',444), */
/* (103,'Babylon','floresta_sombra',179), */
/* (104,'Babylon','floresta_dark',445), */
/* (105,'Babylon','floresta_sombra2',409), */
/* (106,'Babylon','floresta_fxaa',692), */
/* (107,'Babylon','floresta_colors',438), */
/* (108,'claygl','pirate_longe',84), */
/* (109,'claygl','pirate_perto',95), */
/* (110,'claygl','floresta_longe',86), */
/* (111,'claygl','floresta_perto',83), */
/* (112,'claygl','floresta28',46), */
/* (113,'claygl','floresta_fast',53), */
/* (114,'claygl','pirate_fast',64), */
/* (115,'claygl','floresta_perto_advanced',53), */
/* (116,'claygl','floresta_sombra_advanced',146), */
/* (117,'claygl','floresta_sombra',70), */
/* (118,'claygl','floresta_sombra_enabled',60), */
/* (119,'claygl','floresta_fxaa',169), */
/* (120,'claygl','floresta_colors',83), */
/* (121,'pc','pirate_longe',143), */
/* (122,'pc','pirate_perto',115), */
/* (123,'pc','floresta_longe',174), */
/* (124,'pc','floresta_perto',105), */
/* (125,'pc','floresta28',116), */
/* (126,'pc','floresta_sombra',133), */
/* (127,'pc','pirate_perto',154), */
/* (128,'pc','pirate_longe',117), */
/* (129,'pc','floresta28',241), */
/* (130,'pc','floresta_sombra',138), */
/* (131,'pc','floresta_perto',110), */
/* (132,'pc','floresta_longe',153), */
/* (133,'claygl','pirate_perto',384), */
/* (134,'claygl','pirate_longe',66), */
/* (135,'claygl','floresta_perto',42), */
/* (136,'claygl','floresta_longe',38), */
/* (137,'claygl','floresta28',76), */
/* (138,'claygl','floresta_sombra',59), */
/* (139,'claygl','floresta_fxaa',54), */
/* (140,'claygl','floresta_colors',81), */
/* (141,'Babylon','pirate_perto',598), */
/* (142,'Babylon','pirate_longe',468), */
/* (143,'Babylon','floresta_perto',419), */
/* (144,'Babylon','floresta_longe',447), */
/* (145,'Babylon','floresta_sombra',559), */
/* (146,'Babylon','floresta_fxaa',426), */
/* (147,'Babylon','floresta_colors',447), */
/* (148,'Three','pirate_perto',52), */
/* (149,'Three','pirate_longe',45), */
/* (150,'Three','floresta_perto',90), */
/* (151,'Three','floresta_longe',34), */
/* (152,'Three','floresta28',52), */
/* (153,'Three','floresta_sombra',46), */
/* (154,'Three','floresta_fxaa',46), */
/* (155,'Three','floresta_colors',53), */
/* (156,'Three','floresta_merged',47), */
/* (157,'Babylon','floresta_merged',502), */
/* (158,'claygl','floresta_merged',64), */
/* (159,'pc','floresta_merged',122), */
/* (160,'Three','skull',29), */
/* (161,'claygl','skull',57), */
/* (162,'pc','skull',142), */
/* (163,'Babylon','skull',438), */
/* (164,'pc','skull_perto',143), */
/* (165,'claygl','skull_perto',57), */
/* (166,'Three','skull_perto',52), */
/* (167,'Babylon','skull_perto',149); */
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

-- Dump completed on 2023-10-24 22:56:32
