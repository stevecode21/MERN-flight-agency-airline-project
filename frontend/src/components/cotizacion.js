import React, { Component } from 'react';
import cotizacioncss  from './cotizacion.css';

class cotizacion extends Component {
    state={
        propsPlanH:this.props.location.state.propsjeje,    
    }
    render() { 
        return (
            <div class="row">
                    <div class="col-75">
                    <div class="container1">
                        <form>
                        
                        <div class="row">   
                            <div class="col-50">
                            
                            <label ><i class="fa fa-user"></i> Nombre</label>
                            <input type="text"  name="firstname" placeholder="Lorem " />
                            <label ><i class="fa fa-envelope"></i> Correo</label>
                            <input type="text"  placeholder="test@gmail.com" />
                            <label ><i class="fa fa-address-card-o"></i> Dirección</label>
                            <input type="text"  placeholder="542 W. 15th  Bogota" />
                            <label ><i class="fa fa-institution"></i> Ciudad</label>
                            <input type="text"  placeholder="Nombre ciudad" />
                
                            <div class="row">
                                <div class="col-50">
                                <label >Estado</label>
                                <input type="text" name="state" placeholder="lorem" />
                                </div>
                                <div class="col-50">
                                <label  >Telefono</label>
                                <input type="text"  placeholder="telefono" />
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        <input type="submit" value="Continue to checkout" class="btn1" />
                        </form>
                    </div>
            </div>
            </div>
            

         
          );
    }
}
 
export default cotizacion;