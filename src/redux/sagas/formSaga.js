import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* fetchForm(action) {
    try { 
        yield axios.post('/addform', action.payload)
        yield put({type: 'FETCH_USER' })
    }
    catch(error) {
    console.log(error)
  }
}

function* formSaga() {
    yield takeLatest('SET_USER', fetchForm); 
}



export default formSaga;