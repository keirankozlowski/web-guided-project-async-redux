import axios from 'axios';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAIL = 'FETCHING_FAIL';

export const getCall = () => dispatch => {
    dispatch({ type: FETCHING_START });
    // https://randomuser.me/api/

    axios
        .get(`https://api.kanye.rest`)
        .then((res) => {
            dispatch({ type: FETCHING_SUCCESS, payload: res.data.quote });
        })
        .catch((err) => {
            dispatch({ type: FETCHING_FAIL, payload: `${err.response.message}, code: ${err.response.code}` });
            console.log(err);
        });
};

// export const getError = (err) => {
//     return({
//         type: FETCHING_FAIL,
//         payload: `${err.response.message}, code: ${err.response.code}`
//     });
// }
