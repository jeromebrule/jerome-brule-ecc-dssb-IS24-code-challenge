/*
  Warnings:

  - You are about to drop the column `yyyy-MM-dd` on the `Product` table. All the data in the column will be lost.
  - Added the required column `yyyy-mm-dd` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `yyyy-MM-dd`,
    ADD COLUMN `yyyy-mm-dd` DATETIME(3) NOT NULL;
