"use client";
import DisplayServices from "../components/customs/displayservice";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex items-center max-w-full  w-full flex-col gap-12 md:pt-20 bg-pink-100">
      <h2 className="text-4xl capitalize text-purple-500 font-bold text-center  tracking-wide pt-14 md:pt-10">
        Premium content platform
      </h2>
      <h4 className="text-lg text-black text-center ">
        share your exclusive content or discover amazing creators. Join our
        community today.
      </h4>
      <div className="flex item-center gap-4 text-lg md:text-2xl tracking-wider ">
        <button
          onClick={() => router.push("/onboarding")}
          className={
            "text-white p-2 rounded-lg  shadow-lg  cursor-pointer capitalize bg-purple-500 bg-gradient-to-l from-pink-500  "
          }
        >
          get started
        </button>
        <button
          onClick={() => router.push("/login")}
          className={
            "bg-white p-2 shadow-lg  cursor-pointer rounded-lg capitalize text-purple-500"
          }
        >
          sign in{" "}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 w-full md:w-[80%] md:mx-auto p-4">
        <DisplayServices
          list={[
            "Upload unlimited videos and images. ",
            "Flexible storage plans starting at 5GB free.",
            "Lock content for premium subscribers.",
            "Manage multilple subscription tiers.",
          ]}
          serviceicon="/assets/3dicons-painting-kit-dynamic-color.png"
          title="for creators"
        />
        <DisplayServices
          list={[
            "Browse content from amazing creators.",
            "Subscribe to your favorite creator.",
            "Lock content for premium subscribers.",
            "Manage multilple subscription tiers.",
          ]}
          serviceicon="/assets/3dicons-picture-dynamic-color.png"
          title="for viewers"
        />
      </div>
    </div>
  );
}
