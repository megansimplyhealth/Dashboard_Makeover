import React from "react"
import Image from 'next/image';
import 'tailwindcss/tailwind.css'
import SearchBar from '../componets/searchBar'

export default function DashboardHome() {
    return (
      <div className="bg-apple-green-20 min-h-screen">
        
        {/* header */}
        <div className="absolute text-leaf-green px-10 py-1 z-10 w-full">
          <div className="flex items-center justify-between py-2 text-5x1">
            <div className="flex ">
            <Image
              src="/images/Denplan-logo.png"
              alt="Denplan Logo"
              width={135}
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
        <div className="absolute grid grid-cols-4 gap-4 h-32 w-full mt-20">
          <div className="col-span-1 h-28 p-2 ml-16 mt-1">
            
            <p className="text-left leading-none">
            <strong className="text-3xl text-black">Practice news</strong><br />
            <span className="text-xs text-grey-4 leading-none">Stay on top of all upcoming events, practice <br />revenue statistics and marketing tips.</span>
            </p>

            <div className="flex space-x-2 mt-2">
              <button className="rounded-full border border-grey-4 text-grey-4 w-8 h-8 flex items-center justify-center" onClick={() => {}}>{"<"}</button>
              <button className="rounded-full border border-grey-4 text-grey-4 w-8 h-8 flex items-center justify-center" onClick={() => {}}>{">"}</button>
            </div>
          </div>

          <div className="rounded-xl col-span-3 h-32 flex items-center justify-center mr-16 mt-1">
          <Image
              src="/images/denplan-bike.png"
              alt="Denplan Summit 2025 Event Banner"
              width={650}
              height={50}
              className="rounded-xl mr-5 border border-grey"
            />
            <Image
              src="/images/DenplanSummit2025.png"
              alt="Denplan Summit 2025 Event Banner"
              width={650}
              height={50}
              className="rounded-xl ml-5 border border-grey"
            />
            
          </div>
        </div>

        {/* search bar */}
        <div className="absolute px-10 py-1 z-10 w-full mt-56 border-t-2 border-grey-2">
          <div className="flex items-center justify-center w-full mt-2">
            <div className="w-2/5">
              <SearchBar placeholder="Search for patients, reports, settings..." onChange={() => {}} />
            </div>
          </div>
        </div>

        {/* content section */}
        <div className="flex justify-center items-center flex-row pt-80 px-10 pb-4">         
          <div className="w-10/12">
            <div className="flex flex-row">
              <div className="bg-no-repeat border border-leaf-green rounded-xl w-7/12 mr-2 p-6" >
                <p className="text-5xl text-leaf-green-60">APP<br/><strong>ONE</strong></p>
                <span className="bg-red-300 text-xl text-leaf-green inline-block rounded-full mt-12 px-8 py-2"><strong>CLICK</strong></span>
              </div>

              <div className="bg-no-repeat border border-leaf-green rounded-xl w-5/12 ml-2 p-6" >
                <p className="text-5xl ">APP <br/><strong>TWO</strong></p>
                <a href="" className="text-xl text-leaf-green-60 underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"><strong>CLICK</strong></a>
              </div>
            </div>
            <div className="flex flex-row h-64 mt-6">
              <div className="border border-leaf-green rounded-xl shadow-lg px-6 py-4 w-4/12">
                APP THREE
              </div>
              <div className="border border-leaf-green rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12">
                APP FOUR
              </div>
              <div className="border border-leaf-green rounded-xl shadow-lg px-6 py-4 w-4/12">
                APP FIVE
              </div>
            </div>
          </div>
        </div>
      </div>
    );}