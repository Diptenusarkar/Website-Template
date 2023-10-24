import React, { useState } from "react";
import { darklogo } from "../assets";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion";
import { RotatingLines } from "react-loader-spinner";

const SignIn = () => {
  // firebase signIn
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // Error Start here
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // Email validation start
  // regex email validation javascript
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  };

  // onclick login
  const handleSigin = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Enter your email");
    }else {
      if (!emailValidation(email)) {
        setErrEmail("Enter a valid email")
      }
    }
    if (!password) {
      setErrPassword("Enter your password");
    }

    if (email && password) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          setLoading(false);
          setSuccessMsg("Logged in Successfully! Welcome back!");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          // const errorMessage = error.message;
          if (errorCode.includes("auth/wrong-password")) {
            setErrPassword("Wrong Password! Try Again");
            setPassword("");
            console.log("wrong password")
          }
          if (errorCode.includes("auth/user-not-found")) {
            setErrEmail("No user Found with this Email");
            setEmail("");
            setPassword("");
            console.log("wrong email")

          }
        });
        // setEmail("")
        // setPassword("")
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-white pt-5 pb-10">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <img className="w-32 mb-4" src={darklogo} alt="darklogo" />
          <div className="w-full border border-zinc-200 p-6 space-y-3">
            <h2 className="font-titleFont text-3xl font-medium">Sign in</h2>
            <div className="flex flex-col gap-3">
              {/* EMAIL START HERE */}
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">
                  Email or mobile phone number
                </p>
                <input
                  onChange={handleEmail}
                  value={email}
                  type="email"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                ></input>
                {errEmail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errEmail}
                  </p>
                )}
              </div>
              {/* EMAIL END HERE */}

              {/* PASSWORD START HERE */}
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  onChange={handlePassword}
                  value={password}
                  type="password"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                ></input>
                {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errPassword}
                  </p>
                )}
              </div>
              {/* PASSWORD END HERE */}

              {/* SUBMIT BUTTON START HERE */}
              <button
                onClick={handleSigin}
                className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
              >
                Continue
              </button>
              {/* SUBMIT BUTTON END HERE */}
              {loader && (
                <div className="flex justify-center">
                  <RotatingLines
                    strokeColor="#febd69"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="50"
                    visible={true}
                  />
                </div>
              )}
              {successMsg && (
                <div>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-base font-titleFont font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center"
                  >
                    {successMsg}
                  </motion.p>
                </div>
              )}
            </div>

            <p className="text-xs text-black leading-4">
              By Continuing, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of Use</span> and{" "}
              <span className="text-blue-600"> Private Notice.</span>
            </p>
            <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
              <ArrowRightIcon />{" "}
              <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                Need help?
              </span>
            </p>
          </div>

          {/* Buttom part start here */}

          <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            <span className="w-1/3 text-center">New to Amazon?</span>
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
          </p>

          <Link className="w-full" to="/registration">
            <button className="w-full text-sm py-2 mt-4 bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 rounded-sm active:border-yellow-800 active:shadow-amazonInput">
              Create your Amazon account
            </button>
          </Link>
        </form>
      </div>
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 justify-center flex flex-col gap-4 items-center py-10">
        <div className="flex items-center gap-4">
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Conditions of Use
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Help
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
