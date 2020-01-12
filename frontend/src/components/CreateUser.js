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

    onChangeUserName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    onChangeUserMail=(e)=>{
        this.setState({
            mail:e.target.value
        })
    }
    onChangeUserPassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    
    getUsers=async()=>{
        const rest=await axios.get('http://localhost:4000/api/users');
        console.log("users");
        console.log(rest.data);
        this.setState({
            users:rest.data
        })
    }
    onSubmit=async e=>{
        e.preventDefault();
        const res=await axios.post('http://localhost:4000/api/users',{
            name:this.state.name,
            mail:this.state.mail,
            password:this.state.password
        })
        this.getUsers();
        this.setState({name:' ',mail:' ',password:' '})
        console.log(res);
    }
    deleteUser= async (id)=>{
            await axios.delete('http://localhost:4000/api/users/'+id)
            this.getUsers();
    }
    render() {
        return (
            <div className="row">
                
                        <div className="col-md-4">
                            <div className="card card-body"> 
                                <h3>Create New User</h3>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        name
                                        <input 
                                             type="text" 
                                             className="form-control"  
                                              onChange={this.onChangeUserName}
                                              value={this.state.name}
                                         />
                                    </div>
                                    <div className="form-group">
                                        mail
                                        <input 
                                             type="text" 
                                             className="form-control"  
                                              onChange={this.onChangeUserMail}
                                              value={this.state.mail}
                                         />
                                    </div>
                                    <div className="form-group">
                                        password
                                        <input 
                                             type="password"
                                             
                                             className="form-control"  
                                              onChange={this.onChangeUserPassword}
                                              value={this.state.password}
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
                                        name: {user.name} /

                                        mail: {user.mail} /
                                        password: {user.password} /
                                        miles: {user.miles}


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