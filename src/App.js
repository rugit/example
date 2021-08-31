import React, { Component } from 'react';
import axios from "axios";
import ModelTable from './ModelTable';

class App extends Component{
  state = {
    data : undefined
  }

  a = 10;
  componentDidMount(){
    axios.get("http://localhost:3000/modelData.json")
    .then((res)=>{
      this.setState(()=>({
        data : res.data
      }))
    })
  }

  sortTime = (time, models, des)=>{  
    this.setState(()=>({
      data: {"models" : models.sort((a,b)=>{
        if ( a.process.modelling[time] < b.process.modelling[time] ){
          return -1 * des;
        }
        if ( a.process.modelling[time] > b.process.modelling[time] ){
          return 1 * des;
        }
        return 0;
      })}
    }))
  }
    
    
  

  render() {
    return ( 
      <div>
        {this.state.data!==undefined && 
        (
          <ModelTable models = {this.state.data.models} sortModel={this.sortTime}/>
        )
        }
        
      </div>
    )
  } 
    

}

export default App;
