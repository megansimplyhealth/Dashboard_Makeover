import React from "react"
import Image from 'next/image';
import 'tailwindcss/tailwind.css'

export default function DashboardHome() {
    return (
      <div className="bg-apple-green-20 min-h-screen">
        
        {/* header */}
        <div className="absolute bg-white text-leaf-green px-10 py-1 z-10 w-full">
          <div className="flex items-center justify-between py-2 text-5x1">
            <div className="flex ">
            <Image
              src="/images/denplan-logo.jpg"
              alt="Denplan Logo"
              width={131}
              height={50}
            />

            </div>
            <div className="flex items-center text-gray-500">
              <span className="p-2 mr-96">navigation</span>
              <span className="p-2">My Account</span>
              <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2"></div>
            </div>
          </div>
        </div>

        {/* banner */}
        <div className="absolute grid grid-rows-3 grid-flow-col gap-4 h-28 w-full mt-16">
          <div className="row-span-3 bg-apple-green-80 h-28">01</div>
          <div className="row-span-2 col-span-2 bg-apple-green-60 h-28">02</div>
        </div>

        {/* search bar */}
        <div className="absolute px-10 py-1 z-10 w-full mt-44 border-t-2 border-grey-2">
          <div className="flex items-center justify-center py-2 text-5x1">
            <input
              type="text"
              className="text-leaf-green bg-white p-2 rounded-lg w-1/2"
              placeholder="Search..."
              placeholder-color="#006633"
            />
          </div>
        </div>

        {/* content section */}
        <div className="flex justify-center items-center flex-row pt-64 px-10 pb-4">         
          <div className="w-10/12">
            <div className="flex flex-row">
              <div className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6" >
                <p className="text-5xl text-indigo-900">APP<br/><strong>ONE</strong></p>
                <span className="bg-red-300 text-xl text-white inline-block rounded-full mt-12 px-8 py-2"><strong>CLICK</strong></span>
              </div>

              <div className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-5/12 ml-2 p-6" >
                <p className="text-5xl text-indigo-900">APP <br/><strong>TWO</strong></p>
                <a href="" className="bg-orange-300 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"><strong>CLICK</strong></a>
              </div>
            </div>
            <div className="flex flex-row h-64 mt-6">
              <div className="bg-blue-200 rounded-xl shadow-lg px-6 py-4 w-4/12">
                APP THREE
              </div>
              <div className="bg-yellow-200 rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12">
                APP FOUR
              </div>
              <div className="bg-purple-200 rounded-xl shadow-lg px-6 py-4 w-4/12">
                APP FIVE
              </div>
            </div>
          </div>
        </div>
      </div>
    );}