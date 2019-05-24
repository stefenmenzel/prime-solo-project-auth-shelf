import React, {Component} from 'react';
import { connect } from 'react-redux'



class Form extends Component {

    // declaring state
state = {
    description: '',
    image_url: '', 
    user_id: 0
}

 // handle submit
handleSubmit = (event) => {

this.props.dispatch({type: "ADD_IMAGE", payload: this.state })
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
        image_url: event.target.value
    })
}


    render() {

        return (
            <div>
             {/* form for image_url and description */}
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
        </div>
        )
    }   
}


const mapReduxState = (reduxState) => {
    return {
        reduxState
    }
}
export default connect(mapReduxState)(Form);



