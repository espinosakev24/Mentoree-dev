-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: mentoree_db
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `teacher_id` int(11) DEFAULT NULL,
  `title` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(30) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `schedule` varchar(50) NOT NULL,
  `price` int(20) NOT NULL,
  `size` int(10) NOT NULL,
  `location` varchar(50) NOT NULL,
  PRIMARY KEY (`post_id`),
  KEY `student_id` (`student_id`),
  KEY `teacher_id` (`teacher_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`),
  CONSTRAINT `posts_ibfk_3` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE,
  CONSTRAINT `posts_ibfk_4` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,1,4,'Professional Trainer!','I\'m a lazy person and I\'d love to hire a comitted and cheerful fitness professional to set up an exercise routine.','Wellness','2020-03-09 17:23:04','M W F',15000,1,'Estadio Atanasio G.'),(2,2,2,'UI mentor on need!','Hi! I\'ve been working with as a fullt-stack developer for almost 3 years now. But, my design skills are rather low... Searching for a UI designer to help me up!!!','Technology','2020-03-09 17:26:08','St Sn',25000,1,'House'),(3,3,1,'Algorithms in Python','Hello world! My knowledge in python is increasing... And for this purpose I wish to learn from a real Python ninja some algorithms and main concepts.','Technology','2020-03-09 17:36:50','Tu Th',20000,3,'Biblioteca EPM'),(4,1,4,'Salsa Class','I\'m what we call a \"tronco\" and I need serious professional help.','Wellness','2020-03-10 19:30:17','St Sn',15000,1,'Jadrín Botánico'),(6,6,3,'React Introduction','I\'m an aspiring frontend engineer and I need a professional and humble mentor to help me out!','Technology','2020-03-10 20:52:08','M Tu',20000,1,'Prado Centro'),(10,8,NULL,'German class','I need an instructor for learning some German','Languages','2020-03-10 22:55:59','04/1/2019',15000,1,'Home'),(11,9,3,'English mentor please!','I need a hot and talented teacher to teach things ;)!','Langauges','2020-03-11 14:45:34','M Tu',20000,1,'House'),(13,11,NULL,' Social research project','Hello people! I need a mentor who has been working with SDGs and political-economic analysis in Medellín too, I have some ideas for my social research project about Moravia\'s social transformation  but I don\'t really know how I can develop it.','Humanities','2020-03-20 04:31:19','St Sn ',40000,1,'Universidad de Antioquia'),(14,10,5,'Help me to learn a Guitar solo!','I\'m learning the La leyenda del hada y del mago solo and I\'m looking for a guitar master to teach me that awesome piece of art!','Art','2020-03-20 14:00:32','Mondays',15000,1,'Ciudad del Río'),(15,1,1,'Bachata teacher needed','I need someone to help me ASAP, I\'m a tronco on bachata','Wellness','2020-03-20 20:00:29','Monday - 10:00am',20000,1,'House');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `students` (
  `student_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) DEFAULT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `contact` varchar(30) NOT NULL,
  `password` longtext NOT NULL,
  `location` varchar(40) NOT NULL,
  `age` int(3) NOT NULL,
  `email` varchar(50) NOT NULL,
  `education` varchar(50) NOT NULL,
  PRIMARY KEY (`student_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`),
  CONSTRAINT `students_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,4,'Camilo','Villegas','3146272886','$2a$10$jOb.YA4u0ZD/r5ca5gJeBeklckNYywLb.klTl0rRF498H8RU09vU2','Colombia',22,'mrdoom.official@gmail.com','Holberton School'),(2,2,'Jaime','Velez','3053540475','$2a$10$WZOwWokH5Sv1VeI7k/dpNOnTY5GIonVy14RN4nQdR5uWOWBR7lzXC','Colombia',27,'jandres.vr@hotmail.com','Holberton School'),(3,3,'Kevin','Espinosa','3056345560','$2a$10$HBTXbZXm7X.c7xmp0/WPXuJwjRXjewsolTFVxjWcbRcuo/OA7ua4q','Arboletes',21,'kevinespinosazapata@gmail.com','UdeA'),(4,NULL,'Fidel','Caicedo','3214567890','$2a$10$Oa1mddFBFm6MTD.zEyf3S.dnCbTCdp66/iQVVfsVbsUJhaC7xLLYu','Colombia',20,'relaxforever@gmail.com','SENA'),(5,NULL,'Daniela','Chamorro','1234567890','$2a$10$knFbpCbUVzEhGnkIVC9TVu37.jgyo5XNvOgbZhl2T4f9/9JcUWv/.','Colombia',24,'dalexach@gmail.com','UdeA'),(6,6,'Daniela','Gómez','3215896478','$2a$10$YcLnrE3t7yi0dbaWs9Ph7uLyiwZq2YBM02WXMObt50zRSKSJSdGDC','Colombia',27,'daniela@gmail.com','UdeA'),(7,NULL,'Eduina','De Los Montes','312456789','$2a$10$ZdVEuct6m8YH9YXB1c/3QeeC.5Wl4RBt5a.B7AVv0zIGnQjowwLTW','Los Montes',12,'eduina_guerrera@gmail.com','La Sallista'),(8,10,'Kevin ','Espinosa Zapata','3116597932','$2a$10$b22z8unvZWoC/eUksnnVj.nhyNP6WsUOC3xbPeZcjvjInTKbmU3La','Medellín',21,'kevinespinosa@gmail.com','Holberton'),(9,11,'Diahan','Hudgson','1234567890','$2a$10$TLD7Y/jBlLHKxRmehsPiheVIyvLVHuHBkiP4es/4hyrevwQqhoKGC','Colombia',16,'diahan@gmail.com','Holberton'),(10,NULL,'Kevin','Espinosa Zapata','3053540475','$2a$10$AgxVvQGNsF3WZeiFdcr/Z.fh3DLQOE1myMWqheQe4TV/AS66dYTpm','Medellín',21,'kev@gmail.com','Holberton School.'),(11,NULL,'Luisa ','Victoria','+57 313 580 62 98','$2a$10$22dnNp8sEqhfTKiwRlrMAO0rBF1EGlFydbPNgoKssrnxfwFokvvpm','Colombia',19,'luisa.victoria@udea.edu.co','College'),(12,NULL,'ANDRES','PABON','3138139169','$2a$10$/U9zxgibuQ2HCz3PqF0x0OvqZDpHVrER0heb6Y1yoQTI2R30HV2PO','cucuta',26,'jonathanacp93@gmail.com','colombia'),(13,NULL,'Kevin','Espinosa','322 625 38 57','$2a$10$LKEMtjmJN4gUBYePYBx14uaftTYXDQvpFhQcKYIiTF4vhiZ9nQCiq','Medellín',21,'espikev@hotmail.com','UdeA');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teachers` (
  `teacher_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) DEFAULT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `contact` varchar(30) NOT NULL,
  `password` longtext NOT NULL,
  `location` varchar(40) NOT NULL,
  `age` int(3) NOT NULL,
  `email` varchar(50) NOT NULL,
  `education` varchar(50) NOT NULL,
  `biography` text NOT NULL,
  `fields` varchar(100) NOT NULL,
  `methodology` varchar(100) NOT NULL,
  `reviews` int(20) DEFAULT NULL,
  PRIMARY KEY (`teacher_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`),
  CONSTRAINT `teachers_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,15,'Dario','Castaño','7894561230','$2a$10$.044F.8g7NVy85ckDjWTg.j.vMmgG/1egh64ogVTPHKEzu4j7lfzi','Spain',34,'dario@gmail.com','UdeM','Hello I\'m Dario and I want to make great things! :D','Computer science','Expeditionary Learning',NULL),(2,2,'Kelly','Villa','3571598642','$2a$10$pxwIEP3bhg/tHBmGChFWle4BsiV3oda1pQ7lBNpHb1F2rRoBrWHYi','Morocco',23,'kelly@gmail.com','Universidad de Magadelna','Hi! I\'m Kelly and I\'m great uwu <3','Design','Supervised Learning',NULL),(3,11,'Nicolas','Forero','1234567890','$2a$10$CyqM5KwX8wZUCdSErAIchutJTB2Y4bT9AdUtVq5UJjDMtnR7wA7Km','Venezuela',19,'nicolas@gmail.com','Universidad de Cucuta','I love teaching!','Science','Autodidact learning',NULL),(4,4,'Jose','Díaz','3021654879','$2a$10$lJKJv5gm37BEN5xo7ETEwu22zWvmUD3ROkL.ijfOotSM0zIBl9lRO','Medellín',24,'jose@gmail.com','Rumba con sabor','I\'m young and ready to inject some Fireeee','Dance','Practical learning',NULL),(5,14,'Andres','Garcia','3123123','$2a$10$bWykycpfs5aBKrSXH4WNO.X2WDJmGzuynR2b2Y6qPQRgI1Z0f/QDi','Medellín',31,'andres@gmail.com','UdeA','Hi! I\'m Andres and I\'m a guitarist that have played with some famous rock groups and I\'m also a lawyer','Art humanities','Expeditionary Learning',NULL);
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-24 15:42:39
