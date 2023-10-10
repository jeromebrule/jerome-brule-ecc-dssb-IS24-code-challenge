/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Product` table. All the data in the column will be lost.
  - Added the required column `productId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_EmployeeToProduct` DROP FOREIGN KEY `_EmployeeToProduct_B_fkey`;

-- AlterTable
ALTER TABLE `Product` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `productId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`productId`);

-- AddForeignKey
ALTER TABLE `_EmployeeToProduct` ADD CONSTRAINT `_EmployeeToProduct_B_fkey` FOREIGN KEY (`B`) REFERENCES `Product`(`productId`) ON DELETE CASCADE ON UPDATE CASCADE;
