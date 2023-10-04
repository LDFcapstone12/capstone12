"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function Flu() {
    const slides = [
        { src: "/assets/projects/flu/1.jpg", alt: "Slide 1" },
        { src: "/assets/projects/flu/2.jpg", alt: "Slide 2" },
        { src: "/assets/projects/flu/3.jpg", alt: "Slide 3" },
        { src: "/assets/projects/flu/4.jpg", alt: "Slide 4" },
        { src: "/assets/projects/flu/5.jpg", alt: "Slide 5" },
        { src: "/assets/projects/flu/6.jpg", alt: "Slide 6" },
        { src: "/assets/projects/flu/7.jpg", alt: "Slide 7" },
        { src: "/assets/projects/flu/8.jpg", alt: "Slide 8" },
        { src: "/assets/projects/flu/9.jpg", alt: "Slide 9" },
        { src: "/assets/projects/flu/10.jpg", alt: "Slide 10" },
        
        
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const backgroundImageStyle = {
        backgroundImage: `url(${slides[currentIndex].src})`,
        backgroundSize: 'contain', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      };
      

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
    
    return (
        <div className="max-w-[1400px] mt-10 w-full items-center justify-center m-auto py-15 px-4 relative group">
            <h1 className="text-center text-3xl font-bold mb-4">Senior Citizens' Flu Vaccination</h1>
            <p className="mb-8 text-lg text-justify">The Senior Citizens Flu Vaccination event held on September 6, 2023, at the
            Barangay Covered Parking in Barangay San Antonio was a remarkable demonstration of the community's unwavering commitment
            to the health and well-being of its elderly residents. It was a collaborative effort led by the Barangay Council and 
            the Senior Citizens Association, showcasing their shared dedication to prioritizing the health of their senior members.
            It was a proactive and compassionate effort to ensure that senior citizens could enjoy improved health and a higher quality 
            of life. This event serves as an inspiring example of how a community can come together to prioritize the welfare of its most
            vulnerable members and, in doing so, promote a healtier and more caring society overall.</p>
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