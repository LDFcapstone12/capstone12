"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function Oath() {
    const slides = [
        { src: "/assets/projects/oath/1.jpg", alt: "Slide 1" },
        { src: "/assets/projects/oath/2.jpg", alt: "Slide 2" },
        { src: "/assets/projects/oath/3.jpg", alt: "Slide 3" },
        { src: "/assets/projects/oath/4.jpg", alt: "Slide 4" },
        { src: "/assets/projects/oath/5.jpg", alt: "Slide 5" },
        { src: "/assets/projects/oath/6.jpg", alt: "Slide 6" },
        { src: "/assets/projects/oath/7.jpg", alt: "Slide 7" },
        { src: "/assets/projects/oath/8.jpg", alt: "Slide 8" },
        { src: "/assets/projects/oath/9.jpg", alt: "Slide 9" },
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
            <h1 className="text-center text-3xl font-bold mb-4">Board of Trustees Oath Taking</h1>
            <p className="text-justify mb-8 text-lg">The visit was a respectful and formal gesture as the senior citizen officers
            paid a courtesy call to Barangay Captain Thomas Raymond Lising. The occasion also marked an important milestone
            when the newly elected senior citizen officers took their oaths on February 24, 2023, at the third-floor office of
            Barangay Captain Lising. During the meeting, Captain Raymond expressed his strong desire to maintain and further develop
            collaborative projects with the senior citizens&apos; association, underscoring the community&apos;s commitment to supporting 
            its elderly members. He also emphasized the significance of nurturing a robust and cooperative partnership between the Barangay
            council and the senior citizens&apos; association, recognizing that such a collaborative would be instrumental in enhancing the 
            overall well-being of the community and addressing the unique needs and concerns of its senior population.</p>
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
            <div className="flex justify-center items-center py-5">
                <Link href='/projects'>
                    <p className="underline cursor-pointer tracking-widest rounded-full bg-[#affd2d] px-7 py-2 hover:scale-110 ease-in duration-300 uppercase text-lg font-semibold">Back</p>
                </Link> 
            </div>
        </div>
    );
}
