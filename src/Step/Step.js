import React from 'react'

class Step extends React.Component{

    
    updateStep=(e)=>{
    let value = this.inputStep.value   
    
    this.props.nextStep(value)
    }
    l
    
    render(){

    return(
        <div>
            <input ref={(data) =>  this.inputStep = data } onChange={this.updateStep} type="number" />
        </div>
    
    )}
}

export default Step