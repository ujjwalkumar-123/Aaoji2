import React from 'react'

function Explore() {
  return (
    <div class="flex flex-col items-center p-4 bg-amber-50">
    <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-red-600"><span><hr></hr></span>EXPLORE OUR MENU<span><hr></hr></span></h1>
        <h2 class="text-xl text-red-600">EXPLORE THE MAGIC OF OUR SAVORY CREATIONS</h2>
    </div>
    <div class="menu-card w-full max-w-4xl mx-auto">
        <div class="flex justify-between items-center mb-4">
            <div class="div">AAOJI.</div>
            <div class="div">AAOJI.</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h2>Beverages</h2>
                <p>Mineral Water <span class="price">₹20</span></p>
                <p>Jaljeera <span class="price">₹60</span></p>
                <p>Masala Cola <span class="price">₹60</span></p>
                <p>Thoda Chilled <span class="price">₹60</span></p>
                <p>Virgin Mojito <span class="price">₹110</span></p>
                <p>Green Apple Mojito <span class="price">₹110</span></p>
                <p>Green Apple Cinnamon Mocktail <span class="price">₹110</span></p>
                <p>Peach Juice <span class="price">₹110</span></p>
                <p>Jamun Juice <span class="price">₹110</span></p>
                <p>Apple Juice <span class="price">₹110</span></p>
                <h2>Chai & Coffee</h2>
                <p>Chai <span class="price">₹40</span></p>
                <p>Gud Wali Chai <span class="price">₹50</span></p>
                <p>Masala Tea <span class="price">₹50</span></p>
                <p>Ginger Tea <span class="price">₹50</span></p>
                <p>Honey Lemon Ginger Lemon Tea <span class="price">₹60</span></p>
                <p>Hot Coffee <span class="price">₹60</span></p>
                <p>Black Coffee <span class="price">₹60</span></p>
                <p>Cold Coffee <span class="price">₹150</span></p>
                <h2>Shakes</h2>
                <p>Vanilla Shake <span class="price">₹110</span></p>
                <p>Chocolate Shake <span class="price">₹110</span></p>
                <p>Butterscotch Shake <span class="price">₹110</span></p>
                <p>American Nuts Shake <span class="price">₹110</span></p>
                <p>Blueberry Shake <span class="price">₹110</span></p>
                <p>Mango Shake <span class="price">₹110</span></p>
                <p>Oreo Shake <span class="price">₹110</span></p>
                <p>Kitkat Shake <span class="price">₹110</span></p>
                <p>Nutty Nutella Shake <span class="price">₹110</span></p>
            </div>
            <div>
                <h2>Sweets</h2>
                <p>Gulab Jamun (two) <span class="price">₹70</span></p>
                <p>Rasmalai (two) <span class="price">₹110</span></p>
                <p>Sizzler Brownie with Ice Cream <span class="price">₹170</span></p>
                <p>Gajar Ka Halwa <span class="price">₹110</span></p>
                <p>Rice Kheer <span class="price">₹110</span></p>
                <h2>Ice-Cream</h2>
                <p>Vanilla <span class="price">₹80</span></p>
                <p>Chocolate <span class="price">₹100</span></p>
                <p>Butterscotch <span class="price">₹100</span></p>
                <p>Tutti Frutti <span class="price">₹120</span></p>
                <p>American Nuts <span class="price">₹120</span></p>
                <p class="note">Note: All government taxes are applicable. Prices can be changed without prior notice.</p>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center mt-8">
        <button class="bg-red-600 text-white py-2 px-4 rounded-full mx-2">Download Menu</button>
        <button class="bg-red-600 text-white py-2 px-4 rounded-full mx-2">Call Us for Bookings</button>
    </div>
</div>
  )
}

export default Explore