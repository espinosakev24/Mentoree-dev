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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,5,NULL,'Help with magic potions','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ','Science','2020-02-28 05:03:20','M W F',20000,1,'Teldrassil'),(2,NULL,NULL,'Some Title','Some desc','Fitness','2020-02-28 22:49:01','M F Sn',15000,3,'Some place');
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
  `password` varchar(25) NOT NULL,
  `location` varchar(25) NOT NULL,
  `age` int(3) NOT NULL,
  `email` varchar(45) NOT NULL,
  `education` varchar(45) NOT NULL,
  PRIMARY KEY (`student_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`),
  CONSTRAINT `students_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,NULL,'Camilo','Villegas','3046272886','password','Colombia',21,'mrdoom.official@gmail.com','Holberton School'),(2,NULL,'Joshua','Hernandez','3145262856','fromscratch','Colombia',23,'joshuaciencia@gmail.com','Universidad Nacional'),(3,NULL,'Daniela','Gomez','3584561285','ispeakgerman','Germany',28,'darkniss@gmail.com','Universidad de Antioquia'),(4,NULL,'Manolo','Lopez','3148567889','theconquestwasnotamistake','Spain',42,'manolopaella@gmail.com','Universitat de Barcelona'),(5,NULL,'Issilynor','Aenwyth','3333333333','fuckdwarves','Fawenrall',458,'elfsrcool@gmail.com','Sylvajjniar Thermailhur'),(6,NULL,'Kevin','Espinosa','3145896248','iamthecatyouarethedog','Colombia',21,'kevingei@gmail.com','Universidad de Antioquia');
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
  `password` varchar(25) NOT NULL,
  `location` varchar(25) NOT NULL,
  `age` int(3) NOT NULL,
  `email` varchar(45) NOT NULL,
  `education` varchar(45) DEFAULT NULL,
  `biography` text NOT NULL,
  `fields` varchar(100) NOT NULL,
  `methodology` varchar(50) NOT NULL,
  `reviews` int(11) NOT NULL,
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
INSERT INTO `teachers` VALUES (2,NULL,'Felipe','Grisales','3145896287','password','SomePlace',100,'pipe@gmail.com','Some Uni','I\'ll never graduate','League of legends','I dont know',2);
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

-- Dump completed on 2020-02-29 10:54:17
