import React ,{ Component } from "react";
import Seleccionafecha from "../Months/seleccionafecha";
import * as Months from '../Months';
import video from '../../../src/norway_2.mp4'


class ResevarFecha extends Component {
        state={
            /* propsPlanH:this.props.history.location.state.propsPlanH.join().split(",") */
            propsPlanH:this.props.history.location.state.propsPlanH,
            propsVuelos:this.props.history.location.state.propsVuelos,      
            propsTour:this.props.history.location.state.propsTour,
            selectedMonth: ''
        }
        render(){
       
    
        
        return(
            
          <div className="home_search" style={{backgroundColor:"red"}}  >
              <div className="row">
              <video className='videoTag' autoPlay loop muted id="background-video">
                 <source src={video} type='video/mp4' />
                 
                </video> 
            {
                this.state.propsTour.map(tour=>(
                    <div className="col-sm-3" key={tour._id}>

                  <div className="card" >
                        <div className="card-body">
                        <h5 className="card-title">Tour Seleccionado: {tour.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Precio :{tour.price}</h6>
                        
                        <a href="#" className="card-link">Card link</a>
                </div>
            </div>
            </div>
                ))
            }
              </div>
            <div className="row">
                
				<div className="col">
					<div className="home_search_container"  >
						 <div className="home_search_title">    </div> 
						<div className="home_search_content" >
							<form action="#" className="home_search_form" id="home_search_form">
								<div className="d-flex flex-lg-row flex-column align-items-start justify-content-lg-between justify-content-start" >
                                    
                                    <select  form="carform">
                                    <option value={this.state.propsPlanH}>{this.state.propsPlanH}</option>
                                    </select>
                                    <select  form="carform">
                                    <option value="volvo">{this.state.propsVuelos}</option>
                                   
                                    </select>
									{this.renderMonthSelector()}
									
									
								</div>
							</form>
                            {this.renderSelectedCard(this.state.selectedMonth)}
						</div>
					</div>
				</div>
			</div>
            
			</div>

            
         
)

    }
    renderMonthSelector(){
        return(
                <div className="form-group top-margin-small">
                    <label className="card-selector-label">Select Month </label>
                    <select className="card-selector form-control"
                    onChange={(e) => this.setState({ selectedMonth: e.target.value })}>
                    <option></option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                    <option>January_2020</option>
                    <option>February_2020</option>
                    <option>March_2020</option>
                    <option>April_2020</option>
                    <option>May_2020</option>
                    <option>June_2020</option>
                    <option>July_2020</option>
                    <option>August_2020</option>
                    <option>September_2020</option>
                    </select>
                 </div>
        )
    }
    renderSelectedCard(selectedMonth) {
        if (!selectedMonth)  return <Seleccionafecha  text="Selecciona un mes" />
        const Month = Months[selectedMonth];
    
        return <Month   propsPlanH={this.props.history.location.state.propsPlanH} propsVuelos={this.props.history.location.state.propsVuelos}  propsTour={this.props.history.location.state.propsTour}      />
      }
    
}

export default ResevarFecha;
