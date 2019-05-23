import React, {Component} from 'react';
import { connect } from 'react-redux'



class Form extends ReactComponent {

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
export default connect(mapReduxState)(Form);
