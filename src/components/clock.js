import React, {Component} from 'react';
import {connect} from 'react-redux';

class Clock extends Component{
  render(){
    const {time} = this.props;
    return(
      <div className="text-center mt-5">
          <h1>{time}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {time} = state.clock;
  return {
    time
  }
}

export default connect(mapStateToProps)(Clock);
