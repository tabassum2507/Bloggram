import React from 'react'
import { useLocation } from "react-router";
import './home.css'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'

export default function Home() {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <Header />
                <div className="home">

                    <Posts />
                    <Sidebar />
                
            
                 </div>
        </>
    )
}
