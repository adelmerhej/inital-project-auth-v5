"use client";

import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <LoginButton>
        <Button
          size="lg"
          className=" bg-blue-800 text-white hover:bg-blue-900 cursor-pointer"
        >
          Sign in
        </Button>
      </LoginButton>
    </div>
  );
}
