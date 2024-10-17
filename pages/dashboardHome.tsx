import React from "react"
import Image from 'next/image';
import 'tailwindcss/tailwind.css'
import SearchBar from '../componets/searchBar'
import NavigationBar from '../componets/navigationBar'
import AccountAvatar from "../componets/accountAvatar";
import { IconButton } from "@material-ui/core";
import { ArrowBackOutlined, ArrowForwardOutlined } from '@material-ui/icons';
import DynamicBanner from "../componets/dynamicBanner";
import TextButton from "../componets/textButton";
import App from "next/app";
import AppCard from "../componets/appCard";

export default function DashboardHome() {
    return (
      <div className="bg-background-grey min-h-screen">
        
        {/* header */}
        <div className="absolute text-leaf-green px-10 py-1 z-10 w-full">
          <div className="flex items-center justify-between py-2 text-5x1">
            <div className="flex ">
            <Image
              src="/images/Denplan-logo.png"
              alt="Denplan Logo"
              width={161}
              height={61}
            />
            </div>
            <div className="flex items-center">
              <NavigationBar />
            </div>

            <div className="flex items-center">
              <AccountAvatar lastName="Knaresborough" role="Dentist" />
            </div>
          </div>
        </div>

        {/* banner */}
        <div className="absolute h-32 w-full mt-24">
          <DynamicBanner image={[{src: '/images/denplan-bike.png', link: null}, {src: "/images/DenplanSummit2025.png", link: "https://www.denplan.co.uk/dentists/events/the-denplan-summit-2025.html"}]} />
        </div>

        <div className="absolute w-full mt-64 border-t-2 border-leaf-green-40"/>

        {/* search bar */}
        <div className="absolute px-10 py-1 z-10 w-full mt-64">
          <div className="flex items-center justify-center w-full mt-4"/>
          <div className="flex items-center justify-center w-full mt-2">
            <div className="w-2/5 bg-white rounded-full">
              <SearchBar placeholder="Search for patients, reports, settings..." onChange={() => {}} />
            </div>
          </div>
          
        </div>

        {/* content section */}
        <div className="flex justify-center items-center flex-row pt-[23rem] px-10 pb-4">         
          <div className="w-10/12">
            <div className="flex flex-row">
              <div className="bg-no-repeat border border-leaf-green rounded-xl w-7/12 mr-2 p-6" >
                <p className="text-5xl text-leaf-green-60">APP<br/><strong>ONE</strong></p>
                <span className="bg-red-300 text-xl text-leaf-green inline-block rounded-full mt-12 px-8 py-2"><strong>CLICK</strong></span>
              </div>

              <div className="bg-no-repeat border border-leaf-green rounded-xl w-5/12 ml-2 p-6" >
                <p className="text-5xl ">Paitnet chart <br/><strong>Include sign pateint up button</strong></p>
                <a href="" className="text-xl text-leaf-green-60 underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"><strong>CLICK</strong></a>
              </div>
            </div>
            <div className="flex flex-row h-64 mt-6">
              <div className="border border-leaf-green rounded-xl shadow-lg px-6 py-4 w-4/12" style={{ 
                backgroundImage: `url("../images/month-report-card.png")`,
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover',
                backgroundColor: 'white'}}>
                <AppCard title={"Monthly Reports"} subTitle={"View your joiners, leavers and monthly income"} description={"x"} buttonText={"View reports"} />
              </div>
              <div className="border border-leaf-green rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12" style={{ 
                backgroundImage: `url("../images/order-lit-card.png")`,
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover',
                backgroundColor: 'white'}}>
                <AppCard title={"Order Literature Online"} subTitle={"Order stock to a practice through our hub"} description={"x"} buttonText={"Order here"} />
              </div>
              <div className="border border-leaf-green rounded-xl shadow-lg px-6 py-4 w-4/12" style={{ 
                backgroundImage: `url("../images/quality-man-card.png")`,
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover',
                backgroundColor: 'white'}}>
                <AppCard title={"Quality Manuals"} subTitle={"Helping you stay compliant"} description={"You can view, download and personalise our documents, manuals and guides for your own needs."} buttonText={"View manuals"} />
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="absolute bg-background-grey px-10 py-1 z-10 w-full mt-6 border-t-2 border-leaf-green-40">
          <div className="flex items-center justify-between py-2 text-5x1 mt-2 bg-background-grey">
            <div className="flex bg-background-grey">
            
            </div>
            <div className="flex items-center mr-2 bg-background-grey">
              <Image
                src="/images/Denplan-B-Corp-Footer.png"
                alt="Denplan Logo"
                width={260}
                height={80}
              />
            </div>
          </div>
        </div>

      </div>
    );}