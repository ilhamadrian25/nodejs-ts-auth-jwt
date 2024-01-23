-- CreateTable
CREATE TABLE `migration` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `folder_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `migration_folder_name_key`(`folder_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
