import React, { FC } from "react";
import { useFormik } from 'formik';
import axios from 'axios';
import { signIn } from "next-auth/react";
import router from "next/router";
import { useSession } from "next-auth/react";
interface IProps { }

const Hero: FC<IProps> = (props) => {
  const session = useSession();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: async (values) => {
      const response = await signIn('credentials', {
        ...values,
        redirect: false,
      });

      const { error }: any = response;
      console.log(response);

      if (error === null) {

        router.push({ pathname: '/dashboard/home' });

      }
      if (error !== null) {
        console.log(response)
        return;
      }

    },
  });

  return (
    <div className="flex items-center content-center min-h-screen">
      <div className="mx-auto">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="******************"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Hero;
