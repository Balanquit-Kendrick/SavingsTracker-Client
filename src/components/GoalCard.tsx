import { Goal } from "@/app/(main)/goal/page";
import React from "react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

interface GoalCardProps {
  goal: Goal;
}

const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
  return (
    <div className="bg-primary-foreground rounded-2xl p-8 flex justify-between items-center">
      <div className="w-full pr-10">
        <h1 className="font-bold text-muted-foreground text-lg mb-2">{goal.name}</h1>
        <p className="text-sm text-muted-foreground mb-1">
          Target:
          <span className="text-lg text-primary px-2 font-semibold">
            ₱{goal.targetAmount.toLocaleString()}
          </span>
        </p>
        <p className="text-sm text-muted-foreground mb-1">
          Current Savings:
          <span className="text-lg text-primary px-2 font-semibold">
            ₱{goal.currentSavings.toLocaleString()}
          </span>
        </p>
        <Progress
          className="my-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          value={(goal.currentSavings / goal.targetAmount) * 100}
        />
        <p className="italic mt-2">
          {((goal.currentSavings / goal.targetAmount) * 100).toFixed(1)}%
          <span className="mx-2 text-muted-foreground">Progress</span>
        </p>
      </div>
      <div>
        <img
          src="/2.png"
          alt="Goal Illustration"
          width={200}
          height={100}
          className="mx-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default GoalCard;
