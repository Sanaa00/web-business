import React from "react";
import style from "../Style";
function Stats() {
  const stats = [
    {
      id: "stats-1",
      title: "User Active",
      value: "3800+",
    },
    {
      id: "stats-2",
      title: "Trusted by Company",
      value: "230+",
    },
    {
      id: "stats-3",
      title: "Transaction",
      value: "$230M+",
    },
  ];

  return (
    <section className={`${style.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stats) => (
        <div
          key={stats.id}
          className={`flex-1 flex justify-start items-center flex-row m-3 `}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] text-white xs:leading-[53px] leading-[43px] ">
            {stats.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] text-gradient xs:leading-[26px] leading-[21px] uppercase ml-3">
            {stats.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
