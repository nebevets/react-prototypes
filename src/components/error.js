import React from 'react';
import './error.css'

const Error = ({stack, url}) => {
  return(
    <div className="error">
      <div className="errorStack">
        <p>{stack}</p>
      </div>
      <div className="friendlyError">
        <p className="url">{url}</p>
        <p>
          Please forgive me, but I must inform you I have failed to retreive a movie list.
        </p>
        <p>
          Please accept my sincerest apologies and check the url of your request above.
        </p>
        <p>
          Know that I will do everything in my power to never let this happen again.
        </p>
      </div>
  </div>
  );
}

export default Error;
