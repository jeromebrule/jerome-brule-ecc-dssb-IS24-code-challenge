import { PrismaClient } from '@prisma/client'
import Employees from './employees'
import Products from './products'
const prisma = new PrismaClient()

const seedProducts = async () => {
  try {

    await prisma.product.deleteMany();
    console.log('Deleted records in the product table');

    await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
    console.log('Reset records auto-increment to 1');

    await Promise.all(Products.map(async (n) => {
      const validDevelopers = (n.developers || []).filter((developer) => typeof developer.id === 'number');
      const connectArray = validDevelopers.map((developer) => {
        return { id: developer.id };
      });

      const product = await prisma.product.create({
        data: {
          productName: n.productName,
          productOwnerName: n.productOwnerName,
          scrumMasterName: n.scrumMasterName,
          startDate: new Date(n.startDate),
          methodology: n.methodology, 
          location: n.location,
          developers: {
            connect: connectArray,
          },
        },
      });
      console.log(`Created product record with ID: ${product.productId}`);
    }));

    console.log('[SEED] Successfully created product records');
  } catch (error) {
    console.error('[SEED] Failed to create product records', error);
  }
};

const seedDev = async () => {
  try {
    await prisma.employee.deleteMany();
    console.log('Deleted records in scrum master table');

    await prisma.$queryRaw`ALTER TABLE Employee AUTO_INCREMENT = 1`;
    console.log('Reset records auto increment to 1');

    await Promise.all(Employees.map(n => prisma.employee.create({
      data: {
        name: n.name,
        role: n.role
      }
    })));

    console.info('[SEED] Successfully create employee records');

    await seedProducts();
  } catch (error) {
    console.error('[SEED] Failed to create employee records', error);
  }
}

seedDev();
