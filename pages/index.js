import Head from 'next/head';
//import styles from '../styles/Global.css';
import 'tailwindcss/tailwind.css'
// import SearchBar from '../componets/searchBar'
import NavigationBar from '../componets/navigationBar'
// import AccountAvatar from "../componets/accountAvatar";
import PictureTextButton from "../componets/textButton";
import BarChart from '../componets/barChart';
import ClaimTable from '../componets/claimTable';



export default function Home() {

  const claimData = [
    {
      claimId: 12345,
      date: "2024-01-01",
      patientFirstname: "Megan",
      patientLastname: "Smith",
      status: "Paid",
      amount: 1000,
    },
    {
      claimId: 12346,
      date: "2024-02-01",
      patientFirstname: "Barry",
      patientLastname: "Smith",
      status: "Declined",
      amount: 500,
    },
    {
      claimId: 12347,
      date: "2024-03-01",
      patientFirstname: "Baz",
      patientLastname: "Smith",
      status: "Pending",
      amount: 2000,
    },
    {
      claimId: 12348,
      date: "2024-04-01",
      patientFirstname: "Foo",
      patientLastname: "Smith",
      status: "Paid",
      amount: 1000,
    },
    {
      claimId: 12349,
      date: "2024-04-01",
      patientFirstname: "Max",
      patientLastname: "Smith",
      status: "Paid",
      amount: 1000,
    },
    {
      claimId: 12350,
      date: "2024-04-01",
      patientFirstname: "Megs",
      patientLastname: "Smith",
      status: "Paid",
      amount: 1000,
    },
    {
      claimId: 12351,
      date: "2024-04-01",
      patientFirstname: "John",
      patientLastname: "Smith",
      status: "Paid",
      amount: 2000,
    },
    {
      claimId: 12352,
      date: "2024-04-01",
      patientFirstname: "Jane",
      patientLastname: "Smith",
      status: "Paid",
      amount: 100,
    },
    {
      claimId: 12353,
      date: "2024-04-01",
      patientFirstname: "Smith",
      patientLastname: "Smith",
      status: "Declined",
      amount: 1000
    },

  ];
  

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
              <div className="flex justify-between items-center">
                    <p className="text-left leading-none">
                      <strong className="text-5xl text-black leading-none font-bold">Claims</strong><br />
                      {/* <span className="text-xl text-leaf-green-80 leading-none font-bold">Insert Sub Yext</span> */}
                    </p>
                    <button className="bg-apple-green rounded-full shadow-lg text-white text-lg font-bold py-2 px-4">
                      Create New Claim
                    </button>
                  </div>
                  <div className="mt-6 overflow-auto" style={{ maxHeight: '00px' }}> {/* Set the max height as needed */}
                    <ClaimTable claims={claimData} />
                  </div>
              </div>

              <div className="bg-white border border-leaf-green rounded-xl w-5/12 ml-2 p-6">
                <div className="flex justify-between items-center">
                  <p className="text-left leading-none">
                    <strong className="text-4xl text-leaf-green leading-none">2,000</strong><br />
                    <span className="text-lg text-leaf-green-80 leading-none">Current Active Patients</span>
                  </p>
                  <button className="bg-apple-green rounded-full shadow-lg text-white text-lg py-2 px-4">
                    New Patient
                  </button>
                </div>
                <div className="mt-6">
                  <BarChart 
                    months={['Jan', 'Feb', 'Mar', 'Apr', 'May']} 
                    patientNumbers={[2000, 1900, 2010, 2040, 2003]} 
                  />
                </div>
              </div>

              
            </div>
            </div> 
            </div>
    </div>
  );
}
