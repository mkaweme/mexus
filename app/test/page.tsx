import React from "react";
import Image from "next/image";

const Test = () => {
  return (
    <div className="sm:w-2/3 md:w-1/3 mx-auto rounded-lg shadow-md overflow-hidden relative">
  <div className="card-header relative bg-cover z-0">

    <div className="absolute pin-b pin-r mr-3 mb-8 z-10 bg-orange text-white px-3 py-1 text-xs uppercase antialiased rounded-full tracking-wide">Intermediate</div>

    <div className="absolute pin-t pin-l ml-3 mt-3 flex items-center">
      <Image alt="card" width={32} height={32} src="" className="w-8 h-8 rounded-full shadow mr-2" />
      <div className="text-xs text-white uppercase tracking-wide antialiased">John Doe</div>
    </div>
  </div>0

  <div className="relative p-6 -mt-4">

    <h2 className="mb-1 text-xl text-grey-darker font-normal">Custom Side Tables</h2>
    <div className="mb-6 text-xs tracking-wide uppercase text-grey">18 Lessons - 2:34 hrs total</div>
    <p className="text-grey-dark tracking-normal leading-normal mb-6">
        Occupy McSweeney&apos;s roof party biodiesel letterpress asymmetrical. Sustainable brunch pug, put a bird on it tilde lumber sexual gluten-free banh mi chambray mumblecore pickled. Yr retro hashtag, pork belly drinking vinegar Blue Bottle disrupt butcher. Health goth small batch…
    </p>

    <div className="w-full p-4 rounded bg-green hover:bg-green-light uppercase tracking-wide text-white text-center text-md antialiased cursor-pointer">
      Start Project
    </div>
  </div>
</div>
  )
}

export default Test;