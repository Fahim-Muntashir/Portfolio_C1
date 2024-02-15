import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AcuaZone() {
  const tasks = [
    {
      text: "Recently, we embarked on an ambitious journey with AquaZone, aiming to revolutionize the aquarium industry.Our innovative vision extends beyond traditional fish trading, bringing a new era of plant- fused expansion.This endeavor is the culmination of our combined creativity and technical expertise.",
      keywords: ["AquaZone", "plant- fused"],
    },
    {
      text: "In this exciting venture, our creative programmers and I have joined forces to transform our vision into a tangible reality. Utilizing our extensive knowledge in aquarium management and cutting-edge technology, we're working towards a platform that redefines aquatic hobbyists' experiences.",
      keywords: ["aquarium management"],
    },
    {
      text: "Our strategic approach involves meticulous planning and execution. We're integrating advanced algorithms and user-friendly interfaces, ensuring AquaZone becomes the go-to destination for both aquarium enthusiasts and industry professionals.",
      keywords: ["advanced algorithms"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Developer <span className="text-AAsecondary">@ AcuaZone</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">January -  2023</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
