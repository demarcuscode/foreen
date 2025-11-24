"use client";
import Micard from "@/components/customs/micard";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <section className="max-w-full text-black p-4 bg-pink-100 h-full">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center  gap-8 p-8 md:p-16">
        <Micard containerClass="p-4">
          <div className="flex items-center justify-between p-4">
            <h3 className="capitalize font-bold tracking-wide text-xl">
              {" "}
              total content
            </h3>
            <div></div>
          </div>
          <div className="p-4 font-semibold text-4xl">0</div>
          <p className="text-gray-600 p-4 captialize tracking-wide ">
            Items Available
          </p>
        </Micard>

        <Micard containerClass="p-4">
          <div className="flex items-center justify-between p-4">
            <h3 className="capitalize font-bold tracking-wide text-xl">
              {" "}
              subscriptions
            </h3>
            <div></div>
          </div>
          <div className="p-4 font-semibold text-4xl">0</div>
          <p className="text-gray-600 p-4 captialize tracking-wide ">
            Active Creators
          </p>
        </Micard>

        <Micard containerClass="p-4">
          <div className="flex items-center justify-between p-4">
            <h3 className="capitalize font-bold tracking-wide text-xl">
              {" "}
              Content Type
            </h3>
            <div></div>
          </div>
          <div className="">
            <div className="flex items-center text-lg gap-4 p-4">
              <h4>videos</h4>
              <p>0</p>
            </div>
            <div className="flex items-center text-lg gap-4 p-4">
              <h4>images</h4>
              <p>0</p>
            </div>
          </div>
        </Micard>
      </section>
      <section className="p-8 md:px-16  ">
        <Micard>
          <div className="w-full flex items-center w-50 ">
            <input className="bg-white w-full p-4 ring-1 rounded-lg ring-gray-500 mx-4" />
            <button className="capitalize">all creator</button>
          </div>
        </Micard>
      </section>
      <section className="p-8 md:p-16  ">
        <Micard containerClass="">
          <div className="flex flex-col gap-4 items-center justify-center   ">
            <Image
              className=""
              src="/assets/3dicons-gift-dynamic-color.png"
              alt="gift"
              width={100}
              height={100}
            />
            <h4 className="text-xl font-bold ">Your library is empty</h4>
            <p className="text-lg text-gray-600">
              Subscribe to creators to access their exclusive content
            </p>
            <button
              onClick={() => router.push("/dashboard")}
              className="bg-purple-500 w-full capitalize tracking-wide bg-gradient-to-l from-pink-500 max-w-lg p-4 rounded-lg font-bold text-white"
            >
              browse content
            </button>
          </div>
        </Micard>
      </section>
    </section>
  );
}
