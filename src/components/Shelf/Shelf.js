import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Shelf.css';

class Shelf extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_SHELF_ITEMS'});
      }
    render(){
        return(
            <div>
                <pre>{JSON.stringify(this.props.userItems)}</pre>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Img-URL</th>
                                <th>Img-Description</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.userItems.map((item, i) => {
                            //console.log('item.image_url', item.image_url);
                                return(
                                    <tr key={i} onClick={this.handleSubmit}><td>{item.username}</td>
                                    <td><img alt ="" src={item.image_url} /></td>
                                    <td>{item.description}</td>
                                    <td><button type="submit">Delete</button></td>
                                    </tr>
                                )    

                                })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}
const mapStateToProps = reduxState => ({
    userItems: reduxState.shelfReducer
  });

export default connect(mapStateToProps)(Shelf);