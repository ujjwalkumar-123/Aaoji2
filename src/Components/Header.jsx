import React from 'react'

function Header() {
  return (
    
    <header class="flex items-center justify-center min-h-screen">
  <div class="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center herobox">
   <div class="md:w-1/2 p-6">
    <h2 class="text-[#d04a02] text-lg font-bold mb-2">
     Aaoji:
    </h2>
    <h1 class="text-[#d04a02] text-4xl font-bold mb-4">
     Bold Flavors, Fun Vibes, Authentic Taste
    </h1>
    <p class="text-[#5a4a1c] mb-6">
     Aaoji is your perfect pit stop on the highway, serving up bold, authentic flavors that are fast, fun, and full of taste. Whether you're craving a quick bite or a satisfying meal on the go, Aaoji brings the perfect blend of tradition and excitement to your journey. Stop by for a flavorful adventure – no detours needed!
    </p>
    <div class="flex items-center">
     <button class="bg-white text-[#d04a02] font-bold py-2 px-4 rounded-full shadow-md mr-4">
      Call Us for Bookings
     </button>
     <a class="text-[#d04a02] underline font-bold" href="#">
      Explore Menu
     </a>
    </div>
   </div>
   <div class="md:w-1/2 p-6 relative">
    <div class="relative">
     <div class="absolute inset-0  -bottom-4 -left-4 -right-4 -top-4">
     </div>
     <img alt="A plate of delicious food with various sauces in small bowls" class="relative z-10 rounded-lg heroimg" height="400" src="https://storage.googleapis.com/a1aa/image/ZiNB7MFKwe9B9iuuUIwOypEvpcCfWn0sbzvuqO-hUnM.jpg" width="450"/>
    </div>
   </div>
  </div>
 </header>
  )
}

export default Header