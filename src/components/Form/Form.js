import React, {Component} from 'react';
import { connect } from 'react-redux'



class Form extends ReactComponent {

state = {
    description: '',
    img_url: ''
}

handleSubmit = (event) => {
event.preventDefault
this.prop.dispatch({type: "ADD_USER", payload: this.state })
}

handleDescription = (event) =>{
    this.setState({ 
        description: event.target.value
    })

}

handleImage = (event) => {

    this.setState({
        img_url: event.target.value
    })
}


    render() {

        return (
           
        <form onSubmit={this.handleSubmit}>
            <input 
            onChange={this.handleDescription} 
            value={this.state.description}
            type= "text" 
            placeholder="description" 
            />
            <input 
            type= "text" 
            placeholder="image url" 
            value={this.state.img_url}
            onChange={this.handleImage} /> 
            <input type="submit" value="submit" />
        </form>
        )
    }   
}

const mapReduxState = (reduxState) => {
    return {
        reduxState
    }
}
export default connect(mapReduxState)(Form);



