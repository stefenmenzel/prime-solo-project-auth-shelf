import React, {Component} from 'react';
import {connect} from 'react-redux';

class ListAllUsers extends Component{

    componentDidMount(){
        this.props.dispatch({type:'FETCH_ALL_USERS'});
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>username</th>
                            <th>items uploaded</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allUsers.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.count}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    allUsers: state.allUsers,
})

export default connect(mapStateToProps)(ListAllUsers)