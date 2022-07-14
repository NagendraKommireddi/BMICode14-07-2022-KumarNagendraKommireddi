-- creating database with name as test
CREATE DATABASE `test`;

-- creating table with name as bmi
CREATE TABLE `bmi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `gender` enum('Male','Female') DEFAULT NULL,
  `height` decimal(10,2) DEFAULT NULL,
  `weight` decimal(10,2) DEFAULT NULL,
  `bmi` decimal(10,1) DEFAULT NULL,
  `bmi_category` varchar(45) DEFAULT NULL,
  `health_risk` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- inserting rows in to table bmi
INSERT INTO `test`.`bmi`
(`gender`,
`height`,
`weight`,
`bmi`,
`bmi_category`,
`health_risk`)
VALUES( 'Male', '171.00', '96.00', '32.8', 'Moderately Obese', 'Medium risk'),
 ('Male', '161.00', '85.00', '32.8', 'Moderately Obese', 'Medium risk'),
 ('Male', '180.00', '77.00', '23.8', 'Normal Weight', 'Low risk'),
 ('Female', '166.00', '62.00', '22.5', 'Normal Weight', 'Low risk'),
 ('Female', '150.00', '70.00', '31.1', 'Moderately Obese', 'Medium risk'),
 ('Female', '167.00', '82.00', '29.4', 'OverWeight', 'Enhanced risk');




