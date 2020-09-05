

/*import React,{useState,useEffect} from 'react'
import data from './data'
const RoomContext=React.createContext();

function Context(props){
const [state,setState]=useState({
    rooms:[],
    sortedRooms:[],
    featuredRooms:[],
    loading:true,
    type:"all",
    capacity:1,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSize:0 ,
    maxSize:0,
    breakfast:false,
    pets:false
})
useEffect(()=>{
    let rooms=formatData(data)
    let featuredRooms=rooms.filter(room=>room.featured===true)
    let maxPrice=Math.max(...rooms.map(item=>item.price))
    let maxSize=Math.max(...rooms.map(item=>item.size))

    setState(prevState=>({...prevState,
        rooms,sortedRooms:rooms,featuredRooms,loading:false,price:maxPrice,maxPrice,maxSize
    }))
},[])


const formatData=(items)=>{
    let tempItems=items.map(item=>{
        let id=item.sys.id
        let images=item.fields.images.map(image=>image.fields.file.url)

        let room={...item.fields,images,id}
        return room
    })
    return tempItems
}
const getRoom=(slug)=>{
    let rooms=state.rooms
    const room=rooms.find(room=>room.slug===slug)
    return room
}


const handleChange=(event)=>{
    const target=event.target
    const type=event.type==='checkbox' ? target.checked:target.value
    const name=event.target.name
    setState(prevState=>({...prevState,[name]:type}))
    filterRooms()
   
}
const filterRooms=()=>{

     let  {rooms,capacity,type,price,minSize,maxSize,breakfast,pets}=state
    let tempRooms=[...rooms]
    if(type!=='all'){
        tempRooms=tempRooms.filter(room=>room.type===type)
    }
    setState(prevState=>{
        return {...prevState,sortedRooms:tempRooms}})
     
}
return(
    <RoomContext.Provider value={{...state,getRoom:getRoom,handleChange:handleChange}} >
        {props.children}
    </RoomContext.Provider>
)
}
const RoomConsumer=RoomContext.Consumer

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value=><Component {...props} context={value}/>}
        </RoomConsumer>
    }
}

export {Context,RoomConsumer,RoomContext}*/


import React, { Component } from "react";
import items from './data'
const RoomContext = React.createContext();

export default class Context extends Component {
  state = {
    rooms: [],
     featuredRooms: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  getData=async ()=>{
      try{
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        //
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
          rooms,
          featuredRooms,
          sortedRooms: rooms,
          loading: false,
          //
          price: maxPrice,
          maxPrice,
          maxSize
        });
      }
      catch(err){
          console.log(err)
      }

  }
  componentDidMount() {
     this.getData();
   
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRooms = [...rooms];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { Context, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (  
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}