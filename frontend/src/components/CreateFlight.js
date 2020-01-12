import React, { Component } from 'react';
import axios from 'axios';
class CreateUser extends Component {
    state={
        users:[],
        name:'',
        mail:'',

    }
    async componentDidMount(){
        this.getUsers()        
    }

    onChangeCode=(e)=>{
        this.setState({
            code:e.target.value
        })
    }
    onChangeDepartureMonth=(e)=>{
        this.setState({
            departureMonth:e.target.value
        })
    }
    onChangeDepartureDate=(e)=>{
        this.setState({
            departureDate:e.target.value
        })
    }
    
    onChangeDepartureDay=(e)=>{
        this.setState({
            departureDay:e.target.value
        })
    }
     
    onChangeArrivalDate=(e)=>{
        this.setState({
            arrivalDate:e.target.value
        })
    }
    
    onChangeArrivalDay=(e)=>{
        this.setState({
            arrivalDay:e.target.value
        })
    }
    
    onChangeDestination=(e)=>{
        this.setState({
            destination:e.target.value
        })
    }
    getUsers=async()=>{
        const rest=await axios.get('http://localhost:4000/api/flight');
        console.log("users");
        console.log(rest.data);
        this.setState({
            users:rest.data
        })
    }
    onSubmit=async e=>{
        e.preventDefault();
        const res=await axios.post('http://localhost:4000/api/flight',{
            code:this.state.code,
            departureMonth:this.state.departureMonth,
            departureDate:this.state.departureDate,
            departureDay:this.state.departureDay,
            arrivalDate:this.state.arrivalDate,
            arrivalDay:this.state.arrivalDay,
            destination:this.state.destination

        })
        this.getUsers();
        this.setState({code:'',departureMonth:'',departureDate:'',departureDay:'',arrivalDate:'',arrivalDay:'',destination:''})
        console.log(res);
    }
    deleteUser= async (id)=>{
            await axios.delete('http://localhost:4000/api/flight/'+id)
            this.getUsers();
    }
    render() {
        return (
            <div className="row">
                
                        <div className="col-md-4">
                            <div className="card card-body"> 
                                <h3>Create New Flight</h3>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        code
                                        <input 
                                             type="text" 
                                             className="form-control"  
                                              onChange={this.onChangeCode}
                                              value={this.state.code}
                                         />
                                    </div>
                                    <div className="form-group">
                                        Departure Month
                                        <input 
                                             type="text" 
                                             className="form-control"  
                                              onChange={this.onChangeDepartureMonth}
                                              value={this.state.departureMonth}
                                         />
                                    </div>
                                    <div className="form-group">
                                        Departure Date
                                        <input 
                                             type="text" 
                                             className="form-control"  
                                              onChange={this.onChangeDepartureDate}
                                              value={this.state.departureDate}
                                         />
                                    </div>
                                    <div className="form-group">
                                        Departure Day
                                        <input 
                                             type="text" 
                                             className="form-control"  
                                              onChange={this.onChangeDepartureDay}
                                              value={this.state.departureDay}
                                         />
                                    </div>
                                    <div className="form-group">
                                        Arrival Date
                                        <input 
                                             type="text" 
                                             className="form-control"  
                                              onChange={this.onChangeArrivalDate}
                                              value={this.state.arrivalDate}
                                         />
                                    </div>
                                    <div className="form-group">
                                        Arrival Day
                                        <input 
                                             type="text" 
                                             className="form-control"  
                                              onChange={this.onChangeArrivalDay}
                                              value={this.state.arrivalDay}
                                         />
                                    </div>
                                    <div className="form-group">
                                        Destination
                                        <input 
                                             type="text" 
                                             className="form-control"  
                                              onChange={this.onChangeDestination}
                                              value={this.state.destination}
                                         />
                                    </div>
                                         <button type="submit" className="btn btn-primary mt-2 ">Save</button>
                                </form>
                            </div>
                        </div>
                
                <div  className="col-md-8">
                     <ul className="list-group">
                        {
                            this.state.users.map(user=>( 
                                    <li    
                                        onDoubleClick={()=>{this.deleteUser(user._id)}}
                                        className="list-group-item list-group-item-action" 
                                        key={user._id}>
                                        code: {user.code} /

                                        departure Month: {user.departureMonth} /
                                        departure Date: {user.departureDate} /
                                        departure Day: {user.departureDay} / 
                                        arrival Date: {user.arrivalDate} / 
                                        arrival Day: {user.arrivalDay} / 
                                        destination: {user.destination} / 




                                    </li>)
                            )
                       
                        }
                     </ul>
                </div>
            </div>
        );
    }
}

export default CreateUser;