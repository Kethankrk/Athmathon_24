import React from "react";
import Wave from "../../Components/lottie/wave-anime.json";
import taskanime from "../../Components/lottie/task.json";
import Lottie from "lottie-react";
import { Button, Textarea } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const AddTask = ({ change_screen, Setstate, task }) => {
  return (
    <div className="flex  bg-white rounded-lg px-9 py-6 z-10 gap-5">
      <div className="">
        <Lottie animationData={taskanime} className="w-96" />
      </div>
      <div className="">
        <h1 className="text-3xl font-bold">Add a fun task!</h1>
        <div className=" h-full mt-5">
          <Textarea
            label="Add your task"
            className=" "
            onChange={(e) => {
              Setstate((prev) => ({ ...prev, task: e.target.value }));
            }}
          ></Textarea>
          <Button
            className="mt-3"
            variant="gradient"
            color="light-blue"
            size="lg"
            onClick={() => {
              if (task.task) {
                change_screen("reward");
              }
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
