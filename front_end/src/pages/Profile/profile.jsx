import React, { useEffect, useState } from "react";
import { Card, Input, Typography } from "@material-tailwind/react";

import { GetReq, PatchReq } from "../../HelperFunction/PostFunction";

function ProfilePage() {
  const image = localStorage.getItem("image");
  const [updateProfile, setUpdateProfile] = useState(false);
  const [githubUrl, setGithubUrl] = useState("https://");
  const [user, setUser] = useState({});
  const [githubPorfile, setGithubProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUpdateFunction = async () => {
    if (!githubUrl) return;
    const response = await PatchReq("profile/", { github: githubUrl });
    console.log(response);
  };
  useEffect(() => {
    (async () => {
      const response = await GetReq("profile/?my=1");
      setUser(response);
      setLoading(false);
    })();
  }, []);

  if (loading) return <>loading</>;
  console.log(user.github.split("/").pop());
  return (
    <>
      <div className=" min-h-screen w-full">
        <div className="flex justify-center mt-5">
          <div className="w-fit border-[8px] border-blue-400 rounded-full">
            <img src={image} alt="profile" className="w-[100px] rounded-full" />
          </div>
        </div>
        <p className="text-xl font-medium text-center mt-2">{user.username}</p>
        <div className="bg-white w-[500px] lg:w-[800px] mx-auto mt-10 rounded-xl">
          <Card color="white" className="p-5 z-10">
            <div className="mb-5">
              <Typography className="font-semibold text-lg">
                Username
              </Typography>
              <p>{user.username}</p>
            </div>
            <div className="mb-5">
              <Typography className="font-semibold text-lg">
                Total Points
              </Typography>
              <p>{user.points}</p>
            </div>
            <div className="mb-5">
              <Typography className="font-semibold text-lg">Github</Typography>
              {updateProfile ? (
                <input
                  type="text"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  className="bg-[#ecececbb] px-3 py-1 rounded-lg text-sm w-full"
                />
              ) : (
                <input
                  type="text"
                  disabled
                  value={
                    user.github
                      ? user.github
                      : "You have not provide your github link"
                  }
                  className="bg-[#ecececbb] px-3 py-1 rounded-lg text-sm w-full"
                />
              )}
            </div>
            <div className="flex justify-center">
              {updateProfile ? (
                <button
                  className="px-10 py-2 rounded-lg bg-blue-500 text-white font-medium"
                  onClick={handleUpdateFunction}
                >
                  SUBMIT
                </button>
              ) : (
                <button
                  className="px-10 py-2 rounded-lg bg-blue-500 text-white font-medium"
                  onClick={() => setUpdateProfile(true)}
                >
                  UPDATE
                </button>
              )}
            </div>
            {user.github && (
              <div className="flex justify-center mt-20">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${user.github
                    .split("/")
                    .pop()}&show_icons=true&locale=en`}
                  alt="profile"
                />
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
