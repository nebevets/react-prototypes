import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateTime} from '../actions';

class Clock extends Component{
  componentDidMount(){
    const {updateTime} = this.props;
    setInterval(updateTime, 1000);
  }
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

export default connect(mapStateToProps, {
  updateTime
})(Clock);
