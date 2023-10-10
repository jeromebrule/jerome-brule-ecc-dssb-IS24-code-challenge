import {NextRequest, NextResponse} from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();

  console.log("name", body.userName);
  const result = await prisma.contact.findMany({
    where: {
      userName: {
        contains: body.userName,
      },
    },
  });

  return NextResponse.json(result);
}
