import React, {Component} from 'react';
import {connect} from 'react-redux';

class ListAllUsers extends Component{

    componentDidMount(){
        this.props.dispatch({type:'FETCH_ALL_USERS'});
    }

    render(){
        return(
            <div><pre>{JSON.stringify(this.props.allUsers)}</pre></div>
        )
    }
}

const mapStateToProps = state => ({
    allUsers: state.allUsers,
})

export default connect(mapStateToProps)(ListAllUsers)