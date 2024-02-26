import React ,{Component} from "react";
import './additems.css';
class AddItems extends Component {
    state= {
        name: '',
        age: ''
    }
    handlechange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handlesubmit= (e)=> {
        e.preventDefault();
        if(e.target.name.value === '') {
            return false
        } else {
            this.props.addItems(this.state)
        this.setState({
            name:'',
            age:''
        })
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <input type="text" placeholder="Enter your name" id="name" onChange={this.handlechange} value={this.state.name}/>
                    <input type="number" placeholder="Enter age" id="age" onChange={this.handlechange} value={this.state.age}/>
                    <input type="submit" value="add todo"/>
                </form>
            </div>
        )
    }
}
export default AddItems