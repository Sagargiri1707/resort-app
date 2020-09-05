import React from 'react'
import loading from '../images/gif/loading-arrow.gif'
export default function Home(){
    return(
        <div className="loading">
            <h4>
                Rooms data loading.....
            </h4>
            <img src={loading} alt="loading"/>
        </div>
 
    )
}