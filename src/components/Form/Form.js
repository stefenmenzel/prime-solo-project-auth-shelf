import React, {Component} from 'react';
import { connect } from 'react-redux'



class Form extends ReactComponent {

    // declaring state
state = {
    description: '',
    img_url: ''
}

 // handle submit
handleSubmit = (event) => {
event.preventDefault
this.prop.dispatch({type: "ADD_IMAGE", payload: this.state })
}

// changes state for description
handleDescription = (event) =>{
    this.setState({ 
        description: event.target.value
    })

}
// changes state for img_url
handleImage = (event) => {
    this.setState({
        img_url: event.target.value
    })
}


    render() {

        return (
            // form for image_url and description
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
            <button type="submit" value="submit">Submit</button> 
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


