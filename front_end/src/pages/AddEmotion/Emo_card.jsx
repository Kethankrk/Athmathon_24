import Lottie from "lottie-react";
import React from "react";

const EmoCard = ({ anime, name }) => {
  return (
    <div>
      <div className="flex bg-white justify-center items-center w-64 h-64 flex-col ">
        <Lottie animationData={anime} className="w-2/3" />
        <h1 className="font-bold text-xl">{name}</h1>
      </div>
    </div>
  );
};

export default EmoCard;
