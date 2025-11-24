import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="bg-pink-100  h-full">
      <section className="p-8 md:p-16 md:w-[50%] md:mx-auto ">
        <div className="rounded-lg shadow-lg bg-purple-500 h-full bg-gradient-to-l w-full from-pink-500  ">
          <div className="flex  items-start gap-4 w-[70%] h-full p-4">
            <div className="">
              <div className="text-5xl w-50 h-30 mr-14   font-bold rounded-full shadow-xl flex p-4 items-center  justify-evenly w-full   gap-8">
                F
              </div>
            </div>

            <div className="w-full flex flex-col gap-4">
              <h2 className="capitalize text-3xl">unnamed user</h2>
              <p className="text-lg">foreen4@gmail.com</p>
              <div className="rounded-lg shadow-lg  bg-pink-400 text-lg capitalize tracking-wider bg-gradient-to-l from-purple-200 p-2 text-center">
                client
              </div>
            </div>
          </div>

          <div className="mt-10 bg-white text-black p-4 bg-gray-100  ">
            <h3 className="text-4xl capitalize font-bold tracking-wide">
              Basic information
            </h3>
            <div className="flex flex-col gap-4">
              <div className="mt-4 flex flex-col gap-8">
                <p className="capitalize text-2xl tracking-wide">
                  display name
                </p>
                <input className="p-4 bg-white shadow-xl w-full ring-1  rounded-lg" />
              </div>
              <div className="mt-4 flex flex-col gap-8">
                <p className="capitalize text-2xl tracking-wide">
                  email address
                </p>
                <input className="p-4 bg-white shadow-xl w-full ring-1 rounded-lg" />
              </div>
              <div className="mt-4 flex flex-col gap-8">
                <p className="capitalize text-2xl tracking-wide">bio</p>
                <input className="p-4 bg-white shadow-xl w-full ring-1 rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white text-black p-4 bg-gray-100  ">
          <h3 className="text-4xl capitalize font-bold tracking-wide">
            Social links
          </h3>
          <div className="flex flex-col gap-4">
            <div className="mt-4 flex flex-col gap-8">
              <p className="capitalize text-2xl tracking-wide">website</p>
              <input className="p-4 bg-white shadow-xl w-full ring-1  rounded-lg" />
            </div>
            <div className="mt-4 flex flex-col gap-8">
              <p className="capitalize text-2xl tracking-wide">instagram </p>
              <input className="p-4 bg-white shadow-xl w-full ring-1 rounded-lg" />
            </div>
            <div className="mt-4 flex flex-col gap-8">
              <p className="capitalize text-2xl tracking-wide">whatsapp</p>
              <input className="p-4 bg-white shadow-xl w-full ring-1 rounded-lg" />
            </div>
          </div>
        </div>
        <div className="bg-white text-black rounded-lg mt-10 shadow-lg p-4">
          <h3 className="text-4xl text-black font-bold capitalize">
            Account actions
          </h3>

          <div className="flex flex-col gap-8 ">
            <div className="rounded-lg p-4 shadow-lg ">
              <div className="">
                <h3 className="capitalize text-xl font-bold tracking-wider">
                  change password
                </h3>
                <p className="text-gray-600 tracking-wider capitalize">
                  Update your account password for better security
                </p>
                <button className="text-xl p-4 w-60 bg-white shadow-lg  capitalize tracking-wider">
                  change password
                </button>
              </div>
            </div>
            <div className="rounded-lg p-4 shadow-lg ">
              <div className=" flex flex-col gap-2">
                <h3 className="capitalize text-xl font-bold tracking-wider text-red-500">
                  delete account
                </h3>
                <p className="text-gray-600 tracking-wider text-red-500 capitalize">
                  permanently delete your account and all your data.
                </p>
                <button className="text-xl p-4 w-60 text-white rounded-lg shadow-lg bg-red-500 opacity-0.1  capitalize tracking-wider text-red-500 ">
                  delete account
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
