import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import { jwtDecode } from "jwt-decode";
import Lottie from "lottie-react";
import Wave from "../../Components/lottie/wave-anime.json";
import welcome from "../../Components/lottie/welcome.json";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { PostReq } from "../../HelperFunction/PostFunction";

const LoginScreen = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-cyan-200 to-slate-50 relative flex justify-center items-center ">
      <div className="grid grid-cols-1  md:grid-cols-2 w-2/3">
        <LoginCard />
        <div className="z-10">
          <Lottie animationData={welcome} />
        </div>
      </div>
      <Lottie animationData={Wave} className=" absolute bottom-0 w-full " />
    </div>
  );
};

export default LoginScreen;

export function LoginCard() {
  const navigate = useNavigate();

  return (
    <Card className="w-96 z-10">
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Sign In
        </Button>
        <div className="flex mt-2 justify-center">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              const criderntial = jwtDecode(credentialResponse.credential);

              const data = {
                email: criderntial.email,
                image: criderntial.picture,
                username: criderntial.name,
              };
              const response = await PostReq("auth/", data);
              console.log(response);
              localStorage.setItem("token", response.access);
              navigate("/home");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </CardFooter>
    </Card>
  );
}