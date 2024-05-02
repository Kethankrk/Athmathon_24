import { Card, Typography } from "@material-tailwind/react";
import React from "react";

function TopThreeCard({ name, postion, score, image }) {
  return (
    <div className="w-full">
      <Card
        className="relative flex items-center py-8 gap-4 z-10"
        variant="gradient"
        color="blue"
      >
        <p className="rounded-full bg-blue-700 h-[30px] w-[30px] flex justify-center items-center text-white absolute -top-2 right-[50%] translate-x-[50%]">
          {postion}
        </p>
        <div className="w-[50px] h-[50px]">
          <img src={image} alt="" className="w-full rounded-full h-full" />
        </div>
        <p className="w-full font-medium text-center">{name}</p>
        <Typography color="amber" className="font-bold">
          {score}
        </Typography>
      </Card>
    </div>
  );
}

export default TopThreeCard;
