import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex justify-center">
      <div className=" max-w-3xl w-full my-16 "> {children}</div>
    </div>
  );
};

export default layout;
