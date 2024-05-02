import React from "react";
import Wave from "../../Components/lottie/wave-anime.json";
import Lottie from "lottie-react";
import learning from "../../Components/lottie/learning.json";
import relation from "../../Components/lottie/relation.json";
import fitness from "../../Components/lottie/fitness.json";
import cleaning from "../../Components/lottie/cleaning.json";
import career from "../../Components/lottie/career.json";
import { Button } from "@material-tailwind/react";
import EmoCard from "../AddEmotion/Emo_card";
import { useAtom } from "jotai";
import { taskAtom } from "../../GlobelState";
import { PostReq } from "../../HelperFunction/PostFunction";
import { useNavigate } from "react-router-dom";

const Select_Category = ({ change_screen, Setstate, task }) => {
  const [cat, setcat] = useAtom(taskAtom);
  const navigate = useNavigate();
  const next = async () => {
    if (cat != 0) {
      navigate("/addtask");
    }
  };
  return (
    <>
      <div className="flex flex-wrap z-10 gap-3 justify-center">
        <div
          className=""
          onClick={() => Setstate((prev) => ({ ...prev, category: "L" }))}
        >
          <EmoCard anime={learning} name={"Learning"} />
        </div>
        <div
          className=""
          onClick={() => Setstate((prev) => ({ ...prev, category: "C" }))}
        >
          <EmoCard anime={cleaning} name={"Cleaning"} />
        </div>
        <div
          className=""
          onClick={() => Setstate((prev) => ({ ...prev, category: "H" }))}
        >
          <EmoCard anime={fitness} name={"Fitness"} />
        </div>
        <div
          className=""
          onClick={() => Setstate((prev) => ({ ...prev, category: "R" }))}
        >
          <EmoCard anime={relation} name={"Relation"} />
        </div>
        <div
          className=""
          onClick={() => Setstate((prev) => ({ ...prev, category: "CA" }))}
        >
          <EmoCard anime={career} name={"Career"} />
        </div>
      </div>
      <div className=" z-10 mt-4">
        <Button
          variant="gradient "
          color="light-blue"
          size="lg"
          onClick={() => {
            if (task.category) {
              change_screen("addtask");
            } else {
              console.log("None");
            }
          }}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Select_Category;