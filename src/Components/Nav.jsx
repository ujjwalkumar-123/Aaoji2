import React from 'react'

export default function Nav() {
  return (
    <div className='fixed top-4 right-4 z-50'>
    <nav class="space-x-8 text-lg">
    <a class="hover:underline" href="#">
     About Us
    </a>
    <a class="hover:underline" href="#">
     Menu
    </a>
    <a class="hover:underline" href="#">
     Testimonials
    </a>
    <a class="hover:underline" href="#">
     Gallery
    </a>
    <a class="text-red-600" href="#">
     <i class="fab fa-instagram">
     </i>
    </a>
    <a class="text-red-600" href="#">
     <i class="fab fa-facebook">
     </i>
    </a>
   </nav>
   </div>
  )
}
