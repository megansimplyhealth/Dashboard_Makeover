import Head from 'next/head';
//import styles from '../styles/Global.css';
import 'tailwindcss/tailwind.css'
// import SearchBar from '../componets/searchBar'
import NavigationBar from '../componets/navigationBar'
// import AccountAvatar from "../componets/accountAvatar";
import PictureTextButton from "../componets/textButton";
import BarChart from '../componets/barChart';

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-apple-green-20 text-2xl">
      <a href="./dashboardHome" className="m-16 text-3xl">
          <h3>DASHBOARD HOME</h3>
          <p>Click to view home</p>
      </a>     
      <div className="p-10">
      <div className="bg-transparent rounded-full">
        <PictureTextButton  onClick={() => {}} image="/images/ic-qualityManuals.png" text="View Quality manuals" />
      </div>
      </div>
      <div className="p-10">
        <NavigationBar />
      </div>

      {/* <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-10">Welcome to My Bar Chart App</h1>
        <BarChart months={['Jan', 'Feb', 'Mar', 'Apr', 'May']} patientNumbers={[2000, 1900, 2010, 2040, 2003]}/>
      </div> */}


      <div className="flex justify-center items-center flex-row pt-10 px-10 pb-4 w-full">         
          <div className="w-10/12">
            <div className="flex flex-row">
              <div className="bg-no-repeat border border-leaf-green rounded-xl w-7/12 mr-2 p-6" >
                <p className="text-5xl text-leaf-green-60">APP<br/><strong>ONE</strong></p>
                <span className="bg-red-300 text-xl text-leaf-green inline-block rounded-full mt-12 px-8 py-2"><strong>CLICK</strong></span>
              </div>

              <div className="bg-no-repeat border border-leaf-green rounded-xl w-5/12 ml-2 p-6" >
                {/* <p className="text-5xl ">Paitnet chart <br/><strong>Include sign pateint up button</strong></p> */}
                 <BarChart months={['Jan', 'Feb', 'Mar', 'Apr', 'May']} patientNumbers={[2000, 1900, 2010, 2040, 2003]}/>
              </div>
              
            </div>
            </div> 
            </div>
    </div>
  );
}
