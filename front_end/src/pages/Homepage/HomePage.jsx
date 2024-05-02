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
import TaskCard from "./Components/TaskCard";
import WeekTaskTable from "./Components/weekTaskTable";
import { StickyNavbar } from "../../Components/Nav/Navbar";

const HomePage = () => {
  const [name, setname] = useState("");
  const [greetings, setgreeting] = useState("");

  const [taskData, settaskData] = useState([]);

  useEffect(() => {
    const getuser = () => {
      const username = localStorage.getItem("user");
      setname(username);
    };
    const FunctiongetTask = async () => {
      const data = await GetReq("task/");
      settaskData(data.not_done);
    };
    function getGreeting() {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();

      let greeting;

      if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning!";
      } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good afternoon!";
      } else if (currentHour >= 18 && currentHour < 22) {
        greeting = "Good evening!";
      } else {
        greeting = "Hello!";
      }

      return greeting;
    }

    // Example usage:
    const greeting = getGreeting();
    setgreeting(greeting);
    FunctiongetTask();
    getuser();
  }, []);
  console.log(name);
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-cyan-200 to-slate-50 relative flex justify-center  flex-col">
      <StickyNavbar />
      <div className="flex  flex-col gap-2 z-10 px-24 py-10 w-full">
        <div className=" border-2 border-blue-100 px-7 py-3 border-dashed w-full rounded-xl    relative ">
          {/* <Lottie animationData={Wave_2} /> */}
          <h1 className="font-black text-3xl poppins-bold">
            Hello {name.toLocaleUpperCase()},
          </h1>
          <h1 className="font-black text-3xl poppins-bold">{greetings}</h1>
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
                <TaskCard task={e} />
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
        <WeekTaskTable />
      </div>
      <Lottie animationData={Wave} className=" absolute bottom-0 w-full " />
    </div>
  );
};

export default HomePage;
