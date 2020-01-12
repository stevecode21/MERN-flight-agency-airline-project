import React, { Component } from 'react';
import axios from 'axios'
import video from '../../finland.mp4'
import {Link } from 'react-router-dom'
import Swiper from 'react-id-swiper';

const params = {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 3,
    loop: true,
    
    loopFillGroupWithBlank: true,
    rebuildOnUpdate: true,
    /* pagination: {
      el: '.swiper-pagination',
      clickable: true
    }, */
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  
class ShowNorway extends Component {
    state={
        touristN:[],
        hotelPlans:[],
        flightplans:[],
        idTour:[],
        id_hotel:[],
        id_vuelos:[],
        touristF:[]
    }
    componentDidMount(){
        this.getTouristPlans()
        this.getHotelPlans()
        this.getFlightPlans()
        this.getDestinations()
    }
    inputChange=(e)=>{
        
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.value) 
        
    }
    inputChangeVuelos=(e)=>{
        
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.value) 
        
    }
    async getTouristPlans(){
        const  res=await axios.get('http://localhost:4000/api/touristplan/1')
        this.setState({
            touristN:res.data
        })
    }
    async getDestinations(){
        const res=await axios.get('http://localhost:4000/api/touristplan/3')
        console.log(res.data);
        this.setState({
            touristF:res.data
        })
    }

    async getHotelPlans(){
        const rest=await axios.get("http://localhost:4000/api/hotelplan/1")
        console.log(rest.data);
        this.setState({
            hotelPlans:rest.data,
            id_hotel:rest.data[0]._id,
            id_vuelos:rest.data[0]._id
        })
    }
    async getFlightPlans(){
        const rest=await axios.get("http://localhost:4000/api/flightprice/1")
        console.log(rest.data);
        this.setState({
            flightplans:rest.data
        })
    }

    saveTour=  (_id)=>{
        this.setState({
            idTour: [...this.state.idTour, _id]
          })
        alert('Plan Guardado')
    }
    onSubmit=async (e)=>{
        e.preventDefault()
        const newEstimate={
            priceFlight:this.state.id_vuelos,
            priceHotel:this.state.id_hotel,
            priceTour:this.state.idTour,
        }
        console.log(newEstimate);
        /* window.location.href='/' */
    }
   

    render() { 
        return ( 
          
            <div className="row">
                <video className='videoTag' autoPlay loop muted id="background-video">
                 <source src={video} type='video/mp4' />
                </video> 
                
                        <Swiper {...params} >
                                    
                        {
                            this.state.touristF.map(tour=>(
                                    <div className="swiperF" key={tour._id}> <img src={`img/${tour.url}.jpg`} className="card-img-top" alt="..."></img> 
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">{tour.name}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{tour.destination}</h6>
                                                <p className="card-text">Precio:{tour.price}</p>
                                                <a  className="btn btn-danger btn-sm" onClick={()=>this.saveTour(tour._id,tour.name,tour.duration,tour.price)}>Guardar </a>
                                                
                                            </div>
                                        </div>
                                    </div>
                            ))
                        }
                        </Swiper> 
                
                        <div className="col-md " style={{marginTop:"1.5rem"}}>
                            <h4 className="heading mb-2 display-4 font-light">Tiitulo </h4>
                           <div> 
                               <p className="lead mb-5 probootstrap-animate"></p>
                           </div>
                            <div>
                                <Link to="/" role="button" className="btn btn-primary p-3 mr-3 pl-5 pr-5 text-uppercase ">Ver Destinos</Link>
                            </div>
                            
                        </div> 
                        <div className="col-md"  style={{marginTop:"1.5rem"}}>
                            <form action="#" className="probootstrap-form" onSubmit={this.onSubmit}>
                                <div className="form-group" >
                                    <div className="row mb-3">
                                        <div className="col-md">
                                            <div className="form-group">
                                                <label className="text-white"> Planes de Hotel </label>
                                                <label    style={{width:" 100%"} }>
                                                     <select className="js-example-basic-single js-states form-control" id="id_label_single" style={{width:" 100%"} }
                                                        
                                                        onChange={this.inputChange}
                                                        name="id_hotel"
                                                        
                                                     >
                                                    {
                                                        this.state.hotelPlans.map(planhotel=>(
                                                        
                                                        <option 
                                                            value={planhotel._id}
                                                             key={planhotel._id}
                                                        >
                                                                 Habitación {planhotel.type},
                                                                 Precio :{planhotel.price}
                                                        </option>
                                                        
                                                      
                                                        ))
                                                    }
                                                      </select>
                                                       
                                                    </label>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-group">
                                                <label  className="text-white">Planes Vuelo</label>
                                                <div className="probootstrap_select-wrap">
                                                    <label style={{width:"100%"}}>
                                                        <select className="js-example-basic-single js-states form-control" style={{width:"100%"}}
                                                                onChange={this.inputChangeVuelos}
                                                                name="id_vuelos"
                                                        >
                                                            {
                                                                this.state.flightplans.map(planvuelo=>(
                                                                    <option value={planvuelo._id} key={planvuelo._id}>Clase {planvuelo.plan}, Precio:{planvuelo.price}</option>
                                                                ))
                                                            }
                                                        
                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div className="col-md">
                                            <input type="submit" value="Cotizar Paquetes" className="btn btn-primary btn-block" />
                                </div>
                            </form>

                        </div>
                
            </div>
          
            
          
         );
    }
}
 
export default ShowNorway;


   
       

    
