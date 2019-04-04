import React,{Component} from 'react'

class ButtonPanel extends Component{

    resetOrReinitCounter=(value)=>{
this.props.resetOrReinitCounter(value)
    }


    render(){
        return(
            <div className='button-panel'>
             <button onClick={this.props.changeCounterValue}>Add 1</button> 
             <button onClick={()=> this.resetOrReinitCounter(false)}>Reint</button>
             <button onClick={()=> this.resetOrReinitCounter(true)}>Reset</button> 
           <button onClick={this.props.increaseStepFunction}>Zwieksz krok {this.props.increaseBy}</button>
            </div>
        )
    }
}

export default ButtonPanel 