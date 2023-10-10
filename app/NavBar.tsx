"use client";

import {useSession} from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const {status, data: session} = useSession();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          A Very Real Company
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Login</Link>
            )}
            {status === "authenticated" && (
              <details>
                <summary>{session.user!.name}</summary>

                <ul className="p-2 bg-base-100">
                  <li>
                    <div>
                      <Link href="/api/auth/signout">logout</Link>
                    </div>
                  </li>
                </ul>
              </details>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
