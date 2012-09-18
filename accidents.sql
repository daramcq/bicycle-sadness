-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 17, 2012 at 11:48 AM
-- Server version: 5.5.23
-- PHP Version: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hydraieh_bikemap`
--

-- --------------------------------------------------------

--
-- Table structure for table `accidents`
--

CREATE TABLE IF NOT EXISTS `accidents` (
  `acc_id` int(11) NOT NULL AUTO_INCREMENT,
  `severity` text COLLATE utf8_unicode_ci NOT NULL,
  `vehicle` text COLLATE utf8_unicode_ci NOT NULL,
  `date` text COLLATE utf8_unicode_ci NOT NULL,
  `time` time NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `description` tinytext COLLATE utf8_unicode_ci,
  `elapsed` int(11) NOT NULL,
  `acc_cause` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`acc_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=59 ;

--
-- Dumping data for table `accidents`
--

INSERT INTO `accidents` (`acc_id`, `severity`, `vehicle`, `date`, `time`, `lat`, `lng`, `description`, `elapsed`, `acc_cause`) VALUES
(32, 'near_miss', 'car', '03/11/2012', '08:50:00', 53.3462440329609, -6.265726301635709, 'car cut across cyclists path while turning into swifts row.', 173690, ''),
(33, 'near_miss', 'taxi', '04/11/2012', '08:45:00', 53.34188529118753, -6.264986011947599, 'Pedestrian hailed a taxi in front of me. Taxi performed an emergency stop and swerved into the kerb to collect the fare, without checking his mirrors. I had to jam on and was forced onto the pavement. If it was wet there would have certainly been a nasty ', 7172625, ''),
(34, 'near_miss', 'cyclist', '02/14/2012', '01:00:00', 53.34409193988236, -6.2720348572387365, 'I was cycling down bicycle lane from Christchurch towards the Quays. A car in the middle lane (the road is a three lane one way system) cut across the car ahead of it to turn left onto Cook St but did not look for any traffic coming on the cycle lane. Avo', 186665, ''),
(35, 'near_miss', 'car', '02/23/2011', '18:45:00', 53.3222029560841, -6.2368550037994055, 'Car passed very close, cutting corner right as I was at the corner.', 836521, ''),
(36, 'near_miss', 'car', '02/27/2012', '09:50:00', 53.33054278850642, -6.28419062849423, 'Car turned left without regard for anyone in the cycle lane', 97526, ''),
(37, 'near_miss', 'truck', '04/26/2012', '09:30:00', 53.31298975975027, -6.267678949798551, 'Van passed me too closely. Had to swerve into a pothole by the kerb which immediately punctured my front tyre. Lucky not to come off.', 125434, ''),
(40, 'near_miss', 'car', '10/03/2011', '17:10:00', 53.34644898854117, -6.269282910789457, 'Car in traffic and passenger opened the front left door. I was in the cycle lane and had to brake hard to avoid being hit.', 189507, 'vehicle_door'),
(41, 'near_miss', 'car', '02/01/2012', '09:00:00', 53.378768395785144, -6.266155455078092, 'I was changing lanes to turn right. car was also changing lanes but came around the corner quickly and nearly hit me, then verbally abused me for 200m.', 188317, 'cyclist_right_turn'),
(42, 'near_miss', 'taxi', '11/09/2011', '09:00:00', 53.3726239619118, -6.265812132324186, 'Tight lane with cycle lane on other side of the road. Taxi squeezed me out.', 520648, 'vehicle_overtaking'),
(43, 'light', 'car', '12/01/2011', '17:00:00', 53.33849342707522, -6.273472521270719, 'Car door opened causing me to hit it and fall in the road. Viability was poor because it was dark, there was heavy rain and I didnt have light on the front of my bike.', 2147483647, 'vehicle_door'),
(45, 'light', 'cyclist', '04/10/2007', '18:10:00', 53.35802737844588, -6.301818106140104, 'Taxi passenger door opening on inside and knocking me off bike.  Passenger was given out too by the Taxi Driver, I walked away fine. ', 172283, 'vehicle_door'),
(46, 'moderate', 'van', '06/06/2006', '01:00:00', 53.350458233918545, -6.281497690643278, 'Vehicle parked on a double yellow line with hazard lights flashing just around the corner and I turned the corner on the bike and went straight into the back of the van.  It was quite a bang - but bike still cycled to work.', 1825949, 'other'),
(47, 'light', 'car', '04/24/2012', '09:30:00', 53.345168000000015, -6.240406248535123, 'I was changing lanes to turn right and the car behind did not slow down....', 169005, 'cyclist_right_turn'),
(48, 'moderate', 'cyclist', '04/12/2006', '08:50:00', 53.35026610616012, -6.273579809631315, 'Vehicle, a van really switched lanes and then drove too close to the kerb and forced me to jump off the bicycle.  There was not real damage to the bike, but it was one of those accidents where I really feared that he could kill me he was so unaware of my ', 195620, 'vehicle_lane_change'),
(49, 'light', 'taxi', '03/28/2012', '01:00:00', 53.33873685595961, -6.272742960418668, 'taxi sped as he was turning left and over took me. i just managed to brake in time but he laughed and seemed to have sped up on purpose.', 151838, 'vehicle_left_turn'),
(50, 'severe', 'car', '09/05/2007', '01:00:00', 53.336200002533786, -6.273279402221647, 'i was cycling down the N81 and a car turned from the other side of the road and he me side on. the lights were green for me and i was in the cycle lane. i ended up in hospital', 117982, 'other'),
(51, 'moderate', 'car', '05/05/2010', '01:00:00', 53.36376184845991, -6.226170058667208, 'a car was turning from the right hand side of the road as i was cycling into town on the left handside fo the road. the driver didnt see me and hit me side on. i just missed a metal bollard. when she stopped she pressed the accelerator instead of the brak', 51236, 'other'),
(52, 'light', 'car', '11/16/2011', '16:00:00', 53.295727156350665, -6.138045105899778, 'vehicle closed off my route as it stopped suddenly on single lane road behind a car waiting to turn right, the driver pulled in front of a space only big enough for a bike and i went right into the back of the car on the slippery conditions', 817449, 'vehicle_stop'),
(53, 'near_miss', 'taxi', '05/15/2012', '13:15:00', 53.336302504587366, -6.2572290634765295, '', 72755, 'vehicle_left_turn'),
(54, 'moderate', 'car', '04/04/2012', '18:00:00', 53.34183724967041, -6.295123312438932, 'I was in cycle lane travelling west along James St. The lights had just changed in our favour but a car driver coming from the opposite direction thought she had time to swing into the Hospital entrance. She hadn’t seen me as she’d been watching the c', 2147483647, 'other'),
(55, '', '', '', '00:00:00', 0, 0, '', 0, ''),
(56, 'near_miss', 'van', '06/10/2012', '05:00:00', 53.33215097436964, -6.309242460693326, 'TESTTESTTESTTEST', 50714, 'other'),
(57, 'near_miss', 'truck', '06/21/2012', '06:35:00', 53.337481260498095, -6.258945677246061, 'something something', 75518, 'other'),
(58, 'near_miss', 'taxi', '07/09/2012', '17:45:00', 53.33872404394769, -6.2724854683532385, 'testaccident', 150624, 'vehicle_left_turn');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
