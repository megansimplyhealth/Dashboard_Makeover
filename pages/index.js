import Head from 'next/head';
//import styles from '../styles/Global.css';
import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css'
import SearchBar from '../componets/searchBar'
import NavigationBar from '../componets/navigationBar'
import AccountAvatar from "../componets/accountAvatar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-apple-green-20 text-2xl">
      <a href="./dashboardHome" className="m-16 text-3xl">
          <h3>DASHBOARD HOME</h3>
          <p>Click to view home</p>
      </a>     
      <div className="p-10">

        
        <AccountAvatar lastName="Knaresborough" role="Dentist" />
      </div>
      <div className="p-10">
        <NavigationBar />
      </div>
    </div>
  );
}
