import React from 'react'
import Hero from '../components/hero'
import Banner from '../components/banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../components/roomContainer'

export default function rooms(){
    return(<>
    <Hero hero="roomsHero">
        <Banner title="Our Rooms">
            <Link to="/" className="btn-primary" title="Our rooms">
                Return Home
            </Link>
        </Banner>
    </Hero>
    <RoomContainer/>

    </>)
}