import React from 'react'

function Outlets() {
  return (
    <div class="flex flex-col items-center justify-center mb-10">
  <div class="text-center mb-4">
   <h2 class="text-red-700 text-xl font-bold mb-2">
   <span><hr></hr></span>
    OUTLETS
    <span><hr></hr></span>
   </h2>
   <h1 class="text-red-600 text-2xl font-bold">
    Relish Every Sweet Bite with Giani's
   </h1>
  </div>
  <div class="flex items-center justify-center space-x-4">
   <button class="bg-white rounded-full p-2 shadow-md">
    <i class="fas fa-chevron-left">
    </i>
   </button>
   <div class="flex gap-10">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden w-52">
     <img alt="A bowl of Giani's Red Icecream with chocolate syrup and nuts" class="w-full h-48 object-cover" height="300" src="https://storage.googleapis.com/a1aa/image/eMlKOiMCNyxve7xPioGQtkngCB4NSdrxNN3dC_Pc880.jpg" width="400"/>
     <div class="p-4 text-center">
      <p class="text-black font-bold">
       Gianis Red Icecream
      </p>
     </div>
    </div>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden w-52">
     <img alt="A variety of Giani's Blue Icecream flavors in a bowl" class="w-full h-48 object-cover" height="300" src="https://storage.googleapis.com/a1aa/image/MuYWRHvvXhPiw9xOmY-3aU_z44Zmrn-nz66hZr4wc44.jpg" width="400"/>
     <div class="p-4 text-center">
      <p class="text-black font-bold">
       Gianis Blue Icecream
      </p>
     </div>
    </div>
   </div>
   <button class="bg-white rounded-full p-2 shadow-md">
    <i class="fas fa-chevron-right">
    </i>
   </button>
  </div>
  <div class="flex justify-center mt-4">
   <div class="w-2 h-2 bg-gray-400 rounded-full mx-1">
   </div>
   <div class="w-2 h-2 bg-gray-800 rounded-full mx-1">
   </div>
  </div>
 </div>
  )
}

export default Outlets