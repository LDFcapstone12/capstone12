import React from "react";
import Seminaritem from "./Seminaritem";
import Fluitem from "./Fluitem";
import Teamitem from "./Teamitem";
import Oathitem from "./Oathitem";

export const metadata = {
    title: 'Gallery : BSA Senior Citizens Association',
};

export default function ProjectsPage() {
    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-4 py-8 md:py-16">
                <h2 className="text-xl lg:text-2xl tracking-wider font-bold uppercase text-blue-900 text-center">
                    GALLERY
                </h2>
                <p className="py-4 font-serif lg:text-xl text-lg tracking-wide text-justify">
                    Step into our gallery, and you&apos;ll embark on a captivating visual journey that encapsulates our organization&apos;s
                    unwavering dedication to enhancing the lives of our beloved elderly members. Each photograph thoughtfully
                    portrays the diverse array of activities we diligently organize to bring joy and fulfillment to our senior
                    community. These images transcend mere snapshots; they serve as a heartfelt testament to our enduring commitment
                    to bolstering their well-being, fostering robust social connection, and nurturing a profound sense of belonging.
                </p>
                <p className="py-4 font-serif lg:text-xl text-lg tracking-wide text-justify">Our gallery is an open door, offering a glimpse into the very essence of our association. Here, you&apos;ll discover
                    a harmonious fusion of services, programs, and activities, all meticulously coordinated to work in harmony. Together,
                    they weave a vibrant tapestry that elevates the quality of life for those we hold close to our hearts and are honored to care for.
                    We cordially invite you to immerse yourself in this tapestry and witness firsthand the positive impact we earnestly
                    endeavor to create in the lives of our senior community members.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Seminaritem />
                    <Fluitem />
                    <Teamitem />
                    <Oathitem />
                </div>
            </div>
        </div>
    )
}
