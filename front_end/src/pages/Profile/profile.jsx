import React from "react";

function ProfilePage() {
  const image = localStorage.getItem("image");
  return (
    <>
      <div className=" min-h-screen w-full">
        <div className="flex justify-center">
          <div className="w-fit border-[5px] border-blue-600">
            <img src={image} alt="profile" className="w-[100px] rounded-full" />
          </div>
        </div>
        <p className="text-xl font-medium">Kethan Krishna P K</p>
      </div>
    </>
  );
}

export default ProfilePage;
