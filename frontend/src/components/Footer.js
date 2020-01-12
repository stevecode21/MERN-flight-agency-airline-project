import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBIcon, MDBFooter } from "mdbreact";

class Footer extends Component {
    render() {
        
        return (
            
            <MDBFooter color="red" className="pt-4" style={{position:"relative",marginTop:"600px"}} >
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="6">
                  <h5 className="title">SLEIPNAIR</h5>
                  <p>
                  "Somos un operador turístico especializado, pero también nos complace reservar sus vuelos internacionales como agente de viajes de servicio completo."
                  </p>
                </MDBCol>
                <MDBCol md="3">
                  <h5 className="title">Siguenos en:</h5>

                      <a href="#!"><MDBIcon fab icon="whatsapp mr-2" size="2x" /></a>
            
                      <a href="#!"><MDBIcon fab icon="facebook-f mr-2" size="2x" /></a>
                   
                      <a href="#!"><MDBIcon fab icon="instagram mr-2" size="2x"/></a>
                   
                      <a href="#!"><MDBIcon fab icon="twitter mr-2" size="2x" /></a>

                </MDBCol>
                <MDBCol md="3">
                  <h5 className="title">Aceptamos todos los medios de pago</h5>

                      <a href="#!"><MDBIcon fab icon="paypal mr-2" size="2x"/></a>
            
                      <a href="#!"><MDBIcon fab icon="cc-visa mr-2" size="2x" /></a>
                   
                      <a href="#!"><MDBIcon fab icon="cc-diners-club mr-2" size="2x"/></a>
                   
                      <a href="#!"><MDBIcon fab icon="cc-mastercard mr-2" size="2x"/></a>

                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Designed by: <a href="https://www.loki_code.com"> Loki_Code.com </a>
              </MDBContainer>
            </div>
          </MDBFooter>
          
        );
    }
}

export default Footer;
    