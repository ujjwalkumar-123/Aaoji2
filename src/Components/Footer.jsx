import React from 'react'

function Footer() {
  return (
    <footer class="py-10">
   <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
     <div class="mb-6 md:mb-0">
      <div className='footer'>
      <img alt="Aaoji Restaurant &amp; Cafe logo" class="mb-3" src="footer.png.png"/>
      </div>
      <p>
       Bold Flavors, Fun Vibes,
       <br/>
       Authentic Taste
      </p>
      <div class="flex space-x-4 mt-4">
       <a class="text-[#8b4a2f]" href="#">
        <i class="fab fa-instagram">
        </i>
       </a>
       <a class="text-[#8b4a2f]" href="#">
        <i class="fas fa-envelope">
        </i>
       </a>
       <a class="text-[#8b4a2f]" href="#">
        <i class="fab fa-facebook-f">
        </i>
       </a>
      </div>
     </div>
     <div class="mb-6 md:mb-0">
      <h3 class="text-[#d04a2f] font-bold mb-4">
       QUICK LINKS
      </h3>
      <ul>
       <li>
        <a class="hover:underline" href="#">
         About Us
        </a>
       </li>
       <li>
        <a class="hover:underline" href="#">
         Menu
        </a>
       </li>
       <li>
        <a class="hover:underline" href="#">
         Testimonials
        </a>
       </li>
       <li>
        <a class="hover:underline" href="#">
         Gallery
        </a>
       </li>
      </ul>
     </div>
     <div class="mb-6 md:mb-0">
      <h3 class="text-[#d04a2f] font-bold mb-4">
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
      <h3 class="text-[#d04a2f] font-bold mb-4">
       OPENING HOURS
      </h3>
      <p>
       Mon to Sun: 12PM to 12AM
      </p>
     </div>
    </div>
   </div>
   <div class="bg-[#8b4a2f] text-[#d4c07f] text-center py-4 mt-20" >
    <p>
     © 2025 Aaoji. All Rights Reserved. Designed &amp; Developed by Eazotel
    </p>
   </div>
  </footer>
  );
}

export default Footer