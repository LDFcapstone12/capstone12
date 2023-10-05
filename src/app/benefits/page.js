import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: 'Discount & Benefits : BSA Senior Citizens Association',
};

export default function Benefits() {
    return (
        <div className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-[70%]">
                <p className="text-xl tracking-widest uppercase text-blue-900">Benefits</p>
                <h2 className="py-4 font-semibold">Senior Citizens List of Benefits</h2>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">

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
