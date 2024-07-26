-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 26, 2024 at 01:16 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `macquochuy_cdtt_laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_banner`
--

CREATE TABLE `db_banner` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_by` int UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_banner`
--

INSERT INTO `db_banner` (`id`, `name`, `image`, `link`, `position`, `description`, `created_by`, `updated_by`, `created_at`, `updated_at`, `status`) VALUES
(2, 'Slider 2', '20240113130706.png', 'https://www.google.com.vn/?hl=vi', 'slideshow', 'Good 2', 1, 1, '2024-01-13 06:07:06', '2024-01-13 06:07:06', 1),
(3, 'Silder 1', '20240113130636.png', 'https://www.google.com.vn/?hl=vi', 'slideshow', 'Good', 1, 1, '2024-01-13 06:06:36', '2024-01-13 06:06:36', 1),
(5, 'Slider 3', '20240113130847.png', 'https://www.google.com.vn/?hl=vi', 'slideshow', 'Good 3', 1, NULL, '2024-01-13 06:08:47', '2024-01-13 06:08:47', 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_brand`
--

CREATE TABLE `db_brand` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_brand`
--

INSERT INTO `db_brand` (`id`, `name`, `slug`, `image`, `sort_order`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(3, 'Hàn Quốc', 'han-quoc', '20231221125532.jpeg', 1, 'Thương hiệu từ nước ngoài sẽ không làm bạn thất vọng', '2023-12-21 05:55:32', '2024-01-13 05:55:35', 1, 1, 1),
(12, 'drgew', 'drgew', '20240102155515.jpeg', 1, '76hcger', '2024-01-02 08:55:15', '2024-01-02 09:10:55', 1, 1, 0),
(13, 'Việt Nam', 'viet-nam', '20240113125500.jpeg', 1, 'Sản phẩm phân hiệu chính hãng tại Việt Nam', '2024-01-02 09:16:41', '2024-01-13 05:55:00', 1, 1, 1),
(14, 'Trung Quốc', 'trung-quoc', '20240113125611.jpeg', 1, 'Thương hiệu nước ngoài', '2024-01-13 05:56:11', '2024-01-13 05:56:11', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_category`
--

CREATE TABLE `db_category` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int UNSIGNED NOT NULL DEFAULT '0',
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_category`
--

INSERT INTO `db_category` (`id`, `name`, `slug`, `image`, `parent_id`, `sort_order`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Đồ Nam', 'do-nam', '20240113124704.jpeg', 0, 1, 'Đồ cho đàn ông đàn bà muốn mặc thì mua .', '2024-01-13 05:47:04', '2024-01-13 05:47:04', 1, 1, 1),
(2, 'Đồ Nữ', 'do-nu', '20240113124726.jpeg', 0, 2, 'không có gì mới lạ đó', '2024-01-13 05:47:26', '2024-01-13 05:47:26', 1, 1, 1),
(3, 'Đồ Trẻ Em', 'do-tre-em', '20240113125012.jpeg', 0, 4, 'là đồ trẻ em nè ai mua thì mua không mua thì mua', '2024-01-13 05:50:12', '2024-01-13 05:50:12', 1, 1, 1),
(4, 'Phụ Kiện', 'phu-kien', '20240102164452.jpeg', 0, 5, 'Phụ Kiện ví dụ như là mũ nón, dây nịt, trang sức các loại mua về mang bao đẹp luôn', '2024-01-13 05:51:30', '2024-01-13 05:51:30', 1, 1, 1),
(5, 'Đồ Đôi', 'do-doi', '20240104104416.jpeg', 0, 3, 'Bao gồm quần áo đôi nam nữ phù hợp cho các cặp đôi', '2024-01-13 05:52:15', '2024-01-13 05:52:15', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_config`
--

CREATE TABLE `db_config` (
  `id` bigint UNSIGNED NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zalo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `youtube` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `metadesc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `metakey` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_contact`
--

CREATE TABLE `db_contact` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` int UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `reply_id` int UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_contact`
--

INSERT INTO `db_contact` (`id`, `user_id`, `name`, `email`, `phone`, `title`, `content`, `reply_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(21, NULL, 'Huy', 'oanhnguyen061103@gmail.com', '098765', 'a', 'a', NULL, '2024-06-18 10:36:31', '2024-06-18 10:36:31', 1, NULL, 1),
(22, NULL, 'b', 'oanhnguyen061103@gmail.com', '098765', 'b', 'b', NULL, '2024-06-18 10:42:49', '2024-06-18 10:42:49', 1, NULL, 1),
(23, NULL, 'b', 'machuy2003@gmail.com', '098765', 'b', 'b', NULL, '2024-06-18 11:06:03', '2024-06-18 11:06:03', 1, NULL, 1),
(24, NULL, 's', 's@gmail.com', '345543', 'aa', 'fgfd', NULL, '2024-06-18 11:14:05', '2024-06-18 11:14:05', 1, NULL, 1),
(25, NULL, 'huy', 'quochuyinformation@gmail.com', '0368907996', 'aa', 'ĐẸp', 1, '2024-06-18 11:16:11', '2024-06-18 11:17:02', 1, NULL, 1),
(26, NULL, 'Huy', 'quochuyinformation@gmail.com', '1234345667', 'Sản Phẩm', 'Áo đẹp lắm', 1, '2024-06-20 02:39:30', '2024-06-20 02:41:34', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_menu`
--

CREATE TABLE `db_menu` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `parent_id` int UNSIGNED NOT NULL DEFAULT '0',
  `type` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `table_id` int UNSIGNED NOT NULL DEFAULT '0',
  `position` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_menu`
--

INSERT INTO `db_menu` (`id`, `name`, `link`, `sort_order`, `parent_id`, `type`, `table_id`, `position`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(3, 'Đồ Nam', 'danh-muc/do-nam', 1, 4, 'category', 1, 'mainmenu', '2024-01-11 05:45:32', '2024-01-11 05:45:32', 1, NULL, 0),
(4, 'Hàn Quốc', 'thuong-hieu/han-quoc', 1, 0, 'brand', 3, 'mainmenu', '2024-01-11 05:45:49', '2024-01-11 05:45:49', 1, NULL, 0),
(5, 'Topic 3', 'chu-de/topic-3', 1, 0, 'topic', 3, 'footermenu', '2024-01-11 05:45:58', '2024-01-11 05:45:58', 1, NULL, 1),
(6, 'Topic 2', 'chu-de/topic-2', 1, 0, 'topic', 2, 'footermenu', '2024-01-11 05:45:58', '2024-01-11 05:45:58', 1, NULL, 1),
(8, 'Đồ Nữ', 'danh-muc/do-nu', 1, 4, 'category', 2, 'mainmenu', '2024-01-15 07:09:39', '2024-01-15 07:09:39', 1, NULL, 0),
(9, 'Thương Hiệu', '/thuong-hieu/viet-nam', 1, 0, 'custom', 0, 'mainmenu', '2024-01-17 07:53:40', '2024-01-17 07:53:59', 1, 1, 1),
(10, 'Tất Cả Sản Phẩm', '/san-pham', 1, 0, 'custom', 0, 'mainmenu', '2024-01-18 03:28:56', '2024-01-18 03:28:59', 1, 1, 1),
(11, 'Liên Hệ', '/lien-he', 1, 0, 'custom', 0, 'mainmenu', '2024-01-18 04:01:28', '2024-01-18 04:01:30', 1, 1, 1),
(12, 'Tin Tức', '/bai-viet', 1, 0, 'custom', 0, 'mainmenu', '2024-01-18 04:21:18', '2024-01-18 04:21:20', 1, 1, 1),
(13, 'Giới Thiệu', '/gioi-thieu', 1, 0, 'custom', 0, 'mainmenu', '2024-01-18 04:41:06', '2024-01-18 04:41:09', 1, 1, 1),
(16, 'Chính Sách', '/chinh-sach', 1, 0, 'custom', 0, 'mainmenu', '2024-01-25 11:06:30', '2024-01-25 11:06:32', 1, 1, 1),
(17, 'Bài Viết Chủ Đề', '/chu-de-bai-viet/topic-2', 1, 0, 'custom', 0, 'mainmenu', '2024-01-26 12:37:41', '2024-01-26 12:37:44', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_order`
--

CREATE TABLE `db_order` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` int UNSIGNED NOT NULL,
  `delivery_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_address` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_order`
--

INSERT INTO `db_order` (`id`, `user_id`, `delivery_name`, `delivery_gender`, `delivery_email`, `delivery_phone`, `delivery_address`, `note`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(9, 4, 'mạc quốc huy', '1', 'mhcdfbweosd', '0978997', 'bình định', 'Mua tại quầy', '2024-01-13 05:12:54', '2024-01-26 18:35:11', 1, 1, 1),
(10, 4, 'Nguyễn Văn A', 'Nam', 'datbui203@gamil.com', '0978997098', 'Ninh Thuận', 'Mua tại quầy', '2024-01-26 11:51:05', '2024-01-26 19:12:58', 1, 1, 1),
(11, 1, 'huy', 'avc', 'huy@gmail.com', '041568824', 'dfghjk', 'Mua online', '2024-06-26 08:01:08', '2024-06-26 08:01:09', 1, NULL, 1),
(12, 1, 'oanh', 'avc', 'oanh@gmail.com', '0123456+', 'bềnh đệnh', 'Mua online', '2024-06-26 08:03:51', '2024-06-26 08:03:51', 1, NULL, 1),
(13, 1, 'huy', 'avc', 'huy@gmail.com', '021345698', 'bd', 'Mua online', '2024-06-26 08:08:39', '2024-06-26 08:08:39', 1, NULL, 1),
(14, 1, 'huy', 'avc', 'huy@gmail.com', '0784', 'yyyy', 'Mua online', '2024-06-26 08:20:18', '2024-06-26 08:20:18', 1, NULL, 1),
(15, 1, 'huy', 'avc', 'huym@gmail.com', '0868459255', 'tay son, binh dinh', 'Mua online', '2024-06-28 00:26:31', '2024-06-28 00:26:31', 1, NULL, 1),
(16, 1, 'Mac Huy', 'avc', 'quoc@gmail.com', '45765834535', 'Bình Định', 'Mua online', '2024-06-28 00:41:00', '2024-06-28 00:41:00', 1, NULL, 1),
(17, 1, 'd', 'avc', 'huy123@gmail.com', '324567678', 'dfsd', 'Mua online', '2024-06-28 00:47:32', '2024-06-28 00:47:32', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_orderdetail`
--

CREATE TABLE `db_orderdetail` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` int UNSIGNED NOT NULL,
  `product_id` int UNSIGNED NOT NULL,
  `price` double NOT NULL,
  `qty` int UNSIGNED NOT NULL,
  `discount` double NOT NULL,
  `amount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_orderdetail`
--

INSERT INTO `db_orderdetail` (`id`, `order_id`, `product_id`, `price`, `qty`, `discount`, `amount`) VALUES
(1, 2, 2, 1000, 10, 12, 1),
(4, 9, 6, 10002, 1, 0, 10002),
(5, 9, 6, 10002, 1, 0, 10002),
(6, 9, 4, 12345, 2, 0, 24690),
(7, 10, 20, 39998, 1, 0, 39998),
(8, 10, 19, 30000, 1, 0, 30000),
(9, 10, 18, 10000, 1, 0, 10000),
(10, 10, 3, 35002, 1, 0, 35002),
(11, 11, 17, 100000, 0, 0, 0),
(12, 11, 22, 398000, 0, 0, 0),
(13, 12, 22, 398000, 0, 0, 0),
(14, 13, 2, 300000, 0, 0, 0),
(15, 14, 8, 120000, 0, 0, 0),
(16, 15, 22, 398000, 0, 0, 0),
(17, 16, 21, 300000, 0, 0, 0),
(18, 16, 19, 300000, 0, 0, 0),
(19, 17, 19, 300000, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `db_post`
--

CREATE TABLE `db_post` (
  `id` bigint UNSIGNED NOT NULL,
  `topic_id` int UNSIGNED DEFAULT NULL,
  `title` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_post`
--

INSERT INTO `db_post` (`id`, `topic_id`, `title`, `slug`, `detail`, `description`, `image`, `type`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 2, 'rtyy5', 'rtyy5', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ', 'tr6yr', '20231226151651.jpeg', 'post', '2023-12-26 08:16:51', '2024-01-10 07:28:34', 1, 1, 1),
(2, 2, 'khsfde', 'khsfde', 'dghktuikhf', 'dhj5etghb', '20240110145611.jpeg', 'Post', '2024-01-10 07:56:11', '2024-01-10 07:56:11', 1, NULL, 2),
(3, 2, 'sfger', 'sfger', 'àgewr', 'dfgwrf', '20240125074605.jpeg', 'Page', '2024-01-10 07:59:51', '2024-01-25 00:46:05', 1, 1, 2),
(4, 3, 'kzjsea', 'kzjsea', 'adfgesr', 'dfgrs', '20240110160510.jpeg', 'Post', '2024-01-10 09:05:10', '2024-01-10 10:25:12', 1, 1, 0),
(5, 2, 'zsgers', 'zsgers', 'dfgser', 'dsfgsrg', '20240110160747.jpeg', 'Post', '2024-01-10 09:07:47', '2024-06-26 17:03:25', 1, 1, 0),
(6, 3, 'dfghsr', 'dfghsr', 'dsfgsre', 'sdfgserfg', '20240110160823.jpeg', 'Post', '2024-01-10 09:08:23', '2024-06-26 17:03:21', 1, 1, 0),
(7, 2, 'dfgers', 'dfgers', 'dsgfvszeds', 'dsfgserd', '20240110160908.jpeg', 'Post', '2024-01-10 09:09:08', '2024-01-10 09:09:08', 1, NULL, 1),
(8, 3, 'Quốc Huy', 'quoc-huy', 'hahahahaa', 'mac quochuy dsgsegfdsf', '20240111054123.jpeg', 'Page', '2024-01-10 09:10:28', '2024-01-25 00:45:46', 1, 1, 1),
(13, 2, 'Giới Thiệu', 'gioi-thieu', 'Victory Men\'s: Trải Nghiệm Mua Sắm Đẳng Cấp cho Quý Ông\r\nNằm ẩn mình trong trung tâm thương mại sầm uất, Victory Men\'s không chỉ là nơi mua sắm, mà còn là một trải nghiệm thú vị dành cho những quý ông yêu thời trang.\r\n\r\nKhông Gian Sang Trọng và Hiện Đại\r\nKhông gian hiện đại và sang trọng tại cửa hàng chính là điểm đến lý tưởng, nơi khách hàng có thể thư giãn và tận hưởng quá trình mua sắm.\r\n\r\nDịch Vụ Tận Tâm\r\nĐội ngũ nhân viên tận tâm và chuyên nghiệp luôn sẵn sàng hỗ trợ bạn trong việc chọn lựa những bộ trang phục phù hợp với phong cách và dịp sự kiện.\r\n\r\nCam Kết Chất Lượng\r\nChúng tôi coi trọng mối quan hệ với khách hàng và cam kết đem đến dịch vụ chăm sóc khách hàng đẳng cấp, từ khi bạn bước chân vào cửa hàng cho đến khi bạn rời đi.\r\n\r\nDịch Vụ Đặc Biệt\r\nMay đo và điều chỉnh kích thước\r\nTư vấn phối hợp trang phục\r\nVictory Men\'s không chỉ dừng lại ở việc cung cấp quần áo mà còn giúp khách hàng hoàn thiện phong cách cá nhân một cách tối ưu nhất.', 'Dịch Vụ Đặc Biệt\r\nMay đo và điều chỉnh kích thước\r\nTư vấn phối hợp trang phục\r\nVictory Men\'s không chỉ dừng lại ở việc cung cấp quần áo mà còn giúp khách hàng hoàn thiện phong cách cá nhân một cách tối ưu nhất.', '20240125173601.png', 'Introduce', '2024-01-25 10:36:01', '2024-01-25 10:36:01', 1, NULL, 2),
(15, 2, 'Chính Sách', 'chinh-sach', 'Chính Sách Đổi Trả và Hoàn Tiền của Victory Men\'s\r\n1. Chính Sách Đổi Trả:\r\nKhách hàng có quyền đổi sản phẩm trong vòng 15 ngày kể từ ngày mua hàng.\r\nSản phẩm cần được giữ nguyên trạng thái ban đầu, chưa qua sử dụng, và kèm theo hóa đơn mua hàng.\r\n2. Chính Sách Bảo Hành:\r\nBảo hành sản phẩm trong vòng 6 tháng kể từ ngày mua hàng.\r\nHóa đơn mua hàng là điều kiện cần để yêu cầu bảo hành.\r\n3. Chính Sách Hoàn Tiền:\r\nHoàn tiền sẽ được thực hiện trong vòng 7 ngày làm việc sau khi xác nhận và chấp nhận yêu cầu hoàn trả.\r\nHoàn tiền sẽ được chuyển trả qua phương tiện thanh toán mà khách hàng đã sử dụng khi mua hàng.', '4. Hướng Dẫn Đổi Trả và Bảo Hành:\r\nĐể đổi trả hoặc bảo hành, vui lòng liên hệ hotline chăm sóc khách hàng của chúng tôi để được hỗ trợ chi tiết.\r\nKhách hàng có trách nhiệm chịu chi phí vận chuyển khi đổi trả sản phẩm.\\', '20240125175759.jpeg', 'Policy', '2024-01-25 10:57:59', '2024-01-25 10:59:34', 1, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `db_product`
--

CREATE TABLE `db_product` (
  `id` bigint UNSIGNED NOT NULL,
  `category_id` int UNSIGNED NOT NULL,
  `brand_id` int UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2',
  `qty` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_product`
--

INSERT INTO `db_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `detail`, `description`, `image`, `price`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `qty`) VALUES
(2, 5, 13, 'Áo Khoác Jean', 'ao-khoac-jean', 'Áo khoác giành cho cách cặp đôi ai ế thì mua một cái, shop có bán lẻ\r\nChất liệu Jean chính hãng', 'Áo ít áp dụng cho ai Ế', '20231227110728.jpeg', 300000, '2023-12-27 04:07:28', '2024-01-13 06:00:59', 1, 1, 1, NULL),
(3, 2, 3, 'Áo Tay Dài Nữ', 'ao-tay-dai-nu', 'Áo len phù hợp mùa đông\r\nChất liệu là vải', 'đẹp lắm', '20240103162340.jpeg', 350000, '2024-01-03 09:23:40', '2024-01-13 05:59:33', 1, 1, 1, 1200),
(4, 5, 14, 'Áo Khoác Nỉ', 'ao-khoac-ni', 'Phù hợp mặt vào mùa đông hay đi chơi đều oke\r\nChất liệu bằng vải gì đó', 'đẹp verygood', '20240104102504.jpeg', 389000, '2024-01-04 03:25:04', '2024-01-13 05:58:21', 1, 1, 1, 1),
(5, 1, 13, 'Áo Polo Nam Tay Phối', 'ao-polo-nam-tay-phoi', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum', 'The point of using Lorem Ipsum', '20240104102554.jpeg', 200000, '2024-01-04 03:25:54', '2024-01-13 05:56:42', 1, 1, 1, 1),
(6, 3, 3, 'Áo Polo Nam', 'ao-polo-nam', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 'industry\'s standard dummy text ever since the 1500s', '20240104102719.jpeg', 100000, '2024-01-04 03:27:19', '2024-01-12 09:05:29', 1, 1, 0, 6),
(8, 1, 13, 'Áo Polo Đen', 'ao-polo-den', 'Áo Polo Nam 5S Fashion, Cotton USA, Co Giãn 4 Chiều APC23023 là thiết kế phối màu in tràn độc đáo ứng dụng công nghệ thoáng khí số 1 chuyên biệt của 5S Fashion rất được ưa chuộng hiện nay. Kiểu dáng Slim fit ôm vừa vặn, tôn dáng mà vẫn thoải mái trong mọi hoạt động.', 'Áo Polo được làm từ chất liệu Cotton USA với những ưu điểm vượt trội như co giãn 4 chiều, thấm hút mồ hôi, thoáng mát tối đa. Bề mặt vải tối ưu khả năng thoáng khí, hút ẩm nhanh hơn và mau khô hơn', '20240104121427.jpeg', 120000, '2024-01-04 05:14:27', '2024-01-26 11:25:50', 1, 1, 1, 1),
(10, 5, 3, 'Đồ Đôi Đỏ', 'do-doi-do', 'fghfgdgx', 'dgdfgvdff', '20240126172650.jpeg', 100000, '2024-01-26 10:26:50', '2024-01-26 10:26:50', 1, NULL, 1, 1),
(11, 5, 3, 'Đồ Đôi Đen', 'do-doi-den', 'vffe', 'rgver', '20240126172746.jpeg', 110000, '2024-01-26 10:27:46', '2024-01-26 10:27:46', 1, NULL, 1, 1),
(12, 4, 13, 'Nón Tròn Vàng', 'non-tron-vang', 'Được làm từ chất liệu Cotton USA với những ưu điểm vượt trội như co giãn 4 chiều, thấm hút mồ hôi, thoáng mát tối đa. Bề mặt vải tối ưu khả năng thoáng khí,', 'Thiết kế đường nét hiện đại, gam màu đa dạng, phù hợp với mọi sở thích, độ tuổi và phong cách.', '20240126182816.jpeg', 200000, '2024-01-26 11:28:16', '2024-01-26 11:28:16', 1, NULL, 1, 2),
(13, 4, 13, 'Nón Tròn Xanh', 'non-tron-xanh', 'Vệc kết hợp thêm với Mirofiber - một loại sợi gốc Polyester/Polyamide với tỉ lệ 80/20 có kích thước nhỏ cỡ micro mét tạo cảm giác mềm mịn thoải mái.', 'Do các sợi nhỏ cỡ micro nên mật độ sợi dày hơn giúp vải thành phẩm bền và ổn định hơn, giảm độ co rút và giảm nhăn đáng kể.', '20240126182930.jpeg', 400000, '2024-01-26 11:29:30', '2024-01-26 11:29:30', 1, NULL, 1, 1),
(14, 4, 3, 'Nón Jean', 'non-jean', 'Do các sợi nhỏ cỡ micro nên mật độ sợi dày hơn giúp vải thành phẩm bền và ổn định hơn, giảm độ co rút và giảm nhăn đáng kể.', 'Vệc kết hợp thêm với Mirofiber - một loại sợi gốc Polyester/Polyamide với tỉ lệ 80/20 có kích thước nhỏ cỡ micro mét tạo cảm giác mềm mịn thoải mái.', '20240126183017.jpeg', 100000, '2024-01-26 11:30:17', '2024-01-26 11:30:17', 1, NULL, 1, 1),
(15, 4, 3, 'Nón KaKi', 'non-kaki', 'Vệc kết hợp thêm với Mirofiber - một loại sợi gốc Polyester/Polyamide với tỉ lệ 80/20 có kích thước nhỏ cỡ micro mét tạo cảm giác mềm mịn thoải mái.', 'Do các sợi nhỏ cỡ micro nên mật độ sợi dày hơn giúp vải thành phẩm bền và ổn định hơn, giảm độ co rút và giảm nhăn đáng kể.', '20240126183054.jpeg', 500000, '2024-01-26 11:30:54', '2024-01-26 11:30:54', 1, NULL, 1, 2),
(16, 1, 13, 'Sơ Mi Cộc Tay', 'so-mi-coc-tay', 'Áo Sơ Mi Nam Cộc Tay 5S Fashion, là thiết kế mới nhất trong bộ sưu tập Công sở Xuân Hè của 5S Fashion với kiểu dáng Slim fit vừa vặn, tôn dáng.', 'Thiết kế đơn giản, vạt lượn, không túi cùng cổ áo đứng lịch sự. Màu sắc trắng kẻ xanh biển lịch lãm, thời thượng tạo nên dấu ấn thanh lịch, nam tính cho quý ông.', '20240126183326.jpeg', 200000, '2024-01-26 11:33:26', '2024-01-26 11:33:26', 1, NULL, 1, 2),
(17, 1, 3, 'Sơ Mi Nam Ngắn', 'so-mi-nam-ngan', 'Áo sơ mi được làm từ chất liệu Bamboo được dệt từ các sợi Cenlulose đến từ cây Tre tự nhiên sở hữu những ưu điểm vượt trội như kháng khuẩn, thấm hút mồ hôi tốt, chống tia UV và ngăn ngừa sự xuất hiện của vi khuẩn, nấm mốc trên quần áo, mềm mại nên rất an toàn với làn da người mặc.', 'Vệc kết hợp thêm với Mirofiber - một loại sợi gốc Polyester/Polyamide với tỉ lệ 80/20 có kích thước nhỏ cỡ micro mét tạo cảm giác mềm mịn thoải mái.', '20240126183432.jpeg', 100000, '2024-01-26 11:34:32', '2024-01-26 11:34:32', 1, NULL, 1, 1),
(18, 2, 13, 'Sơ Mi Dài Tay', 'so-mi-dai-tay', 'Chất liệu: vải tweed\r\nKiểu dáng: áo dài tay thiết kế dáng ngắn, vai bồng, cổ phối nơ', 'Thông tin người mẫu: cao 1m60, số đo 84 - 60 - 90 mặc sản phẩm size S\r\nSản phẩm kết hợp: chân váy H248', '20240126183754.jpeg', 100000, '2024-01-26 11:37:54', '2024-01-26 11:37:54', 1, NULL, 1, 1),
(19, 2, 14, 'Áo Form Rộng', 'ao-form-rong', 'Tự hào sản xuất tại Việt Nam - (xem nhà máy PALTAL)\r\nMua hàng thông minh - Tối ưu giá sản phẩm Nhờ quy trình sản xuất khép kín, có nhà máy, trực tiếp sản xuất từ Dệt, May, In, Thêu', '& trực tiếp phân phối đến người tiêu dùng, giúp khách hàng PALTAL sở hữu sản phẩm chất lượng với giá tối ưu nhất.\r\nChính sách hài lòng 100% (xem chi tiết)', '20240126184225.jpeg', 300000, '2024-01-26 11:42:25', '2024-01-26 11:42:39', 1, 1, 1, 1),
(20, 2, 3, 'Áo Thun nữ', 'ao-thun-nu', '- Áo thun thiết kế thanh lịch, hợp thời trang với những đường cắt may tinh tế, họa tiết in ép kỹ thuật số, không bong tróc\r\n- Tiện dụng, đa năng, có thể mặc đi chợ, mua sắm, nội trợ, dạo phố, du lịch', '- Chất liệu cotton mặc thấm hút mồ hôi cực thích, cảm giác mát lạnh, mềm, mịn, khô thoáng\r\n- Đẹp từng đường kim, mũi chỉ, không có chỉ thừa\r\n- Bền màu, họa tiết độc đáo, kiểu dáng basic dễ mặc tôn dáng, tôn da', '20240126184422.jpeg', 399000, '2024-01-26 11:44:22', '2024-01-26 11:44:22', 1, NULL, 1, 1),
(21, 2, 13, 'Quần Jean Nữ Slimfit', 'quan-jean-nu-slimfit', 'Quần Jean Nữ SlimfitQuần Jean Nữ SlimfitQuần Jean Nữ SlimfitQuần Jean Nữ SlimfitQuần Jean Nữ SlimfitQuần Jean Nữ SlimfitQuần Jean Nữ SlimfitQuần Jean Nữ SlimfitQuần Jean Nữ SlimfitQuần Jean Nữ Slimfit', 'Quần Jean Nữ SlimfitQuần Jean Nữ SlimfitQuần Jean Nữ Slimfit', '20240530073754.jpeg', 300000, '2024-05-30 00:37:54', '2024-06-20 02:05:36', 1, 1, 1, 10),
(22, 1, 3, 'Quần Jean Nam', 'quan-jean-nam', 'Miễn phí vận chuyển cho đơn từ 399k\r\nNhập mã S10 GIẢM 10% tối đa 10K\r\nNhập mã S40 GIẢM 40K đơn hàng từ 599K\r\nNhập mã S60 GIẢM 60K đơn hàng từ 799K', 'Nhập mã S40 GIẢM 40K đơn hàng từ 599K\r\nNhập mã S60 GIẢM 60K đơn hàng từ 799K', '20240620090744.jpeg', 398000, '2024-06-20 02:07:44', '2024-06-20 02:25:04', 1, 1, 1, 7);

-- --------------------------------------------------------

--
-- Table structure for table `db_productsale`
--

CREATE TABLE `db_productsale` (
  `id` bigint UNSIGNED NOT NULL,
  `product_id` int UNSIGNED NOT NULL,
  `pricesale` double NOT NULL,
  `date_begin` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_by` int UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_productsale`
--

INSERT INTO `db_productsale` (`id`, `product_id`, `pricesale`, `date_begin`, `date_end`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(21, 16, 199000, '2024-06-20 00:00:00', '2024-06-30 00:00:00', '2024-06-20 02:44:10', '2024-06-20 02:44:10', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `db_productstore`
--

CREATE TABLE `db_productstore` (
  `id` bigint UNSIGNED NOT NULL,
  `product_id` int UNSIGNED NOT NULL,
  `priceroot` double NOT NULL,
  `qty` int UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_by` int UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_productstore`
--

INSERT INTO `db_productstore` (`id`, `product_id`, `priceroot`, `qty`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 6, 100000, 1, '2024-01-11 06:04:44', '2024-01-11 06:04:44', 1, NULL),
(2, 4, 10002, 5, '2024-01-12 07:34:09', '2024-01-12 07:34:09', 1, NULL),
(3, 4, 10002, 5, '2024-01-12 07:34:12', '2024-01-12 07:34:12', 1, NULL),
(4, 2, 1999, 2, '2024-01-12 07:34:29', '2024-01-12 07:34:29', 1, NULL),
(5, 3, 5000, 3, '2024-01-12 07:35:00', '2024-01-12 07:35:00', 1, NULL),
(6, 5, 7000, 1, '2024-01-12 07:35:14', '2024-01-12 07:35:14', 1, NULL),
(7, 20, 15000, 1, '2024-01-26 11:54:22', '2024-01-26 11:54:22', 1, NULL),
(8, 19, 12000, 2, '2024-01-26 11:54:29', '2024-01-26 11:54:29', 1, NULL),
(9, 18, 6000, 2, '2024-01-26 11:54:37', '2024-01-26 11:54:37', 1, NULL),
(10, 15, 12000, 1, '2024-01-26 11:54:43', '2024-01-26 11:54:43', 1, NULL),
(11, 18, 5000, 1, '2024-01-26 11:55:42', '2024-01-26 11:55:42', 1, NULL),
(12, 17, 4000, 2, '2024-01-26 11:55:47', '2024-01-26 11:55:47', 1, NULL),
(13, 16, 2000, 2, '2024-01-26 11:55:51', '2024-01-26 11:55:51', 1, NULL),
(14, 14, 3000, 2, '2024-01-26 11:55:56', '2024-01-26 11:55:56', 1, NULL),
(15, 13, 1000, 1, '2024-01-26 11:55:59', '2024-01-26 11:55:59', 1, NULL),
(16, 12, 1000, 1, '2024-01-26 11:56:02', '2024-01-26 11:56:02', 1, NULL),
(17, 11, 3000, 1, '2024-01-26 11:56:07', '2024-01-26 11:56:07', 1, NULL),
(18, 10, 3000, 3, '2024-01-26 11:56:10', '2024-01-26 11:56:10', 1, NULL),
(19, 8, 1000, 1, '2024-01-26 11:56:14', '2024-01-26 11:56:14', 1, NULL),
(20, 6, 1000, 1, '2024-01-26 11:56:17', '2024-01-26 11:56:17', 1, NULL),
(21, 20, 15000, 2, '2024-01-26 18:49:46', '2024-01-26 18:49:46', 1, NULL),
(22, 21, 400000, 3, '2024-05-30 00:44:06', '2024-05-30 00:44:06', 1, NULL),
(23, 22, 298000, 7, '2024-06-20 02:25:29', '2024-06-20 02:25:29', 1, NULL),
(26, 2, 1999, 4, '2024-06-26 08:07:29', '2024-06-26 08:07:29', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `db_topic`
--

CREATE TABLE `db_topic` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_topic`
--

INSERT INTO `db_topic` (`id`, `name`, `slug`, `sort_order`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(2, 'Topic 2', 'topic-2', 0, 'dfryhgredfbvge', '2023-12-27 04:08:41', '2024-01-10 09:35:40', 1, 1, 1),
(3, 'Topic 3', 'topic-3', 0, 'dhgrthgsfdz', NULL, '2024-01-10 09:39:22', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_user`
--

CREATE TABLE `db_user` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(225) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `roles` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int UNSIGNED NOT NULL DEFAULT '1',
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_user`
--

INSERT INTO `db_user` (`id`, `name`, `username`, `password`, `gender`, `phone`, `email`, `address`, `roles`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(21, 'mac quoc huy', 'quochuy', '$2y$12$7syw7YlBGjbiHluQGPeVq.9hQqstiFXEB8JNbUnvWss6Vu/jzG1kK', 'Nam', '0868459255', 'machuy2003@gmail.com', 'Bình Định', '0', '2024-06-22 06:18:38', '2024-06-22 06:18:38', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_11_30_110332_create_brand_table', 1),
(6, '2023_11_30_110340_create_category_table', 1),
(7, '2023_11_30_110347_create_contact_table', 1),
(8, '2023_11_30_110356_create_menu_table', 1),
(9, '2023_11_30_110403_create_order_table', 1),
(10, '2023_11_30_110413_create_orderdetail_table', 1),
(11, '2023_11_30_110420_create_product_table', 1),
(12, '2023_11_30_110427_create_post_table', 1),
(13, '2023_11_30_110433_create_banner_table', 1),
(14, '2023_11_30_110438_create_topic_table', 1),
(15, '2023_11_30_110443_create_user_table', 1),
(16, '2023_11_30_110449_create_productstore_table', 1),
(17, '2023_11_30_110456_create_productsale_table', 1),
(18, '2023_11_30_111530_create_config_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `db_banner`
--
ALTER TABLE `db_banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_brand`
--
ALTER TABLE `db_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_category`
--
ALTER TABLE `db_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_config`
--
ALTER TABLE `db_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_contact`
--
ALTER TABLE `db_contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_menu`
--
ALTER TABLE `db_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_order`
--
ALTER TABLE `db_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_post`
--
ALTER TABLE `db_post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_product`
--
ALTER TABLE `db_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_productsale`
--
ALTER TABLE `db_productsale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_productstore`
--
ALTER TABLE `db_productstore`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_topic`
--
ALTER TABLE `db_topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_user`
--
ALTER TABLE `db_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `db_banner`
--
ALTER TABLE `db_banner`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `db_brand`
--
ALTER TABLE `db_brand`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `db_category`
--
ALTER TABLE `db_category`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `db_config`
--
ALTER TABLE `db_config`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `db_contact`
--
ALTER TABLE `db_contact`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `db_menu`
--
ALTER TABLE `db_menu`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `db_order`
--
ALTER TABLE `db_order`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `db_post`
--
ALTER TABLE `db_post`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `db_product`
--
ALTER TABLE `db_product`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `db_productsale`
--
ALTER TABLE `db_productsale`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `db_productstore`
--
ALTER TABLE `db_productstore`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `db_topic`
--
ALTER TABLE `db_topic`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `db_user`
--
ALTER TABLE `db_user`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
