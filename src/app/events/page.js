import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: 'News & Events : BSA Senior Citizens Association',
};

export default function Events() {
    return (
        <div className="w-full max-w-[1240px] mx-auto px-4 py-8 md:py-16">           
            <h1 className="text-xl lg:text-2xl tracking-wider font-bold uppercase text-blue-900 text-center">
                News and Events
            </h1>
            <div className="grid justify-between lg:grid-cols-2 sm:grid-cols-1 p-5 gap-10">
                <div className="flex flex-col gap-2">
                    <Image
                        src="/assets/news/Validation.png"
                        width={600}
                        height={400}
                        alt="Senior Citizens Annual Validation"
                    />
                    <h2 className="font-semibold text-lg text-center">SENIOR CITIZENS ANNUAL VALIDATION</h2>
                    <Link href='/events/Validation'>
                        <p className="text-blue-700 font-bold text-lg cursor-pointer underline uppercase text-center">Read More</p>
                    </Link>
                </div>

                <div className="flex flex-col gap-2">
                    <Image
                        src="/assets/news/Movie.png"
                        width={600}
                        height={400}
                        alt="Senior Citizens Annual Validation"
                    />
                    <h2 className="font-semibold text-lg text-center">LIBRENG SINE</h2>
                    <Link href='/events/Movie'>
                        <p className="text-blue-700 font-bold text-lg cursor-pointer underline uppercase text-center">Read More</p>
                    </Link>
                </div>

                <div className="flex flex-col gap-2">
                    <Image
                        src="/assets/news/Container.png"
                        width={600}
                        height={400}
                        alt="Senior Citizens Annual Validation"
                    />
                    <h2 className="font-semibold text-lg text-center">CONTAINER GARDENING PROJECT</h2>
                    <Link href='/events/Urban'>
                        <p className="text-blue-700 font-bold text-lg cursor-pointer underline uppercase text-center">Read More</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
