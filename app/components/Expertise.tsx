"use client";
import { useEffect } from "react";

const SkillCircle = ({
  percentage,
  title,
}: {
  percentage: number;
  title: string;
}) => (
  <div className="w-full sm:w-1/3 px-4 mb-8">
    <div className="skill-circle relative w-32 h-32 mx-auto mb-4">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <path
          className="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#eee"
          strokeWidth="2"
        />
        <path
          className="circle"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#4CAF50"
          strokeWidth="2"
          strokeDasharray={`${percentage}, 100`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
        {percentage}%
      </div>
    </div>
    <h4 className="text-center text-lg font-semibold">{title}</h4>
  </div>
);

const Expertise = () => {
  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle) => {
      if (circle instanceof SVGPathElement) {
        const length = circle.getTotalLength();
        circle.style.strokeDasharray = `${length}`;
        circle.style.strokeDashoffset = `${length}`;

        setTimeout(() => {
          circle.style.transition = "stroke-dashoffset 2s ease-in-out";
          circle.style.strokeDashoffset = `${
            length -
            (parseFloat(circle.getAttribute("stroke-dasharray") || "0") / 100) *
              length
          }`;
        }, 100);
      }
    });
  }, []);

  return (
    <section className="py-16 bg-gray-900 text-white" id="expertise">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold mb-6">Our Fields of Expertise</h1>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ut
              sed a. Nulla amet obcaecati similique tempore, dolores aliquam
              expedita deserunt minus unde quia earum sequi accusamus asperiores
              suscipit iste!
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap -mx-4">
              <SkillCircle percentage={85} title="Research and Development" />
              <SkillCircle
                percentage={90}
                title="Environmental Technology and Engineering"
              />
              <SkillCircle percentage={75} title="Soil Washing Technology" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
