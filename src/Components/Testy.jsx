import React from 'react'

function Testy() {
  return (
    <div class="bg-yellow-100 font-roboto">
    <div class="text-center py-8">
        <h2 class="text-red-600 text-lg font-bold">TESTIMONIALS</h2>
        <h1 class="text-2xl font-bold text-red-600 mt-2">RAVING REVIEWS/: HEAR FROM OUR HAPPY FOODIES/!</h1>
    </div>
    <div class="flex justify-center space-x-4 px-4">
        <div class="bg-white p-6 border-2 border-red-600 rounded-lg shadow-md w-80">
            <div class="text-yellow-500 text-3xl mb-4">
                <i class="fas fa-quote-left"></i>
            </div>
            <p class="text-gray-700 mb-4">Aaoji is my new favorite stop on the highway! The flavors here are very refreshing. Will definitely be stopping here on every trip! It's fast, fresh, and perfect for a nice pit stop!</p>
            <p class="font-bold text-gray-800">Suresh Naithani</p>
        </div>
        <div class="bg-white p-6 border-2 border-red-600 rounded-lg shadow-md w-80">
            <div class="text-yellow-500 text-3xl mb-4">
                <i class="fas fa-quote-left"></i>
            </div>
            <p class="text-gray-700 mb-4">I've tried a lot of places while traveling to Delhi, but Aaoji really stands out! The flavors are amazing, and they've got a fun, hygienic setup that anyone can enjoy! Keep up the great work!</p>
            <p class="font-bold text-gray-800">Rekha Dixit</p>
        </div>
        <div class="bg-white p-6 border-2 border-red-600 rounded-lg shadow-md w-80">
            <div class="text-yellow-500 text-3xl mb-4">
                <i class="fas fa-quote-left"></i>
            </div>
            <p class="text-gray-700 mb-4">Stopped by Aaoji, and felt wow! The food was served hot, tasty, and full of flavor. I never expected such good food- this is going to be my go to on every trip now!</p>
            <p class="font-bold text-gray-800">Sarthak Singh</p>
        </div>
    </div>
    <div class="flex justify-center mt-4">
        <div class="flex space-x-2">
            <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
    </div>
    <div class="flex justify-center mt-8 pb-4 ">
        <div class="bg-white p-6 border-2 border-red-600 rounded-lg shadow-md w-96 ml-4 flex items-center justify-center">
            <p class="text-red-600">MAP HERE</p>
        </div>
        <div class="bg-white p-6 border-2 border-red-600 rounded-lg shadow-md w-96 ml-4">
            <h2 class="text-red-600 text-lg font-bold mb-4">FILL IN DETAILS/ TO BOOK A PRIVATE PARTY!</h2>
            <form>
                <div class="mb-4" >
                    <input type="text" class="w-full p-2 border border-gray-300 rounded" placeholder="Your full name*" required/>
                </div>
                <div class="mb-4">
                    <input type="text" class="w-full p-2 border border-gray-300 rounded" placeholder="+91 IND Mobile number*" required/>
                </div>
                <div class="mb-4">
                    <input type="email" class="w-full p-2 border border-gray-300 rounded" placeholder="Email ID*" required/>
                </div>
                <div class="mb-4">
                    <textarea class="w-full p-2 border border-gray-300 rounded" placeholder="Tell us something about your enquiry!" required></textarea>
                </div>
                <button type="submit" class="w-full bg-red-600 text-white p-2 rounded">Submit</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Testy