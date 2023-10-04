import React from "react";
import { FaMapMarker } from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai'; 
import { BsTelephone } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="border shadow-2xl shadow-gray-700 text-black p-4 sm:p-6">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-gray-600">LOCATION</h1>
          <p className="font-semibold">
            <FaMapMarker size={25} />{' '}
            No. 7 Gen. Malvar Street, Barangay San Antonio Village, Pasig City 1600
          </p>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3872017845835!2d121.04994851435406!3d14.577676181063986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c86b373a0549%3A0xe4ac3992e883edb4!2sSan%20Antonio%20Barangay%20Hall!5e0!3m2!1sen!2sph!4v1635686000963!5m2!1sen!2sph"
            width="100%"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-gray-600">CONTACT NUMBERS</h1>
          <p className="font-semibold"><BsTelephone size={25} /> <span className="text-blue-900 uppercase">Telephone Number:</span> +63 7755-2700 loc. 3003</p>
          <p className="font-semibold"><AiOutlineMobile size={25} /> <span className="text-blue-900 uppercase">Mobile Number:</span> 0942-5625732</p>
        </div>       
      </div>
      <div className="mt-8 text-center text-gray-600">
                {/* Footer content */}
                &copy; {new Date().getFullYear()} BSA - Senior Citizens Association. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
