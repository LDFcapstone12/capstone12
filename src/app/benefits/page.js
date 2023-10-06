import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: 'Discount & Benefits : BSA Senior Citizens Association',
};

export default function Benefits() {
    return (
        <div className="w-full lg:h-screen mx-auto px-4 py-8 md:py-16">
            <h1 className="text-xl lg:text-2xl tracking-wider font-bold uppercase text-blue-900 text-center">
                discounts and benefits
            </h1>
            <div className="max-w-[1240px] mx-auto md:py-16">
                <p className="py-4 font-serif lg:text-xl text-lg tracking-wide text-justify">This section is a valuable resource where you can explore various discounts and benefits 
                specifically designed for senior citizens. These benefits encompass a range of offerings, including national government benefits, 
                benefits tailored for residents of Pasig City, and those available within the local Barangay San Antonio. It serves as an informative
                 guide, enabling you to discover and understand the benefits that may apply to your particular situation or the elderly members of your 
                 family.</p>

                 <p className="py-4 font-serif lg:text-xl text-lg tracking-wide text-justify">By navigating through this section, you can gain a comprehensive understanding of the entitlements and 
                 advantages that senior citizens are eligible for. Additionally, you will find helpful guidelines on how to go about availing these benefits 
                 effectively. Whether it&apos;s financial assistance, healthcare discounts, or other forms of support, this resource is designed to empower you with
                  knowledge about the benefits you rightfully deserve.</p>

                  <p className="py-4 font-serif lg:text-xl text-lg tracking-wide text-justify">We encourage you to explore this section thoroughly, as it holds valuable information that can significantly 
                  enhance the quality of life for senior citizens and their families. It&apos;s a testament to the commitment of the government and local authorities 
                  to provide essential support and recognition to our elderly population, ensuring that they can lead fulfilling and comfortable lives during 
                  their golden years.</p>


                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:bg-[#d64545] hover:text-white ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/logo/PH.png"
                                    width={64}
                                    height={64}
                                    alt="" />
                            </div>
                            <div className="flex flex-col font-semibold items-center justify-center">
                                <Link href='/benefits/national'><p>National Gov&apos;t</p>
                                    <h3>Benefits</h3></Link>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:bg-[#5858df] hover:text-white ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/logo/Pasig.png"
                                    width={75}
                                    height={70}
                                    alt="" />
                            </div>
                            <div className="flex flex-col font-semibold items-center justify-center">
                                <Link href='/benefits/pasig'><p>Pasig City</p>
                                    <h3>Benefits</h3></Link>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:bg-[#affd2d] hover:text-white ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/logo/BSA.png"
                                    width={64}
                                    height={64}
                                    alt="" />
                            </div>
                            <div className="flex flex-col font-semibold items-center justify-center">
                                <Link href='/benefits/bsa'><p>Brgy. San Antonio</p>
                                    <h3>Benefits</h3></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
