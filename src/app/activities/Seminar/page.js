"use client";
import React, { useState } from "react";
import Link from "next/link";
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
            <h1 className="text-center text-3xl font-bold mb-4">Container Gardening Seminar</h1>
            <p className="text-justify mb-8 text-lg">The Urban Gardneing Seminar on September 16, 2023, in Pasig City&apos;s
            Barangay San Antonio was a special event. It was organized by the senior citizen&apos;s association to teach people
            about gardening in the city, especially when living in tall buildings. The seminar started at 8:30 am and ended at 1:00 pm,
            giving everyone enough time to learn from gardening experts. The choice of Jollibee Shaw Blvd. as the location made it easy 
            for people to attend. The experts at the seminar knew a lot about urban gardening, especially using containers for plants. This
            is important in a place like Barangay San Antonio where many people live in high-rise buildings. They shared tips on choosing
            the right containers, plants, and how to take care of your garden in small spaces. </p>
            <div
                style={backgroundImageStyle}
                className="w-full h-[60vh] md:h-[780px] rounded-2xl bg-center bg-cover duration-500"
            >
                <div className="flex justify-between items-center px-2 lg:py-96 py-52">
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
                <Link href='/activities/Flu'>
                    <p className="underline cursor-pointer tracking-widest rounded-full bg-[#affd2d] px-7 py-2 hover:scale-110 ease-in duration-300 uppercase text-lg font-semibold">Next</p>
                </Link> 
            </div>
        </div>
    );
}
