import React, { useState } from 'react'
import Logo from "../img/logo.png";
import background from "../img/background.jpg";

// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RotatingLines } from "react-loader-spinner";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { app } from "../firebase.config";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{ user }, dispatch] = useStateValue();

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

    const Googlelogin = async () => {
        setLoading(true)
        if (!user) {
            const {
                user: { refreshToken, providerData },
            } = await signInWithPopup(auth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem("user", JSON.stringify(providerData[0]));
            console.log("Google login clicked")

            setLoading(false);
            setSuccessMsg("Logged in Successfully! Welcome back!");
            setTimeout(() => {
                navigate("/");
            }, 2000);

        }

    };

    const handleSigin = (e) => {
        e.preventDefault();
        if (!email) {
            setErrEmail("Enter your email");
        } else {
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
                    dispatch({
                        type: actionType.SET_USER,
                        user: user,
                    });
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
        }
    };



    return (
        <div className='w-full h-screen bg-white' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backdropFilter: 'blur(100px)' }}>
            <div className="flex justify-center items-center h-screen">
                <form className="w-[350px] h-[90vh] rounded-xl flex flex-col items-center bg-white bg-opacity-30 backdrop-filter backdrop-blur-md backdrop-saturate-150">
                    <div className='flex items-center justify-center mt-8'>
                        <img className="w-16 mr-5" src={Logo} alt="darklogo" />
                        <p className="text-headingColor text-2xl font-bold">Yumplatter</p>
                    </div>
                    <div className="w-full p-6 space-y-6">
                        <h2 className="font-titleFont text-3xl font-bold">Sign in</h2>
                        <div className="flex flex-col gap-5">
                            {/* EMAIL START HERE */}
                            <div className="flex flex-col gap-2">
                                <p className="text-sm  font-medium">
                                    Email
                                </p>
                                <input
                                    onChange={handleEmail}
                                    value={email}
                                    type="email"
                                    className="w-full lowercase py-1 border px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
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
                                    className="w-full lowercase py-1 border  px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
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
                                className="w-full py-1.5 text-sm font-normal rounded-full bg-gradient-to-t from-[#ffe29f] to-[#fcc63c] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
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
                    </div>

                    {/* Buttom part start here */}

                    <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
                        <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
                        <span className="w-1/3 text-center">New User ?</span>
                        <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
                    </p>

                    <Link className="w-full " to="/registration">
                        <button className="w-full  text-sm py-2 mt-4 bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 rounded-full active:border-yellow-800 active:shadow-amazonInput">
                            Create your account
                        </button>
                    </Link>
                    <p className='text-xs text-gray-600 mt-4'>OR</p>
                    <p onClick={Googlelogin} className="w-full flex items-center justify-center cursor-pointer bg-slate-200 text-sm text-titleFont py-2 mt-4 border border-zinc-400 rounded-full">
                        <span className='mx-2 text-xl'> <FcGoogle /> </span>
                        Sign In With Google
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;