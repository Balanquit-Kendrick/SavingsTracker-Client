"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <Button onClick={() => signIn("github")}>Login with GitHub</Button>
    </div>
  );
}