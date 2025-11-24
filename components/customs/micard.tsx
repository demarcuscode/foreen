import React from "react";

interface micardprops {
  children: React.ReactNode;
  containerClass?: string;
  divClass?: string;
}
export default function Micard(props: micardprops) {
  return (
    <div className={"rounded-lg shadow-lg bg-white p-4 w-full "}>
      <div className="">{props.children}</div>
    </div>
  );
}
