import React from 'react'

function Thestory() {
  return (
  <div>
     <div class="p-auto">
  <div class="flex flex-col lg:flex-row items-center lg:items-start bg-amber-50">
   <div class="lg:w-1/3">
    <img src="thestorypic.png" />

   </div>
   <div class="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 text-center lg:text-left pt-5">
    <h2 class="text-red-600 text-lg font-bold">
     The Story
    </h2>
    <h1 class="text-4xl text-red-600 font-bold mt-2">
     What Aaoji is all about!
    </h1>
    <p class="text-gray-700 mt-4">
     Founded in 2020, Aaoji was born out of a passion for bringing authentic, bold flavors to the streets, offering a fun twist on traditional cuisine. We've quickly become a favorite destination for locals and travelers alike, serving up not just meals, but unforgettable experiences. Whether you're stopping by for a quick bite or settling in for a leisurely meal, we take pride in offering delicious dishes made from the finest, locally sourced ingredients.
    </p>
    <div class="mt-6 flex justify-center lg:justify-start space-x-4">
     <button class="bg-red-600 text-white py-2 px-4 rounded-full">
      Call Us for Bookings
     </button>
     <a class="text-red-600 " href="#">
      Explore Menu
     </a>
    </div>
    <div class="mt-6">
     {/* <img alt="Decorative element" class="mx-auto lg:mx-0" height="50" src="https://storage.googleapis.com/a1aa/image/eJUUpqp5pqOvK_MhFKgiFdveqddBp0JrqjAEzZ3GM2w.jpg" width="50"/> */}
    </div>
   </div>
  </div>
 </div>
 </div>
  )
}


export default Thestory