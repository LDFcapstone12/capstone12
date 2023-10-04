"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function Seminar() {
    const slides = [
        { src: "/assets/projects/seminar/1.jpg", alt: "Slide 1" },
        { src: "/assets/projects/seminar/2.jpg", alt: "Slide 2" },
        { src: "/assets/projects/seminar/3.jpg", alt: "Slide 3" },
        { src: "/assets/projects/seminar/4.jpg", alt: "Slide 4" },
        { src: "/assets/projects/seminar/6.jpg", alt: "Slide 6" },
        { src: "/assets/projects/seminar/7.jpg", alt: "Slide 7" },
        { src: "/assets/projects/seminar/8.jpg", alt: "Slide 8" },
        { src: "/assets/projects/seminar/9.jpg", alt: "Slide 9" },
        { src: "/assets/projects/seminar/10.jpg", alt: "Slide 10" },
        
        
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
        <div className="max-w-[1400px] mt-10 w-full items-center justify-center m-auto py-15 px-4 relative group">
            <h1 className="text-center text-3xl font-bold mb-4">Container Gardening Seminar</h1>
            <p className="mb-8 text-justify text-lg">The seminar on Urban Gardening in a Highly Urbanized Community, held on September 16, 2023, at the
            Jollibee Shaw Blvd. corner Escriva Drive, was an exceptional event that united the residents of Pasig City's vibrant 
            Barangay San Antonio. This event was the resilt of a collaborative initiative undertaken by the San Antonio Council and Brgy.
            San Antonio Senior Citizens Association, Inc. Its primary objective was to disseminate valuable insights into urban gardening, with a specific
            focus on addressing the distinctive challenges and prospects that high-reise living posses in this locality.</p>
            <div
                style={backgroundImageStyle}
                className="w-full h-[60vh] md:h-[780px] rounded-2xl bg-center bg-cover duration-500 relative mb-10"
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
        </div>
    );
}