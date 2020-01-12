import React,{Component} from 'react'
import axios from 'axios'
import video from '../../src/norway_2.mp4'

class CreateQuotation extends Component {
    state={
        users:[],
        title:' ',
        content:' ',
        date:new Date(),
        editing:false,
        _id:' ',
        name:[],
        nameSelected:' ',  
        turistPlans:[],

        idTour:[]
    }

    async componentDidMount() {
        const destinations=await axios.get('http://localhost:4000/api/destinations')
        /* console.log(destinations.data); */
        
        /* this.setState({
            name:destinations.data.map(nombre=>nombre.name),
            nameSelected:destinations.data[0].name
        })
        
        const users=await axios.get('http://localhost:4000/api/users')
        
        this.setState({
            users:users.data.map(user=>user.username),
            userSelected:users.data[0].username
        }) */
        if(this.props.match.params.id){
           
           const res=await axios.get('http://localhost:4000/api/quote/'+ this.props.match.params.id)
           console.log(res.data);
           

            /* this.setState({
                title:res.data.title,
                content:res.data.content,
                date:new Date(res.data.date),
                userSelected:res.data.author,
                editing:true,
                _id:this.props.match.params.id
            }) */
            this.setState({
                turistPlans:res.data[0].touristPlans
            })
        }
    }
    onSubmit=async (e)=>{
        e.preventDefault()
        const newNote={
            title:this.state.title,
            content:this.state.content,
            date:this.state.date,
            author:this.state.userSelected
        }
        /* if(this.state.editing){
            await axios.put('http://localhost:4000/api/notes/'+ this.state._id, newNote);
        }else{
            const res =await  axios.post('http://localhost:4000/api/notes', newNote)
            console.log(res);
        }
        window.location.href='/' */
    }
    inputChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            [e.target.name]:e.target.value
        })
        /* console.log(this.planRef.current.value); */
    }
 /*    onChangeDate=date=>{
        this.setState({date})
    }
     */
    planRef=React.createRef();
    
    
    saveTour=  (name)=>{
        
       
        this.setState({
            idTour: [...this.state.idTour, name]
          })
        alert('Plan seleccionado')
    }
    
    
    render() {
        
        return (
           <div className="row">
               <video className='videoTag' autoPlay loop muted id="background-video">
                 <source src={video} type='video/mp4' />
                </video>
               {
                   this.state.turistPlans.map(plan=>(
                                <div className="col-md-4 p-2" key={plan.name}>
                                <div className="card"> 
                                    <div className="card-header d-flex justify-content-between" >
                                        <h5>{plan.name}</h5>
                                       
                                    </div>
                                    <div  className="card-body">
                                        <p>{plan.duration}</p>  
                                        <p>Precio:{plan.price}</p>
                                        
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={()=>this.saveTour(plan.name)}>
                                            Seleccionar 

                                        </button>
                                    
                                    </div>
                                    
                                </div>
                                
                            </div>
                   ))
               }
           </div>
        );
    }
}

export default CreateQuotation;