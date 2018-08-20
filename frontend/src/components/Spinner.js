import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => {
  return (
    <Loader
      className="text-center my-5 mx-auto"
      style={style}
      type="TailSpin"
      color="#218CB6"
      height="50"
      width="50"
    />
  );

};

const style = {
  display: 'flex',
  justifyContent: 'center'
};

export default Spinner;