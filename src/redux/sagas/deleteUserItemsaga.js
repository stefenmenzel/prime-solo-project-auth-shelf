import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* deleteItem(action) {
    try { 
        console.log('delete from sagas',action.payload)
        yield axios.delete(`/api/shelf/${action.payload.id}`)
        yield put({type: 'FETCH_SHELF_ITEMS'})
    }
    catch(error) {
    console.log(error)
  }
}

function* deleteSaga() {
    yield takeLatest('DELETE_ITEMS', deleteItem); 
}



export default deleteSaga;