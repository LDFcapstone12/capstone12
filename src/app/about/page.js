import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from 'react-icons/bs';

export const metadata = {
  title: 'About Us : BSA Senior Citizens Association',
};

export default function AboutUs() {
  return (
    <section className="w-screen mt-12">
      <div className="flex flex-1 justify-start items-center flex-col gap-6">
        <h1 className="font-bold text-3xl uppercase tracking-wide text-green-600">About Us</h1>
        <p className="text-xl uppercase tracking-widest font-semibold">History</p>
        <p className="w-3/5 text-justify tracking-wide text-xl">The Senior Citizens Association has a rich
        history dating back to the 1990s when it was founded under the dedicated leadership of the late Barangay
        Captain Gregorio Rupisan. Captain Rupisan played a pivotal role in its establishment, providing an initial
        budget of ten thousand pesos to kickstart the association. Over the years, the leadership was passed to 
        Kagawad Jean Ortiz, followed by President Collette Ferrer, and currently, President Josie Macapagal, who also
        holds the esteemed position of Federation President for Pasig City.</p>
        <p className="w-3/5 text-justify tracking-wide text-xl"> The association's office is conveniently located on the 2nd floor of the Barangay Hall at #7 Gen. Malvar St.,
          Brgy. San Antonio Village, Pasig City. The current Barangay Captain, Thomas Raymond Lising, has been exceptionally
          suuportive of the association's plans, projects, and activities. He recognizes the dedication of the officers and their
          commitment to assisting members, brimming with innovative ideas on how to better reach and serve their members.
        </p>
        <p className="w-3/5 text-justify tracking-wide text-xl"> Furtheremore, for the year 2023, the association has secured a budget of 1 million pesos for various signed 
          projects and activities, demonstrating its commitment to improving the lives of senior citizens in the community.
        </p>
        <div className="flex justify-center items-center gap-6">
          <img className="w-1/2 shadow-lg hover:shadow-xl " src="/assets/Banner.jpg" alt="" />
        </div>
        
        <section className="flex flex-1 justify-start items-center flex-col gap-6">
        <h2 className="font-bold mt-5 text-3xl uppercase tracking-wide text-green-600">Vision and Mission</h2>
        <p className="text-xl uppercase tracking-widest font-semibold">Vision</p>
        <p className="w-3/5 text-justify text-xl">A City for all ages where the senior citizens are empowered to achieve active ageing.</p>
        <p className="text-xl uppercase tracking-widest font-semibold">Mission</p>
        <p className="w-3/5 text-justify text-xl">Promotion of active ageing, through social protection and support for the rights
        and welfare of senior citizens and their empowerment by developing policies, programs, projects and services implemented with or 
        through Local Government Units, Non-Government Organizations, People's Organizations, National Government Agencies and other members of 
        civil society.</p>
      </section>           
      </div>
      <section className="w-screen mt-12">
        <div className="flex flex-1 justify-start items-center flex-col gap-6">
          <h3 className="font-bold text-3xl uppercase tracking-wide text-green-600">Board of Trustees</h3>
          <img src="" />

          <div className="grid grid-cols-2"></div>
          <img src="" />
        </div>
      </section>
    </section>
  );
}
