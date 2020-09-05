import React,{useState} from 'react'
import Title from './title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default function Services(){
    const [services]=useState([
        {
            icon:<FaCocktail/>,
            title:"Free Cocktail",
            info:"LOAD LASSUN"

        },
        {
            icon:<FaHiking/>,
            title:"Free HIKING",
            info:"LOAD LASSUN"

        },
        {
            icon:<FaShuttleVan/>,
            title:"Free shuttle",
            info:"LOAD LASSUN"
        },
        {
            icon:<FaBeer/>,
            title:"Free Beer",
            info:"LOAD LASSUN"
        },
        

    ])
    return(
        <section className="services">
            <Title title="services"/>
            <div className="services-center">
                {services.map((obj,index)=>{
                    return(
                    <article key={index} className="service">
                        <span>
                            {obj.icon}
                        </span>   
                        <h6>{obj.title}</h6>
                        <p>{obj.info}</p>
                    </article>
                    )
                })}
            </div>
        </section>
    )
}
