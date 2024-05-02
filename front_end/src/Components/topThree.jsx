import { Card, Typography } from "@material-tailwind/react";
import React from "react";

function TopThreeCard({ name, postion, score }) {
  return (
    <div className="w-full">
      <Card
        className="relative flex items-center py-8 gap-4 "
        variant="gradient"
        color="blue"
      >
        <p className="rounded-full bg-blue-700 h-[30px] w-[30px] flex justify-center items-center text-white absolute -top-2 right-[50%] translate-x-[50%]">
          {postion}
        </p>
        <div className="w-[50px] h-[50px]">
          <img
            src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
            alt=""
            className="w-full rounded-full h-full"
          />
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
