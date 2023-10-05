import Image from 'next/image';
import Link from 'next/link';

const HomeContent = {
  text: {
    subheading: "Senior Citizens Association",
    heading: "Barangay San Antonio, Pasig City",
    description: "Welcome to your digital hub of information, connection, and empowerment. We are thrilled to introduce the official website of the Senior Citizens Association of Barangay San Antonio.",
    description1: "This website is a testament to our commitment to promoting community engagement and ensuring that you have access to essential resources. Here, you will find news and events, a list of senior discounts and benefits, and a gallery. Learn about the current officers and staff who work tirelessly for your well-being.",
    description2: "We believe in the power of technology to bridge gaps and bring us closer. This website is more than just a digital space; it's an extension of our warm and vibrant community. We invite you to explore, engage, and make the most of this platform designed with your comfort and preferences in mind.",
  },
  images: {
    image1: '/assets/homepage/HP1.jpg',
    image2: '/assets/homepage/HP2.jpg',
    image3: '/assets/homepage/HP3.jpg',
    image4: '/assets/homepage/HP4.jpg',
    image5: '/assets/homepage/HP5.jpg',
  }
}

export default function Home() {
  return (
    <section className="py-14">
      <div className="w-5/6 px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0">

            {HomeContent.text.subheading && (
              <span className="lg:inline-block text-2xl lg:text-3xl font-bold">
                {HomeContent.text.subheading}
              </span>)}

            {HomeContent.text.heading && (<h1 className="text-xl lg:text-2xl font-semibold text-heading mb-7">
              {HomeContent.text.heading}</h1>)}

            {HomeContent.text.description && <p className="leading-relaxed text-justify text-xl lg:text-xl mb-8">
              {HomeContent.text.description}</p>}

            {HomeContent.text.description1 && <p className="leading-relaxed text-justify text-xl lg:text-xl mb-8">
              {HomeContent.text.description1}</p>}

            {HomeContent.text.description2 && <p className="leading-relaxed text-justify text-xl lg:text-xl mb-8">
              {HomeContent.text.description2}</p>}

            <div className="flex justify-center pt-8">
              <Link href='/signup' className="py-1 px-7 tracking-normal text-xl lg:text-2xl bg-[#affd2d] text-black rounded-full
                duration-300 transition-all ease-in-out hover:bg-[#affd2d] hover:shadow-lg
                inline-block relative top-0 hover:top-1">Join Us</Link>
            </div>
          </div>
          <div className="lg:w-6/12 space-y-2 gap-2">
            <div className="flex space-x-2 items-stretch">
              <div className="w-8/12">
                {HomeContent.images.image1 && (<Image src={HomeContent.images.image1} alt="/" width={397} height={406} className="object-cover h-full w-full rounded-2xl" />)}
              </div>

              <div className="w-4/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {HomeContent.images.image1 && (
                    <div>
                      <Image src={HomeContent.images.image2} alt="/" width={437} height={437} className="object-cover h-full w-full rounded-2xl" priority="true" />
                    </div>
                  )}

                  <div className="bg-[#affd2d] rounded-2xl rounded-tr-[200px]">
                  </div>
                </div>

                {HomeContent.images.image3 && (
                  <div>
                    <Image src={HomeContent.images.image3} width={374} height={392} alt="/" className="object-cover h-full w-full rounded-2xl" />
                  </div>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#affd2d] rounded-2xl rounded-bl-[200px]">
                  </div>
                  {HomeContent.images.image4 && (
                    <div>
                      <Image src={HomeContent.images.image4} width={394} height={394} alt="/" className="object-cover h-full w-full rounded-2xl" />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-5/12">
                {HomeContent.images.image5 && (
                  <Image src={HomeContent.images.image5} width={446} height={495} alt="/" className="object-cover h-full w-full rounded-2xl" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
