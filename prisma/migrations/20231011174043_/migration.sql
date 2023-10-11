/*
  Warnings:

  - You are about to drop the column `startDate` on the `Product` table. All the data in the column will be lost.
  - Added the required column `yyyy-MM-dd` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `startDate`,
    ADD COLUMN `yyyy-MM-dd` DATETIME(3) NOT NULL;
