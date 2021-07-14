import axios from 'axios';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAIL = 'FETCHING_FAIL';

export const getCall = (val) => {
    dispatch({ type: FETCHING_START });

    axios
        .get(`https://randomuser.me/api/`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            dispatch(getError(err));
            console.log(err);
        });
};

export const getError = (err) => {
    return({
        type: FETCHING_FAIL,
        payload: `${err.response.message}, code: ${err.response.code}`
    });
}
