import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getCall } from '../actions';

const Person = ({ getCall, quote, isFetching, error }) => {
  // { person, isFetching, error }; props.person = persion, etc
  useEffect(() => {
    getCall();
  }, [getCall]);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching quote for ya!</h2>;
  }

  return (
    <>
      <div>
        <h2>Quote: {quote}</h2>
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

export default connect(mapStateToProps, { getCall })(Person);