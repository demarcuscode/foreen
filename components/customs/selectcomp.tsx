import Image from "next/image";
import Link from "next/link";
import React from "react";

interface selectcomprops {
  imageurl: string;
  title: string;
  description: string;
  route: string;
}

const SelectComp = (props: selectcomprops) => {
  return (
    <Link
      className="hover:-translate-y-0.5 duration-300 ease-out "
      href={props.route}
    >
      <div className="bg-white  rounded-lg p-4 shadow-lg mx-auto flex flex-col  items-center justify-center">
        <div className="w-50 h-20 flex flex-col gap-6  ">
          <Image
            src={props.imageurl}
            alt={`${props.title}`}
            width={500}
            height={500}
            className="h-50 w-30 object-contain"
          />
        </div>
        <div className="my-10  gap-5 flex flex-col">
          <h4 className=" text-black capitalize text-2xl font-bold tracking-wide text-center">
            {props.title}
          </h4>
          <div className="text-gray-600 text-center">{props.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default SelectComp;
