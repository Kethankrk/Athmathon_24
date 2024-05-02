import { Typography, Card } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingScreen from "./pages/landingPage/LandingScreen";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginScreen from "./pages/Login/LoginScreen";
import HomePage from "./pages/Homepage/HomePage";
import Addemotion from "./pages/AddEmotion/Addemotion";
import Select_Category from "./pages/Category/selectCategory";
import AddTask from "./pages/AddTask/AddTask";
import SelectReward from "./pages/SelectReward/SelectReward";
import Addreward from "./pages/SelectReward/SelectReward";
import Task from "./pages/Task/Task";
import ComunityPage from "./pages/Comunity/comunityPage";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingScreen />,
    },
    {
      path: "/login",
      element: <LoginScreen />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/addemo",
      element: <Addemotion />,
    },
    {
      path: "/addcat",
      element: <Task />,
    },
    {
      path: "/addtask",
      element: <AddTask />,
    },
    {
      path: "/reward",
      element: <Addreward />,
    },
    {
      path: "/community",
      element: <ComunityPage />,
    },
  ]);
  const client_id =
    "290939924918-bf022earnkeug7eacmsjpmukqpnnl2ul.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={client_id}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </>
  );
}
