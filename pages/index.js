import Head from 'next/head';
//import styles from '../styles/Global.css';
import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css'
import SearchBar from '../componets/searchBar'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-apple-green-20 text-2xl">
      <a href="./dashboardHome" className="m-16 text-3xl">
          <h3>DASHBOARD HOME</h3>
          <p>Click to view home</p>
      </a>      
      <SearchBar placeholder="Search for patients, reports, settings..."/>
    </div>
  );
}
