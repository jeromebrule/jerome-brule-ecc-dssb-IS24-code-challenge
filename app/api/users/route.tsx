import {NextRequest, NextResponse} from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.contact.findMany({});

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

  const user = await prisma.contact.findUnique({
    where: {userEmail: body.userEmail},
  });

  if (user)
    return NextResponse.json({error: "User already exist"}, {status: 400});

  const newUser = await prisma.contact.create({
    data: {
      userName: body.userName,
      userEmail: body.userEmail,
      userPhone: body.userPhone,
      userWebsite: body.userWebsite,
      userCompanyName: body.userCompanyName,
    },
  });
  return NextResponse.json(newUser, {status: 201});
}
