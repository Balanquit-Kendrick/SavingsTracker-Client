import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowLeft, StepBackIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <p>This is the dashboard </p>
      <Link href="/">
        <Button variant="outline">
          <ArrowLeft className="h-4 w-4" />
          Go back to index</Button>
      </Link>
    </div>
  );
};

export default page;
