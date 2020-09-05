import React from 'react'
import Hero from '../components/hero'
import Banner from '../components/banner'
import {Link} from 'react-router-dom'
import Services from '../components/services'
import FeaturedRooms from '../components/featuredRooms' 

export default function Home(){
    return(
    <div>
        <Hero>
            <Banner 
            title="Luxorious rooms" 
            subtitle="Deluxe rooms at $299">
                <Link 
                to="/rooms" 
                className="btn-primary">
                    Our Rooms
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
    </div>)
}