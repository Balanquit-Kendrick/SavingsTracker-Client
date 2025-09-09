import { LineChart } from "@/components/LineChart";
import MiniTable from "@/components/MiniTable";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, PhilippinePeso } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {/* <Link href="/profile">
        <Button>Profile</Button>
        </Link> */}
        <div className="bg-primary-foreground p-4 col-span-3">
          <div>
            <p className="text-lg  mb-2">Savings Goal: Palawan Vacation</p>
            <Progress value={33} />
            <p className="text-lg text-muted-foreground mt-2 italic">
              33% Complete
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-xl font-bold my-4">Summary</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-4">
        <div className="bg-primary-foreground p-8">
          <h1 className="">Total Savings</h1>
          <p className="text-2xl font-bold flex my-2">₱13,200.00</p>
        </div>
        <div className="bg-primary-foreground p-8">
          <h1 className="">Active Goals</h1>
          <p className="text-2xl font-bold flex my-2">3</p>
        </div>
        <div className="bg-primary-foreground p-8">
          <h1 className="">Monthly Contribution</h1>
          <p className="text-2xl font-bold flex my-2">₱5,000.00</p>
        </div>
      </div>

      <h1 className="text-xl font-bold my-4">Savings Over Time</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-4">
        <div className="bg-primary-foreground p-4 lg:col-span-3 2xl:col-span-2">
          <LineChart />
        </div>
        <div className="bg-primary-foreground p-4 lg:col-span-3 2xl:col-span-1">
          <MiniTable />
        </div>
      </div>
    </div>
  );
};

export default page;
