"use client";
import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgression = ({ serviceTab, index, size = 120, pathColor = "#4caf50", trailColor = "#d6d6d6", textColor = "#000" }) => {
    const [percentages, setPercentages] = useState(serviceTab.map(() => 0));
    const containerRef = useRef(null);

    useEffect(() => {
        let interval;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        interval = setInterval(() => {
                            setPercentages((prevPercentages) => {
                                return prevPercentages.map((percentage, i) => {
                                    if (i === index && percentage < serviceTab[i].value) {
                                        return percentage + 1;
                                    }
                                    return percentage;
                                });
                            });
                        }, 10); // Adjust the interval speed as needed
                    } else {
                        clearInterval(interval);
                    }
                });
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [index, serviceTab]);

    return (
        <div ref={containerRef} className="m-10" style={{ width: size, height: size }}>
            <CircularProgressbar
                value={percentages[index]}
                text={`${percentages[index]}%`}
                styles={buildStyles({
                    pathColor: pathColor,
                    trailColor: trailColor,
                    textColor: textColor,
                })}
            />
        </div>
    );
};

export default CircularProgression;
