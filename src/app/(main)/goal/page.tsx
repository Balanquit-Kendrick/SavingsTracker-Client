import { Button } from "@/components/ui/button";
import GoalCard from "@/components/GoalCard";
import { Goal, Plus } from "lucide-react";
import React from "react";

export type Goal = {
  id: number;
  name: string;
  targetAmount: number;
  currentSavings: number;
}

const getData = async (): Promise<Goal[]> =>[
  {
    id: 1,
    name: "Vacation to Palawan",
    targetAmount: 50000,
    currentSavings: 15000,
  },
  {
    id: 2,
    name: "Car Downpayment",
    targetAmount: 300000,
    currentSavings: 15000,
  },
  {
    id: 3,
    name: "Emergency Fund",
    targetAmount: 150000,
    currentSavings: 25000,
  },
  {
    id: 4,
    name: "House Downpayment",
    targetAmount: 200000,
    currentSavings: 35000,
  },
]
const page = async () => {
  const goalData = await getData();
  return (
    <div>
      <div className="mb-8 p-4 bg-secondary rounded-md justify-between flex items-center">
        <h1 className="font-semibold">Existing Goals</h1>
        <Button>
          <Plus />
          Add Target
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {goalData.map(goal => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </div>
  );
};

export default page;
