import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'

class Login extends Component {
    state={
        users:[],
        username:' ',
        redirect: true

    }
    async componentDidMount(){
        this.getLoggedUser()        
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
    
    getLoggedUser=async()=>{
        // const rest=await axios.get('http://localhost:4000/api/users');
            // name: UserProfile.getName(res.data.name),
            // mail: UserProfile.getMail(res.data.mail),
            // id: UserProfile.getId(res.data._id),
            // miles: UserProfile.getMiles(res.data.miles)
        
        // console.log("logged user");
        // console.log(UserProfile.getName());
        this.setState()
    }
    onSubmit=async e=>{
        e.preventDefault();

        console.log("this.state.mail");
        console.log(this.state.mail);
        console.log("this.state.password");
        console.log(this.state.password);

        const res=await axios.post('http://localhost:4000/api/users/logUser',{
            mail:this.state.mail,
            password:this.state.password
        })
        // this.setState({name:' ',mail:' ',password:' '})
        // console.log(res);
        console.log("res.data");

        console.log(res.data);
        if(res.data === "Not a valid user" || res.data === "Not a valid Password"  || res.data == null) {
            (res.data == null ? alert("empty form"): alert(res.data));
            
            this.setState({
                mail:"",
                password:""
            })
        } else  {       
            console.log("user LOGGED:");
 
            alert("Access granted as : " + res.data.name);

            localStorage.setItem('currentUser', JSON.stringify(res.data));
            // window.location.path('/')
            // window.location.reload()
            window.location.assign('/'); 
            

          
        }
        // UserProfile.setName(res.data.name);
        // UserProfile.setMail(res.data.mail);
        // UserProfile.setId(res.data._id);
        // UserProfile.setMiles(res.data.miles);
        // console.log("UserProfile:");
        // console.log(UserProfile);
        this.setState({
            users:res.data
        })

        // this.getUsers();

    }
    // deleteUser= async (id)=>{
    //         await axios.delete('http://localhost:4000/api/users/'+id)
    //         this.getUsers();
    // }
    // renderRedirect = () => {
    //     if (this.state.redirect) {
    //       return <Redirect to='/' />
    //     }
    //   }
    render() {

        return (
            <div className="row">

                        <div className="col-12">
                            <div className="card card-body"> 
                                <h3>Login</h3>
                                <form onSubmit={this.onSubmit}>

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
                                         {/* <Link className="btn btn-primary mt-2 " type="submit" to="/" onSubmit={this.onSubmit}>
                                            Save
                                         </Link> */}
                                </form>
                            </div>
                        </div>
                
                        {/* <div className="col-12">
                                        {
                            this.state.users.map(user=>( 
                                    <li    
                                        // onDoubleClick={()=>{this.deleteUser(user._id)}}
                                        className="list-group-item list-group-item-action" 
                                        key={user._id}>
                                        name: {user.name} /

                                        mail: {user.mail} /
                                        password: {user.password} /
                                        miles: {user.miles}


                                    </li>)
                                        )
                                    }
                        </div> */}
            </div>

        );
    }
}

export default Login;
