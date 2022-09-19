/* This is a copy of existing database with placeholder values.
*
*/
-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: db:3306
-- Generation Time: Aug 18, 2022 at 05:54 PM
-- Server version: 8.0.28
-- PHP Version: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int NOT NULL,
  `street_address` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apt_address` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city_address` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country_address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zip_address` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `save_address` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `street_address`, `apt_address`, `city_address`, `country_address`, `zip_address`, `save_address`) VALUES
(3, 'Flower Street 5', '23', 'Helsinki', 'Finland', '00740', 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_has_books`
--

CREATE TABLE `order_has_books` (
  `id` int NOT NULL,
  `order_id_id` int NOT NULL,
  `product_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_has_books`
--

INSERT INTO `order_has_books` (`id`, `order_id_id`, `product_id`) VALUES
(10, 5, '53NzDwAAQBAJ'),
(11, 5, 'CSPPDLfce0EC'),
(12, 5, 'KKJaDwAAQBAJ'),
(13, 6, '53NzDwAAQBAJ'),
(14, 6, 'CSPPDLfce0EC'),
(15, 6, 'cGSAJrIxS34C'),
(16, 7, '53NzDwAAQBAJ');

-- --------------------------------------------------------

--
-- Table structure for table `payment_card`
--

CREATE TABLE `payment_card` (
  `id` int NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cvv` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valid_month` int NOT NULL,
  `valid_year` int NOT NULL,
  `save_card` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payment_card`
--

INSERT INTO `payment_card` (`id`, `name`, `card_number`, `cvv`, `valid_month`, `valid_year`, `save_card`) VALUES
(2, 'First Customer', '1234123412341234', '1234', 12, 12, 1),
(3, 'Anna Shmidt', '1234123412341234', '1234', 12, 24, 1);

-- --------------------------------------------------------

--
-- Table structure for table `place_orders`
--

CREATE TABLE `place_orders` (
  `id` int NOT NULL,
  `user_id_id` int NOT NULL,
  `address` longtext COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `place_orders`
--

INSERT INTO `place_orders` (`id`, `user_id_id`, `address`) VALUES
(5, 5, 'Flower Street 5, Helsinki, Finland '),
(6, 6, 'Flower Street 5, Helsinki, Finland '),
(7, 7, 'Flower Street 5, Helsinki, Finland ');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `firstname` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastname` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `phone`) VALUES
(5, 'Mary', 'Jones', 'mail@mail.com', '3581234123123'),
(6, 'Mary', 'Jones', 'mail@mail.com', '+3581234123123'),
(7, 'Mary', 'Jones', 'mail@mail.com', '+3581234123123');

-- --------------------------------------------------------

--
-- Table structure for table `users_address`
--

CREATE TABLE `users_address` (
  `users_id` int NOT NULL,
  `address_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users_address`
--

INSERT INTO `users_address` (`users_id`, `address_id`) VALUES
(5, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users_payment_card`
--

CREATE TABLE `users_payment_card` (
  `users_id` int NOT NULL,
  `payment_card_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_has_books`
--
ALTER TABLE `order_has_books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_D1541D4FCDAEAAA` (`order_id_id`);

--
-- Indexes for table `payment_card`
--
ALTER TABLE `payment_card`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `place_orders`
--
ALTER TABLE `place_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_47E1FA879D86650F` (`user_id_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_address`
--
ALTER TABLE `users_address`
  ADD PRIMARY KEY (`users_id`,`address_id`),
  ADD KEY `IDX_FD4E1B4B67B3B43D` (`users_id`),
  ADD KEY `IDX_FD4E1B4BF5B7AF75` (`address_id`);

--
-- Indexes for table `users_payment_card`
--
ALTER TABLE `users_payment_card`
  ADD PRIMARY KEY (`users_id`,`payment_card_id`),
  ADD KEY `IDX_64D329AB67B3B43D` (`users_id`),
  ADD KEY `IDX_64D329AB538594CA` (`payment_card_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `order_has_books`
--
ALTER TABLE `order_has_books`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `payment_card`
--
ALTER TABLE `payment_card`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `place_orders`
--
ALTER TABLE `place_orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_has_books`
--
ALTER TABLE `order_has_books`
  ADD CONSTRAINT `FK_D1541D4FCDAEAAA` FOREIGN KEY (`order_id_id`) REFERENCES `place_orders` (`id`);

--
-- Constraints for table `place_orders`
--
ALTER TABLE `place_orders`
  ADD CONSTRAINT `FK_47E1FA879D86650F` FOREIGN KEY (`user_id_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `users_address`
--
ALTER TABLE `users_address`
  ADD CONSTRAINT `FK_FD4E1B4B67B3B43D` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_FD4E1B4BF5B7AF75` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `users_payment_card`
--
ALTER TABLE `users_payment_card`
  ADD CONSTRAINT `FK_64D329AB538594CA` FOREIGN KEY (`payment_card_id`) REFERENCES `payment_card` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_64D329AB67B3B43D` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
