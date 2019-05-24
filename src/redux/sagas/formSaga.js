import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* fetchForm(action) {
    try { 
        console.log(action.payload)
        yield axios.post('/api/shelf', action.payload)
        yield put({type: 'FETCH_USER' })
    }
    catch(error) {
    console.log(error)
  }
}

function* formSaga() {
    yield takeLatest('ADD_IMAGE', fetchForm); 
}



export default formSaga;