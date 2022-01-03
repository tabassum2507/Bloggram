import React from 'react'
import './singlePost.css'
import Sidebar from './Sidebar'
import Single from './Single'

export default function SinglePost() {
    return (
        <div className="singlepost">
            <Single />
            
            <Sidebar />
            
        </div>
    )
}
