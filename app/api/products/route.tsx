import {NextRequest, NextResponse} from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

/**
 * @swagger
 * /api/products:
 *   get:
 *     description: Get all the products
 *     responses:
 *       200:
 *         description: Get all products
 */
export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany({
    include: {
      developers: {
        select: {
          name: true,
        },
      },
    },
  });

  return NextResponse.json(products);
}

/**
 * @swagger
 * /api/products/:
 *   post:
 *     summary: Create a single product.
 *     description: Create a single product by ID.
 *     requestBody:
 *       description: Create product information.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productName:
 *                 type: string
 *                 description: The product name.
 *               productOwnerName:
 *                 type: string
 *                 description: The product owner name.
 *               developers:
 *                 type: array
 *                 description: The product developer names.
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     projectNumber:
 *                       type: string
 *                       description: Project Number - Auto Generated
 *                       example: 0
 *                     name:
 *                       type: string
 *               scrumMasterName:
 *                 type: string
 *                 description: The scrum master name.
 *               startDate:
 *                 type: string
 *                 description: Starting date
 *               methodology:
 *                 type: string
 *                 description: Methodology
 *               location:
 *                 type: string
 *                 description: Where the project is located
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The product ID.
 *                     productName:
 *                       type: string
 *                       description: The product name.
 *                     productOwnerName:
 *                       type: string
 *                       description: The product owner name.
 *                     developers:
 *                       type: array
 *                       description: The product developer names.
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           name:
 *                             type: string
 *                     scrumMasterName:
 *                       type: string
 *                       description: The scrum master name.
 *                     startDate:
 *                       type: string
 *                       description: Starting date
 *                     methodology:
 *                       type: string
 *                       description: Methodology
 *                     location:
 *                       type: string
 *                       description: Where the project is located
 */

export async function POST(request: NextRequest) {
  const body = await request.json();
  body.startDate = new Date(body.startDate);

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

  const product = await prisma.product.findUnique({
    where: {productName: body.productName},
  });

  if (product)
    return NextResponse.json({error: "product already exist"}, {status: 400});

  const dev = body.developers ? body.developers : [];

  function findDuplicates(arr: any) {
    const seen = new Set();
    const duplicates = [];

    for (const item of arr) {
      if (seen.has(item.id)) {
        duplicates.push(item);
      } else {
        seen.add(item.id);
      }
    }

    return duplicates;
  }

  const duplicateItems = findDuplicates(dev);

  if (duplicateItems.length > 0)
    return NextResponse.json(
      {error: "you cant assigned to same developer more than once."},
      {status: 400}
    );

  if (dev.length > 5)
    return NextResponse.json(
      {error: "maximum of 5 developers can be assigned."},
      {status: 400}
    );

  const newProduct = await prisma.product.create({
    data: {
      productName: body.productName,
      productOwnerName: body.productOwnerName,
      developers: {
        connect: dev.map((n: any) => ({id: n.id})),
      },
      scrumMasterName: body.scrumMasterName,
      startDate: body.startDate,
      methodology: body.methodology,
      location: body.location,
    },
    include: {
      developers: true,
    },
  });

  return NextResponse.json(newProduct, {status: 201});
}
