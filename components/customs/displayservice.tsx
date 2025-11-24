import Image from "next/image";
import React from "react";

interface displayprops {
  serviceicon: string;
  title: string;
  list: string[];
}

const DisplayServices = (props: displayprops) => {
  return (
    <div className="w-full rounded-lg shadow-lg p-4 bg-white text-purple-500 ">
      <div className="object-contain p-4">
        <Image
          src={props.serviceicon}
          alt={props.title}
          width={200}
          height={100}
          className="h-50 w-40"
        />
      </div>
      <h4 className="capitalize text-4xl font-bold text-black my-4 p-4 ">
        {props.title}
      </h4>
      <div className="flex flex-col gap-4 p-6">
        {props.list.map((item, index) => {
          return (
            <div key={index} className="flex  gap-4 items-center mt-5">
              <div className="rounded-full bg-pink-400 shadow-lg p-1 object-contain  ">
                <Image
                  src="/assets/3dicons-tick-dynamic-color.png"
                  alt="assets"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="p-0 m-0 text-xl text-gray-500 ">{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayServices;
