"use client";
import { redirect, useSearchParams } from "next/navigation";

export default function AuthPage() {
  const params = useSearchParams();
  const url = params.get("callbackUrl");

  redirect(url || "/");
  return <p>hello</p>;
}
