import {Session} from "next-auth";

export function isLisa(session: Session | null): boolean {
  if (session && session.user) {
    const {name} = session.user;
    return name === "Lisa";
  }
  return false;
}

export function isAlan(session: Session | null): boolean {
  if (session && session.user) {
    const {name} = session.user;
    return name === "Alan";
  }
  return false;
}
