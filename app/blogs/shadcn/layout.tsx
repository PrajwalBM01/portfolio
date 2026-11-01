import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex justify-center">
      <article className="max-w-3xl w-full my-16 px-4 flex flex-col gap-10 leading-relaxed">
        {children}
      </article>
    </div>
  );
};

export default layout;
