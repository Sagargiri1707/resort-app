import React,{useState,useContext} from 'react'
import defaultBcg from '../images/room-1.jpeg' 
import Banner from '../components/banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'


export default function Home(props){
    const [slug]=useState({slug:props.match.params.slug,defaultBcg})
    const context = useContext(RoomContext)
    const {getRoom}=context
    const room=getRoom(slug.slug)
    if(room!==undefined){
        const {name,description,capacity,size,price,extras,breakfast,pets,images}=room
        const [mainImg,...defaultImg]=images
        
        
        return(<>
        {mainImg}
            <StyledHero img={images[0]||slug.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                            Back to rooms
                        </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                {defaultImg.map((item,index)=>{
                    return(
                    <img key={index} src={item} alt={name}/>)
                })}

                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>
                            {description}
                        </p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price :${price}</h6>
                        <h6>Size :{size} SQFT</h6>
                        <h6>Max capacity:{
                            capacity>1 ? `${capacity} people`:
                            `${capacity} person`
                        }</h6>
                        <h6>
                            {pets?"pets allowed":"no pets allowed"}
                        </h6>
                        <h6>
                            {breakfast?"free breakfast included":"  "}
                        </h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>
                    Extras
                </h6>
                <ul className="extras">
                    {extras.map((item,key)=>{
                        return(
                        <li key={key}>-{item}</li>
                        )
                    })}
                </ul>
            </section>
            </>
)
    }
    else{
        return(
            <div className="error">
                <h3>Room not found...</h3>
                <Link to="/rooms" className="btn-primary">Back to rooms</Link>
            </div>
        )
    }
}