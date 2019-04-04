import React,{Component} from 'react'
import ButtonPanel from '../ButtonPanel/ButtonPanel' 
import Step from '../Step/Step'
import './Counter.css'


class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            counterValue:0,
            stepValue:1
        }
    }
    changeValue=()=>{
        this.setState((prevState)=>{
            return({
            counterValue:prevState.counterValue +1 
          
            })
        });
       
    }

    resetCounter=(value)=>{
        let initValue=0
        if(!value){
        initValue=this.props.initialValue
        }
        this.setState({
            counterValue:initValue
        })
    }

    changeStepValue=(step)=>{
        if(step===''||step<1)
        {step=1}
        this.setState((prevState)=>{
            return({
                stepValue:step
               
               
            })
        })
        console.log(this.state.stepValue) 
    }

    increaseStep=()=>{
        let StepIncrese=this.state.stepValue;
     
        
         
        
        this.setState((prevState)=>{
            return({
            counterValue:prevState.counterValue +parseInt(StepIncrese)
          
            })
        });
       
    }
    
    render(){
        return(
        <div>
            <div className='header'>
            <h2>Aplikacja licznika w ReactJS</h2>
            </div>
            <div className='counterframe'>
            <div>Propsy ={this.props.initialValue}</div>
            <h2>CurrentValue= {this.state.counterValue}</h2>
           <ButtonPanel changeCounterValue={this.changeValue}
            resetOrReinitCounter={this.resetCounter} increaseStepFunction={this.increaseStep}
            increaseBy={this.state.stepValue}/>
            

            <Step nextStep={this.changeStepValue}/>
            </div>
        </div>
        )
          
    }

}

export default Counter