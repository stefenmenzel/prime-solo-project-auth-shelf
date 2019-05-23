import React, {Component} from 'react';
import { connect } from 'react-redux'



class Form extends ReactComponent {

state = {
    description: '',
    img_url: ''
}



    render() {

        return (
           
           <form >
            <input type= "text" placeholder="description" value=""/>
            <input type= "text" placeholder="image url" value="" /> 
            <button type="submit" > Submit </button>
            </form >
        )
    }   
}

const mapReduxState = (reduxState) => {
    return {
        reduxState
    }
}
export default connect(mapReduxState)(Form);



