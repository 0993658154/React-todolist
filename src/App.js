import React,{Component} from "react";
import TodoItems from "./Components/Todoitems/todoitems";
import AddItems from "./Components/Additems/additems";
class App extends Component {
  deleteitems=(id)=>{
    console.log(id)
    let items=this.state.items;
    let i=items.findIndex(item=>item.id=== id)
    items.splice(i,1)
    this.setState({items})
  }
  state={
    items:[
      {id:"1",name:"khaled",age:"22"},
      {id:"2",name:"raghad",age:"24"},
      {id:"3",name:"omar",age:"26"}
    ]
  }
    addItems=(item)=> {
      item.id=Math.random();  
      let items=this.state.items;
      items.push(item)
      this.setState({items})
    }
  render(){
  return (
    <div className="App container">
      <h1 className="text-center">TodoList App</h1>
      <TodoItems items={this.state.items} deleteitems={this.deleteitems} />
      <AddItems addItems={this.addItems}/>
    </div>
  );
}
}

export default App;
//another to delete items
/*
  let items=this.state.items.filter(item=>{
    return item.id !== id
  })
  this.setstate({items})

*/ 