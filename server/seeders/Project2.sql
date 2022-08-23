CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `loginId` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL,
  `nickname` varchar(255) UNIQUE NOT NULL,
  `role` int NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT "now()",
  `updated_at` datetime NOT NULL DEFAULT "now()"
);

CREATE TABLE `wallet` (
  `address` char(32) PRIMARY KEY,
  `owner` varchar(255),
  `balance` float NOT NULL DEFAULT 0
);

CREATE TABLE `NFT` (
  `tokenId` int PRIMARY KEY AUTO_INCREMENT,
  `owner` varchar(255) NOT NULL,
  `URI` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `status` int NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT "now()",
  `updated_at` datetime NOT NULL DEFAULT "now()"
);

CREATE TABLE `metadata` (
  `metadataId` int PRIMARY KEY AUTO_INCREMENT,
  `describe` varchar(255) NOT NULL,
  `tokenId` int NOT NULL
);

CREATE TABLE `post` (
  `postId` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `contents` text NOT NULL,
  `category` varchar(255) NOT NULL,
  `status` boolean NOT NULL DEFAULT false,
  `author` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT "now()",
  `updated_at` datetime NOT NULL DEFAULT "now()"
);

CREATE TABLE `comment` (
  `commentId` int PRIMARY KEY AUTO_INCREMENT,
  `postId` int,
  `author` varchar(255) NOT NULL,
  `contents` text NOT NULL,
  `status` boolean NOT NULL DEFAULT false,
  `created_at` datetime NOT NULL DEFAULT "now()",
  `updated_at` datetime NOT NULL DEFAULT "now()"
);

ALTER TABLE `user` ADD FOREIGN KEY (`id`) REFERENCES `wallet` (`owner`);

ALTER TABLE `NFT` ADD FOREIGN KEY (`owner`) REFERENCES `wallet` (`address`);

ALTER TABLE `comment` ADD FOREIGN KEY (`author`) REFERENCES `user` (`id`);

ALTER TABLE `comment` ADD FOREIGN KEY (`postId`) REFERENCES `post` (`postId`);

ALTER TABLE `post` ADD FOREIGN KEY (`author`) REFERENCES `user` (`id`);

ALTER TABLE `NFT` ADD FOREIGN KEY (`tokenId`) REFERENCES `metadata` (`tokenId`);
