import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchShelfSaga() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get('api/shelf', config);

        yield put({ type: 'SET_SHELF_ITEMS', payload: response.data });
    } catch (error) {
        console.log('user items get request failed', error);
    }

}
function* shelfSaga() {
    yield takeLatest('FETCH_SHELF_ITEMS', fetchShelfSaga);
}


export default shelfSaga;