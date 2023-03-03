import React from 'react'

// heading, subheading, image, button, buttonLink
// Headstrong Hair and Nail Studio


export default function Herostuff() {
  return (
    <div className="relative h-screen">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white">Headstrong Hair and Nail Studio</h1>
                <p className="text-2xl text-white">We are a full service salon and spa</p>
                <button className="bg-white text-black px-4 py-2 rounded-lg mt-4">Book Now</button>
            </div>
        </div>
    </div>
  )
}
