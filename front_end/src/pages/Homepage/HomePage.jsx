import React, { useEffect, useState } from "react";
import Wave from "../../Components/lottie/wave-anime.json";
import Lottie from "lottie-react";
import { Button, useSelect } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GetReq } from "../../HelperFunction/PostFunction";

import learning from "../../Components/lottie/learning.json";
import relation from "../../Components/lottie/relation.json";
import fitness from "../../Components/lottie/fitness.json";
import cleaning from "../../Components/lottie/cleaning.json";
import career from "../../Components/lottie/career.json";

const HomePage = () => {
  const [taskData, settaskData] = useState([]);
  console.log(taskData);
  useEffect(() => {
    const FunctiongetTask = async () => {
      const data = await GetReq("task/");
      settaskData(data);
    };
    FunctiongetTask();
  }, []);
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-cyan-200 to-slate-50 relative flex justify-center  ">
      <div className="flex  flex-col gap-2 z-10 px-24 py-10 w-full">
        <div className=" border-2 border-blue-100 px-7 py-3 border-dashed w-full rounded-xl    relative ">
          {/* <Lottie animationData={Wave_2} /> */}
          <h1 className="font-black text-3xl poppins-bold">
            Hello user Welcome to the app
          </h1>
          {/* <Link className="flex bg-blue-100 w-32 px-3 py-2 shadow">
            Start{" "}
            
          </Link> */}
          <Link to="/addemo">
            <Button
              variant="gradient"
              color="light-blue"
              size="sm"
              className="text-xl flex gap-2 items-center mt-3"
            >
              Start
            </Button>
          </Link>
        </div>
        {/* Daily task section */}
        <div className="w-full flex flex-col bg-white rounded-xl shadow px-7 py-3 mt-5 min-h-80 justify-between">
          <h1 className="font-bold text-xl">Today's objectives</h1>

          <div className="mt-9">
            {taskData.map((e) => (
              <>
                <div className="border-b-2  pb-5 mt-4">
                  <h1 className="font-bold text-2xl">{e.task}</h1>

                  <div className="flex gap-2">
                    <h1 className="bg-red-200 px-3 text-sm font-semibold py-1 rounded-full  mt-3">
                      20{" mins "}
                    </h1>
                    <p className="bg-green-200  px-3 py-1 rounded-full text-sm font-semibold mt-3">
                      Reward : {e.reward}
                    </p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="ml-4 mt-5 ">
                      <ul className="list-disc">
                        <li>Discrition 1</li>
                        <li>Discrition 1</li>
                        <li>Discrition 1s</li>
                      </ul>
                    </div>

                    {/* <Lottie animationData={learning} className="" /> */}
                  </div>
                  <div className="flex mt-2">
                    {/* <Button
                      variant="gradient"
                      color="light-green"
                      // className="rounded-full"
                    >
                      I'm Done
                    </Button> */}
                    <button className="bg-green-100 text-green-500 px-7 py-2">
                      {" "}
                      I'm Done
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="flex flex-col items-center">
            {/* <h1 className="text-2xl font-bold text-gray-700">
              Its empty here,Add your emotion.
            </h1> */}

            {/* <div className="">
              <Button
                variant="gradient"
                color="light-blue"
                size="sm"
                className="text-xl flex gap-2 items-center mt-3"
              >
                Start
              </Button>
            </div> */}
          </div>
        </div>
        {/* weekly task section  */}
        <div className="w-full flex flex-col bg-white rounded-xl shadow px-7 py-3 mt-5 min-h-80 justify-between"></div>
      </div>
      <Lottie animationData={Wave} className=" absolute bottom-0 w-full " />
    </div>
  );
};

export default HomePage;
