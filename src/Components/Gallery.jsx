import React from 'react'

function Gallery() {
  return (
    <div class="flex flex-col items-center p-4">
  <div class="text-center mb-4">
   <h1 class="text-red-700 text-lg uppercase tracking-widest mb-2">
   <span><hr></hr></span>
    Explore Our Gallery
    <span><hr></hr></span>
   </h1>
   <h2 class="text-red-600 text-2xl uppercase tracking-widest">
    Taste the Story: A Visual Journey Through Our Dishes!
   </h2>
  </div>
  
  <div id='img1' class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
   <img alt="Burger with a drink in the background" class="w-full h-auto" height="50" src="https://storage.googleapis.com/a1aa/image/Zs-jjTNmk-JFR96w1S2VMIESvDxeKOdjEDPcWse_oCk.jpg" width="300"/>
   <img alt="Dessert with ice cream and chocolate sauce" class="w-full h-auto" height="100" src="https://storage.googleapis.com/a1aa/image/BujXdE2mWSyKnMG7wFpNSAg91NGjBvCRuLMdvr0OltY.jpg" width="300"/>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
   <img alt="Naan bread with various dips" class="w-full h-auto" height="150" src="https://storage.googleapis.com/a1aa/image/9Xx-UC1RUv9C2iJROKdXmL0-gmcHoyeuqobAXN2iC-k.jpg" width="300"/>
   <img alt="South Indian dish with various spices" class="w-full h-auto" height="200" src="https://storage.googleapis.com/a1aa/image/LYPeG2Mcuh_udX8h1EbfVb8n-Q4EXzNVVkizD0-86Io.jpg" width="300"/>
   </div>
   
  <div class="mt-8">
   <a class="bg-red-600 text-white py-2 px-4 rounded-full uppercase tracking-widest" href="#">
    Visit Instagram
   </a>
  </div>
 </div>
  )
}

export default Gallery