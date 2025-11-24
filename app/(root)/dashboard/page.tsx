import Image from "next/image";

export default function page() {
  return (
    <div className="text-black p-4 flex flex-col gap-16 bg-pink-50 h-screen bg-gradient-t-l from-purple-100 ">
      <div className="p-8 md:p-16">
        <h2 className="text-4xl font-bold tracking-wide">
          Discover Amazing Creators
        </h2>
        <p className="my-6 text-xl tracking-wide ">
          Browse Content form talented creators and subscribe to access
          exclusive materials.{" "}
        </p>
      </div>
      <div className="p-8 md:p-16">
        <div className=" bg-white shadow-xl rounded-lg p-4 mt-10 ">
          <div className="flex flex-col items-center">
            <div>
              <Image
                src="/assets/3dicons-painting-kit-dynamic-color.png"
                alt="databale"
                width={50}
                height={50}
                className="h-50 w-50"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-center">No creators yet</h3>
              <p className="text-xl text-gray-600">
                Check back soon for amazing content
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
