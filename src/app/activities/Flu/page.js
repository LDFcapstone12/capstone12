"use client";
import React, { useState } from "react";
import Link from "next/link";
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
        <div className="w-full max-w-[1200px] md:w-[992px] mt-10 items-center justify-center m-auto px-3">
            <h1 className="text-center text-3xl font-bold mb-4">Senior Citizens&apos; Flu Vaccination</h1>
            <p className="mb-8 text-lg text-justify">The Senior Citizens&apos; Flu Vaccination event held on September 6, 2023, at the
            Barangay Covered Parking in Barangay San Antonio was a remarkable demonstration of the community&apos;s unwavering commitment
            to the health and well-being of its elderly residents. It was a collaborative effort led by the Barangay Council and 
            the Senior Citizens Association, showcasing their shared dedication to prioritizing the health of their senior members.
            It was a proactive and compassionate effort to ensure that senior citizens could enjoy improved health and a higher quality 
            of life. This event serves as an inspiring example of how a community can come together to prioritize the welfare of its most
            vulnerable members and, in doing so, promote a healthier and more caring society overall.</p>
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
                    <p className="underline tracking-widest rounded-full bg-[#affd2d] px-7 py-2 hover:scale-110 ease-in duration-300 cursor-pointer uppercase text-lg font-semibold">Back</p>
                </Link> 
                <Link href='/activities/Team'>
                    <p className="underline tracking-widest rounded-full bg-[#affd2d] px-7 py-2 hover:scale-110 ease-in duration-300 cursor-pointer uppercase text-lg font-semibold">Next</p>
                </Link> 
            </div>
        </div>
    );
}
