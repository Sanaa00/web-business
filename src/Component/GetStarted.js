import React from "react";
import style from "../Style";
import { arrowUp } from "../assets";
function GetStarted() {
  return (
    <>
      <div
        className={`${style.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      >
        <div
          className={`${style.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        >
          <div className={`${style.flexStart} flex-row`}>
            <p className="mr-2 font-poppines font-medium text-[18px] leading-[23px]">
              <span className="text-gradient ">Get</span>
            </p>{" "}
            <img
              src={arrowUp}
              alt="arrow"
              className="w-[23px] h-[23px] object-contain"
            />
          </div>
          <p className="font-poppines font-medium text-[18px] leading-[23px]">
            <span className="text-gradient ">Started</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
