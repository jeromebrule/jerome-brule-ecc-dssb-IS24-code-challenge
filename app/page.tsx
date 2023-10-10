import React from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Welcome to A Very Real Company</h1>
      {session && <h3> {session.user!.name}</h3>}
    </main>
  );
}
