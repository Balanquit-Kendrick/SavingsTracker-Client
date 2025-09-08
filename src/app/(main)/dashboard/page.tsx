import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <Link href="/profile">
        <Button>Profile</Button>
      </Link>
    </div>
  );
};

export default page;
