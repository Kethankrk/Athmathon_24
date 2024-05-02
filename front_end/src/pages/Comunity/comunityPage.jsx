import Lottie from "lottie-react";
import React from "react";
import Wave from "../../Components/lottie/wave-anime.json";
import LeaderBoardCard from "../../Components/leaderBoardCard";
import { Card, Typography } from "@material-tailwind/react";
import TopThreeCard from "../../Components/topThree";

function ComunityPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-cyan-200 to-slate-50 relative">
      <Card variant="gradient" color="amber" className="mt-10 z-10 mx-10">
        <div className="p-10">
          <p className="text-4xl font-semibold text-center">Community</p>
          <p className="font-medium text-center">Total points: 25k</p>
        </div>
      </Card>
      <Typography className="ml-10 font-semibold text-2xl mt-4">
        Leaderboard
      </Typography>
      <div className="mt-6 mx-10 flex gap-5 justify-center">
        <TopThreeCard name="Kethan Krishna PK" score="3200" postion="1" />
        <TopThreeCard name="Kethan Krishna PK" score="3200" postion="2" />
        <TopThreeCard name="Kethan Krishna PK" score="3200" postion="3" />
      </div>
      <div className="w-full px-10 mt-10 flex flex-col gap-5">
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
        <LeaderBoardCard />
      </div>
      <Lottie animationData={Wave} className=" absolute bottom-0 w-full" />
    </div>
  );
}

export default ComunityPage;
