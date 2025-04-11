import React from 'react'

function Footer() {
  return (
    <div class="bg-[#d2b15b] text-[#5b3a29] font-sans">
  <footer class="py-10">
   <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-start">
     <div class="mb-6 md:mb-0">
      <img alt="Aaoji Restaurant &amp; Cafe logo" class="mb-4" height="50" src="https://storage.googleapis.com/a1aa/image/x2gTVgGwBf84rL-Bl5T4IS8lyx265HxZQ70v38rLMb0.jpg" width="150"/>
      <p>
       Bold Flavors, Fun Vibes,
       <br/>
       Authentic Taste
      </p>
      <div class="flex space-x-4 mt-4">
       <a class="text-[#d2b15b] bg-[#5b3a29] p-2 rounded" href="#">
        <i class="fab fa-instagram">
        </i>
       </a>
       <a class="text-[#d2b15b] bg-[#5b3a29] p-2 rounded" href="#">
        <i class="fas fa-envelope">
        </i>
       </a>
       <a class="text-[#d2b15b] bg-[#5b3a29] p-2 rounded" href="#">
        <i class="fab fa-facebook-f">
        </i>
       </a>
      </div>
     </div>
     <div class="mb-6 md:mb-0">
      <h3 class="text-[#d94f2b] font-bold mb-4">
       QUICK LINKS
      </h3>
      <ul>
       <li class="mb-2">
        <a href="#">
         About Us
        </a>
       </li>
       <li class="mb-2">
        <a href="#">
         Menu
        </a>
       </li>
       <li class="mb-2">
        <a href="#">
         Testimonials
        </a>
       </li>
       <li class="mb-2">
        <a href="#">
         Gallery
        </a>
       </li>
      </ul>
     </div>
     <div class="mb-6 md:mb-0">
      <h3 class="text-[#d94f2b] font-bold mb-4">
       GET IN TOUCH
      </h3>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <p>
       Lorem ipsum dolor sit
      </p>
      <p>
       +91 12461234567899
      </p>
     </div>
     <div>
      <h3 class="text-[#d94f2b] font-bold mb-4">
       OPENING HOURS
      </h3>
      <p>
       Mon to Sun: 12PM to 12AM
      </p>
     </div>
    </div>
   </div>
   <div class="bg-[#5b3a29] text-[#d2b15b] text-center py-4 mt-50">
    <p>
     © 2025 Aaoji. All Rights Reserved. Designed &amp; Developed by Ujjwal
    </p>
   </div>
  </footer>
 </div>
  )
}

export default Footer