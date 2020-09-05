import React,{useContext} from 'react'
import {RoomContext} from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './title'
export default function FeaturedRooms(){

    const user = useContext(RoomContext)
    
    let {loading,featuredRooms:rooms}=user
    const room=rooms.map((rooms,key)=>{
        return <Room key={rooms.id} room={rooms}/>
    })

    return(
            <section className="featured-rooms">
                <Title title="Featured Rooms"/>
                <div className="featured-rooms-center">
                    {loading?<Loading/>:room}
                </div>
            </section>
        )
    
}