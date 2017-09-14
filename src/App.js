import React, { Component } from 'react';
import './App.css';
import UnCompletedToDos from './components/uncompletedToDos/UncompletedToDos';
import CompletedToDos from './components/completedToDos/CompletedToDos'
import {connect} from 'react-redux';
import actionCreator from './actions';




// var classNames = require('classnames');

class App extends Component {
  constructor(){
    super();

    this.state={
      userInput: '',
     // uncompletedToDos: ['first'],
      //completedToDos: [],
     // deletedArray: [],
     // buttonWork: ''
     
      
    }
    this.takeUserInput=this.takeUserInput.bind(this);
    this.makeNewToDo = this.makeNewToDo.bind(this);
    this.clearInput = this.clearInput.bind(this);
   this.markToDoComplete = this.markToDoComplete.bind(this);
   this.deleteCompletedToDo = this.deleteCompletedToDo.bind(this);
 


    
  }

takeUserInput(event){
  this.setState(
    Object.assign({}, this.state, {userInput: event.target.value})
  )

}



makeNewToDo(event){
   if (event){
     //var list=this.state.uncompletedToDos;
    //var toDo = this.state.userInput;
     //var newArray = list.splice(0,0, this.state.userInput )
//console.log(newArray);
        this.props.dispatch(actionCreator('newToDo',event))
        
        
        this.clearInput(this.state.userInput);
       
   }
   
};

clearInput(itemToClear){
   this.setState({
     userInput : ''
   })
  
}




markToDoComplete(event){
  var uncompletedArray= this.props.uncompletedToDos;
  var completedItem = uncompletedArray[0];
  
 // var newUncompletedArray=event.splice(0,1);
  this.props.dispatch(actionCreator('completedToDo',completedItem));
    
    
};


deleteCompletedToDo(event){
var completedArray= this.props.completedToDos;
var deletedItem = completedArray[0];

  this.props.dispatch(actionCreator('deletedToDo', deletedItem  ));
  
};

componentWillMount(){
  this.clearInput()
 
}

  

  render() {
 //console.log(this.state.uncompletedToDos);
 //console.log(this.state.completedToDos);
 //console.log(this.state.deletedArray)

 
 
/*var deleteButtonClass = 'btn';
 var completedlength = this.state.completedToDos;
 console.log(completedlength)
 if (true) deleteButtonClass += 'red'*/
console.log(this.props)

    return (
      <div className="App">
        <div className="App-header">
          
          <h2>ToDo</h2>
        </div>
        <p className="App-intro">
          To get started, type in a ToDo and press Enter
          </p>
          
            <input type='text' value={this.state.userInput} onChange={this.takeUserInput}/> 
            <button onClick={()=>this.makeNewToDo(this.state.userInput)}>Create</button>
            <p>Todos</p>
            <button onClick={()=>this.markToDoComplete(this.state.userInput)}>done</button>
             <UnCompletedToDos uncompletedToDos={this.props.uncompletedToDos} />
           <p>Completed</p>
            <button  onClick={()=>this.deleteCompletedToDo(this.state.userInput)}>delete</button>
   
           <CompletedToDos completedToDos={this.props.completedToDos}/>

   
          
       
           
       
    
      </div>
    );
  }
}

function mapStateToProps(state){

  return{
    uncompletedToDos: state.unCompletedToDos,
      completedToDos: state.completedToDos
  }
}

export default connect(mapStateToProps)(App)

