import React, { Component } from 'react';
import axios from 'axios';
import video from '../../src/norway.mp4'
import {Link} from 'react-router-dom';
import Footer from './Footer'


class Destination extends Component {
    state={
        notes:[],
        destinations:[],
        turistPlans:[],
        showHotels:[],
        menuHotel:[]
    }
     componentDidMount(){
        this.getNotes()
        this.getDestinations()
        
        
    }
       
    async getNotes(){
        const  res=await axios.get('http://localhost:4000/api/notes')
        this.setState({
            notes:res.data
        })
    }
    deleteNote= async (id)=>{
        await axios.delete('http://localhost:4000/api/notes/' + id)
        this.getNotes()
    }

    async getDestinations(){
        const url='http://localhost:4000/api/destinations'
        const rest=await axios.get(url)
        console.log(rest.data);
        this.setState({
            destinations:rest.data,
            menuHotel:rest.data[0].menuHotel

            
        })
       
        
       
    }
    
    
    render() {
        
        return (
            
            
            <div  className="row">
                <video className='videoTag' autoPlay loop muted id="background-video">
                 <source src={video} type='video/mp4' />
                 
                </video> 
                
                <h1 className="col-md-12 text-center text-white " style={{marginTop:"6rem",fontSize:"3rem"}}>Destinos</h1>
                {
                    (this.state.destinations).map(destination=>(
                        
                        <div className="col-md-4 p-2" key={destination.id} style={{marginTop:"5rem"}} >
                        
                            <div className="card-transparent  text-center " > 
                                        <img src={`img/${destination.img}.jpg`} className="card-img-top imagenCard" alt={destination.name}  >
                                        </img>
                                        <h5 className="titulos_destinos text-white">{destination.name}</h5>
                                    
                                
                                <div  className="card-body text-white   text-center h6    " >
                                    <p>
                                        <i class="far fa-clock icono1"></i> <b>Duración Vuelo </b> :{destination.duration}</p>
                                    <p> <i class="fas fa-plane-departure icono2"></i>  {destination.airport}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
               
                  <Link className="btn  botones   text-white " to={"/shownorway"}    style={{marginLeft:"10%",backgroundColor:"red",top:"-1.5rem"}}>
                                        Ver plan 
                  </Link> 
                  <Link className=" btn  botones  text-white" to={"/showfinland"}  style={{marginLeft:"22%",backgroundColor:"red",top:"-1.5rem"}}  >
                                        ver plan    
                  </Link> 
                 <Link className="btn botones  text-white" to={"/createQuo"} style={{marginLeft:"22%",backgroundColor:"red",top:"-1.5rem"}}  >
                                        ver plan    
                 </Link> 
              
                
                
                
                 
            </div>
            
        
        );
        
    }
    
}

export default Destination;