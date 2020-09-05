import React,{useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/title'
const getUnique=(items,value)=>{
        return [...new Set(items.map(item=>item[value]))]
}

export default function Room({rooms}){
    const context=useContext(RoomContext);
    const {
        handleChange,type,capacity,price,minPrice,maxSize,maxPrice,minSize,breakfast,pets
    }=context;

    let types=getUnique(rooms,'type')

    types=['all',...types]
    types=types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    let people=getUnique(rooms,'capacity')
    people=people.map((item,index)=>{return <option key={index} value={item}>{item}</option>})
  
  return <section className="filter-container"> 
            <Title title="search rooms"/>
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select 
                    name="type" 
                    id="type" 
                    onChange={handleChange}
                    value={type} 
                    className="form-control" 
                    >
                        {types} 
                    </select>
                </div>
                {/*end select type*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select 
                    name="capacity" 
                    id="capacity" 
                    value={capacity} 
                    className="form-control" 
                    onChange={handleChange}>
                        {people} 
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">room size </label>
                    <div className="size-inputs">
                        <input
                        type="number"
                        name="minSize"
                        value={minSize}
                        onChange={handleChange}
                        className="size-input"
                        />
                        <input
                        type="number"
                        name="maxSize"
                        value={maxSize}
                        onChange={handleChange}
                        className="size-input"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="breakfast"
                        id="breakfast"
                        checked={breakfast}
                        onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="pets"
                        checked={pets}
                        onChange={handleChange}
                        />
                        <label htmlFor="breakfast">pets</label>
                    </div>
                </div>
                </form>
    </section>
}