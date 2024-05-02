import { Card, Typography } from "@material-tailwind/react";
import React from "react";

function LeaderBoardCard() {
  return (
    <Card className="px-5 py-2 z-10" color="light-blue">
      <div className="flex gap-10 items-center">
        <p className="rounded-full bg-blue-700 h-[30px] w-[30px] flex justify-center items-center text-white">
          1
        </p>
        <div className="w-[50px] h-[35px]">
          <img
            src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
            alt=""
            className="w-full rounded-full h-full"
          />
        </div>
        <p className="w-full font-medium">Kethan Krishna</p>
        <Typography color="white" className="font-bold">
          3200
        </Typography>
      </div>
    </Card>
  );
}

export default LeaderBoardCard;
