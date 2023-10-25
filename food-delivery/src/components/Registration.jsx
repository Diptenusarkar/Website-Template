import React, { useState } from "react";
import Logo from "../img/logo.png";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { motion } from "framer-motion";
import { RotatingLines } from "react-loader-spinner";
import background from "../img/background.jpg";

const Registration = () => {
    // Navigate func. so that after account created we can redirect to login page
    const navigate = useNavigate();
    // firebase auth
    const auth = getAuth();
    const [clientName, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    // Loading Spinnner
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    // Err Start here
    const [errClientName, setErrClientName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [errCPassword, setErrCPassword] = useState("");
    const [firebaseErr, setFirebaseErr] = useState("");

    // handle start here
    const handleName = (e) => {
        setClientName(e.target.value);
        setErrClientName("");
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("");
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrPassword("");
    };
    const handleCPassword = (e) => {
        setCPassword(e.target.value);
        setErrCPassword("");
    };

    // Email validation start
    // regex email validation javascript
    const emailValidation = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    };
    // const validateInput = (input) => {
    //     const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     const phonePattern = /^\d{10}$/;

    //     return String(input).match(emailPattern) || String(input).match(phonePattern);
    // };

    // const emailOrPhoneValidation = (value) => {
    //     return validateInput(value.toLowerCase());
    // };


    // Onclike registration
    const handleRegistration = (e) => {
        e.preventDefault();
        if (!clientName) {
            setErrClientName("Enter your name");
        }
        if (!email) {
            setErrEmail("Enter your email");
            setFirebaseErr("");
        } else {
            if (!emailValidation(email)) {
                setErrEmail("Enter a valid email");
            }
        }
        if (!password) {
            setErrPassword("Enter your password");
        } else {
            if (password.length < 6) {
                setErrPassword("Passwords must be at least 6 characters.");
            }
        }
        if (!cPassword) {
            setErrCPassword("Confirm your password");
        } else {
            if (cPassword !== password) {
                setErrCPassword("Password not matched");
            }
        }

        if (
            clientName &&
            email &&
            emailValidation(email) &&
            password &&
            password.length >= 6 &&
            cPassword &&
            cPassword === password
        ) {
            setLoading(true);
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    updateProfile(auth.currentUser, {
                        displayName: clientName,
                        photoURL:
                            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
                    });
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    setLoading(false);
                    setSuccessMsg("Account Created Succesfully!");
                    // ...
                    // navigate to signin page
                    setTimeout(() => {
                        navigate("/login");
                    }, 3000);
                })
                .catch((error) => {
                    setLoading(false)
                    const errorCode = error.code;
                    if (errorCode.includes("auth/email-already-in-use")) {
                        setFirebaseErr("Email Already in Use, Try another one");
                    }
                    // ..
                });

            setClientName("");
            setEmail("");
            setPassword("");
            setCPassword("");
            setErrCPassword("");
        }
    };

    return (
        <div className="w-full h-screen" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backdropFilter: 'blur(100px)' }}>
            <div className="w-full p-10 pt-5 flex justify-center items-center h-screen">
                <form className="w-[350px] h-[95vh] flex flex-col items-center bg-white bg-opacity-30 backdrop-filter backdrop-blur-md backdrop-saturate-150">
                    <div className='flex items-center justify-center mt-6'>
                        <img className="w-16 mr-5" src={Logo} alt="darklogo" />
                        <p className="text-headingColor text-2xl font-bold">Yumplatter </p>
                    </div>
                    <div className="w-full p-6 space-y-4">
                        <h1 className="font-titleFont text-3xl font-medium">
                            Create Account
                        </h1>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-sm font-medium">Your name</h1>
                                <input
                                    onChange={handleName}
                                    value={clientName}
                                    type="name"
                                    className="w-full py-1 border px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                                />
                                {errClientName && (
                                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                        <span className="italic font-titleFont font-extrabold text-base">
                                            !
                                        </span>{" "}
                                        {errClientName}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-sm font-medium">Email</h1>
                                <input
                                    onChange={handleEmail}
                                    value={email}
                                    type="email"
                                    className="w-full py-1 border  px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                                />
                                {errEmail && (
                                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                        <span className="italic font-titleFont font-extrabold text-base">
                                            !
                                        </span>{" "}
                                        {errEmail}
                                    </p>
                                )}
                                {firebaseErr && (
                                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                        <span className="italic font-titleFont font-extrabold text-base">
                                            !
                                        </span>{" "}
                                        {firebaseErr}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-sm font-medium">Password</h1>
                                <input
                                    onChange={handlePassword}
                                    value={password}
                                    type="password"
                                    className="w-full lowercase py-1 border  px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                                />
                                {errPassword && (
                                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                        <span className="italic font-titleFont font-extrabold text-base">
                                            !
                                        </span>{" "}
                                        {errPassword}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-sm font-medium">Re-enter Password</h1>
                                <input
                                    onChange={handleCPassword}
                                    value={cPassword}
                                    type="password"
                                    className="w-full lowercase py-1 border  px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                                />
                                {errCPassword && (
                                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                        <span className="italic font-titleFont font-extrabold text-base">
                                            !
                                        </span>{" "}
                                        {errCPassword}
                                    </p>
                                )}
                            </div>
                            <div>
                                <p className="text-xs text-gray-600">
                                    Passwords must be at least 6 characters.
                                </p>
                            </div>
                            {/* SUBMIT BUTTON START HERE */}
                            <button
                                onClick={handleRegistration}
                                className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border active:border-yellow-800 active:shadow-amazonInput"
                            >
                                Continue
                            </button>
                            {/* SUBMIT BUTTON END HERE */}
                            {loading && (
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
                        <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
                            <span className="text-black">Already have an account ?</span>
                            {/* <Logo />{" "} */}
                            <Link to="/login">
                                <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                                    {" "}Login
                                </span>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
