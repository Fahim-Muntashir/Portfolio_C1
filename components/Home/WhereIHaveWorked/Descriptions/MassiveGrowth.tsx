import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function MassiveGrowth() {
    const tasks = [
        {
            text: "As CEO and Founder of Massive Growth, my role as Chief Web Developer empowers our team to drive innovation and foster growth for clients. Drawing on deep expertise, we create exceptional digital solutions.",
            keywords: ["exceptional", "Massive Growth", "our team"],
        },
        {
            text: "At Massive Growth, I lead the development of digital solutions, focusing on driving innovation and growth. My role as Chief Web Developer leverages our expertise to deliver exceptional results for our clients.",
            keywords: ["Next.js", "clients", "Massive", "results"],
        },
        {
            text: "As Chief Web Developer, my work centers on developing cutting-edge digital solutions that drive growth and innovation. I lead a talented team, and our goal is to create lasting impact.",
            keywords: ["impact", "digital solutions",
                "growth", "innovation"
            ],
        }, {
            text: "My role at Massive Growth as Chief Web Developer involves spearheading the development of digital solutions. My expertise ensures our team delivers results that drive innovation and growth for our clients.",
            keywords: ["clients", "spearheading", "digital solutions"],
        }
    ];

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    {/* Title */}
                    <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                        Founder <span className="text-AAsecondary">@MassiveGrowth</span>
                    </span>
                    {/* Date */}
                    <span className="font-mono text-xs text-gray-500">Sep 2023 - Running </span>
                    <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
                        // set on click to open the website
                        onClick={() => window.open("https://massivegrowth.net/", "_blank")}
                    >
                        www.massivegrowth.net
                    </span>
                </div>
                <div className="flex flex-col space-y-4 sm:text-sm text-xs">
                    {/* Tasks Description 1 */}
                    {tasks.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row space-x-1">
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
