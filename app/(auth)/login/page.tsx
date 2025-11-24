import Micard from "@/components/customs/micard";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="text-black bg-pink-100 h-screen md:flex items-center justify-center w-full ">
      <section className="p-8  md:w-[40%] ">
        <div className="">
          <Micard>
            <div className="flex flex-col gap-8">
              <h3 className=" text-4xl text-pink-500 text-center p-4 tracking-wide  font-bold">
                Welcome Back
              </h3>
              <p className="text-center  text-gray-600 tracking-wide text-lg">
                Sign in to your account
              </p>
              <div className="flex flex-col gap-4 p-4">
                <div className=" flex flex-col gap-4">
                  <p className="capitalize font-bold text-xl tracking-wider">
                    email
                  </p>
                  <input className="text-white rounded-lg ring-1 w-full p-4 ring-gray-400" />
                </div>
                <div className="flex flex-col gap-4 mt-5">
                  <p className="text-xl capitalize tracking-wide text-black">
                    password
                  </p>
                  <input className="text-white rounded-lg ring-1 w-full p-4 ring-gray-400" />
                </div>
              </div>
            </div>
            <button className="w-full mt-6 rounded-lg text-xl bg-purple-500 bg-gradient-to-l from-pink-500  p-4 text-white  capitalize tracking-wide ">
              sign in{" "}
            </button>
            <p className="text-xl text-gray-600  text-center mt-5">
              {" "}
              Don't have an Account ? <Link href="/signup">Sign Up</Link>
            </p>
          </Micard>
        </div>
      </section>
    </section>
  );
}
