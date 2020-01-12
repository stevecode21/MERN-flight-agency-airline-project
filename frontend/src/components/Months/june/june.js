import React ,{Component} from 'react';

import {Link } from 'react-router-dom'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import json from '../../../JSONObjects/itineraties.json'


export default  class June extends   Component {
    state={
        
        fecha:[],
        lunes:json[5].setDate1,
        jueves:json[5].setDate2,
        propsPlanH:this.props.propsPlanH,
        propsVuelos:this.props.propsVuelos,
        propsTour:this.props.propsTour
        
    }
    
   
   
    
    render(){
      

      const saveLunes=(fecha,dia,mes)=>{
         this.setState({
             fecha: [{fecha,dia,mes}]
           })
           
           
     }
     const saveJueves=(fecha,dia,mes)=>{
      this.setState({
        fecha: [{fecha,dia,mes}]
      })
      
      
  }
        
        
        return(
           <form >

           
            <MDBTable>
      <MDBTableHead>
        <tr>  
          <th>Semana --></th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      <tr>
        <td>Dia :Lunes</td>
        {
          this.state.lunes.map(fecha=>(
            
            <td key={fecha}>
            {fecha}
              
              <button  type="button" className="botones" onClick={() => saveLunes(fecha,"lunes","Junio")} >  <i className="fas fa-check-square iconos"></i></button>
              </td>
            
              
          ))
        }
        </tr>
          

        <tr>
        <td>Dia :Jueves</td>
        {
          this.state.jueves.map(fecha=>(
            
            <td key={fecha}>
            {fecha}
              
              <button type="button" className="botones"  onClick={() => saveJueves(fecha,"Jueves","Junio")} >  <i className="fas fa-check-square iconos"></i></button>
              </td>
            
              
          ))
        }
        </tr>
          
      </MDBTableBody>
    </MDBTable>
       <Link className="home_search_button"
        to={
          {
            pathname:"/cotizacion",
            state:{
              propsjeje:this.state.propsTour,
              fecha:this.state.fecha
            }
          }
        }
       >Ir a cotización</Link> 
       
    </form>
        )
    }
} 
 
