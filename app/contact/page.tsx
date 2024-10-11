import { Icon } from "@iconify/react/dist/iconify.js";

const Contact = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Contact Us</h1>
      <div className="mx-32 my-6">
        <iframe title="map" className="lg:rounded-r-xl lg:w-[100%] lg:h-[500px] border-2 border-[#9999]" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2335.430857248559!2d28.32197236287934!3d-15.455932017194206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2szm!4v1728571368281!5m2!1sen!2szm"></iframe>
      </div>
      <div className="flex flex-row mx-32 my-6 justify-between">
        <div className="flex flex-col border-2 w-[21%] text-[14px] border-[#9999] rounded-sm p-2 items-center">
          <Icon icon="mdi:location" width={40} height={40} />
          <h2>Office Location</h2>
          <p>Plot 30121, Off Lilayi Rd</p>
          <p>Libala South, Lusaka</p>
        </div>
        <div className="flex flex-col border-[2px] w-[21%] text-[14px] border-[#e46c0a] rounded-sm p-2 items-center">
          <Icon icon="tabler:clock" width={40} height={40} />
          <h2>Office Hours</h2>
          <p>Mon - Fri: 08:00Hrs to 17:00Hrs</p>
          <p>Sat: 08:00Hrs to 12:30Hrs</p>
          <p>Sun: Closed</p>
        </div>
        <div className="flex flex-col border-2 w-[21%] text-[14px] border-[#999999] rounded-sm p-2 items-center">
          <Icon icon="solar:phone-bold" width={40} height={40} className="border-2" />
          <h2>Call Us</h2>
          <p>+260962352312</p>
          <p>+260968318036</p>
        </div>
        <div className="flex flex-col border-2 w-[21%] text-[14px] border-[#999999] rounded-sm p-2 items-center">
          <Icon icon="ic:round-email" width={40} height={40} />
          <h2>Email Us</h2>
          <p>info@mexus.co.zm</p>
        </div>
      </div>
      <div>
        <h1 className="text-[48px] font-bold text-[#e46c0a]">Contact Form</h1>
        <form className="w-full">
          <div className="flex flex-row bg-yellow-500 justify-around my-30 px-30">
            <div className="w-[30%]">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" required/>
            </div>
            <div className="w-[30%]">
              <label htmlFor="company">Company:</label>
              <input type="text" name="company" id="company" />
            </div>
          </div>
          <div className="flex flex-row bg-yellow-500 justify-around my-30 px-30">
            <div className="w-[30%]">
              <label htmlFor="number">Phone Number:</label>
              <input type="number" name="number" id="number" required/>
            </div>
            <div className="w-[30%]">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" required/>
            </div>
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" required/>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <input type="text" name="message" id="message" required/>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;