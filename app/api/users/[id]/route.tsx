import {NextRequest, NextResponse} from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
import {getServerSession} from "next-auth/next";
import {getToken} from "next-auth/jwt";

export async function GET(
  request: NextRequest,
  {params}: {params: {id: string}}
) {
  const user = await prisma.contact.findUnique({
    where: {id: parseInt(params.id)},
  });

  if (!user) return NextResponse.json({error: "User not found"}, {status: 404});
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  {params}: {params: {id: string}}
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  const secret = process.env.NEXTAUTH_SECRET;
  const token = await getToken({req: request, secret: secret});

  if (!token)
    return NextResponse.json({error: "Not authentificated"}, {status: 401});

  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

  const user = await prisma.contact.findUnique({
    where: {id: parseInt(params.id)},
  });

  if (!user) return NextResponse.json({error: "User not found"}, {status: 404});

  const updatedUser = await prisma.contact.update({
    where: {id: user.id},
    data: {
      userName: body.userName,
      userEmail: body.userEmail,
      userPhone: body.userPhone,
      userWebsite: body.userWebsite,
      userCompanyName: body.userCompanyName,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  {params}: {params: {id: string}}
) {
  const user = await prisma.contact.findUnique({
    where: {id: parseInt(params.id)},
  });

  const secret = process.env.NEXTAUTH_SECRET;
  const token = await getToken({req: request, secret: secret});

  if (!token)
    return NextResponse.json({error: "Not authentificated"}, {status: 401});

  if (!user) return NextResponse.json({error: "User not found"}, {status: 404});

  const deletedUser = await prisma.contact.delete({
    where: {id: user.id},
  });

  return NextResponse.json({});
}
