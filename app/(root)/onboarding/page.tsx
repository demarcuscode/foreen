"use client";
import SelectComp from "@/components/customs/selectcomp";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-pink-100">
      <div className="flex-1 p-4 md:p-16 md:w-[50%] md:mx-auto ">
        <div className="flex items-center gap-4 justify-center ">
          <h2 className="text-4xl text-black">Welcome! </h2>
          <Image
            src="/assets/3dicons-wreath-dynamic-color.png"
            alt=""
            width={200}
            height={200}
            className="h-20 w-20"
          />
        </div>
        <div className="text-gray-600 text-center text-xl tracking-wider mt-5">
          let's set up your account
        </div>
        <div className="mt-10 w-[90%] mx-auto flex flex-col gap-6">
          <h2 className="text-2xl text-black p-4 "> I want to : </h2>
          <div className="flex flex-col gap-8  ">
            <SelectComp
              imageurl="/assets/3dicons-painting-kit-dynamic-color.png"
              description="Upload videos and images, manage subscriptions, and earn from your content."
              title="share content"
              route="/upload"
            />
            <SelectComp
              imageurl="/assets/3dicons-mobile-dynamic-color.png"
              description="Browse creators , subscribe to access exclusive content and enjoy  premium media."
              title="View content"
              route="/dashboard"
            />
          </div>
          <div className="w-full p-4 md: w-[80%]"></div>
        </div>
      </div>
    </div>
  );
}
