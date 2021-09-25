import React from 'react'
import './singlepage.css'
import Sidebar from './Sidebar'
import Single from './Single'

export default function Singlepage() {
    return (
        <div className="singlepage">
            <Single />
            <Sidebar />
            
        </div>
    )
}
