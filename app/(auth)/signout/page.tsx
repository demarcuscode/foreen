"use client";
import Micard from "@/components/customs/micard";

export default function page() {
  return (
    <div className="p-8 md:p-16 pt-20 bg-pink-100 h-screen text-black">
      <Micard>
        <div className="text-black flex flex-col items-center gap-8 justify-center p-8 md:p-16 text-center  ">
          <h2 className="captialize text-4xl font-bold text-purple-500 text-gradient-to-l from-pink-500 ">
            Sign out
          </h2>
          <p className="text-lg tracking-wide ">
            Are you sure you want to sign out
          </p>
          <button className="text-lg bg-purple-500 bg-gradient-to-l from-pink-500 w-full p-4 rounded-lg shadow-lg capitalize ">
            sign out
          </button>
        </div>
      </Micard>
    </div>
  );
}
