import * as React from "react";

export const Sidebar: React.FunctionComponent = () => {
  return (
    <aside className="w-[94px] bg-sidebar h-[100vh]  pt-5 flex flex-col items-center fixed z-10 left-0 top-0">
      <img
        src="/octom-logo.png"
        alt="Octom"
        className="w-[64px] h-[61px] mb-[auto]"
      />

      <div className="h-full flex flex-col  items-center justify-center">
        <div className="mt-10 bg-primary w-[46px] h-[45px] rounded-[14px] flex justify-center items-center">
          <img
            src="/task-icon.svg"
            alt="tasks"
            className="ml-[auto] mr-[auto] block w-5 h-5"
          />
        </div>
      </div>
    </aside>
  );
};
