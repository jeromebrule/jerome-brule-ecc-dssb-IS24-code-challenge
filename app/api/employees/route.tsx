import {NextRequest, NextResponse} from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const employees = await prisma.employee.findMany({});

  return NextResponse.json(employees);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

  // const employee = await prisma.employee.findUnique({
  //   where: {email: body.email},
  // });

  // if (employee)
  //   return NextResponse.json({error: "employee already exist"}, {status: 400});

  const newEmployee = await prisma.employee.create({
    data: {
      name: body.name,
      role: body.role,
    },
  });
  return NextResponse.json(newEmployee, {status: 201});
}
