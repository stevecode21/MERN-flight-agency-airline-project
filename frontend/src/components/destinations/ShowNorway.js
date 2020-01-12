import React, { Component } from 'react';
import axios from 'axios'
import video from '../../norway_2.mp4'

import { withRouter} from 'react-router-dom'
import Swiper from 'react-id-swiper';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBadge } from "mdbreact";


//libreria swiper
const params = {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 1,
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
    //guardo los estados 
    state={
        touristN:[],
        hotelPlans:[],
        flightplans:[],
        propsTour:[],
        propsPlanH:[],
        propsVuelos:[],
      
    }
    componentDidMount(){
        this.getTouristPlans()
        this.getHotelPlans()
        this.getFlightPlans()
        
    }
    inputChangPlanHotels=(e)=>{
        this.setState({
            [e.target.name]: [e.target.value] 
            
        })
        console.log(e.target.value) 
        
    }
    inputChangeVuelos=(e)=>{
        
        this.setState({
            [e.target.name]:[e.target.value ]
            
        })
        console.log(e.target.value) 
        
    }
    async getTouristPlans(){
        const  res=await axios.get('http://localhost:4000/api/touristplan/1')
        this.setState({
            touristN:res.data
        })
        
    }


    async getHotelPlans(){
        const rest=await axios.get("http://localhost:4000/api/hotelplan/1")
        console.log(rest.data);
        this.setState({
            hotelPlans:rest.data,
            /* id_hotel:rest.data[0]._id, */
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

    saveTour=  (_id,name,duration,price)=>{
        this.setState({
            propsTour: [...this.state.propsTour, {_id,name,duration,price}]
          })
        alert('Plan Guardado')
    }
    
    onSubmit=async (e)=>{
        e.preventDefault()
        /* const newEstimate={
            priceFlight:this.state.id_vuelos,
            priceHotel:this.state.id_hotel,
            priceTour   :this.state.idTour,
        }
        console.log(newEstimate); */
        /* window.location.href='/' */
        
        this.props.history.push({
            pathname : './ResevarFecha',
            state :{
                propsTour:this.state.propsTour,
                propsPlanH:this.state.propsPlanH,
                propsVuelos:this.state.propsVuelos
            }
            } 
          );
    }
   

    render() { 
      
        return ( 
          
            <div className="row" >
                <video className='videoTag' autoPlay loop muted id="background-video">
                 <source src={video} type='video/mp4' />
                </video> 
                
                <Swiper {...params} >
                                    
                                    {
                                        this.state.touristN.map(tour=>(
                                                    
                                                <div  className="card-transparent swiperF"  key={tour._id}  > 
                                                <img src={`img/${tour.url}.jpg`} className="card-img-top"  alt="..."></img> 
                                                        <div className="card-body ">
                                                            <h5 className="card-title text-white font-smaller font-weight-bold ">{tour.name}</h5>
                                                            <h6 className="card-subtitle mb-2 text-white font-weight-bold "><b>Destino:</b> {tour.destination}</h6>
                                                            <p className="card-text text-white font-weight-bold"><b>Precio: </b> {tour.price}  <b>COP</b> </p>
                                                            <a  className="btn  btn-sm botonTour" onClick={()=>this.saveTour(tour._id,tour.name,tour.duration,tour.price)}>Guardar </a>
                                                        </div>
                                                    
                                                </div>
                                        ))
                                    }
                                    
                </Swiper> 
                 
                            <div class="find">
		
                                                <div class="find_background parallax-window" data-parallax="scroll" data-image-src="images/find.jpg" data-speed="0.8"></div>
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="find_title text-center">INICIA TU AVENTURA</div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="find_form_container">
                                                                <form action="#" id="find_form" class="find_form d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-between justify-content-start flex-wrap" onSubmit={this.onSubmit}>
                                                                    
                                                                    <div class="find_item">
                                                                        <div>Plan de Hotel:</div>
                                                                        <select  
                                                                        style={{color:"Red"}}
                                                                        onChange={this.inputChangPlanHotels}
                                                                        name="propsPlanH"
                                                                        class="dropdown_item_select find_input">
                                                                        {
                                                                            this.state.hotelPlans.map(planhotel=>(       
                                                                                                    <option  
                                                                                                    value={[planhotel.type  ][planhotel.price ]}
                                                                                                    key={planhotel._id}
                                                                                                >
                                                                                                        Habitación {planhotel.type},
                                                                                                        Precio : {planhotel.price} USD
                                                                                                </option>
                                                                                                
                                                                                            
                                                                                                ))
                                                                        }
                                                                            
                                                                        </select>
                                                                    </div>
                                                                    <div class="find_item">
                                                                        <div>Plan de Vuelo</div>
                                                                        <select 
                                                                            
                                                                            id="min_price" 
                                                                            class="dropdown_item_select find_input"
                                                                            onChange={this.inputChangeVuelos}
                                                                            name="propsVuelos"
                                                                            >
                                                                            {
                                                                                this.state.flightplans.map(planvuelo=>(
                                                                                    <option value={[planvuelo.plan][planvuelo.price]} key={planvuelo._id}>Clase {planvuelo.plan}, Precio: {planvuelo.price} COP </option>
                                                                                ))
                                                                            }
                                                                        </select>
                                                                    </div>
                                                                    
                                                                
                                                                    <input type="submit" value="Reservar" className="button find_button" />
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {this.renderContac()}
                                            </div>
        
       
      
                  
                            

                            
          
            
          
         );
         
    }
    
    renderContac(){
      const newsStyle = {
        borderBottom: "1px solid #e0e0e0",
        marginBottom: "1.5rem"
      };    
        return(

         <section style={{marginTop:"30%"}}>

         
          <MDBCardBody >
            <h2 className="h1-responsive font-weight-bold my-5 text-center">
              Paquetes Turísticos Recomendados
            </h2>
            <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            A todos en Sleipnir nos encanta reservar para nuestros 
            clientes las mejores experiencias de viaje.
            </p>
            <MDBRow>
              <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <MDBRow className="mb-3">
                  <MDBCol size="12">
                    <a href="#!">
                      <MDBBadge color="pink">
                        <MDBIcon icon="plane" className="pr-2" aria-hidden="true" />
                        Finlandia
                      </MDBBadge>
                    </a>
                  </MDBCol>
                </MDBRow>
                <div className="d-flex justify-content-between" style={newsStyle}>
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <a href="#!" className="font-weight-bold">
                      Helsinki en kayak
                    </a>
                  </MDBCol>
                  <a href="#!">
                    <MDBIcon icon="angle-double-right" />
                  </a>
                </div>
                <div className="d-flex justify-content-between" style={newsStyle}>
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <a href="#!">Precio: 290.792 por persona</a>
                  </MDBCol>
                  <a href="#!">
                    <MDBIcon icon="angle-double-right" />
                  </a>
                </div>
                <div className="d-flex justify-content-between" style={newsStyle}>
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <a href="#!">BOG Bogotá - Finlandia</a>
                  </MDBCol>
                  <a href="#!">
                    <MDBIcon icon="angle-double-right" />
                  </a>
                </div>
                
              </MDBCol>

              <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <MDBRow className="mb-3">
                  <MDBCol size="12">
                    <a href="#!">
                      <MDBBadge color="deep-orange">
                        <MDBIcon icon="plane" className="pr-2" aria-hidden="true" />
                        Finlandia
                      </MDBBadge>
                    </a>
                  </MDBCol>
                </MDBRow>
                <div className="d-flex justify-content-between" style={newsStyle}>
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <a href="#!" className="font-weight-bold">
                     Visita el Arctic Snow Hotel 
                    </a>
                  </MDBCol>
                  <a href="#!">
                    <MDBIcon icon="angle-double-right" />
                  </a>
                </div>
                <div className="d-flex justify-content-between" style={newsStyle}>
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <a href="#!">Precio:369.082 por Pareja</a>
                  </MDBCol>
                  <a href="#!">
                    <MDBIcon icon="angle-double-right" />
                  </a>
                </div>
                <div className="d-flex justify-content-between" style={newsStyle}>
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <a href="#!">BOG Bogotá - Finlandia</a>
                  </MDBCol>
                  <a href="#!">
                    <MDBIcon icon="angle-double-right" />
                  </a>
                </div>
                
              </MDBCol>

              <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <MDBRow className="mb-3">
                  <MDBCol size="12">
                    <a href="#!">
                      <MDBBadge color="success">
                        <MDBIcon icon="leaf" className="pr-2" aria-hidden="true" />
                        Islas Feroe
                      </MDBBadge>
                    </a>
                  </MDBCol>
                </MDBRow>
                <div className="d-flex justify-content-between" style={newsStyle}>
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <a href="#!" className="font-weight-bold">
                      Senderismo Trælanýpan
                    </a>
                  </MDBCol>
                  <a href="#!">
                    <MDBIcon icon="angle-double-right" />
                  </a>
                </div>
                <div className="d-flex justify-content-between" style={newsStyle}>
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <a href="#!">
                      Precio :374.762 por persona
                    </a>
                  </MDBCol>
                  <a href="#!">
                    <MDBIcon icon="angle-double-right" />
                  </a>
                </div>
                <div className="d-flex justify-content-between" style={newsStyle}>
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <a href="#!">BOG Bogotá - Islas Feroe</a>
                  </MDBCol>
                  <a href="#!">
                    <MDBIcon icon="angle-double-right" />
                  </a>
                </div>
                
                
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
          </section>
        )

        

    }
}
 
export default withRouter(ShowNorway);


   
       

    
