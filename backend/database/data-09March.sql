-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: mentoree_db
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.19.04.2

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
  `title` varchar(25) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(15) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `schedule` varchar(15) NOT NULL,
  `price` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `location` varchar(25) NOT NULL,
  PRIMARY KEY (`post_id`),
  KEY `student_id` (`student_id`),
  KEY `teacher_id` (`teacher_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`),
  CONSTRAINT `posts_ibfk_3` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE,
  CONSTRAINT `posts_ibfk_4` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,1,NULL,'Professional Trainer!','I\'m a lazy person and I\'d love to hire a comitted and cheerful fitness professional to set up an exercise routine.','Wellness','2020-03-09 17:23:04','M W F',15000,1,'Estadio Atanasio G.'),(2,2,2,'UI mentor on need!','Hi! I\'ve been working with as a fullt-stack developer for almost 3 years now. But, my design skills are rather low... Searching for a UI designer to help me up!!!','Technology','2020-03-09 17:26:08','St Sn',25000,1,'House'),(3,3,1,'Algorithms in Python','Hello world! My knowledge in python is increasing... And for this purpose I wish to learn from a real Python ninja some algorithms and main concepts.','Technology','2020-03-09 17:36:50','Tu Th',20000,3,'Biblioteca EPM');
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
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `contact` varchar(13) NOT NULL,
  `password` longtext NOT NULL,
  `location` varchar(25) NOT NULL,
  `age` int(3) NOT NULL,
  `email` varchar(45) NOT NULL,
  `education` varchar(45) NOT NULL,
  PRIMARY KEY (`student_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`),
  CONSTRAINT `students_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,1,'Camilo','Villegas','3146272886','$2a$10$jOb.YA4u0ZD/r5ca5gJeBeklckNYywLb.klTl0rRF498H8RU09vU2','Colombia',22,'mrdoom.official@gmail.com','Holberton School'),(2,2,'Jaime','Velez','3053540475','$2a$10$WZOwWokH5Sv1VeI7k/dpNOnTY5GIonVy14RN4nQdR5uWOWBR7lzXC','Colombia',27,'jandres.vr@hotmail.com','Holberton School'),(3,3,'Kevin','Espinosa','3056345560','$2a$10$HBTXbZXm7X.c7xmp0/WPXuJwjRXjewsolTFVxjWcbRcuo/OA7ua4q','Arboletes',21,'kevinespinosazapata@gmail.com','UdeA'),(4,NULL,'Fidel','Caicedo','3214567890','$2a$10$Oa1mddFBFm6MTD.zEyf3S.dnCbTCdp66/iQVVfsVbsUJhaC7xLLYu','Colombia',20,'relaxforever@gmail.com','SENA'),(5,NULL,'Daniela','Chamorro','1234567890','$2a$10$knFbpCbUVzEhGnkIVC9TVu37.jgyo5XNvOgbZhl2T4f9/9JcUWv/.','Colombia',24,'dalexach@gmail.com','UdeA');
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
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `contact` varchar(13) NOT NULL,
  `password` longtext NOT NULL,
  `location` varchar(25) NOT NULL,
  `age` int(3) NOT NULL,
  `email` varchar(45) NOT NULL,
  `education` varchar(45) DEFAULT NULL,
  `biography` text NOT NULL,
  `fields` varchar(100) NOT NULL,
  `methodology` varchar(50) NOT NULL,
  `reviews` int(11) DEFAULT NULL,
  PRIMARY KEY (`teacher_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`),
  CONSTRAINT `teachers_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,3,'Dario','Castaño','7894561230','$2a$10$.044F.8g7NVy85ckDjWTg.j.vMmgG/1egh64ogVTPHKEzu4j7lfzi','Spain',34,'dario@gmail.com','UdeM','Hello I\'m Dario and I want to make great things! :D','Computer science','Expeditionary Learning',NULL),(2,2,'Kelly','Villa','3571598642','$2a$10$pxwIEP3bhg/tHBmGChFWle4BsiV3oda1pQ7lBNpHb1F2rRoBrWHYi','Morocco',23,'kelly@gmail.com','Universidad de Magadelna','Hi! I\'m Kelly and I\'m great uwu <3','Design','Supervised Learning',NULL);
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

-- Dump completed on 2020-03-09 12:50:03
