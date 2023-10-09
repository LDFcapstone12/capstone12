"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function Team() {
    const slides = [
        { src: "/assets/projects/team/1.jpg", alt: "Slide 1" },
        { src: "/assets/projects/team/2.jpg", alt: "Slide 2" },
        { src: "/assets/projects/team/3.jpg", alt: "Slide 3" },
        { src: "/assets/projects/team/4.jpg", alt: "Slide 4" },
        { src: "/assets/projects/team/5.jpg", alt: "Slide 5" },
        { src: "/assets/projects/team/6.jpg", alt: "Slide 6" }, 
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const backgroundImageStyle = {
        backgroundImage: `url(${slides[currentIndex].src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
    
    return (
        <div className="w-full max-w-[1200px] md:w-[992px] mt-10 items-center justify-center m-auto px-3">
            <h1 className="text-center text-3xl font-bold mb-4">Senior Citizens&apos; Team Building</h1>
            <p className="text-justify mb-8 text-lg">The Senior Citizens Board of Trustees had a special event on July 5, 2023, at Siena&apos;s
            Events Place in Antipolo. The main goal of this gathering was to help senior citizens understand the role of civil society
            organizations in local government and how they can be a part of it. It was like a learning day for the senior members to
            get ready for active involvement in city governance. This event showed how important they are in CSOs and how much they can do to 
            improve their community. It was a day of learning, inspiration, and building connections among senior citizens for the greater good. </p>
            <div
                style={backgroundImageStyle}
                className="w-full h-[60vh] md:h-[780px] rounded-2xl bg-center bg-cover duration-500"
            >
                <div className="flex justify-between items-center px-2 lg:py-96 py-60">
                    <div
                        onClick={goToPreviousSlide}
                        className="text-2xl rounded-full p-2 bg-[#affd2d] text-white cursor-pointer"
                    >
                        <BsChevronCompactLeft size={30} />
                    </div>
                    <div
                        onClick={goToNextSlide}
                        className="text-2xl rounded-full p-2 bg-[#affd2d] text-white cursor-pointer"
                    >
                        <BsChevronCompactRight size={30} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-10 py-5">
                <Link href='/projects'>
                    <p className="underline cursor-pointer tracking-widest rounded-full bg-[#affd2d] px-7 py-2 hover:scale-110 ease-in duration-300 uppercase text-lg font-semibold">Back</p>
                </Link> 
                <Link href='/activities/Oath'>
                    <p className="underline cursor-pointer tracking-widest rounded-full bg-[#affd2d] px-7 py-2 hover:scale-110 ease-in duration-300 uppercase text-lg font-semibold">Next</p>
                </Link> 
            </div>
        </div>
    );
}
