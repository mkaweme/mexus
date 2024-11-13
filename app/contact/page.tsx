import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Contact = () => {
  return (
    <> 
      <div className="flex flex-col">
        <h1 className="text-[48px] font-bold text-[#e46c0a] self-center my-6">Contact us</h1>
        <div className="mx-32 my-4">
          <iframe title="map" className="lg:rounded-r-xl lg:w-[100%] lg:h-[500px] border-2 border-[#9999]" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2335.430857248559!2d28.32197236287934!3d-15.455932017194206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2szm!4v1728571368281!5m2!1sen!2szm"></iframe>
        </div>
        <div className="flex flex-col lg:flex-row mx-32 my-16 justify-between">
          <div className="relative flex flex-col lg:w-[21%] text-[16px] text-white items-center justify-center bg-[#F39224] rounded-sm border-2 border-[#000000]">
            <div className="absolute -top-1/4 bg-[#F39224] rounded-full flex justify-center items-center border-2 border-[#000000] p-3">
              <Icon icon="mdi:location" width={40} height={40} />
            </div>
            <div className="flex flex-col items-center mt-10 mb-2">
              <h2>Office Location</h2>
              <p>Plot 30121, Off Lilayi Rd</p>
              <p>Libala South, Lusaka</p>
            </div>
          </div>
          <div className="relative flex flex-col lg:w-[21%] text-[16px] text-white items-center justify-center bg-[#F39224] rounded-sm border-2 border-[#000000]">
            <div className="absolute -top-[35px] bg-[#F39224] rounded-full flex justify-center items-center border-2 border-[#000000] p-3">
              <Icon icon="tabler:clock" width={40} height={40} />
            </div>
            <div className="flex flex-col items-center mt-10 mb-2">
              <h2>Office Hours</h2>
              <p>Mon - Fri: 08:00Hrs to 17:00Hrs</p>
              <p>Sat: 08:00Hrs to 12:30Hrs</p>
              <p>Sun: Closed</p>
            </div>
          </div>
          <div className="relative flex flex-col lg:w-[21%] text-[16px] text-white items-center justify-center bg-[#F39224] rounded-sm border-2 border-[#000000]">
            <div className="absolute -top-[35px] bg-[#F39224] rounded-full flex justify-center items-center border-2 border-[#000000] p-3">
              <Icon icon="solar:phone-bold" width={40} height={40} />
            </div>
            <div className="flex flex-col items-center mt-10 mb-2">
              <h2>Call Us</h2>
              <p>+260962352312</p>
              <p>+260968318036</p>
            </div>
          </div>
          <div className="relative flex flex-col lg:w-[21%] text-[16px] text-white items-center justify-center bg-[#F39224] rounded-sm border-2 border-[#000000]">
            <div className="absolute -top-[35px] bg-[#F39224] rounded-full flex justify-center items-center border-2 border-[#000000] p-3">
              <Icon icon="ic:round-email" width={40} height={40} />
            </div>
            <h2>Email Us</h2>
            <p>info@mexus.co.zm</p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#131949DD] mx-32 my-6">
          <h1 className="text-[48px] font-bold text-[#F39224]">Contact Form</h1>
          <form className="flex flex-col w-full items-center" action={"/form-handler"} method="POST">
            <div className="flex flex-col lg:flex-row justify-between my-10 w-[65%]">
              <div className="flex w-[40%] border-b-2">
                <Icon icon="mdi:user" width={24} height={24} color="#FFFFFF"/>
                <input type="text" name="name" id="name" required placeholder="Name" className="w-full text-white ml-4 bg-[#13194900]"/>
              </div>
              <div className="flex w-[40%] border-b-2">
                <Icon icon="ic:baseline-business" width={24} height={24} color="#FFFFFF"/>
                <input type="text" name="company" id="company" placeholder="Company" className="w-full text-white ml-4 bg-[#13194900]"/>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between my-10 w-[65%]">
              <div className="flex w-[40%] border-b-2">
                <Icon icon="solar:phone-bold" width={24} height={24} color="#FFFFFF"/>
                <input type="text" name="number" id="number" required placeholder="Phone Number" className="w-full text-white ml-4 bg-[#13194900]"/>
              </div>
              <div className="flex w-[40%] border-b-2">
                <Icon icon="ic:round-email" width={24} height={24} color="#FFFFFF"/>
                <input type="email" name="email" id="email" required placeholder="Email" className="w-full text-white ml-4 bg-[#13194900]"/>
              </div>
            </div>
            <div className="flex my-10 w-[65%] border-b-2">
              <Icon icon="lucide:notebook-pen" width={24} height={24} className="mb-1" color="#FFFFFF"/>
              <input type="text" name="subject" id="subject" required placeholder="Subject" className="w-full text-white ml-4 bg-[#13194900]"/>
            </div>
            <div className="flex w-[65%] border-b-2">
              <Icon icon="solar:pen-bold" width={24} height={24} color="#FFFFFF" />
              <textarea name="message" id="message" rows={6} required placeholder="Message" className="w-full text-white ml-4 bg-[#13194900]"></textarea>
            </div>
            <button type="submit" className="w-[250px] bg-[#e46c0a] my-10 text-white py-2 rounded-md">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;