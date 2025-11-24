import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="bg-pink-100 h-screen w-full p-8 md:p-16">
      <div>{/* will do this later */}</div>

      <section className="shadow-lg rounded-lg bg-white p-10  flex flex-col text-black  gap-8 items-center mt-40 ">
        <div className="object-contain ">
          <Image
            src="/assets/3dicons-folder-fav-dynamic-color.png"
            alt="folder"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <h4 className="text-2xl font-semibold capitalize tracking-wider">
          select files to upload
        </h4>
        <p className="text-lg  tracking-wide  text-center capitalize">
          Choose video and images to share with your audience
        </p>
        <button className="w-full bg-purple-500 p-4 text-white capitalize tracking-wide font-bold rounded-lg bg-gradient-to-l from-pink-500 text-xl md:max-w-lg">
          choose pics
        </button>
        <p className="text-lg text-gray-600">
          supported formats JPG PNG MP4 AVI MOV
        </p>
      </section>
    </section>
  );
}
