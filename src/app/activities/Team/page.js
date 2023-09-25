"use client";
import React, { useState } from "react";
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
        <div className="max-w-[1400px] mt-5 w-full items-center justify-center m-auto py-15 px-4 relative group">
            <h1 className="text-center text-3xl font-bold mb-4">Senior Citizens' Team Building</h1>
            <p className="text-center mb-8">Sentence here!</p>
            <div
                style={backgroundImageStyle}
                className="w-full h-[60vh] md:h-[780px] rounded-2xl bg-center bg-cover duration-500 relative"
            >
                <div className="absolute inset-0 flex items-center">
                    <div
                        onClick={goToPreviousSlide}
                        className="absolute left-5 text-2xl rounded-full p-2 bg-[#affd2d] text-white cursor-pointer"
                    >
                        <BsChevronCompactLeft size={30} />
                    </div>
                    <div
                        onClick={goToNextSlide}
                        className="absolute right-5 text-2xl rounded-full p-2 bg-[#affd2d] text-white cursor-pointer"
                    >
                        <BsChevronCompactRight size={30} />
                    </div>
                </div>
            </div>
            <footer className="mt-8 text-center text-gray-600">
                {/* Footer content */}
                &copy; {new Date().getFullYear()} BSA - Senior Citizens Association. All rights reserved.
            </footer>
        </div>
    );
}