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
      <div className="flex flex-col items-center">
        <h1 className="text-[48px] font-bold text-[#e46c0a]">Contact Form</h1>
        <form className="flex flex-col w-full items-center" action={"/form-handler"} method="POST">
          <div className="flex flex-col lg:flex-row justify-between my-10 w-[65%]">
            <div className="flex w-[40%] border-b-2">
              <Icon icon="mdi:user" width={24} height={24} />
              <input type="text" name="name" id="name" required placeholder="Name" className="w-full ml-4"/>
            </div>
            <div className="flex w-[40%] border-b-2">
              <Icon icon="ic:baseline-business" width={24} height={24} />
              <input type="text" name="company" id="company" placeholder="Company" className="w-full ml-4"/>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between my-10 w-[65%]">
            <div className="flex w-[40%] border-b-2">
              <Icon icon="solar:phone-bold" width={24} height={24} />
              <input type="text" name="number" id="number" required placeholder="Phone Number" className="w-full ml-4"/>
            </div>
            <div className="flex w-[40%] border-b-2">
              <Icon icon="ic:round-email" width={24} height={24} />
              <input type="email" name="email" id="email" required placeholder="Email" className="w-full ml-4"/>
            </div>
          </div>
          <div className="flex my-10 w-[65%] border-b-2">
            <Icon icon="lucide:notebook-pen" width={24} height={24} />
            <input type="text" name="subject" id="subject" required placeholder="Subject" className="w-full ml-4"/>
          </div>
          <div className="flex w-[65%] border-b-2">
            <Icon icon="solar:pen-bold" width={24} height={24} />
            <textarea name="message" id="message" required placeholder="Message" className="w-full ml-4"></textarea>
          </div>
          <button type="submit" className="w-[250px] bg-[#e46c0a] my-10 text-white py-2 rounded-md">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;