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
-- Dumping data for table `model_loading`
--

LOCK TABLES `model_loading` WRITE;
/*!40000 ALTER TABLE `model_loading` DISABLE KEYS */;
INSERT INTO `model_loading` VALUES (282,'Three','pirate_longe',143),(283,'Three','pirate_longe',72),(284,'Three','pirate_longe',70),(285,'Three','pirate_longe',71),(286,'pc','pirate_longe',64),(287,'pc','pirate_longe',69),(288,'claygl','pirate_longe',32),(289,'Babylon','pirate_longe',144),(290,'Three','pirate_perto',73),(291,'claygl','pirate_perto',33),(292,'Babylon','pirate_perto',144),(293,'pc','pirate_perto',62),(294,'Three','pirate_longe_colors',71),(295,'claygl','pirate_longe_colors',32),(296,'Babylon','pirate_longe_colors',142),(297,'Three','pirate_perto_colors',70),(298,'claygl','pirate_longe_colors',35),(299,'Babylon','pirate_perto_colors',146),(300,'Three','floresta_longe',87),(301,'pc','floresta_longe',76),(302,'claygl','floresta_longe',21),(303,'Babylon','floresta_longe',132),(304,'Three','floresta_perto',54),(305,'claygl','floresta_perto',24),(306,'Babylon','floresta_perto',125),(307,'pc','floresta_perto',96),(308,'pc','floresta_sombra',121),(309,'pc','floresta_sombra',84),(310,'Three','floresta_sombra',55),(311,'claygl','floresta_sombra',20),(312,'Babylon','floresta_sombra',116),(313,'Three','floresta_sombra',54),(314,'Three','floresta_merged',556),(315,'claygl','floresta_merged',277),(316,'Babylon','floresta_merged',301),(317,'pc','floresta_merged',370),(318,'Three','floresta_fxaa',55),(319,'claygl','floresta_fxaa',23),(320,'Babylon','floresta_fxaa',120),(321,'Three','floresta_ssao',58),(322,'Three','floresta_all',50),(323,'claygl','floresta_ssao',21),(324,'claygl','floresta_all',21),(325,'Babylon','floresta_ssao',123),(326,'Babylon','floresta_all',131),(327,'Babylon','floresta_true_all',143),(328,'claygl','floresta_true_all',31),(329,'Three','floresta_true_all',52),(330,'pc','floresta28',86),(331,'claygl','floresta28',25),(332,'Three','floresta28',53),(333,'Three','skull',178),(334,'claygl','skull',69),(335,'Babylon','skull',81),(336,'pc','skull',81),(337,'Three','desert.glb',3279),(338,'claygl','desert',1206),(339,'claygl','desert4',1208),(340,'claygl','desert_sombra',1229),(341,'Three','desert4',3222),(342,'Three','desert_sombra',3491),(343,'pc','desert',3350),(344,'pc','desert_sombra',3328),(345,'pc','desert4',3343),(346,'Three','desert',3559),(347,'Three','desert4',3280),(348,'Three','desert_sombra',3389),(349,'pc','desert',3409),(350,'pc','desert4',3382),(351,'pc','desert_sombra',3388),(352,'Babylon','desert',6424),(353,'Babylon','desert4',6362),(354,'Babylon','desert_sombra',6355),(355,'Babylon','desert_sombra2',6344),(356,'claygl','desert',1172),(357,'claygl','desert4',1152),(358,'claygl','desert_sombra',1187);
/*!40000 ALTER TABLE `model_loading` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rendering`
--

LOCK TABLES `rendering` WRITE;
/*!40000 ALTER TABLE `rendering` DISABLE KEYS */;
INSERT INTO `rendering` VALUES (281,30004,2251,2062.1,2119.2,2343.8,931.7,720.7,'Three','pirate_longe','chrome'),(283,6008,451,1643.0,1765.0,2069.0,423.5,323.7,'pc','pirate_longe','chrome'),(284,30012,2251,2471.5,2561.8,3000.0,1295.0,1017.0,'claygl','pirate_longe','chrome'),(285,30006,2251,2002.1,2069.1,2752.3,944.4,609.5,'Babylon','pirate_longe','chrome'),(286,30003,2266,1347.7,1803.8,2608.7,116.0,76.9,'Three','pirate_perto','chrome'),(287,30007,2250,1952.8,2031.1,2325.6,816.0,683.2,'claygl','pirate_perto','chrome'),(288,30007,2250,1621.0,1667.7,2205.9,698.2,552.4,'Babylon','pirate_perto','chrome'),(289,30009,2270,985.1,1455.7,2040.8,110.9,77.3,'pc','pirate_perto','chrome'),(290,12001,901,1456.8,1617.9,2500.0,169.7,129.9,'Three','pirate_longe_colors','chrome'),(291,12008,901,1185.4,1207.2,1519.0,660.6,552.8,'claygl','pirate_longe_colors','chrome'),(292,12018,901,1481.2,1526.1,2553.2,451.7,350.6,'Babylon','pirate_longe_colors','chrome'),(293,10003,751,1471.1,1625.9,2752.3,180.5,139.2,'Three','pirate_perto_colors','chrome'),(294,10002,751,1043.5,1056.5,1327.4,542.5,450.6,'claygl','pirate_perto_colors','chrome'),(295,10014,751,1299.1,1345.3,1948.1,456.6,330.4,'Babylon','pirate_perto_colors','chrome'),(296,12002,900,366.9,369.7,398.7,259.9,300.0,'Three','floresta_longe','chrome'),(297,12005,901,498.1,504.8,550.5,331.5,281.3,'pc','floresta_longe','chrome'),(298,12004,900,276.2,278.5,297.0,203.5,204.1,'claygl','floresta_longe','chrome'),(299,12011,901,375.2,384.1,434.8,174.8,218.0,'Babylon','floresta_longe','chrome'),(300,12004,900,464.9,463.6,574.2,287.3,342.2,'Three','floresta_perto','chrome'),(301,12005,901,358.8,362.0,412.4,273.6,214.5,'claygl','floresta_perto','chrome'),(302,12010,900,374.7,381.1,430.1,198.5,261.6,'Babylon','floresta_perto','chrome'),(303,12005,900,598.8,615.1,779.2,294.4,226.9,'pc','floresta_perto','chrome'),(304,12002,901,252.4,255.0,272.1,189.9,162.2,'pc','floresta_sombra','chrome'),(305,12005,901,253.8,255.7,274.6,195.4,168.6,'pc','floresta_sombra','chrome'),(307,12006,900,162.5,163.4,169.0,133.2,133.9,'claygl','floresta_sombra','chrome'),(308,12013,1029,155.1,176.7,189.4,119.3,138.7,'Babylon','floresta_sombra','chrome'),(309,12005,901,226.0,227.9,235.8,177.3,149.1,'Three','floresta_sombra','chrome'),(310,12003,900,2335.4,2401.6,5217.4,601.0,448.5,'Three','floresta_merged','chrome'),(311,12005,901,1762.9,1814.1,2307.7,1146.5,958.5,'claygl','floresta_merged','chrome'),(312,12009,903,1371.6,1978.1,2666.7,148.2,85.3,'Babylon','floresta_merged','chrome'),(313,12005,901,1172.1,1190.1,1395.3,538.9,439.5,'pc','floresta_merged','chrome'),(314,12008,901,343.6,346.6,379.7,251.2,210.0,'Three','floresta_fxaa','chrome'),(315,12005,946,83.4,83.9,87.0,61.7,53.1,'claygl','floresta_fxaa','chrome'),(316,12017,901,363.0,368.3,427.0,211.0,196.3,'Babylon','floresta_fxaa','chrome'),(317,12006,901,159.6,161.5,175.2,102.7,114.4,'Three','floresta_ssao','chrome'),(318,12006,901,173.3,174.6,181.5,134.6,133.3,'Three','floresta_all','chrome'),(319,12004,1008,81.2,82.0,85.0,56.5,44.0,'claygl','floresta_ssao','chrome'),(320,12004,1460,78.1,78.4,82.4,54.1,53.8,'claygl','floresta_all','chrome'),(321,12014,902,234.8,234.2,300.8,163.8,156.3,'Babylon','floresta_ssao','chrome'),(322,12012,902,251.0,256.2,275.2,137.9,169.4,'Babylon','floresta_all','chrome'),(323,12016,901,233.3,235.6,260.9,175.8,152.5,'Babylon','floresta_true_all','chrome'),(324,12001,1766,77.3,77.2,82.7,56.5,57.7,'claygl','floresta_true_all','chrome'),(325,12006,900,164.8,167.6,176.5,97.0,136.0,'Three','floresta_true_all','chrome'),(326,12009,901,481.0,485.3,543.0,378.5,305.4,'pc','floresta28','chrome'),(327,12005,900,261.9,263.4,281.0,194.3,215.3,'claygl','floresta28','chrome'),(328,12005,900,354.2,357.7,383.4,234.5,263.9,'Three','floresta28','chrome'),(329,12004,900,2045.6,2124.5,3000.0,564.3,435.5,'Three','skull','chrome'),(330,12001,900,1757.6,1853.3,2000.0,551.3,444.1,'claygl','skull','chrome'),(331,12020,901,1368.5,1442.2,1739.1,471.2,341.3,'Babylon','skull','chrome'),(332,12008,901,1943.1,1986.0,2926.8,835.3,634.5,'pc','skull','chrome'),(342,12055,428,35.5,35.6,36.2,33.6,27.2,'Three','desert','chrome'),(343,12042,427,35.5,35.5,36.1,34.4,28.9,'Three','desert4','chrome'),(344,12104,228,18.8,18.9,19.1,18.0,12.4,'Three','desert_sombra','chrome'),(345,12019,751,62.6,62.6,63.9,58.5,58.8,'pc','desert','chrome'),(346,12020,782,65.2,65.2,66.9,58.5,54.2,'pc','desert4','chrome'),(347,12040,343,28.6,28.6,29.2,26.4,20.7,'pc','desert_sombra','chrome'),(348,12034,676,56.2,56.5,57.7,49.8,43.7,'Babylon','desert','chrome'),(349,12042,707,58.8,58.9,60.5,51.3,42.1,'Babylon','desert4','chrome'),(350,12082,322,26.7,26.7,27.2,25.5,19.9,'Babylon','desert_sombra','chrome'),(351,12066,308,25.5,25.6,26.1,24.3,17.7,'Babylon','desert_sombra2','chrome'),(352,12037,451,37.5,37.6,38.0,34.3,28.3,'claygl','desert','chrome'),(353,12044,449,37.3,37.5,38.1,32.9,24.6,'claygl','desert4','chrome'),(354,12123,233,19.2,19.3,19.5,17.9,11.8,'claygl','desert_sombra','chrome');
/*!40000 ALTER TABLE `rendering` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `startup`
--

LOCK TABLES `startup` WRITE;
/*!40000 ALTER TABLE `startup` DISABLE KEYS */;
INSERT INTO `startup` VALUES (281,'Three','pirate_longe',26),(282,'Three','pirate_longe',26),(283,'Three','pirate_longe',25),(284,'Three','pirate_longe',40),(285,'pc','pirate_longe',157),(286,'pc','pirate_longe',98),(287,'claygl','pirate_longe',42),(288,'Babylon','pirate_longe',472),(289,'Three','pirate_perto',52),(290,'claygl','pirate_perto',32),(291,'Babylon','pirate_perto',171),(292,'pc','pirate_perto',208),(293,'Three','pirate_longe_colors',37),(294,'claygl','pirate_longe_colors',54),(295,'Babylon','pirate_longe_colors',77),(296,'Three','pirate_perto_colors',37),(297,'claygl','pirate_longe_colors',32),(298,'Babylon','pirate_perto_colors',172),(299,'Three','floresta_longe',30),(300,'pc','floresta_longe',61),(301,'claygl','floresta_longe',26),(302,'Babylon','floresta_longe',50),(303,'Three','floresta_perto',26),(304,'claygl','floresta_perto',36),(305,'Babylon','floresta_perto',70),(306,'pc','floresta_perto',57),(307,'pc','floresta_sombra',62),(308,'pc','floresta_sombra',204),(309,'Three','floresta_sombra',41),(310,'claygl','floresta_sombra',39),(311,'Babylon','floresta_sombra',445),(312,'Three','floresta_sombra',38),(313,'Three','floresta_merged',44),(314,'claygl','floresta_merged',28),(315,'Babylon','floresta_merged',169),(316,'pc','floresta_merged',107),(317,'Three','floresta_fxaa',27),(318,'claygl','floresta_fxaa',27),(319,'Babylon','floresta_fxaa',168),(320,'Three','floresta_ssao',21),(321,'Three','floresta_all',42),(322,'claygl','floresta_ssao',26),(323,'claygl','floresta_all',29),(324,'Babylon','floresta_ssao',92),(325,'Babylon','floresta_all',78),(326,'Babylon','floresta_true_all',70),(327,'claygl','floresta_true_all',34),(328,'Three','floresta_true_all',21),(329,'pc','floresta28',68),(330,'claygl','floresta28',51),(331,'Three','floresta28',28),(332,'Three','skull',27),(333,'claygl','skull',40),(334,'Babylon','skull',162),(335,'pc','skull',55),(336,'Three','desert.glb',27),(337,'claygl','desert',30),(338,'claygl','desert4',28),(339,'claygl','desert_sombra',25),(340,'Three','desert4',67),(341,'Three','desert_sombra',24),(342,'pc','desert',149),(343,'pc','desert_sombra',57),(344,'pc','desert4',53),(345,'Three','desert',28),(346,'Three','desert4',28),(347,'Three','desert_sombra',41),(348,'pc','desert',172),(349,'pc','desert4',66),(350,'pc','desert_sombra',59),(351,'Babylon','desert',71),(352,'Babylon','desert4',73),(353,'Babylon','desert_sombra',78),(354,'Babylon','desert_sombra2',314),(355,'claygl','desert',28),(356,'claygl','desert4',27),(357,'claygl','desert_sombra',25);
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

-- Dump completed on 2023-10-28 23:59:46
