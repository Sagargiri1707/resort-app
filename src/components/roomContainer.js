import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {withRoomConsumer} from '../context'
import Loading from './Loading' 

const RoomContainer=({context})=>{
    const {loading,sortedRooms,rooms}=context
    if(loading){
        return(
        <Loading/>
        )
    }
    return(
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
     )
}
export default withRoomConsumer(RoomContainer)
/*
 export default function RoomContainer(props){
   
    return(
        <RoomConsumer>
            {value=>{                
                
                const {loading,sortedRooms,rooms}=value
                if(loading){
                    return(
                    <Loading/>
                    )
                }
                return(
                    <div>
                        <RoomsFilter rooms={rooms}/>
                        <RoomsList rooms={sortedRooms}/>
                    </div>
                 )

               }}
        </RoomConsumer>

    )
}
*/
