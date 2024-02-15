import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function Freelancing() {
    const tasks = [
        {
            text: "As a creative freelancer, I bring a unique blend of MERN Stack development skills to my part-time work.",
            keywords: ["work", "MERN"],
        },
        {
            text: "My efficient and adaptable approach enables me to take on competitive projects, delivering exceptional results and creating meaningful impact for clients.",
            keywords: ["adaptable", "results"],
        },
        {
            text: "           With my MERN Stack proficiency, I create seamless, high- functioning digital solutions that drive success for clients and projects.",
            keywords: ["MERN Stack "],
        },
    ];
    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    {/* Title */}
                    <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                        A  <span className="text-AAsecondary">Creative
                        </span> Freelancer
                    </span>
                    {/* Date */}

                    <span
                        className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
                        // set text size on style attribute
                        style={{ fontSize: "0.6rem" }}
                        onClick={() => window.open("https:///www.fevertokens.io", "_blank")}
                    >


                    </span>
                </div>
                <div className="flex flex-col space-y-4 sm:text-sm text-xs">
                    {/* Tasks Description 1 */}
                    {tasks.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row space-x-2">
                                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
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
