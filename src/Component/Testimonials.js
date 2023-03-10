import React from "react";
import style from "../Style";
import Feedbackcard from "./Feedbackcard";
import { people01, people02, people03 } from "../assets";
function Testimonials() {
  const feedback = [
    {
      id: "feedback-1",
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: people01,
    },
    {
      id: "feedback-2",
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "Founder & Leader",
      img: people02,
    },
    {
      id: "feedback-3",
      content:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: people03,
    },
  ];
  return (
    <section
      id="clients"
      className={`${style.paddingY} ${style.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={style.heading2}>
          what people are <br className="sm:block hidden" />
          saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${style.paragraph} text-left max-w-[450px]`}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <Feedbackcard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
