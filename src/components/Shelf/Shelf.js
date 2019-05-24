import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Shelf.css';

class Shelf extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_SHELF_ITEMS'});
      }

      handleDelete = (idToDelete) => {
          console.log("Delete item id", idToDelete);
          this.props.dispatch({type: 'DELETE_ITEMS', payload:{id:idToDelete}});
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
                            console.log('item.image_url', this.props.userItems);
                            console.log('item id:', item.id);
                                return(
                                    <tr key={i} >
                                        <td>{item.username}</td>
                                    <td><img alt ="" src={item.image_url} /></td>
                                    <td>{item.description}</td>
                                    <td><button onClick={() => this.handleDelete(item.id)}>Delete</button></td>
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
    userItems: reduxState.shelfReducer,
    // userId: reduxState.shelfReducer.id
  });

export default connect(mapStateToProps)(Shelf);