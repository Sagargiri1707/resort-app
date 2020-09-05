import React from 'react'
import Room from './Room'
export default function RoomList({rooms}){
   if(rooms.length===0){
    return(
        <>
        <h3>No rooms found as per your request</h3>
        </>
    )}
    return(
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map((item,id)=>{
                        return(<Room key={id} room={item}/>)  
                })
                }
            </div>
        </section>
    )
}

