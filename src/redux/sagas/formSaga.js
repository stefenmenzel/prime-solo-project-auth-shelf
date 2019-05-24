import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* fetchForm() {
    try { 
        yield axios.post('/addform', action.payload)
        yield put({type: 'FETCH_USER', payload: response.data})
    }
    catch(error) {
    console.log(error)
  }
}

function* formSaga() {
    yield takeLatest('FETCH_FORM', fetchForm); 
}



export default formSaga;