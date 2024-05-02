import React, { useState } from "react";
import { useAtom } from "jotai";
import Wave from "../../Components/lottie/wave-anime.json";
import Lottie from "lottie-react";
import happy from "../../Components/lottie/happy.json";
import sad from "../../Components/lottie/sad.json";
import axi from "../../Components/lottie/anxi.json";
import stress from "../../Components/lottie/stress.json";
import depress from "../../Components/lottie/depressed.json";
import EmoCard from "./Emo_card";
import { Button } from "@material-tailwind/react";
import AddTask from "../AddTask/AddTask";
import { taskAtom } from "../../GlobelState";
import { PostReq } from "../../HelperFunction/PostFunction";
import { useNavigate } from "react-router-dom";

const Addemotion = () => {
  const navigate = useNavigate();
  const [emotion, setemotion] = useState();
  const Next = async () => {
    const res = await PostReq("emotion/", { emotion: emotion });
    if (res) {
      navigate("/addcat");
    }
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-cyan-200 to-slate-50 relative flex  flex-col justify-center items-center ">
      <div className="flex flex-wrap z-10 gap-3 justify-center">
        <div className="" onClick={() => setemotion("H")}>
          <EmoCard anime={happy} name={"Happy"} />
        </div>
        <div className="" onClick={() => setemotion("A")}>
          <EmoCard anime={stress} name={"Anxious"} />
        </div>
        <div className="" onClick={() => setemotion("ST")}>
          <EmoCard anime={axi} name={"Stressed"} />
        </div>
        <div className="" onClick={() => setemotion("S")}>
          <EmoCard anime={sad} name={"Sad"} />
        </div>
        <div className="" onClick={() => setemotion("D")}>
          <EmoCard anime={depress} name={"Depressed"} />
        </div>
      </div>
      <div className=" z-10 mt-4">
        <Button variant="gradient " color="light-blue" size="lg" onClick={Next}>
          Next
        </Button>
      </div>
      <Lottie animationData={Wave} className=" absolute bottom-0 w-full " />
    </div>
  );
};

export default Addemotion;
