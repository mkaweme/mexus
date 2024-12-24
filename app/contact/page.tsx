import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Contact = () => {

  return (
    <div className="flex flex-col">
      <div className="w-full h-[300px] lg:h-[400px] bg-[url('/assets/services_2.jpg')] bg-cover">
        <div className="flex flex-col gap-y-10 justify-center items-center bg-[#1419499A] w-full h-full">
          <h1 className="text-[36px] lg:text-[55px] font-poppins font-bold text-[#F19221]"><span className="text-white">CONTACT</span> US</h1>
        </div>
      </div>
      <div className="lg:mx-24 lg:my-20">
        <iframe title="map" className="lg:rounded-l lg:w-[100%] lg:h-[500px] border-2 border-[#9999]" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d602.3889042564481!2d28.329140360470543!3d-15.464554807087248!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-15.464502971684526!2d28.329268094060147!5e0!3m2!1sen!2szm!4v1732822010794!5m2!1sen!2szm"></iframe>
      </div>
      <div className="flex flex-col lg:flex-row mx-24 my-16 justify-between">
        <div className="relative flex flex-col lg:w-[23%] text-[16px] text-white items-center justify-center bg-[#F19221] rounded-sm">
          <div className="absolute -top-[35px] bg-black rounded-full flex justify-center items-center border-2 border-[#000000] p-3">
            <Icon icon="mdi:location" width={ 40 } height={ 40 } />
          </div>
          <div className="flex flex-col items-center mt-10 mb-6">
            <h2>Office Location</h2>
            <p>Plot 30121, Off Lilayi Rd</p>
            <p>Libala South, Lusaka</p>
            <p>Plot 4097, Off Chibote Rd</p>
            <p>Industrial Area, Luashya</p>
          </div>
        </div>
        <div className="relative flex flex-col lg:w-[23%] text-[16px] text-white items-center justify-center bg-[#F39224] rounded-sm">
          <div className="absolute -top-[35px] bg-black rounded-full flex justify-center items-center border-2 border-[#000000] p-3">
            <Icon icon="tabler:clock" width={ 40 } height={ 40 } />
          </div>
          <div className="flex flex-col items-center mt-10 mb-2">
            <h2>Office Hours</h2>
            <p>Mon - Fri: 08:00Hrs to 17:00Hrs</p>
            <p>Sat: 08:00Hrs to 12:30Hrs</p>
            <p>Sun: Closed</p>
          </div>
        </div>
        <div className="relative flex flex-col lg:w-[23%] text-[16px] text-white items-center justify-center bg-[#F39224] rounded-sm">
          <div className="absolute -top-[35px] bg-black rounded-full flex justify-center items-center border-2 border-[#000000] p-3">
            <Icon icon="solar:phone-bold" width={ 40 } height={ 40 } />
          </div>
          <div className="flex flex-col items-center mt-10 mb-2">
            <h2>Call Us</h2>
            <p>+260962352312</p>
            <p>+260968318036</p>
          </div>
        </div>
        <div className="relative flex flex-col lg:w-[23%] text-[16px] text-white items-center justify-center bg-[#F39224] rounded-sm">
          <div className="absolute -top-[35px] bg-black rounded-full flex justify-center items-center border-2 border-[#000000] p-3">
            <Icon icon="ic:round-email" width={ 40 } height={ 40 } />
          </div>
          <h2>Email Us</h2>
          <p>info@mexus.co.zm</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;