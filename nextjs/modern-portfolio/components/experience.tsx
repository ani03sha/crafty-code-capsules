"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {

    const { ref } = useSectionInView("Experience", 0.75);

    return (
        <section
            id="experience"
            ref={ref}
        >
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {
                    experiencesData.map((experience, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{
                                    visibility: "visible",
                                    background: "#f3f4f6",
                                    boxShadow: "none",
                                    border: "1px solid rgba(0, 0, 0, 0.5",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem"
                                }}
                                contentArrowStyle={{
                                    visibility: "visible",
                                    borderRight: "0.4rem solid #9ca3af"
                                }}
                                date={experience.date}
                                icon={experience.icon}
                                iconStyle={{
                                    visibility: "visible",
                                    background: "white",
                                    fontSize: "1.5rem"
                                }}
                            >
                                <h3
                                    className="font-semibold capitalize"
                                >
                                    {experience.title}
                                </h3>
                                <p
                                    className="font-normal !mt-0"
                                >{experience.location}
                                </p>
                                <p className="!mt-1 !font-normal text-gray-700">
                                    {experience.description}
                                </p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    )
}