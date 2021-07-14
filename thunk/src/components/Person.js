import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getCall } from '../actions';

const Person = (props) => {
  console.log(props);
  // { person, isFetching, error }; props.person = persion, etc
  useEffect(() => {
    getCall();
  }, [getCall]);

  if (props.error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (props.isFetching) {
    return <h2>Fetching quote for ya!</h2>;
  }

  return (
    <>
      <div>
        <h2>Quote: {props.quote}</h2>
      </div>
      <button onClick={getCall}>Get new quote</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(Person);